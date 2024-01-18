// ==UserScript==
// @name         🐭️ MouseHunt - No Footer
// @version      1.1.0
// @description  Hides the footer.
// @license      MIT
// @author       bradp
// @namespace    bradp
// @match        https://www.mousehuntgame.com/*
// @icon         https://i.mouse.rip/mouse.png
// @grant        none
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/script-migration@1.1.1
// ==/UserScript==

((function () {
  'use strict';

  const addStyles = document.createElement('style');
  addStyles.innerHTML = '.pageFrameView-footer, .mousehuntFooter { display: none; }';
  document.head.appendChild(addStyles);

  migrateUserscript('🐭️ MouseHunt - No Footer', 'https://greasyfork.org/en/users/921385-bradp');
})());
