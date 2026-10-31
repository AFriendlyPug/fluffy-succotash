// ==UserScript==
// @name         Gelbooru Gallery Plus
// @namespace    local.gelbooru.galleryplus
// @version      1.5.0
// @description  Danbooru-style thumbnail size control for Gelbooru galleries, plus a copy-full-size-image button under each thumbnail
// @match        https://gelbooru.com/index.php*
// @match        https://www.gelbooru.com/index.php*
// @run-at       document-idle
// @grant        GM_xmlhttpRequest
// @grant        GM_setClipboard
// @grant        unsafeWindow
// @connect      gelbooru.com
// @connect      *.gelbooru.com
// ==/UserScript==

(function () {
  'use strict';

  const STORAGE_KEY = 'gb_thumb_size';
  const DEFAULT_SIZE = 180;
  const MIN = 90;
  const MAX = 700;
  const PRESETS = { Small: 130, Medium: 180, Large: 260, XL: 380, XXL: 550 };
  // Above this size, swap the small thumbnail for the larger "sample" image
  const SAMPLE_THRESHOLD = 240;

  const articles = () => Array.from(document.querySelectorAll('article.thumbnail-preview'));
  const first = articles()[0];
  if (!first) {
    console.log('[gb-thumbsize] no article.thumbnail-preview found on this page');
    return;
  }
  const container = first.parentElement;

  const clamp = (n) => Math.min(MAX, Math.max(MIN, n));
  const load = () => {
    try {
      const v = parseInt(localStorage.getItem(STORAGE_KEY), 10);
      return Number.isFinite(v) ? clamp(v) : DEFAULT_SIZE;
    } catch (e) { return DEFAULT_SIZE; }
  };
  const save = (v) => { try { localStorage.setItem(STORAGE_KEY, String(v)); } catch (e) {} };

  const imp = (el, props) => {
    for (const k in props) el.style.setProperty(k, props[k], 'important');
  };

  // --- Styles (bar only; sizing is applied inline so nothing can override it) ---
  const style = document.createElement('style');
  style.textContent = `
    #gb-thumb-controls {
      display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
      margin: 6px 4px 10px; font-size: 13px;
    }
    #gb-thumb-controls button {
      cursor: pointer; padding: 2px 8px; border: 1px solid #888;
      border-radius: 3px; background: transparent; color: inherit;
    }
    #gb-thumb-controls button.active { font-weight: bold; border-color: #0773fb; color: #0773fb; }
    #gb-thumb-controls input[type=range] { width: 200px; }
    #gb-thumb-controls .gb-val { min-width: 48px; opacity: .8; }

    .gb-cell {
      display: flex !important; flex-direction: column !important;
      align-items: stretch !important; flex: 0 0 auto !important; margin: 4px !important;
    }
    .gb-copy {
      margin: 4px 0 0 !important; padding: 3px 6px !important;
      font-size: 12px !important; line-height: 1.3 !important; cursor: pointer;
      border: 1px solid #888 !important; border-radius: 3px !important;
      background: transparent !important; color: inherit !important;
    }
    .gb-copy:hover { border-color: #0773fb !important; color: #0773fb !important; }
    .gb-copy.gb-ok { border-color: #2a9d4b !important; color: #2a9d4b !important; }
    .gb-copy.gb-err { border-color: #d33 !important; color: #d33 !important; }
  `;
  document.head.appendChild(style);

  imp(container, {
    display: 'flex',
    'flex-wrap': 'wrap',
    'align-items': 'flex-start',
    'max-width': 'none',
    width: 'auto',
  });

  // --- Controls ---
  const bar = document.createElement('div');
  bar.id = 'gb-thumb-controls';
  const label = document.createElement('span');
  label.textContent = 'Thumbnail size:';
  bar.appendChild(label);

  const buttons = {};
  Object.entries(PRESETS).forEach(([name, px]) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = name;
    b.addEventListener('click', () => apply(px));
    buttons[name] = b;
    bar.appendChild(b);
  });

  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = MIN; slider.max = MAX; slider.step = 5;
  slider.addEventListener('input', () => apply(parseInt(slider.value, 10)));
  bar.appendChild(slider);

  const val = document.createElement('span');
  val.className = 'gb-val';
  bar.appendChild(val);

  container.parentNode.insertBefore(bar, container);

  // --- Copy full-size image button -------------------------------------------
  // The gallery page only knows the thumbnail; the full file URL (and its extension)
  // is on the post page, so we look it up there on first click and cache it.
  const fullUrlCache = new Map();

  function postId(art) {
    const a = art.querySelector('a');
    const m = a && (a.href.match(/[?&]id=(\d+)/) || (a.id || '').match(/p(\d+)/));
    return m && m[1];
  }

  function md5Of(art) {
    const img = art.querySelector('img');
    const src = (img && (img.dataset.gbThumb || img.getAttribute('src'))) || '';
    const m = src.match(/[0-9a-f]{32}/i);
    return m && m[0].toLowerCase();
  }

  async function getFullUrl(art) {
    const id = postId(art);
    if (!id) throw new Error('no post id');
    if (fullUrlCache.has(id)) return fullUrlCache.get(id);

    const res = await fetch(`${location.origin}/index.php?page=post&s=view&id=${id}`, { credentials: 'same-origin' });
    if (!res.ok) throw new Error('post page HTTP ' + res.status);
    const html = await res.text();
    const md5 = md5Of(art);

    let url = null;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const link = doc.querySelector('#original-file-link');
    const href = link && link.getAttribute('href');
    if (href && /\/images\//.test(href)) url = new URL(href, location.href).href;

    if (!url && md5) {
      const re = new RegExp('(?:https?:)?//[^"\'\\s<>]+/images/[0-9a-f]{2}/[0-9a-f]{2}/' + md5 + '\\.[a-z0-9]+', 'i');
      const m = html.match(re);
      if (m) url = new URL(m[0], location.href).href;
    }
    if (!url) throw new Error('full-size URL not found');
    fullUrlCache.set(id, url);
    return url;
  }

  function fetchBlob(url) {
    return new Promise((resolve, reject) => {
      if (typeof GM_xmlhttpRequest === 'function') {
        GM_xmlhttpRequest({
          method: 'GET', url, responseType: 'blob',
          headers: { Referer: location.origin + '/' },
          onload: (r) => (r.status >= 200 && r.status < 300 ? resolve(r.response) : reject(new Error('image HTTP ' + r.status))),
          onerror: () => reject(new Error('network error')),
          ontimeout: () => reject(new Error('timeout')),
        });
      } else {
        fetch(url).then((r) => {
          if (!r.ok) throw new Error('image HTTP ' + r.status);
          return r.blob();
        }).then(resolve, reject);
      }
    });
  }

  // The clipboard only reliably accepts PNG for images, so convert whatever we got.
  async function toPng(blob) {
    if (blob.type === 'image/png') return blob;
    const bmp = await createImageBitmap(blob);
    const canvas = document.createElement('canvas');
    canvas.width = bmp.width;
    canvas.height = bmp.height;
    canvas.getContext('2d').drawImage(bmp, 0, 0);
    return new Promise((res, rej) => canvas.toBlob((b) => (b ? res(b) : rej(new Error('PNG encode failed'))), 'image/png'));
  }

  function copyTextFallback(text) {
    if (typeof GM_setClipboard === 'function') { GM_setClipboard(text, 'text'); return Promise.resolve(); }
    return navigator.clipboard.writeText(text);
  }

  function flash(btn, text, cls, ms) {
    btn.textContent = text;
    btn.classList.remove('gb-ok', 'gb-err');
    if (cls) btn.classList.add(cls);
    clearTimeout(btn._t);
    btn._t = setTimeout(() => {
      btn.textContent = btn.dataset.label;
      btn.classList.remove('gb-ok', 'gb-err');
    }, ms || 2000);
  }

  function onCopyClick(art, btn, ev) {
    const urlOnly = ev.shiftKey;
    flash(btn, 'Working\u2026', null, 60000);
    let fullUrl = null;

    // ClipboardItem takes a promise, so the write starts inside the click (keeps the
    // user-gesture permission) while the lookup + download happen afterwards.
    let item;
    try {
      if (urlOnly) {
        item = new ClipboardItem({
          'text/plain': getFullUrl(art).then((u) => { fullUrl = u; return new Blob([u], { type: 'text/plain' }); }),
        });
      } else {
        item = new ClipboardItem({
          'image/png': (async () => {
            fullUrl = await getFullUrl(art);
            if (/\.(mp4|webm|mov|mkv)(\?|$)/i.test(fullUrl)) throw new Error('video');
            return toPng(await fetchBlob(fullUrl));
          })(),
        });
      }
    } catch (e) {
      item = null;
    }

    const done = item
      ? navigator.clipboard.write([item])
      : Promise.reject(new Error('clipboard API unavailable'));

    done.then(
      () => flash(btn, urlOnly ? 'URL copied \u2713' : 'Copied \u2713', 'gb-ok'),
      (err) => {
        console.warn('[gb-thumbsize] copy failed:', err);
        if (fullUrl && !urlOnly) {
          // Couldn't put the image itself on the clipboard (video, blocked, too big...): copy the link
          copyTextFallback(fullUrl).then(
            () => flash(btn, 'Copied URL instead', 'gb-ok', 2500),
            () => flash(btn, 'Failed', 'gb-err', 2500)
          );
        } else {
          flash(btn, 'Failed', 'gb-err', 2500);
        }
      }
    );
  }

  function addButton(art) {
    if (art.parentElement && art.parentElement.classList.contains('gb-cell')) return;
    const cell = document.createElement('div');
    cell.className = 'gb-cell';
    art.parentNode.insertBefore(cell, art);
    cell.appendChild(art);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'gb-copy';
    btn.dataset.label = 'Copy full image';
    btn.textContent = btn.dataset.label;
    btn.title = 'Copy the full-size image (Shift+click copies its URL instead)';
    btn.addEventListener('click', (ev) => { ev.preventDefault(); ev.stopPropagation(); onCopyClick(art, btn, ev); });
    cell.appendChild(btn);
  }

  articles().forEach(addButton);

  // --- Sizing ---
  function toSample(src) {
    // .../thumbnails/ab/cd/thumbnail_<md5>.jpg -> .../samples/ab/cd/sample_<md5>.jpg
    return src.replace('/thumbnails/', '/samples/').replace('/thumbnail_', '/sample_');
  }

  // Something on the page (a user stylesheet / extension) forces thumbnail width/height
  // back to 250px even against inline !important. So instead of fighting over width,
  // keep every box at 250px and scale the whole article with CSS zoom.
  const BASE = 250;
  const ZOOM_OK = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('zoom', '2');

  function sizeArticle(art, px) {
    const s = (ZOOM_OK ? BASE : px) + 'px';
    imp(art, {
      width: s, height: s,
      zoom: ZOOM_OK ? String(px / BASE) : '1',
      'min-width': '0', 'max-width': 'none', 'min-height': '0', 'max-height': 'none',
      margin: '0', padding: '0', float: 'none', overflow: 'hidden',
      flex: '0 0 auto', 'box-sizing': 'border-box',
      display: 'flex', 'align-items': 'center', 'justify-content': 'center',
    });

    art.querySelectorAll('*').forEach((el) => {
      const common = {
        width: '100%', height: '100%',
        'min-width': '0', 'min-height': '0', 'max-width': 'none', 'max-height': 'none',
      };
      if (el.tagName === 'IMG') {
        imp(el, Object.assign({ 'object-fit': 'contain', display: 'block' }, common));
      } else {
        imp(el, Object.assign({
          display: 'flex', 'align-items': 'center', 'justify-content': 'center',
        }, common));
      }
    });

    // Swap to larger image when going past the native thumbnail resolution
    const img = art.querySelector('img');
    if (!img) return;
    if (!img.dataset.gbThumb) img.dataset.gbThumb = img.getAttribute('src') || '';
    const thumb = img.dataset.gbThumb;

    if (px > SAMPLE_THRESHOLD && thumb.includes('/thumbnails/') && !img.dataset.gbNoSample) {
      if (img.getAttribute('src') !== toSample(thumb)) {
        img.onerror = () => {           // no sample exists (small original) -> back to thumbnail
          img.dataset.gbNoSample = '1';
          img.onerror = null;
          img.src = thumb;
        };
        img.src = toSample(thumb);
      }
    } else if (px <= SAMPLE_THRESHOLD && img.getAttribute('src') !== thumb) {
      img.src = thumb;
    }
  }

  function apply(px) {
    px = clamp(px);
    slider.value = px;
    val.textContent = px + 'px';
    Object.entries(PRESETS).forEach(([name, size]) => {
      buttons[name].classList.toggle('active', size === px);
    });
    articles().forEach((a) => sizeArticle(a, px));
    save(px);
  }

  // Diagnostic: set a big size, then run gbThumbDebug() in the browser console
  (typeof unsafeWindow !== 'undefined' ? unsafeWindow : window).gbThumbDebug = function () {
    const art = articles()[0];
    const img = art && art.querySelector('img');
    const want = parseInt(slider.value, 10);
    console.log('[gb-thumbsize] requested size:', want, 'px');
    let el = img;
    while (el && el !== document.documentElement) {
      const cs = getComputedStyle(el);
      console.log(
        el.tagName + (el.className ? '.' + String(el.className).split(' ').join('.') : '') +
        (el.id ? '#' + el.id : ''),
        '| rendered:', Math.round(el.getBoundingClientRect().width) + 'x' + Math.round(el.getBoundingClientRect().height),
        '| width:', cs.width, '| max-width:', cs.maxWidth, '| display:', cs.display,
        '| overflow:', cs.overflow, '| transform:', cs.transform, '| zoom:', cs.zoom
      );
      el = el.parentElement;
    }
    if (img) console.log('[gb-thumbsize] img src:', img.currentSrc, '| natural:', img.naturalWidth + 'x' + img.naturalHeight);
  };

  apply(load());
})();