// ==UserScript==
// @name         FFXIV Lodestone JP → NA Redirect
// @namespace    https://finalfantasyxiv.com/
// @version      1.0.0
// @description  Redirects jp.finalfantasyxiv.com/lodestone to na.finalfantasyxiv.com/lodestone
// @author       Pug
// @match        https://jp.finalfantasyxiv.com/lodestone*
// @icon         https://ffxiv.consolegameswiki.com/mediawiki/images/thumb/3/30/Aetheryte_%28map_icon%29.png/48px-Aetheryte_%28map_icon%29.png
// @run-at       document-start
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    const currentURL = window.location.href;
    const redirectURL = currentURL.replace(
        'https://jp.finalfantasyxiv.com/lodestone',
        'https://na.finalfantasyxiv.com/lodestone'
    );
    if (currentURL !== redirectURL) {
        window.location.replace(redirectURL);
    }
})();
