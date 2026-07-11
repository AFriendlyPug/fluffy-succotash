// ==UserScript==
// @name         Skeb - Show Artist Price on Cards
// @namespace    skeb-price-display
// @version      2.0.7
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTQuNjQ1MzA5JSIgeDI9Ijg1LjM1NDY5MSUiIHkxPSIxNC42NDUzMDklIiB5Mj0iODUuMzYzNDkyJSI+PHN0b3Agb2Zmc2V0PSIuMiIgc3RvcC1jb2xvcj0iIzMwYjM5NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFlNWU3MSIvPjwvbGluZWFyR3JhZGllbnQ+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIj48Y2lyY2xlIGN4PSIxOS45OTM3NSIgY3k9IjE5Ljk4MTI1IiBmaWxsPSJ1cmwoI2EpIiByPSIxNy43NTMxMjUiLz48cGF0aCBkPSJtMTguNzg0Mzc1IDEzLjk4NzUtNy4zNTYyNSAyMS41NDY4NzVjLS44MTI1LS40NDY4NzUtMS41ODEyNS0uOTU5Mzc1LTIuMzA5Mzc1LTEuNTI1bDEuMTM0Mzc1LTMuMjY4NzUtMi41MjgxMjUtLjg2ODc1Ljg1OTM3NS0yLjU2ODc1IDIuNTI4MTI1Ljg2ODc1IDEuNzI4MTI1LTUuMDU2MjUtMi41MjgxMjUtLjg2ODc1Ljg2ODc1LTIuNTM3NSAyLjUyODEyNS44Njg3NSAxLjcyODEyNS01LjA1NjI1LTIuNTI4MTI1LS44Njg3NS44Njg3NS0yLjUzNzUgMi41MjgxMjUuODY4NzUgMS42ODc1LTQuOTkzNzUtMi40OTY4NzUtLjkwOTM3NS40NDA2MjUtMS4yNjg3NSA1LjA1NjI1IDEuNzI4MTI1LS4zNzgxMjUgMS4xLTEuNzY4NzUgNS4xODQzNzUtLjA1OTM3NS4xNTkzNzV6bS0xMi45OTY4NzUgMTYuNjQwNjI1Yy42NjI1Ljg4NDM3NSAxLjQwNjI1IDEuNzAzMTI1IDIuMjE4NzUgMi40NDY4NzVsLjUxODc1LTEuNTE1NjI1em0zLjI5Mzc1LTEzLjAxODc1IDMuOCAxLjI5Njg3NS44NjU2MjUtMi41MzQzNzUtMy44LTEuMjk2ODc1em0tMi41OTA2MjUgNy41OTA2MjUgMy44IDEuMjk2ODc1Ljg2NTYyNS0yLjUzNDM3NS0zLjgtMS4yOTY4NzV6bTMxLjI1OTM3NS01LjIxODc1YzAtMi41MzQzNzUtLjUzNDM3NS00Ljk0MDYyNS0xLjQ5MDYyNS03LjExODc1bC0xMy4zMjUtNC41NTkzNzUtOS42MDMxMjUgMjguMTM0Mzc1YzIuMDU5Mzc1LjgzNDM3NSA0LjMwNjI1IDEuMyA2LjY2NTYyNSAxLjMgOS44MDYyNSAwIDE3Ljc1MzEyNS03Ljk0Njg3NSAxNy43NTMxMjUtMTcuNzUzMTI1em0tMjYuMDcxODc1LTkuOTcxODc1IDMuOCAxLjI5Njg3NS44NjU2MjUtMi41MzQzNzUtMy44LTEuMjk2ODc1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0xOS45OTM3NSAyLjIzMTI1YzkuODA2MjUgMCAxNy43NTMxMjUgNy45NDY4NzUgMTcuNzUzMTI1IDE3Ljc1MzEyNXMtNy45NDY4NzUgMTcuNzUzMTI1LTE3Ljc1MzEyNSAxNy43NTMxMjUtMTcuNzUzMTI1LTcuOTQ2ODc1LTE3Ljc1MzEyNS0xNy43NTMxMjVjMC05LjgwNjI1IDcuOTQ2ODc1LTE3Ljc1MzEyNSAxNy43NTMxMjUtMTcuNzUzMTI1bTAtMi4yMjgxMjVjLTExLjAzNDM3NSAwLTE5Ljk4MTI1IDguOTQ2ODc1LTE5Ljk4MTI1IDE5Ljk4MTI1czguOTQ2ODc1IDE5Ljk4MTI1IDE5Ljk4MTI1IDE5Ljk4MTI1IDE5Ljk4MTI1LTguOTQ2ODc1IDE5Ljk4MTI1LTE5Ljk4MTI1LTguOTQ2ODc1LTE5Ljk4MTI1LTE5Ljk4MTI1LTE5Ljk4MTI1eiIgZmlsbD0iIzFlNWU3MSIvPjwvZz48L3N2Zz4=
// @description  Shows artist request prices on Skeb cards (colour-coded) with a max-price filter. Prices are cached permanently and only refreshed when you open that artist's profile.
// @match        https://skeb.jp/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const PROCESSED_ATTR = 'data-skeb-price-done';
  const REQUEST_DELAY_MS = 600;

  // Colour-scale thresholds (user-configurable via the cog settings menu)
  const SETTINGS_KEY = 'skebPriceSettings';
  const DEFAULT_SETTINGS = { cheap: 5000, expensive: 30000 };

  function getSettings() {
    try {
      const s = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
      return {
        cheap: Number(s.cheap) > 0 ? Number(s.cheap) : DEFAULT_SETTINGS.cheap,
        expensive: Number(s.expensive) > 0 ? Number(s.expensive) : DEFAULT_SETTINGS.expensive,
      };
    } catch (e) {
      return { ...DEFAULT_SETTINGS };
    }
  }

  function saveSettings(settings) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

  const CLOSED_RE = /stopped|closed|not\s*accepting|受付停止|停止中/i;
  const USER_RE = /^\/@([^/?#]+)$/;
  const WORK_RE = /^\/@([^/?#]+)\/works\/\d+/;

  const FILTER_KEY = 'skebPriceMaxFilter';
  const DAYS_FILTER_KEY = 'skebPriceMaxDaysFilter';
  const FILTER_HIDE_UNKNOWN_KEY = 'skebPriceHideUnknown';
  const CACHE_KEY = 'skebPriceCacheV3';

  // ================= Persistent price cache =================
  // { [screenName]: { p: number|null, t: epochMs } }
  // p = price in yen, or null (closed / no price found)
  // Entries never expire on their own; they are refreshed ONLY when you
  // open that artist's profile page.

  let cache = {};
  try {
    cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch (e) { cache = {}; }

  let saveDebounce = null;
  function saveCache() {
    clearTimeout(saveDebounce);
    saveDebounce = setTimeout(() => {
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
      } catch (e) {
        // localStorage full — drop the oldest half of entries and retry
        const entries = Object.entries(cache).sort((a, b) => a[1].t - b[1].t);
        cache = Object.fromEntries(entries.slice(Math.floor(entries.length / 2)));
        try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch (e2) { /* give up */ }
      }
    }, 500);
  }

  // info shape: { p: price|null, d: averageCompleteDays|null }
  function cachedInfo(screenName) {
    if (!Object.prototype.hasOwnProperty.call(cache, screenName)) return undefined;
    const e = cache[screenName];
    return { p: e.p ?? null, d: e.d ?? null };
  }

  function setCachedInfo(screenName, info) {
    cache[screenName] = { p: info.p, d: info.d, t: Date.now() };
    saveCache();
  }

  // ---- Page type detection ----
  function isProfilePage() {
    const p = location.pathname;
    if (!p.startsWith('/@')) return false;
    if (WORK_RE.test(p)) return false;
    if (/\/following_(creators|users)/.test(p)) return false;
    return true;
  }

  function profileScreenName() {
    const m = location.pathname.match(/^\/@([^/?#]+)/);
    return m ? m[1] : null;
  }

  function getAuthHeader() {
    try {
      for (const key of Object.keys(localStorage)) {
        if (/token/i.test(key)) {
          const val = localStorage.getItem(key);
          if (val && val.length > 20 && !val.startsWith('{')) {
            return val.startsWith('Bearer') ? val : `Bearer ${val}`;
          }
        }
      }
    } catch (e) { /* ignore */ }
    return 'Bearer null';
  }

  // ---- Throttled queue ----
  const queue = [];
  let queueRunning = false;
  function enqueue(fn) {
    return new Promise((resolve) => {
      queue.push(async () => resolve(await fn()));
      if (!queueRunning) runQueue();
    });
  }
  async function runQueue() {
    queueRunning = true;
    while (queue.length) {
      await queue.shift()();
      await new Promise(r => setTimeout(r, REQUEST_DELAY_MS));
    }
    queueRunning = false;
  }

  // ---- API ----
  const inFlight = new Map();

  async function apiFetchInfo(screenName) {
    try {
      const res = await fetch(`https://skeb.jp/api/users/${encodeURIComponent(screenName)}`, {
        headers: { 'Accept': 'application/json', 'Authorization': getAuthHeader() },
        credentials: 'same-origin',
      });
      if (res.status === 429) return { retry: true };
      if (!res.ok) return null;

      const data = await res.json();

      // Average time to complete a request. The exact field name isn't
      // documented, so scan the payload for a plausible key and normalise
      // the unit (Skeb may report seconds, hours, or days).
      let days = null;
      const dayKeys = Object.keys(data).filter(k =>
        /average/i.test(k) && /(complete|publication|deliver)/i.test(k)
      );
      // broaden if nothing matched both patterns
      const candidates = dayKeys.length
        ? dayKeys
        : Object.keys(data).filter(k => /average/i.test(k) && !/response/i.test(k));
      for (const k of candidates) {
        const raw = Number(data[k]);
        if (!isFinite(raw) || raw <= 0) continue;
        if (raw > 10000) days = raw / 86400;      // seconds -> days
        else if (raw > 200) days = raw / 24;      // hours -> days
        else days = raw;                          // already days
        break;
      }

      if (data.acceptable === false) return { p: null, d: days };

      let price = null;
      if (Array.isArray(data.skills) && data.skills.length) {
        const skills = data.skills
          .map(s => ({ genre: s.genre, amount: s.default_amount ?? s.amount }))
          .filter(s => typeof s.amount === 'number');
        if (skills.length) {
          const art = skills.find(s => s.genre === 'art');
          price = (art || skills.reduce((a, b) => (a.amount <= b.amount ? a : b))).amount;
        }
      }
      if (price === null && typeof data.default_amount === 'number') price = data.default_amount;
      return { p: price, d: days };
    } catch (e) {
      return null;
    }
  }

  // Returns cached info if available; otherwise fetches once and caches forever.
  // Resolves to { p: price|null, d: days|null }.
  async function getInfo(screenName, forceRefresh = false) {
    if (!forceRefresh) {
      const c = cachedInfo(screenName);
      if (c !== undefined) return c;
    }
    if (inFlight.has(screenName)) return inFlight.get(screenName);

    const pr = enqueue(async () => {
      const result = await apiFetchInfo(screenName);
      inFlight.delete(screenName);
      if (result && result.retry) {
        // rate-limited: return stale cache if we have it, don't overwrite
        const c = cachedInfo(screenName);
        return c === undefined ? { p: null, d: null } : c;
      }
      const info = result || { p: null, d: null };
      setCachedInfo(screenName, info);
      return info;
    });
    inFlight.set(screenName, pr);
    return pr;
  }

  // ---- Colour scale ----
  function priceColor(amount) {
    const { cheap, expensive } = getSettings();
    const span = Math.max(expensive - cheap, 1);
    let t = (amount - cheap) / span;
    t = Math.min(1, Math.max(0, t));
    return `hsl(${120 * (1 - t)}, 75%, 42%)`;
  }

  // Recolour every visible price tag (used after settings change)
  function recolorAllTags() {
    document.querySelectorAll('.skeb-price-tag').forEach(t => {
      const amount = Number(String(t.textContent).replace(/[^0-9]/g, ''));
      if (isFinite(amount)) t.style.background = priceColor(amount);
    });
  }

  // ---- UI ----
  function makeTag(amount) {
    const el = document.createElement('span');
    el.className = 'tag skeb-price-tag';
    el.textContent = `¥${amount.toLocaleString()}`;
    el.style.cssText = `
      background: ${priceColor(amount)};
      color: #fff;
      font-weight: 700;
      margin-left: 4px;
    `;
    return el;
  }

  function makeDaysTag(days) {
    const el = document.createElement('span');
    el.className = 'tag skeb-days-tag';
    // round to whole days for display
    el.textContent = `${Math.round(days)}d`;
    el.title = `Average completion time: ${Math.round(days)} days`;
    el.style.cssText = `
      background: #4a4a4a;
      color: #fff;
      font-weight: 700;
      margin-left: 4px;
    `;
    return el;
  }

  // If a tag wrapped onto a new line, its left margin creates a ragged edge —
  // zero it so line-starting tags align with the container's left edge
  function fixWrappedTagMargins(container) {
    const tags = container.querySelectorAll('.skeb-price-tag, .skeb-days-tag');
    tags.forEach(t => {
      const prev = t.previousElementSibling;
      // A tag starts a new line if it has no previous sibling on the same row
      const onNewLine = prev && t.offsetTop > prev.offsetTop + prev.offsetHeight / 2;
      t.style.marginLeft = onNewLine || !prev ? '0' : '4px';
    });
  }

  function attachTag(cardEl, amount, days) {
    if (cardEl.querySelector('.skeb-price-tag')) return;

    const priceTag = makeTag(amount);
    const daysTag = (typeof days === 'number') ? makeDaysTag(days) : null;

    const tag = cardEl.querySelector('.tag, .tags .tag, span.tag');
    if (tag) {
      tag.parentElement.appendChild(priceTag);
      if (daysTag) tag.parentElement.appendChild(daysTag);
      // Wait for layout, then correct margins for any tags that wrapped
      requestAnimationFrame(() => fixWrappedTagMargins(tag.parentElement));
    } else {
      priceTag.style.position = 'absolute';
      priceTag.style.top = '6px';
      priceTag.style.left = '6px';
      priceTag.style.zIndex = '5';
      if (getComputedStyle(cardEl).position === 'static') cardEl.style.position = 'relative';
      cardEl.appendChild(priceTag);
      if (daysTag) {
        daysTag.style.position = 'absolute';
        daysTag.style.top = '32px';
        daysTag.style.left = '6px';
        daysTag.style.zIndex = '5';
        daysTag.style.marginLeft = '0';
        cardEl.appendChild(daysTag);
      }
    }
  }

  // ================= Max-price filter =================

  function isArtistListingPage() {
    return location.pathname === '/users' ||
      location.pathname === '/search' ||
      location.pathname === '/works' ||
      /following_creators/.test(location.pathname);
  }

  function getMaxFilter() {
    const v = Number(localStorage.getItem(FILTER_KEY));
    return v > 0 ? v : null;
  }

  function getMaxDaysFilter() {
    const v = Number(localStorage.getItem(DAYS_FILTER_KEY));
    return v > 0 ? v : null;
  }

  function getHideUnknown() {
    return localStorage.getItem(FILTER_HIDE_UNKNOWN_KEY) === '1';
  }

  function cardContainer(a) {
    let el = a;
    for (let i = 0; i < 3; i++) {
      if (el.parentElement && /column/.test(el.parentElement.className)) return el.parentElement;
      el = el.parentElement || el;
    }
    return a;
  }

  function applyFilterToCard(a) {
    const container = cardContainer(a);
    // The max-price filter only ever hides cards on artist listing pages.
    // On the homepage, search, works feeds, etc. everything stays visible.
    if (!isArtistListingPage()) { container.style.display = ''; return; }

    // "Hide closed/unpriced": always hide cards whose visible text shows the
    // artist as Stopped/closed — even if we have a cached price for them
    if (getHideUnknown() && CLOSED_RE.test(a.textContent)) {
      container.style.display = 'none';
      return;
    }

    const max = getMaxFilter();
    const maxDays = getMaxDaysFilter();
    if (!max && !maxDays) { container.style.display = ''; return; }

    const priceAttr = a.getAttribute('data-skeb-price');
    const daysAttr = a.getAttribute('data-skeb-days');

    // Price check
    if (max) {
      if (priceAttr === null || priceAttr === '') {
        container.style.display = getHideUnknown() ? 'none' : '';
        return;
      }
      if (Number(priceAttr) > max) { container.style.display = 'none'; return; }
    }

    // Average completion days check — artists with no completion data
    // (no finished requests yet) are always hidden when this filter is set
    if (maxDays) {
      if (daysAttr === null || daysAttr === '') {
        container.style.display = 'none';
        return;
      }
      if (Number(daysAttr) > maxDays) { container.style.display = 'none'; return; }
    }

    container.style.display = '';
  }

  function applyFilterAll() {
    document.querySelectorAll(`a[${PROCESSED_ATTR}]`).forEach(applyFilterToCard);
    updateFilterCount();
  }

  function updateFilterCount() {
    const label = document.querySelector('#skeb-price-filter-count');
    if (!label) return;
    const max = getMaxFilter();
    const maxDays = getMaxDaysFilter();
    if (!max && !maxDays) { label.textContent = ''; return; }
    const all = document.querySelectorAll(`a[${PROCESSED_ATTR}][data-skeb-price]`);
    let shown = 0;
    all.forEach(a => {
      if (max && Number(a.getAttribute('data-skeb-price')) > max) return;
      if (maxDays) {
        const d = a.getAttribute('data-skeb-days');
        if (d === null || d === '' || Number(d) > maxDays) return;
      }
      shown++;
    });
    label.textContent = `${shown}/${all.length} priced artists match`;
  }

  function injectFilterBar() {
    if (!isArtistListingPage()) return;
    if (document.querySelector('#skeb-price-filter-bar')) return;

    const host = document.querySelector('section.section .container, section.section, main');
    if (!host) return;

    // Same placement and controls as before, but built from Skeb's own
    // Bulma component classes so it matches the site's native look
    // (inputs, buttons, labels all inherit the site theme automatically)
    const bar = document.createElement('div');
    bar.id = 'skeb-price-filter-bar';
    bar.className = 'field is-grouped is-align-items-center is-justify-content-center';
    bar.style.cssText = 'flex-wrap: wrap; gap: 0.5rem; margin: 1.5rem 1.5rem 0; max-width: 100%; box-sizing: border-box; padding: 10px 0.75rem; background: #fff; border-radius: 5px; position: sticky; top: 0.5rem; z-index: 30; box-shadow: 0 2px 8px rgba(0,0,0,0.08);';


    const label = document.createElement('label');
    label.className = 'label is-small';
    label.textContent = 'Max price ¥';
    label.style.marginBottom = '0';

    const inputControl = document.createElement('div');
    inputControl.className = 'control';
    const input = document.createElement('input');
    input.className = 'input is-small';
    input.type = 'number';
    input.min = '0';
    input.step = '500';
    input.placeholder = 'e.g. 10000';
    input.value = localStorage.getItem(FILTER_KEY) || '';
    input.style.cssText = 'width: 110px; border-radius: 4px; background: #fff;';
    inputControl.appendChild(input);

    const daysLabel = document.createElement('label');
    daysLabel.className = 'label is-small';
    daysLabel.textContent = 'Max days';
    daysLabel.style.marginBottom = '0';

    const daysControl = document.createElement('div');
    daysControl.className = 'control';
    const daysInput = document.createElement('input');
    daysInput.className = 'input is-small';
    daysInput.type = 'number';
    daysInput.min = '0';
    daysInput.step = '1';
    daysInput.placeholder = 'e.g. 14';
    daysInput.title = 'Hide artists whose average completion time exceeds this many days';
    daysInput.value = localStorage.getItem(DAYS_FILTER_KEY) || '';
    daysInput.style.cssText = 'width: 80px; border-radius: 4px; background: #fff;';
    daysControl.appendChild(daysInput);

    const clearControl = document.createElement('div');
    clearControl.className = 'control';
    const clearBtn = document.createElement('button');
    clearBtn.className = 'button is-small';
    clearBtn.textContent = 'Clear';
    clearBtn.style.cssText = 'border-radius: 4px; background: #fff;';
    clearControl.appendChild(clearBtn);

    const hideUnknownLabel = document.createElement('label');
    hideUnknownLabel.className = 'checkbox is-size-7';
    hideUnknownLabel.style.cssText = 'display: flex; align-items: center; gap: 4px;';
    const hideUnknownCb = document.createElement('input');
    hideUnknownCb.type = 'checkbox';
    hideUnknownCb.checked = getHideUnknown();
    hideUnknownLabel.appendChild(hideUnknownCb);
    hideUnknownLabel.appendChild(document.createTextNode('Hide closed/unpriced'));

    const count = document.createElement('span');
    count.id = 'skeb-price-filter-count';
    count.className = 'is-size-7 has-text-grey';

    let inputDebounce = null;
    input.addEventListener('input', () => {
      clearTimeout(inputDebounce);
      inputDebounce = setTimeout(() => {
        const v = Number(input.value);
        if (v > 0) localStorage.setItem(FILTER_KEY, String(v));
        else localStorage.removeItem(FILTER_KEY);
        applyFilterAll();
      }, 250);
    });

    let daysDebounce = null;
    daysInput.addEventListener('input', () => {
      clearTimeout(daysDebounce);
      daysDebounce = setTimeout(() => {
        const v = Number(daysInput.value);
        if (v > 0) localStorage.setItem(DAYS_FILTER_KEY, String(v));
        else localStorage.removeItem(DAYS_FILTER_KEY);
        applyFilterAll();
      }, 250);
    });

    clearBtn.addEventListener('click', () => {
      input.value = '';
      daysInput.value = '';
      localStorage.removeItem(FILTER_KEY);
      localStorage.removeItem(DAYS_FILTER_KEY);
      applyFilterAll();
    });

    hideUnknownCb.addEventListener('change', () => {
      localStorage.setItem(FILTER_HIDE_UNKNOWN_KEY, hideUnknownCb.checked ? '1' : '0');
      applyFilterAll();
    });

    bar.appendChild(label);
    bar.appendChild(inputControl);
    bar.appendChild(daysLabel);
    bar.appendChild(daysControl);
    bar.appendChild(clearControl);
    bar.appendChild(hideUnknownLabel);
    bar.appendChild(count);

    host.insertAdjacentElement('afterbegin', bar);
  }

  // Shared stylesheet for the filter bar and settings menu
  function ensureStyles() {
    if (document.querySelector('#skeb-price-filter-style')) return;
      const style = document.createElement('style');
      style.id = 'skeb-price-filter-style';
      style.textContent = `
        #skeb-price-filter-bar,
        #skeb-price-filter-bar .label,
        #skeb-price-filter-bar .input,
        #skeb-price-filter-bar .button,
        #skeb-price-filter-bar .checkbox,
        #skeb-price-filter-bar #skeb-price-filter-count {
          font-size: 1rem !important;
        }
        #skeb-price-settings-menu,
        #skeb-price-settings-menu .label,
        #skeb-price-settings-menu .input,
        #skeb-price-settings-menu .button,
        #skeb-price-settings-menu p,
        #skeb-price-settings-menu span {
          font-size: 1rem !important;
        }
        /* Bulma adds its own margins between grouped controls; zero them so
           the flex gap is the single source of spacing */
        #skeb-price-filter-bar .control:not(:last-child),
        #skeb-price-filter-bar > * {
          margin-right: 0 !important;
          margin-bottom: 0 !important;
        }
        @media screen and (min-width: 1024px) {
          #skeb-price-filter-bar {
            margin-top: 3rem !important;
            margin-left: 3rem !important;
            margin-right: 3rem !important;
          }
        }
      `;
      document.head.appendChild(style);
  }

  // ================= Settings menu (cog in navbar) =================

  function injectSettingsMenu() {
    if (document.querySelector('#skeb-price-settings-btn')) return;

    // Skeb's navbar: place the cog inside the navbar container, at the end
    const navEnd = document.querySelector(
      '.navbar > .container, .navbar .container, .navbar .navbar-end, nav .navbar-end, .navbar'
    );
    if (!navEnd) return;

    const item = document.createElement('div');
    item.className = 'navbar-item';
    item.style.position = 'relative';

    const btn = document.createElement('button');
    btn.id = 'skeb-price-settings-btn';
    btn.title = 'Skeb price script settings';
    btn.style.cssText = `
      background: none; border: none; cursor: pointer; padding: 6px;
      line-height: 0; color: rgb(74, 74, 74); display: inline-flex; align-items: center;
    `;
    // Flat 2D gear icon, inherits currentColor
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="21.8833" height="21.8833" viewBox="0 0 24 24"
           fill="currentColor" aria-hidden="true">
        <path d="M19.14 12.94a7.07 7.07 0 0 0 .06-.94 7.07 7.07 0 0 0-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96a7.24 7.24 0 0 0-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.42h-3.84a.5.5 0 0 0-.5.42l-.36 2.54c-.58.24-1.12.55-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22L2.65 8.84a.5.5 0 0 0 .12.64l2.03 1.58a7.07 7.07 0 0 0 0 1.88l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.23.4.32.61.22l2.39-.96c.5.39 1.04.7 1.62.94l.36 2.54a.5.5 0 0 0 .5.42h3.84a.5.5 0 0 0 .5-.42l.36-2.54a7.24 7.24 0 0 0 1.62-.94l2.39.96c.21.1.48.01.61-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58zM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7z"/>
      </svg>
    `;

    const menu = document.createElement('div');
    menu.id = 'skeb-price-settings-menu';
    menu.style.cssText = `
      display: none; position: absolute; top: 100%; right: 0; z-index: 100;
      background: #fff; border: 1px solid rgba(128,128,128,0.3);
      border-radius: 5px; box-shadow: 0 4px 14px rgba(0,0,0,0.15);
      padding: 14px; width: 230px; color: #363636;
    `;

    function makeRow(labelText, value) {
      const row = document.createElement('div');
      row.style.cssText = 'margin-bottom: 10px;';
      const lbl = document.createElement('label');
      lbl.className = 'label is-small';
      lbl.textContent = labelText;
      lbl.style.marginBottom = '4px';
      const inp = document.createElement('input');
      inp.className = 'input is-small';
      inp.type = 'number';
      inp.min = '0';
      inp.step = '500';
      inp.value = value;
      inp.style.cssText = 'border-radius: 4px; background: #fff;';
      row.appendChild(lbl);
      row.appendChild(inp);
      return { row, inp };
    }

    const settings = getSettings();
    const cheapRow = makeRow('Cheap price \u00a5 (green at or below)', settings.cheap);
    const expensiveRow = makeRow('Expensive price \u00a5 (red at or above)', settings.expensive);

    const hint = document.createElement('p');
    hint.className = 'is-size-7 has-text-grey';
    hint.style.marginBottom = '10px';
    hint.textContent = 'Price tags fade green \u2192 red between these two values.';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'button is-small is-primary';
    saveBtn.textContent = 'Save';
    saveBtn.style.borderRadius = '4px';

    const status = document.createElement('span');
    status.className = 'is-size-7 has-text-grey';
    status.style.marginLeft = '8px';

    saveBtn.addEventListener('click', () => {
      let cheap = Number(cheapRow.inp.value);
      let expensive = Number(expensiveRow.inp.value);
      if (!(cheap > 0)) cheap = DEFAULT_SETTINGS.cheap;
      if (!(expensive > 0)) expensive = DEFAULT_SETTINGS.expensive;
      if (expensive <= cheap) {
        status.textContent = 'Expensive must be higher';
        return;
      }
      saveSettings({ cheap, expensive });
      recolorAllTags();
      status.textContent = 'Saved';
      setTimeout(() => { status.textContent = ''; }, 1500);
    });

    menu.appendChild(cheapRow.row);
    menu.appendChild(expensiveRow.row);
    menu.appendChild(hint);
    menu.appendChild(saveBtn);
    menu.appendChild(status);

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) menu.style.display = 'none';
    });

    item.appendChild(btn);
    item.appendChild(menu);

    // IMPORTANT: never insertBefore() into the Vue-managed navbar — it can
    // break Nuxt hydration and blank the page. Appending at the end is safe.
    try {
      navEnd.appendChild(item);
    } catch (e) {
      /* never let injection break the page */
    }
  }

  function injectSettingsMenuSafely() {
    // Wait until the app has hydrated before touching the navbar
    if (document.readyState !== 'complete') return;
    if (!document.querySelector('#__nuxt, #app, .navbar')) return;
    try { injectSettingsMenu(); } catch (e) { /* ignore */ }
  }

  // ================= Card processing =================

  function processCards() {
    const anchors = document.querySelectorAll(`a[href^="/@"]:not([${PROCESSED_ATTR}])`);
    for (const a of anchors) {
      const href = a.getAttribute('href');
      const m = href.match(USER_RE) || href.match(WORK_RE);
      if (!m) { a.setAttribute(PROCESSED_ATTR, '1'); continue; }
      if (!a.querySelector('img, .image, figure')) {
        a.setAttribute(PROCESSED_ATTR, '1');
        continue;
      }
      a.setAttribute(PROCESSED_ATTR, '1');

      // On a work detail page, the artist's avatar is a profile link with an
      // image and would be mistaken for a user card, producing a duplicate
      // tag. processWorkPage() handles the price there, so skip profile
      // links entirely on work pages.
      if (USER_RE.test(href) && WORK_RE.test(location.pathname)) continue;

      if (USER_RE.test(href) && CLOSED_RE.test(a.textContent)) {
        applyFilterToCard(a);
        continue;
      }

      const screenName = m[1];
      getInfo(screenName).then(info => {
        if (typeof info.p === 'number') {
          a.setAttribute('data-skeb-price', String(info.p));
          attachTag(a, info.p, info.d);
        }
        if (typeof info.d === 'number') {
          a.setAttribute('data-skeb-days', String(info.d));
        }
        applyFilterToCard(a);
        updateFilterCount();
      });

      applyFilterToCard(a);
    }
  }

  // ---- Work detail page ----
  function processWorkPage() {
    const m = location.pathname.match(WORK_RE);
    if (!m) return;
    if (document.querySelector('.skeb-price-work-page')) return;

    const screenName = m[1];

    // The artist's profile picture on the work page: an avatar image inside
    // a link to their profile
    const profileLink = document.querySelector(
      `main a[href="/@${CSS.escape(screenName)}"] img, section.section a[href="/@${CSS.escape(screenName)}"] img`
    );
    if (!profileLink) return;

    // The avatar's figure/.image wrapper (or the link itself)
    const avatarWrapper =
      profileLink.closest('figure, .image') ||
      profileLink.closest('a') ||
      profileLink.parentElement;

    getInfo(screenName).then(info => {
      const amount = info.p;
      if (typeof amount !== 'number') return;
      if (document.querySelector('.skeb-price-work-page')) return;

      const tag = makeTag(amount);
      tag.classList.add('skeb-price-work-page');
      tag.style.cssText += `
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        margin: 8px 0 0;
        font-size: 12px;
        padding: 1px 8px;
        white-space: nowrap;
        z-index: 5;
      `;

      // Position the tag just below the avatar without altering the row
      // layout — the avatar stays inline with the artist's name and handle
      if (getComputedStyle(avatarWrapper).position === 'static') {
        avatarWrapper.style.position = 'relative';
      }
      avatarWrapper.appendChild(tag);

      // Reserve space below the row so the floating tag doesn't overlap
      // the description text underneath
      const row = avatarWrapper.closest('.level') || avatarWrapper.parentElement;
      if (row) {
        const needed = tag.offsetHeight - 2; // tag drops 4px further now
        row.style.paddingBottom = `${Math.max(needed, 14)}px`;
      }
    });
  }

  // ---- Profile page: refresh this artist's cached price ----
  let lastRefreshedProfile = null;
  function refreshProfilePrice() {
    const screenName = profileScreenName();
    if (!screenName || screenName === lastRefreshedProfile) return;
    lastRefreshedProfile = screenName;
    // Force a fresh fetch — this is the ONLY place the cache gets updated
    getInfo(screenName, true);
  }

  // Pages where the script is fully disabled: no filter bar, no price tags,
  // no API calls
  const EXCLUDED_PATHS = [
    '/notifications', '/requests', '/account', '/sales',
    '/charges', '/points', '/lp/print', '/appeals',
  ];

  function isExcludedPage() {
    const p = location.pathname;
    return EXCLUDED_PATHS.some(base => p === base || p.startsWith(base + '/'));
  }

  function run() {
    ensureStyles();

    // The settings cog lives in the navbar on every page
    injectSettingsMenuSafely();

    // The filter bar persists across SPA navigation — remove it when leaving
    // listing pages so it doesn't linger on excluded/non-listing pages
    if (!isArtistListingPage()) {
      const staleBar = document.querySelector('#skeb-price-filter-bar');
      if (staleBar) staleBar.remove();
    }

    if (isExcludedPage()) return;

    if (isProfilePage()) {
      // No display on profile pages, but refresh the cache for this artist
      refreshProfilePrice();
      return;
    }
    lastRefreshedProfile = null;

    injectFilterBar();
    processCards();
    processWorkPage();
  }

  let resizeDebounce = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeDebounce);
    resizeDebounce = setTimeout(() => {
      document.querySelectorAll('.skeb-price-tag').forEach(t => {
        if (t.parentElement) fixWrappedTagMargins(t.parentElement);
      });
    }, 200);
  });

  let debounce = null;
  new MutationObserver(() => {
    clearTimeout(debounce);
    debounce = setTimeout(run, 400);
  }).observe(document.body, { childList: true, subtree: true });

  run();
})();
