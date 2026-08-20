document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (event) {
        var targetId = this.getAttribute("href");

        if (targetId.length <= 1) {
            return;
        }

        var target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});
