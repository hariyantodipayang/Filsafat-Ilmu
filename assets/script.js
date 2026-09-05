// Top-level tab switcher (Alur RPS / Peta Alur) — only present on index.html.
(function () {
  var tabBtns = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      var target = btn.getAttribute('data-tab');
      panels.forEach(function (p) { p.hidden = (p.getAttribute('data-panel') !== target); });
    });
  });
})();

// Era filter — only present on index.html; no-ops safely on detail pages.
(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var eras = document.querySelectorAll('.era');
  if (!buttons.length || !eras.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var f = btn.getAttribute('data-filter');
      eras.forEach(function (era) {
        era.style.display = (f === 'all' || era.getAttribute('data-era') === f) ? '' : 'none';
      });
    });
  });
})();
