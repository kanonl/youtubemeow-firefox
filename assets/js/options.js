(function () {
    "use strict";

    let options = localStorage.getItem("options");

    if (options !== null) {
        options = JSON.parse(options);
        document.querySelector("#foreground").checked = options.foreground;
    }

    document.querySelector("#foreground").addEventListener("click", event => {
        localStorage.setItem("options", JSON.stringify({
            foreground: event.target.checked
        }));
        browser.runtime.reload();
    });
})();
