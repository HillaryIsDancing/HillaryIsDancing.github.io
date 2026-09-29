// data/dances.js
// Adapter between the current Google Sheet / Apps Script data and the canonical identity database.
// Web/source cleanup refreshed: 2026-09-28.

(() => {
  const root = window.HID_DATA = window.HID_DATA || {};

  const DANCE_SOURCE_URL =
    "https://script.google.com/macros/s/AKfycbwlpl1_Ndpznng_BhgnDSxzaZezfJpfBGcm34lSeH9ik_yDsKVfv0taBfNWwv1lKPeK/exec";

  const projects = {
  "yeji_giselle_julie": {
    "id": "yeji_giselle_julie",
    "name": "YEJI X GISELLE X JULIE",
    "kind": "collaboration",
    "participantIds": [
      "yeji",
      "giselle",
      "julie"
    ],
    "sourceAliases": [
      "YEJI X GISELLE X JULIE",
      "YEJI GISELLE JULIE",
      "YEJI X GISELLE X JULIE TOXIC"
    ]
  },
  "got_the_beat": {
    "id": "got_the_beat",
    "name": "GOT the beat",
    "kind": "project_group",
    "participantIds": [
      "boa",
      "taeyeon",
      "hyoyeon",
      "seulgi",
      "wendy",
      "karina",
      "winter"
    ],
    "sourceAliases": [
      "GOT the beat",
      "GOT THE BEAT"
    ]
  },
  "produce_48": {
    "id": "produce_48",
    "name": "PRODUCE 48",
    "kind": "survival_show_project",
    "participantIds": [
      "kwon_eunbi"
    ],
    "participantsComplete": false,
    "note": "Participant list is intentionally scoped to identities currently referenced by Hindex dance records, not the full PRODUCE 48 contestant roster.",
    "sourceAliases": [
      "PRODUCE 48",
      "Produce 48"
    ]
  }
};

  // Context-specific corrections for confirmed source typos.
  // These are NOT artist aliases and do not create new identities.
  const sourceRoleCorrections = {
  "got7|||yoogyeom": "Yugyeom"
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

  function correctRoleForSource(sourceArtistName, rawRole) {
    const key = `${normalizeKey(sourceArtistName)}|||${normalizeKey(rawRole)}`;
    return sourceRoleCorrections[key] || rawRole;
  }

  function resolveProjectId(sourceArtistName) {
    const key = normalizeKey(sourceArtistName);
    for (const project of Object.values(projects)) {
      if ((project.sourceAliases || []).some(alias => normalizeKey(alias) === key)) return project.id;
    }
    return null;
  }

  function resolveProjectPersonId(projectId, roleName) {
    const project = projects[projectId];
    if (!project) return null;
    const normalizedRole = root.normalizePersonName ? root.normalizePersonName(roleName) : normalizeKey(roleName);
    const matches = project.participantIds.filter(personId => {
      const person = root.people?.[personId];
      if (!person) return false;
      return [person.name, ...(person.aliases || [])].some(name => {
        const normalizedName = root.normalizePersonName ? root.normalizePersonName(name) : normalizeKey(name);
        return normalizedName === normalizedRole;
      });
    });
    return matches.length === 1 ? matches[0] : null;
  }

  function buildDanceId(raw, index) {
    if (raw.videoId) return `youtube_${raw.videoId}`;
    const parts = [raw.artist || "unknown", raw.songTitle || "unknown", raw.performanceDate || "unknown", index];
    return "dance_" + parts.join("_").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  }

  function normalizeDance(raw, index = 0) {
    const sourceArtistName = String(raw.artist || "Unknown Artist").trim();
    const correctedRawRole = correctRoleForSource(sourceArtistName, raw.dancerRole || "");
    const roleName = normalizeRoleName(correctedRawRole);

    const groupId = root.resolveGroupId ? root.resolveGroupId(sourceArtistName) : null;
    const projectId = groupId ? null : resolveProjectId(sourceArtistName);

    let personId = null;

    if (groupId && roleName && roleName !== "Backup" && root.resolvePersonInGroup) {
      personId = root.resolvePersonInGroup(groupId, roleName);
    }

    if (!personId && projectId && roleName && roleName !== "Backup") {
      personId = resolveProjectPersonId(projectId, roleName);
    }

    if (!personId && !groupId && !projectId && root.resolveSoloArtistPersonId) {
      personId = root.resolveSoloArtistPersonId(sourceArtistName);
    }

    const hasSpecificRole = Boolean(roleName && roleName !== "Backup");
    const needsReview = hasSpecificRole && !personId;

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
      sourceRoleCorrected: correctedRawRole !== (raw.dancerRole || ""),
      raw,
      needsReview,
      reviewReason: needsReview ? `Could not safely resolve role "${roleName}" under "${sourceArtistName}".` : ""
    };
  }

  function normalizeDanceList(rawRows) {
    return (rawRows || []).map((row, index) => normalizeDance(row, index));
  }

  async function loadDanceData() {
    const response = await fetch(DANCE_SOURCE_URL);
    if (!response.ok) throw new Error(`Failed to load dance data: HTTP ${response.status}`);
    const rawRows = await response.json();
    return normalizeDanceList(rawRows);
  }

  function getUnresolvedDances(dances) {
    return (dances || []).filter(dance => dance.needsReview);
  }

  root.DANCE_SOURCE_URL = DANCE_SOURCE_URL;
  root.projects = projects;
  root.sourceRoleCorrections = sourceRoleCorrections;
  root.normalizeRoleName = normalizeRoleName;
  root.resolveProjectId = resolveProjectId;
  root.normalizeDance = normalizeDance;
  root.normalizeDanceList = normalizeDanceList;
  root.loadDanceData = loadDanceData;
  root.getUnresolvedDances = getUnresolvedDances;
})();
