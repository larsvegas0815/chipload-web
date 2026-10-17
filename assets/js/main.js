(function () {
  function detectOS() {
    var p = (navigator.userAgentData && navigator.userAgentData.platform) || navigator.platform || "";
    var ua = navigator.userAgent || "";
    if (/iPhone|iPad|iPod|Android/i.test(ua)) return null;
    if (/Win/i.test(p) || /Windows/i.test(ua)) return "windows";
    if (/Mac/i.test(p) || /Mac OS X/i.test(ua)) return "macos";
    if (/Linux/i.test(p) || /Linux/i.test(ua)) return "linux";
    return null;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var os = detectOS();
    var names = { windows: "Windows", macos: "macOS", linux: "Linux" };

    var hero = document.getElementById("hero-download");
    if (hero && os && hero.dataset[os]) {
      hero.href = hero.dataset[os];
      hero.textContent = hero.dataset.labelFor + " " + names[os];
    }

    var card = os && document.querySelector('.dl-card[data-os="' + os + '"]');
    if (card && !card.classList.contains("dl-card-soon")) card.classList.add("is-current");

    document.querySelectorAll("a.zoom").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var box = document.createElement("div");
        box.className = "lightbox";
        var img = document.createElement("img");
        img.src = a.href;
        img.alt = a.querySelector("img").alt;
        box.appendChild(img);
        function close() { box.remove(); document.removeEventListener("keydown", onKey); }
        function onKey(ev) { if (ev.key === "Escape") close(); }
        box.addEventListener("click", close);
        document.addEventListener("keydown", onKey);
        document.body.appendChild(box);
      });
    });
  });
})();
