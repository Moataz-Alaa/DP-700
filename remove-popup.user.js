// ==UserScript==
// @name         Remove Annoying Popup
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Hides the annoying popup div from the page, even if it appears after a delay
// @author       You
// @match        https://www.examtopics.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hidePopup() {
        var popup = document.getElementById('notRemoverPopup');
        if (popup) {
            popup.style.display = 'none';
            popup.style.visibility = 'hidden';
        }
        // Restore scrolling if disabled
        if (document.body.style.overflow === 'hidden') {
            document.body.style.overflow = '';
        }
    }
    // Try immediately
    hidePopup();
    // Try again after DOM changes (for dynamic popups)
    const observer = new MutationObserver(hidePopup);
    observer.observe(document.body, { childList: true, subtree: true });
    // Also check every second as a backup
    setInterval(hidePopup, 1000);
})(); 