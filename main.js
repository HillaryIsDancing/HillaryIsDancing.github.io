const grid = document.getElementById("grid");
const searchInput = document.getElementById("searchInput");
const count = document.getElementById("count");

const toggleArtistMapButton = document.getElementById("toggleArtistMap");
const artistMapSection = document.getElementById("artistMapSection");
const artistMap = document.getElementById("artistMap");
const clearArtistFilterButton = document.getElementById("clearArtistFilter");

const toggleRoleMapButton = document.getElementById("toggleRoleMap");
const roleMapSection = document.getElementById("roleMapSection");
const roleMap = document.getElementById("roleMap");
const clearRoleFilterButton = document.getElementById("clearRoleFilter");

const loadMoreButton = document.getElementById("loadMoreButton");

let videos = [];
let currentList = [];
let visibleCount = 24;

const PAGE_SIZE = 24;

async function loadData() {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwlpl1_Ndpznng_BhgnDSxzaZezfJpfBGcm34lSeH9ik_yDsKVfv0taBfNWwv1lKPeK/exec"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    videos = await response.json();

    videos = videos.map((item) => ({
      ...item,
      artist: normalizeArtistName(item.artist || "Unknown Artist"),
      dancerRole: normalizeRoleName(item.dancerRole || "")
    }));

    videos.sort(sortByNewestDate);

    currentList = videos;
    visibleCount = PAGE_SIZE;

    renderArtistMap(videos);
    renderRoleMap(videos);
    renderVideos(currentList);
  } catch (error) {
    console.error("Failed to load data:", error);
    count.textContent = "";
    grid.innerHTML = `<p class="empty">Failed to load video data.</p>`;
    loadMoreButton.classList.add("hidden");
  }
}

function normalizeArtistName(name) {
  const raw = String(name).trim();

  const key = raw
    .toLowerCase()
    .replaceAll("’", "'")
    .replace(/\s+/g, " ");

  const aliasMap = {
    "twice": "TWICE",
    "blackpink": "BLACKPINK",
    "aespa": "AESPA",
    "aspea": "AESPA",
    "le sserafim": "LE SSERAFIM",
    "le seerafim": "LE SSERAFIM",
    "gfriend": "GFRIEND",
    "viviz": "VIVIZ",
    "kiss of life": "KISS OF LIFE",
    "fifty fifty": "FIFTY FIFTY",
    "newjeans": "NewJeans",
    "new jeans": "NewJeans",
    "wjsn cosmic girls": "WJSN Cosmic Girls",
    "wjsn": "WJSN Cosmic Girls",
    "girls' generation": "Girls' Generation",
    "iz*one": "IZ*ONE",
    "izone": "IZ*ONE",
    "produce 48": "PRODUCE 48",
    "purple kiss": "Purple Kiss",
    "dreamcatcher": "Dreamcatcher",
    "illit": "ILLIT",
    "ive": "IVE",
    "stayc": "STAYC",
    "mamamoo": "MAMAMOO",
    "everglow": "EVERGLOW",
    "misamo": "MISAMO",
    "loona": "LOONA",
    "soojin": "SOOJIN",
    "meovv": "MEOVV",
    "katseye": "KATSEYE",
    "xg": "XG",
    "yena": "YENA",
    "nmixx": "NMIXX",
    "itzy": "ITZY",
    "seulgi": "SEULGI",
    "t-ara": "T-ARA",
    "f(x)": "f(x)",
    "after school": "AFTER SCHOOL",
    "fiestar": "FIESTAR",
    "jennie": "JENNIE",
    "lee chae yeon": "LEE CHAE YEON",
    "clc": "CLC",
    "chocome": "CHOCOME",
    "wjsn chocome": "CHOCOME",    
    "yeji x giselle x julie": "YEJI X GISELLE X JULIE",
    "yeji giselle julie": "YEJI X GISELLE X JULIE",
    "yeji x giselle x julie toxic": "YEJI X GISELLE X JULIE"
  };

  return aliasMap[key] || raw;
}

function normalizeRoleName(role) {
  const raw = String(role)
    .replace(/\s+/g, " ")
    .trim();

  const key = raw.toLowerCase();

  const backupAliases = [
    "backup",
    "back up",
    "back-up",
    "backup dancer",
    "back up dancer",
    "back-up dancer"
  ];

  if (backupAliases.includes(key)) {
    return "Backup";
  }

  const roleAliasMap = {
    "ningning": "Ningning",
    "ning ning": "Ningning",
    "ning ning ": "Ningning",

    "dahyun": "Dahyun",
    "da hyun": "Dahyun",
    "da-hyun": "Dahyun",

    "yoohyeon": "Yoohyeon",
    "yoo hyeon": "Yoohyeon",
    "yoo-hyeon": "Yoohyeon",

    "sana": "Sana",
    "sakura": "Sakura",
    "eunha": "Eunha"
  };

  return roleAliasMap[key] || raw;
}

function getRoleIdentityKey(artist, role) {
  const normalizedArtist = normalizeArtistName(artist || "Unknown Artist");
  const normalizedRole = normalizeRoleName(role || "");

  if (!normalizedRole) return "";

  if (normalizedRole.toLowerCase() === "backup") {
    return "BACKUP";
  }

  const groupMemberKey = `${normalizedArtist}|||${normalizedRole}`;

  const identityAliasMap = {
    "IZ*ONE|||Sakura": "Sakura",
    "LE SSERAFIM|||Sakura": "Sakura",
  
    "GFRIEND|||Eunha": "Eunha",
    "VIVIZ|||Eunha": "Eunha",
  
    "TWICE|||Sana": "Sana",
    "MISAMO|||Sana": "Sana",
  
    "IZ*ONE|||Wonyoung": "Wonyoung",
    "IVE|||Wonyoung": "Wonyoung",
  
    "WJSN Cosmic Girls|||Dayoung": "Dayoung",
    "CHOCOME|||Dayoung": "Dayoung",
  
    "KISS OF LIFE|||Julie": "Julie",
    "YEJI X GISELLE X JULIE|||Julie": "Julie"
  };

  return identityAliasMap[groupMemberKey] || groupMemberKey;
}

function getRoleDisplayName(identityKey, role) {
  if (identityKey === "BACKUP") {
    return "Backup";
  }

  if (!identityKey.includes("|||")) {
    return identityKey;
  }

  return normalizeRoleName(role || "");
}

function sortByNewestDate(a, b) {
  const dateA = a.performanceDate || "0000-00";
  const dateB = b.performanceDate || "0000-00";
  return dateB.localeCompare(dateA);
}

function renderVideos(list) {
  const visibleItems = list.slice(0, visibleCount);

  count.textContent = `Showing ${visibleItems.length} of ${list.length} video${
    list.length === 1 ? "" : "s"
  }`;

  if (list.length === 0) {
    grid.innerHTML = `<p class="empty">No videos found.</p>`;
    loadMoreButton.classList.add("hidden");
    return;
  }

  grid.innerHTML = visibleItems
    .map((item) => {
      const image = item.outfitImage || item.thumbnail || "";
      const artist = item.artist || "Unknown Artist";
      const songTitle = item.songTitle || "Unknown Song";
      const location = item.location || "Location unknown";
      const date = item.performanceDate || "Date unknown";
      const dancerRole = item.dancerRole || "";

      return `
        <article class="card">
          <img 
            src="${image}" 
            alt="${escapeHtml(artist)} - ${escapeHtml(songTitle)}" 
            loading="lazy" 
          />

          <div class="card-content">
            <div class="artist">${escapeHtml(artist)}</div>
            <h2 class="song">${escapeHtml(songTitle)}</h2>

            <div class="meta">
              <div>${escapeHtml(location)}</div>
              <div>${escapeHtml(date)}</div>
              ${
                dancerRole
                  ? `<div class="role">as ${escapeHtml(dancerRole)}</div>`
                  : ""
              }
            </div>

            <a 
              class="watch" 
              href="${escapeHtml(item.youtubeUrl || "#")}" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        </article>
      `;
    })
    .join("");

  updateLoadMoreButton(list);
}

function updateLoadMoreButton(list) {
  if (visibleCount >= list.length) {
    loadMoreButton.classList.add("hidden");
  } else {
    loadMoreButton.classList.remove("hidden");
    loadMoreButton.textContent = `Load More (${list.length - visibleCount} left)`;
  }
}

function loadMoreVideos() {
  visibleCount += PAGE_SIZE;
  renderVideos(currentList);
}

function renderArtistMap(list) {
  const artistCounts = {};

  list.forEach((item) => {
    const artist = item.artist || "Unknown Artist";
    artistCounts[artist] = (artistCounts[artist] || 0) + 1;
  });

  renderBoard(artistMap, artistCounts, "artist");
}

function renderRoleMap(list) {
  const roleCounts = {};

  list.forEach((item) => {
    const artist = item.artist || "Unknown Artist";
    const role = normalizeRoleName(item.dancerRole || "");

    if (!role) return;

    const identityKey = getRoleIdentityKey(artist, role);
    if (!identityKey) return;

    const isBackup = identityKey === "BACKUP";
    const displayName = getRoleDisplayName(identityKey, role);

    if (!roleCounts[identityKey]) {
      roleCounts[identityKey] = {
        identityKey,
        role: displayName,
        total: 0,
        isBackup
      };
    }

    roleCounts[identityKey].total += 1;
  });

  renderRoleBoard(roleMap, roleCounts);
}

function renderBoard(container, counts, type) {
  const sortedItems = Object.entries(counts).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });

  container.innerHTML = "";

  if (sortedItems.length === 0) {
    container.innerHTML = `<p class="empty">No data yet.</p>`;
    return;
  }

  sortedItems.forEach(([name, total]) => {
    const button = document.createElement("button");
    button.className = `artist-block ${getBoardBlockSize(total)}`;
    button.type = "button";

    button.innerHTML = `
      <span class="artist-block-name">${escapeHtml(name)}</span>
      <span class="artist-block-count">${total} video${total === 1 ? "" : "s"}</span>
    `;

    button.addEventListener("click", () => {
      searchInput.value = name;
      searchVideos();
      window.scrollTo({
        top: document.querySelector(".toolbar").offsetTop,
        behavior: "smooth"
      });
    });

    container.appendChild(button);
  });
}

function renderRoleBoard(container, counts) {
  const sortedItems = Object.entries(counts).sort((a, b) => {
    const aIsBackup = a[1].isBackup;
    const bIsBackup = b[1].isBackup;

    if (aIsBackup && !bIsBackup) return 1;
    if (!aIsBackup && bIsBackup) return -1;

    return b[1].total - a[1].total || a[1].role.localeCompare(b[1].role);
  });

  container.innerHTML = "";

  if (sortedItems.length === 0) {
    container.innerHTML = `<p class="empty">No role data yet.</p>`;
    return;
  }

  sortedItems.forEach(([identityKey, data]) => {
    const button = document.createElement("button");

    const blockSize = data.isBackup ? "small" : getBoardBlockSize(data.total);

    button.className = `artist-block ${blockSize}`;
    button.type = "button";
    button.title = data.isBackup ? "Backup dancer" : data.role;

    button.innerHTML = `
      <span class="artist-block-name">${escapeHtml(data.role)}</span>
      <span class="artist-block-count">${data.total} video${
        data.total === 1 ? "" : "s"
      }</span>
    `;

    button.addEventListener("click", () => {
      filterByRoleIdentityKey(identityKey);
      window.scrollTo({
        top: document.querySelector(".toolbar").offsetTop,
        behavior: "smooth"
      });
    });

    container.appendChild(button);
  });
}

function filterByRoleIdentityKey(identityKey) {
  const isBackup = identityKey === "BACKUP";
  const displayRole = isBackup
    ? "Backup"
    : identityKey.includes("|||")
      ? identityKey.split("|||")[1]
      : identityKey;

  searchInput.value = displayRole;

  currentList = videos
    .filter((item) => {
      const itemArtist = item.artist || "Unknown Artist";
      const itemRole = normalizeRoleName(item.dancerRole || "");
      const itemIdentityKey = getRoleIdentityKey(itemArtist, itemRole);

      return itemIdentityKey === identityKey;
    })
    .sort(sortByNewestDate);

  visibleCount = PAGE_SIZE;
  renderVideos(currentList);
}

function getBoardBlockSize(total) {
  if (total >= 5) return "big";
  if (total >= 2) return "medium";
  return "small";
}

function searchVideos() {
  const keyword = searchInput.value.trim().toLowerCase();

  currentList = videos
    .filter((item) => {
      return (
        item.artist?.toLowerCase().includes(keyword) ||
        item.songTitle?.toLowerCase().includes(keyword) ||
        item.location?.toLowerCase().includes(keyword) ||
        item.performanceDate?.toLowerCase().includes(keyword) ||
        item.dancerRole?.toLowerCase().includes(keyword)
      );
    })
    .sort(sortByNewestDate);

  visibleCount = PAGE_SIZE;
  renderVideos(currentList);
}

function toggleArtistMap() {
  const artistIsHidden = artistMapSection.classList.contains("hidden");

  if (artistIsHidden) {
    artistMapSection.classList.remove("hidden");
    roleMapSection.classList.add("hidden");

    toggleArtistMapButton.textContent = "Hide Artist Board 🧸";
    toggleRoleMapButton.textContent = "Show Role Board 🎀";
  } else {
    artistMapSection.classList.add("hidden");
    toggleArtistMapButton.textContent = "Show Artist Board 🧸";
  }
}

function toggleRoleMap() {
  const roleIsHidden = roleMapSection.classList.contains("hidden");

  if (roleIsHidden) {
    roleMapSection.classList.remove("hidden");
    artistMapSection.classList.add("hidden");

    toggleRoleMapButton.textContent = "Hide Role Board 🎀";
    toggleArtistMapButton.textContent = "Show Artist Board 🧸";
  } else {
    roleMapSection.classList.add("hidden");
    toggleRoleMapButton.textContent = "Show Role Board 🎀";
  }
}

function clearArtistFilter() {
  searchInput.value = "";
  currentList = videos;
  visibleCount = PAGE_SIZE;
  renderVideos(currentList);
}

function clearRoleFilter() {
  searchInput.value = "";
  currentList = videos;
  visibleCount = PAGE_SIZE;
  renderVideos(currentList);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

searchInput.addEventListener("input", searchVideos);

toggleArtistMapButton.addEventListener("click", toggleArtistMap);
clearArtistFilterButton.addEventListener("click", clearArtistFilter);

toggleRoleMapButton.addEventListener("click", toggleRoleMap);
clearRoleFilterButton.addEventListener("click", clearRoleFilter);

loadMoreButton.addEventListener("click", loadMoreVideos);

loadData();
