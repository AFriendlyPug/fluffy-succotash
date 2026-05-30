// ==UserScript==
// @name         Convert Twitter/X to fixvx.com
// @namespace    http://tampermonkey.net/
// @version      2
// @description  Convert copied twitter.com and x.com links to fixvx.com, and add a copy button replacing the share button on each tweet
// @author       You
// @match        *://twitter.com/*
// @match        *://x.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // ── 1. Intercept manual copy selections ──────────────────────────────────
    document.addEventListener('copy', function (e) {
        let text = window.getSelection().toString();
        const regex = /https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_\-\/]+/g;
        if (regex.test(text)) {
            text = text.replace(regex, function (match) {
                return match.replace(/(twitter\.com|x\.com)/, 'fixvx.com');
            });
            e.clipboardData.setData('text/plain', text);
            e.preventDefault();
        }
    });

    // ── 2. Helper: build a fixvx URL from the tweet's permalink ─────────────
    function getFixvxUrl(article) {
        const a = article.querySelector('a[href*="/status/"]');
        if (!a) return null;
        const href = a.getAttribute('href'); // e.g. /username/status/123
        return 'https://fixvx.com' + href;
    }

    // ── 3. Build the copy button (styled to blend with X's share button) ─────
    function createCopyBtn(fixUrl) {
        const btn = document.createElement('button');
        btn.className = 'fixvx-copy-btn';
        btn.title = 'Copy fixvx link';
        btn.setAttribute('aria-label', 'Copy fixvx link');
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="1.25em" height="1.25em" fill="currentColor" aria-hidden="true">
                <path d="M15 3H7C5.9 3 5 3.9 5 5v12h2V5h8V3zm3 4h-8C8.9 7 8 7.9 8 9v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 14h-8V9h8v12z"/>
            </svg>
        `;

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            // Use GM_setClipboard (granted above) for reliable clipboard access
            navigator.clipboard.writeText(fixUrl);

            // Brief visual feedback
            btn.classList.add('fixvx-copied');
            btn.title = 'Copied!';
            btn.innerHTML = `
                <svg viewBox="0 0 24 24" width="1.25em" height="1.25em" fill="currentColor" aria-hidden="true">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
            `;
            setTimeout(() => {
                btn.classList.remove('fixvx-copied');
                btn.title = 'Copy fixvx link';
                btn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="1.25em" height="1.25em" fill="currentColor" aria-hidden="true">
                        <path d="M15 3H7C5.9 3 5 3.9 5 5v12h2V5h8V3zm3 4h-8C8.9 7 8 7.9 8 9v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 14h-8V9h8v12z"/>
                    </svg>
                `;
            }, 1800);
        });

        return btn;
    }

    // ── 4. Inject styles ─────────────────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        .fixvx-copy-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            border-radius: 9999px;
            color: rgb(113, 118, 123);
            transition: background 0.15s, color 0.15s;
            flex-shrink: 0;
        }
        .fixvx-copy-btn:hover {
            background: rgba(29, 155, 240, 0.1);
            color: rgb(29, 155, 240);
        }
        .fixvx-copy-btn.fixvx-copied {
            color: rgb(0, 186, 124);
        }
        .fixvx-copy-btn.fixvx-copied:hover {
            background: rgba(0, 186, 124, 0.1);
            color: rgb(0, 186, 124);
        }
    `;
    document.head.appendChild(style);

    // ── 5. Inject button into a tweet's action bar ───────────────────────────
    function injectButton(article) {
        if (article.dataset.fixvxDone) return;

        const fixUrl = getFixvxUrl(article);
        if (!fixUrl) return;

        // X renders the share button as the last item in the action bar group
        // It sits inside a <div role="group"> alongside like/retweet/etc.
        const actionBar = article.querySelector('[role="group"]');
        if (!actionBar) return;

        // Find the share button (aria-label contains "Share") and replace it
        const shareBtn = actionBar.querySelector('[aria-label*="Share"], [data-testid="share"]');

        const copyBtn = createCopyBtn(fixUrl);

        if (shareBtn) {
            // Replace the share button's wrapper with our button
            const wrapper = shareBtn.closest('div:not([role="group"])') || shareBtn.parentElement;
            wrapper.replaceWith(copyBtn);
        } else {
            // Fallback: append at the end of the action bar
            actionBar.appendChild(copyBtn);
        }

        article.dataset.fixvxDone = '1';
    }

    // ── 6. Observe DOM for new tweets (infinite scroll) ──────────────────────
    const observer = new MutationObserver(() => {
        document.querySelectorAll('article[data-testid="tweet"]:not([data-fixvx-done])').forEach(injectButton);
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Run once on initial load too
    document.querySelectorAll('article[data-testid="tweet"]').forEach(injectButton);
})();
