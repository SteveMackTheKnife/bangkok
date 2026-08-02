const CATEGORY_LABELS = {
  "thai-comfort": "태국 가정식", "fine-dining": "파인다이닝", "isaan": "이싼(동북부)", "halal": "할랄",
  "noodle-bbq": "국수·구이", "indian": "인도", "seafood": "씨푸드", "northern": "북부 태국",
  "japanese": "일식", "hotpot": "수끼·핫팟", "italian": "이탈리안"
};
const CATEGORY_ICON = {
  "thai-comfort": "🍛", "fine-dining": "🍽️", "isaan": "🌶️", "halal": "🍚",
  "noodle-bbq": "🍜", "indian": "🫓", "seafood": "🦀", "northern": "🍲",
  "japanese": "🍢", "hotpot": "🍲", "italian": "🍕"
};

function categoryColor(cat) {
  return getComputedStyle(document.documentElement).getPropertyValue("--cat-" + cat).trim() || "#a3701f";
}
function starString(rating) { const full = Math.round(rating); return "★".repeat(full) + "☆".repeat(5 - full); }
function mapsSearchUrl(q) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q) + "&hl=ko"; }
function esc(s) { const d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }

const geoQueue = new GeocodeQueue(1100);
let map, hotelMarker;
const markers = {}; // rank -> L.Marker
let openItemId = null;

function makePinIcon(color, glyph, big) {
  const size = big ? 34 : 26;
  return L.divIcon({
    className: "",
    html: `<div class="pin${big ? " hotel-pin" : ""}" style="background:${color}"><span>${glyph}</span></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size]
  });
}

function initMap(centerLat, centerLng) {
  map = L.map("map", { scrollWheelZoom: true }).setView([centerLat, centerLng], 15);
  // "osm-intl" renders place/street labels in their international (mostly
  // English) name where available, instead of Thai-only script — much more
  // readable for non-Thai-speaking visitors than the default OSM tile style.
  L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors, tiles by <a href="https://wikimediafoundation.org/" target="_blank" rel="noopener">Wikimedia</a>'
  }).addTo(map);

  // Safari/iPadOS in particular can finish layout (fonts, grid sizing) a
  // moment after Leaflet reads the container's size, leaving a blank map
  // until something forces a resize. Re-measure a few times after load.
  const revalidate = () => map && map.invalidateSize();
  window.addEventListener("resize", revalidate);
  window.addEventListener("orientationchange", revalidate);
  setTimeout(revalidate, 300);
  setTimeout(revalidate, 1000);
}

function confidenceTag(r) {
  if (r.confidence === "low") {
    return '<span class="tag conf-low" title="리뷰 수치가 명확히 확인되지 않아 방문 전 재확인을 권장합니다">⚠ 참고용 수치</span>';
  }
  return "";
}

function renderDetail(r) {
  const dishChips = r.dishes.map(d => `<span class="dish-chip">${esc(d)}</span>`).join("");
  const good = r.good.map(g => `<li>${esc(g)}</li>`).join("");
  const bad = r.bad.map(b => `<li>${esc(b)}</li>`).join("");
  const bib = r.michelin ? `<span class="tag bib">🏵 ${esc(r.michelin)}</span>` : "";
  const photos = r.photos || {};
  const photo1 = photos.main
    ? `<img src="${esc(photos.main)}" alt="${esc(r.name)} 사진" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph-empty',textContent:'사진을 불러올 수 없음 — 지도에서 확인'}))">`
    : `<div class="ph-empty">실제 사진: 구글 지도에서 확인</div>`;
  const photo2 = photos.dish
    ? `<img src="${esc(photos.dish)}" alt="${esc(r.name)} 대표 메뉴 사진" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph-empty',textContent:'사진을 불러올 수 없음'}))">`
    : `<div class="ph-empty">대표 메뉴 사진 없음</div>`;

  return `
    <div class="detail-photos">${photo1}${photo2}</div>
    <div class="tag-row">
      <span class="tag">${CATEGORY_LABELS[r.category] || esc(r.cuisine)}</span>
      ${bib}
      ${confidenceTag(r)}
    </div>
    <div class="meta-line">📍 ${esc(r.address)}<br>🚶 ${esc(r.distance)}<br>⭐ 리뷰 ${r.reviews.toLocaleString()}+ · ${esc(r.source)}</div>
    <div class="price-line">💰 <span class="mono">${esc(r.price)}</span></div>
    <div class="dish-chips">${dishChips}</div>
    <div class="gb-row">
      <div class="gb-box good"><span class="gb-title">👍 리뷰 요약 (Good)</span><ul>${good}</ul></div>
      <div class="gb-box bad"><span class="gb-title">👎 리뷰 요약 (Bad)</span><ul>${bad}</ul></div>
    </div>
    <div class="detail-actions">
      <a class="btn" href="${mapsSearchUrl(r.mapsQuery)}" target="_blank" rel="noopener">🗺️ 구글 지도에서 열기 (실사진·리뷰)</a>
    </div>`;
}

function renderItem(r) {
  const color = categoryColor(r.category);
  const thumbInner = r.photos && r.photos.main
    ? `<img src="${esc(r.photos.main)}" alt="" loading="lazy" onerror="this.parentElement.innerHTML='${esc(r.name.charAt(0))}'">`
    : esc(r.name.charAt(0));
  return `
  <article class="item" id="item-${r.rank}" data-rank="${r.rank}">
    <div class="item-row" onclick="toggleItem(${r.rank})">
      <div class="thumb" style="background:${color}"><span class="rank mono">#${r.rank}</span>${thumbInner}</div>
      <div class="item-main">
        <div class="item-title-row">
          <h3 class="item-title">${esc(r.name)}</h3>
          <span class="item-stars mono">${r.rating.toFixed(1)}</span>
        </div>
        <div class="item-sub">
          <span>${CATEGORY_LABELS[r.category] || esc(r.cuisine)}</span>
          <span class="mono">리뷰 ${r.reviews.toLocaleString()}+</span>
          <span class="mono">${esc(r.price.split(" / ")[0])}</span>
        </div>
      </div>
      <span class="chev">▾</span>
    </div>
    <div class="item-detail">${renderDetail(r)}</div>
  </article>`;
}

function toggleItem(rank) {
  const el = document.getElementById("item-" + rank);
  if (!el) return;
  const opening = !el.classList.contains("open");
  document.querySelectorAll(".item.open").forEach(x => x.classList.remove("open"));
  document.querySelectorAll(".item.highlight").forEach(x => x.classList.remove("highlight"));
  if (opening) {
    el.classList.add("open");
    el.classList.add("highlight");
    openItemId = rank;
    const marker = markers[rank];
    if (marker && map) {
      map.panTo(marker.getLatLng(), { animate: true });
      marker.openPopup();
    }
  } else {
    openItemId = null;
  }
}
window.toggleItem = toggleItem;

function focusFromMarker(rank) {
  const el = document.getElementById("item-" + rank);
  if (!el) return;
  document.querySelectorAll(".item.open").forEach(x => x.classList.remove("open"));
  document.querySelectorAll(".item.highlight").forEach(x => x.classList.remove("highlight"));
  el.classList.add("open", "highlight");
  openItemId = rank;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
}

function addRestaurantMarker(r) {
  const query = (r.mapsQuery.includes("Bangkok") ? r.mapsQuery : r.mapsQuery + ", Bangkok") + ", Thailand";
  geoQueue.add(query, (coords) => {
    if (markers[r.rank] || !map) return;
    const icon = makePinIcon(categoryColor(r.category), CATEGORY_ICON[r.category] || "🍽️", false);
    const marker = L.marker([coords.lat, coords.lng], { icon }).addTo(map);
    marker.bindPopup(
      `<div class="popup-title">#${r.rank} ${esc(r.name)}</div>` +
      `<div>${starString(r.rating)} ${r.rating.toFixed(1)} · 리뷰 ${r.reviews.toLocaleString()}+</div>` +
      `<div class="mono" style="margin:4px 0;">${esc(r.price)}</div>` +
      `<a class="popup-link" href="#" onclick="focusFromMarker(${r.rank});return false;">목록에서 상세보기 →</a>`
    );
    marker.on("click", () => focusFromMarker(r.rank));
    markers[r.rank] = marker;
    applyMarkerVisibility();
  }, () => { /* geocode failed — item still browsable in the list, just no pin */ });
}
window.focusFromMarker = focusFromMarker;

function applyMarkerVisibility() {
  const visibleRanks = new Set(currentFilteredList().map(r => r.rank));
  Object.entries(markers).forEach(([rank, marker]) => {
    const shouldShow = visibleRanks.has(Number(rank));
    const has = map.hasLayer(marker);
    if (shouldShow && !has) marker.addTo(map);
    if (!shouldShow && has) map.removeLayer(marker);
  });
}

let ACTIVE_HOTEL, ACTIVE_RESTAURANTS;

function currentFilteredList() {
  const q = document.getElementById("search").value.trim().toLowerCase();
  const cat = document.getElementById("cat-filter").value;
  const sort = document.getElementById("sort-select").value;
  let list = ACTIVE_RESTAURANTS.filter(r => {
    const matchesQ = !q || r.name.toLowerCase().includes(q) || (r.nameThai || "").toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q) || r.dishes.some(d => d.toLowerCase().includes(q));
    const matchesCat = cat === "all" || r.category === cat;
    return matchesQ && matchesCat;
  });
  if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
  else if (sort === "reviews") list = [...list].sort((a, b) => b.reviews - a.reviews);
  else list = [...list].sort((a, b) => a.rank - b.rank);
  return list;
}

function applyFilters() {
  const list = currentFilteredList();
  const listCol = document.getElementById("list-col");
  listCol.innerHTML = list.length ? list.map(renderItem).join("") : '<div class="empty-state">조건에 맞는 식당이 없습니다. 검색어나 필터를 조정해보세요.</div>';
  document.getElementById("count-tag").textContent = `${list.length}개 식당 표시 중`;
  if (map) applyMarkerVisibility();
}

function populateCategoryOptions() {
  const sel = document.getElementById("cat-filter");
  sel.innerHTML = '<option value="all">모든 카테고리</option>';
  const cats = [...new Set(ACTIVE_RESTAURANTS.map(r => r.category))];
  cats.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = CATEGORY_LABELS[c] || c;
    sel.appendChild(opt);
  });
}

function initHotelPage(hotel, restaurants, fallbackCenter) {
  ACTIVE_HOTEL = hotel;
  ACTIVE_RESTAURANTS = restaurants;

  document.getElementById("hotel-name").textContent = hotel.name;
  document.getElementById("hotel-desc").textContent = hotel.desc;
  document.getElementById("hotel-maps-link").href = mapsSearchUrl(hotel.mapsQuery);

  const highConf = restaurants.filter(r => r.confidence === "high").length;
  document.getElementById("stat-total").textContent = restaurants.length;
  document.getElementById("stat-rating").textContent = (restaurants.reduce((s, r) => s + r.rating, 0) / restaurants.length).toFixed(1);
  document.getElementById("stat-confirmed").textContent = highConf;

  populateCategoryOptions();
  applyFilters();

  // Search/filter/sort must keep working even if the map (external CDN: Leaflet
  // + OpenStreetMap tiles + Nominatim geocoding) fails to load for any reason.
  document.getElementById("search").addEventListener("input", applyFilters);
  document.getElementById("cat-filter").addEventListener("change", applyFilters);
  document.getElementById("sort-select").addEventListener("change", applyFilters);

  try {
    if (typeof L === "undefined") throw new Error("Leaflet failed to load");
    initMap(fallbackCenter.lat, fallbackCenter.lng);

    const hotelQuery = hotel.mapsQuery + ", Bangkok, Thailand";
    geoQueue.add(hotelQuery, (coords) => {
      map.setView([coords.lat, coords.lng], 15);
      hotelMarker = L.marker([coords.lat, coords.lng], { icon: makePinIcon("#0f1e2e", "🏨", true) }).addTo(map);
      hotelMarker.bindPopup(`<div class="popup-title">${esc(hotel.name)}</div><div>여기가 기준 호텔입니다</div>`);
    }, () => { /* keep fallback center if hotel geocode fails */ });

    restaurants.forEach(r => addRestaurantMarker(r));
  } catch (e) {
    console.error("Map unavailable, falling back to list-only view:", e);
    const mapCol = document.querySelector(".map-col");
    if (mapCol) {
      mapCol.innerHTML = '<div class="empty-state" style="padding:40px 20px;">지도를 불러올 수 없습니다.<br>각 식당의 "구글 지도에서 열기" 버튼으로 위치를 확인해주세요.</div>';
    }
  }
}
