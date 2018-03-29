(function () {
    "use strict";

    const menuItemId = browser.runtime.id;

    const contextMenus = () => {
        let createProperties = {
            id: menuItemId,
            title: "Search YouTube for \"%s\"",
            contexts: ["selection"]
        };

        browser.menus.create(createProperties, () => {
            if (browser.runtime.lastError) console.error(browser.runtime.lastError.message);
        });
    };

    browser.runtime.onInstalled.addListener(event => contextMenus());

    browser.runtime.onStartup.addListener(event => contextMenus());

    browser.menus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === menuItemId) {
            let url = new URL("https://www.youtube.com");
            url.pathname = "/results";
            url.search = new URLSearchParams({
                "search_query": info.selectionText
            });

            browser.tabs.create({
                url: url.toString()
            });
        }
    });
})();
