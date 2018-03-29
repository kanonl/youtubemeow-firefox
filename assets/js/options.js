(function () {
    "use strict";

    let foreground = localStorage.getItem("foreground");

    if (foreground != null) {
        document.querySelector("#foreground").checked = (foreground == "true");
    }

    document.querySelector("#foreground").addEventListener("click", event => {
        localStorage.setItem("foreground", event.target.checked);
    });
})();
