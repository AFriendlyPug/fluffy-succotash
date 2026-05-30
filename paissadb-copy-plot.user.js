// ==UserScript==
// @name         PaissaDB Copy Plot Command
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds a copy button to each row to copy /li district ward plot to clipboard
// @author       You
// @match        *://paissadb.zhu.codes/*
// @match        *://zhu.codes/*
// @grant        GM_setClipboard
// ==/UserScript==
(function () {
    'use strict';
    let busy = false;
    function addCopyButtons() {
        if (busy) return;
        busy = true;
        const table = document.querySelector('table.table.is-striped.is-fullwidth');
        if (!table) { busy = false; return; }
        const thead = table.querySelector('thead tr');
        const tbody = table.querySelector('tbody');
        if (!thead || !tbody) { busy = false; return; }
        if (!thead.querySelector('th[data-paissa-copy]')) {
            const th = document.createElement('th');
            th.setAttribute('data-paissa-copy', '1');
            th.textContent = '📋';
            thead.insertBefore(th, thead.firstChild);
        }
        tbody.querySelectorAll('tr').forEach(row => {
            if (row.querySelector('td[data-paissa-copy]')) return;
            const cells = row.querySelectorAll('td');
            if (cells.length < 3) return;
            const district = cells[0].textContent.trim();
            const ward = cells[1].textContent.trim().replace(/[^0-9]/g, '');
            const plot = cells[2].textContent.trim().replace(/[^0-9]/g, '');
            const command = `/li ${district} ${ward} ${plot}`;
            const td = document.createElement('td');
            td.setAttribute('data-paissa-copy', '1');
            const btn = document.createElement('button');
            btn.className = 'button is-small is-info';
            btn.textContent = '📋';
            btn.title = command;
            btn.addEventListener('click', () => {
                try {
                    GM_setClipboard(command);
                } catch (e) {
                    navigator.clipboard.writeText(command).catch(() => {});
                }
                btn.textContent = '✓';
                btn.classList.replace('is-info', 'is-success');
                setTimeout(() => {
                    btn.textContent = '📋';
                    btn.classList.replace('is-success', 'is-info');
                }, 1500);
            });
            td.appendChild(btn);
            row.insertBefore(td, row.firstChild);
        });
        busy = false;
    }
    const observer = new MutationObserver(() => {
        requestAnimationFrame(addCopyButtons);
    });
    observer.observe(document.body, { childList: true, subtree: true });
    addCopyButtons();
})();
