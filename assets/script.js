// Top-level tab switcher (Alur RPS / Peta Alur / Bedah Buku) — only present on index.html.
// Supports #hash deep-linking so pages can link straight into a specific tab.
(function () {
  var tabBtns = document.querySelectorAll('.tab-btn');
  var panels = document.querySelectorAll('.tab-panel');
  if (!tabBtns.length || !panels.length) return;

  function activate(target, updateHash) {
    tabBtns.forEach(function (b) {
      var match = b.getAttribute('data-tab') === target;
      b.classList.toggle('active', match);
      b.setAttribute('aria-selected', match ? 'true' : 'false');
    });
    panels.forEach(function (p) { p.hidden = (p.getAttribute('data-panel') !== target); });
    if (updateHash && history.replaceState) { history.replaceState(null, '', '#' + target); }
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { activate(btn.getAttribute('data-tab'), true); });
  });

  var initial = (location.hash || '').replace('#', '');
  var isValid = Array.prototype.some.call(tabBtns, function (b) { return b.getAttribute('data-tab') === initial; });
  if (isValid) activate(initial, false);
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
