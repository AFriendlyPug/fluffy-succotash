// ==UserScript==
// @name         Convert Twitter/X to fixvx.com
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Convert copied twitter.com and x.com links to fixvx.com
// @author       You
// @match        *://twitter.com/*
// @match        *://x.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    document.addEventListener('copy', function(e) {
        let text = window.getSelection().toString();
        const regex = /https?:\/\/(twitter\.com|x\.com)\/[a-zA-Z0-9_\-\/]+/g;
        if (regex.test(text)) {
            text = text.replace(regex, function(match) {
                return match.replace(/(twitter\.com|x\.com)/, 'fixvx.com');
            });
            e.clipboardData.setData('text/plain', text);
            e.preventDefault();
        }
    });
})();
