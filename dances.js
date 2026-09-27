// data/dances.js
// Adapter between the current Google Sheet / Apps Script data and the new identity database.
// This file intentionally does NOT duplicate every video row by hand.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};

  const DANCE_SOURCE_URL =
    "https://script.google.com/macros/s/AKfycbwlpl1_Ndpznng_BhgnDSxzaZezfJpfBGcm34lSeH9ik_yDsKVfv0taBfNWwv1lKPeK/exec";

  // Projects/collaborations live here, NOT in groups.js.
  // They are performances/projects, not invented groups.
  const projects = {
    yeji_giselle_julie: {
      id: "yeji_giselle_julie",
      name: "YEJI X GISELLE X JULIE",
      kind: "collaboration",
      participantIds: ["yeji", "giselle", "julie"],
      sourceAliases: [
        "YEJI X GISELLE X JULIE",
        "YEJI GISELLE JULIE",
        "YEJI X GISELLE X JULIE TOXIC"
      ]
    }
  };

  function normalizeKey(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replaceAll("’", "'")
      .replace(/\s+/g, " ");
  }

  function normalizeRoleName(value) {
    const raw = String(value || "").replace(/\s+/g, " ").trim();
    const key = normalizeKey(raw);

    const aliases = {
      "backup": "Backup",
      "back up": "Backup",
      "back-up": "Backup",
      "backup dancer": "Backup",
      "back up dancer": "Backup",
      "back-up dancer": "Backup",
      "ning ning": "Ningning",
      "da hyun": "Dahyun",
      "da-hyun": "Dahyun",
      "yoo hyeon": "Yoohyeon",
      "yoo-hyeon": "Yoohyeon"
    };

    return aliases[key] || raw;
  }

  function resolveProjectId(sourceArtistName) {
    const key = normalizeKey(sourceArtistName);

    for (const project of Object.values(projects)) {
      if ((project.sourceAliases || []).some(alias => normalizeKey(alias) === key)) {
        return project.id;
      }
    }

    return null;
  }

  function resolveProjectPersonId(projectId, roleName) {
    const project = projects[projectId];
    if (!project) return null;

    const normalizedRole = root.normalizePersonName
      ? root.normalizePersonName(roleName)
      : normalizeKey(roleName);

    const matches = project.participantIds.filter(personId => {
      const person = root.people?.[personId];
      if (!person) return false;

      const names = [person.name, ...(person.aliases || [])];
      return names.some(name => {
        const normalizedName = root.normalizePersonName
          ? root.normalizePersonName(name)
          : normalizeKey(name);
        return normalizedName === normalizedRole;
      });
    });

    return matches.length === 1 ? matches[0] : null;
  }

  function buildDanceId(raw, index) {
    if (raw.videoId) return `youtube_${raw.videoId}`;

    const parts = [
      raw.artist || "unknown",
      raw.songTitle || "unknown",
      raw.performanceDate || "unknown",
      index
    ];

    return "dance_" + parts
      .join("_")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
  }

  function normalizeDance(raw, index = 0) {
    const sourceArtistName = String(raw.artist || "Unknown Artist").trim();
    const roleName = normalizeRoleName(raw.dancerRole || "");

    const groupId = root.resolveGroupId
      ? root.resolveGroupId(sourceArtistName)
      : null;

    const projectId = groupId ? null : resolveProjectId(sourceArtistName);

    let personId = null;

    // Group/sub-unit role -> resolve only inside that group's membership.
    if (groupId && roleName && roleName !== "Backup" && root.resolvePersonInGroup) {
      personId = root.resolvePersonInGroup(groupId, roleName);
    }

    // Collaboration/project role -> resolve only among project participants.
    if (!personId && projectId && roleName && roleName !== "Backup") {
      personId = resolveProjectPersonId(projectId, roleName);
    }

    // Solo-stage artist -> can resolve even when role is blank.
    if (!personId && !groupId && !projectId && root.resolveSoloArtistPersonId) {
      personId = root.resolveSoloArtistPersonId(sourceArtistName);
    }

    // Final fallback: global name is accepted ONLY when globally unique.
    if (!personId && roleName && roleName !== "Backup" && root.resolvePersonGlobally) {
      personId = root.resolvePersonGlobally(roleName);
    }

    const hasSpecificRole = Boolean(roleName && roleName !== "Backup");
    const needsReview =
      hasSpecificRole &&
      !personId;

    return {
      id: buildDanceId(raw, index),

      youtubeUrl: raw.youtubeUrl || "",
      videoId: raw.videoId || "",

      sourceArtistName,
      groupId,
      projectId,

      songTitle: raw.songTitle || "",
      performanceDate: raw.performanceDate || "",
      location: raw.location || "",

      thumbnail: raw.thumbnail || "",
      outfitImage: raw.outfitImage || null,

      roleName,
      personId,

      // Keep original data available during migration/debugging.
      raw,

      needsReview,
      reviewReason: needsReview
        ? `Could not safely resolve role "${roleName}" under "${sourceArtistName}".`
        : ""
    };
  }

  function normalizeDanceList(rawRows) {
    return (rawRows || []).map((row, index) => normalizeDance(row, index));
  }

  async function loadDanceData() {
    const response = await fetch(DANCE_SOURCE_URL);

    if (!response.ok) {
      throw new Error(`Failed to load dance data: HTTP ${response.status}`);
    }

    const rawRows = await response.json();
    return normalizeDanceList(rawRows);
  }

  function getUnresolvedDances(dances) {
    return (dances || []).filter(dance => dance.needsReview);
  }

  root.DANCE_SOURCE_URL = DANCE_SOURCE_URL;
  root.projects = projects;
  root.normalizeRoleName = normalizeRoleName;
  root.resolveProjectId = resolveProjectId;
  root.normalizeDance = normalizeDance;
  root.normalizeDanceList = normalizeDanceList;
  root.loadDanceData = loadDanceData;
  root.getUnresolvedDances = getUnresolvedDances;
})();
