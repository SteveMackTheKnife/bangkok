// Lightweight client-side geocoding via OpenStreetMap Nominatim (no API key).
// Results are cached in localStorage; lookups are queued and rate-limited to
// respect Nominatim's usage policy (max ~1 request/second).

const GEOCODE_CACHE_PREFIX = "bkkEatsGeocode:";

function geocodeCacheGet(key) {
  try {
    const raw = localStorage.getItem(GEOCODE_CACHE_PREFIX + key);
    return raw ? JSON.parse(raw) : null;
  } catch (e) { return null; }
}
function geocodeCacheSet(key, val) {
  try { localStorage.setItem(GEOCODE_CACHE_PREFIX + key, JSON.stringify(val)); } catch (e) {}
}

async function geocodeFetch(query) {
  const url = "https://nominatim.openstreetmap.org/search?format=json&limit=1&q=" + encodeURIComponent(query);
  const res = await fetch(url, { headers: { "Accept-Language": "en" } });
  if (!res.ok) throw new Error("geocode http " + res.status);
  const data = await res.json();
  if (!data.length) throw new Error("no geocode match");
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

class GeocodeQueue {
  constructor(delayMs) {
    this.delayMs = delayMs || 1100;
    this.queue = [];
    this.running = false;
  }
  add(query, onDone, onError) {
    const cached = geocodeCacheGet(query);
    if (cached) { onDone(cached); return; }
    this.queue.push({ query, onDone, onError });
    this._run();
  }
  async _run() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const { query, onDone, onError } = this.queue.shift();
      try {
        const coords = await geocodeFetch(query);
        geocodeCacheSet(query, coords);
        onDone(coords);
      } catch (e) {
        if (onError) onError(e);
      }
      await new Promise(r => setTimeout(r, this.delayMs));
    }
    this.running = false;
  }
}
