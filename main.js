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
    "le sserafim": "LE SSERAFIM",
    "gfriend": "GFRIEND",
    "kiss of life": "KISS OF LIFE",
    "fifty fifty": "FIFTY FIFTY",
    "newjeans": "NewJeans",
    "new jeans": "NewJeans",
    "wjsn cosmic girls": "WJSN Cosmic Girls",
    "wjsn": "WJSN Cosmic Girls",
    "girls' generation": "Girls' Generation",
    "iz*one": "IZ*ONE",
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
    "clc": "CLC"
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

  return raw;
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
              href="${escapeHtml(item.youtubeUrl)}" 
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

    const isBackup = role.toLowerCase() === "backup";

    const roleKey = isBackup
      ? "ALL|||Backup"
      : `${artist}|||${role}`;

    if (!roleCounts[roleKey]) {
      roleCounts[roleKey] = {
        artist: isBackup ? "All Artists" : artist,
        role: isBackup ? "Backup" : role,
        total: 0,
        isBackup
      };
    }

    roleCounts[roleKey].total += 1;
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

    // Backup 永远排最后
    if (aIsBackup && !bIsBackup) return 1;
    if (!aIsBackup && bIsBackup) return -1;

    // 其他角色正常按视频数量排序
    return b[1].total - a[1].total || a[1].role.localeCompare(b[1].role);
  });

  container.innerHTML = "";

  if (sortedItems.length === 0) {
    container.innerHTML = `<p class="empty">No role data yet.</p>`;
    return;
  }

  sortedItems.forEach(([roleKey, data]) => {
    const button = document.createElement("button");

    // Backup 永远使用 small 样式，和 1 video 的卡片一样
    const blockSize = data.isBackup ? "small" : getBoardBlockSize(data.total);

    button.className = `artist-block ${blockSize}`;
    button.type = "button";

    button.title = data.isBackup
      ? "Backup dancer"
      : `${data.artist} - ${data.role}`;

    button.innerHTML = `
      <span class="artist-block-name">${escapeHtml(data.role)}</span>
      <span class="artist-block-count">${data.total} video${
        data.total === 1 ? "" : "s"
      }</span>
    `;

    button.addEventListener("click", () => {
      filterByRoleKey(roleKey);
      window.scrollTo({
        top: document.querySelector(".toolbar").offsetTop,
        behavior: "smooth"
      });
    });

    container.appendChild(button);
  });
}

function filterByRoleKey(roleKey) {
  const [artist, role] = roleKey.split("|||");

  searchInput.value = role;

  currentList = videos
    .filter((item) => {
      const itemRole = normalizeRoleName(item.dancerRole || "");

      if (artist === "ALL" && role === "Backup") {
        return itemRole.toLowerCase() === "backup";
      }

      return item.artist === artist && itemRole === role;
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
