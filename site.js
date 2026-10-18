(() => {
  function setLanguage(lang, persist = false) {
    document.body.setAttribute('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    const toggle = document.querySelector('.lang-toggle');
    if (toggle) toggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Chinese' : '切换到英文');
    if (persist) {
      try { localStorage.setItem('lang', lang); } catch (_) {}
    }
  }
  let saved = 'en';
  try { saved = localStorage.getItem('lang') === 'zh' ? 'zh' : 'en'; } catch (_) {}
  setLanguage(saved);
  document.querySelector('.lang-toggle')?.addEventListener('click', () => {
    setLanguage(document.body.getAttribute('lang') === 'en' ? 'zh' : 'en', true);
  });
})();
