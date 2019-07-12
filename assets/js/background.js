(function () {
    "use strict";

    let options = localStorage.getItem("options");
    if (options !== null) options = JSON.parse(options);

    const createProperties = {
        title: "Search YouTube for \"%s\"",
        contexts: ["selection"],
        onclick: (info, tab) => {
            let url = new URL("https://www.youtube.com");
            url.pathname = "/results";
            url.search = new URLSearchParams({
                "search_query": info.selectionText.trim()
            });

            browser.tabs.create({
                url: url.toString(),
                active: options === null ? true : options.foreground
            });
        }
    };

    browser.menus.create(createProperties, () => {
        if (browser.runtime.lastError) console.error(browser.runtime.lastError.message);
    });
})();
