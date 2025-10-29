/* Theme toggle + sync across pages + year insertion */
(function(){
  const THEME_KEY = 'tarun_theme';
  const defaultTheme = localStorage.getItem(THEME_KEY) || 'dark';

  function applyTheme(theme){
    if(theme === 'light'){
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme(){
    const current = localStorage.getItem(THEME_KEY) || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // Attach theme toggle buttons (there are a few on different pages)
  document.addEventListener('DOMContentLoaded', function(){
    // Set initial theme
    applyTheme(defaultTheme);

    // wire up any theme toggle buttons
    document.querySelectorAll('#theme-toggle, #theme-toggle-edu, #theme-toggle-proj, #theme-toggle-skill, #theme-toggle-cert, #theme-toggle-contact')
      .forEach(btn => btn.addEventListener('click', toggleTheme));

    // Fill current year in footers
    const year = new Date().getFullYear();
    document.querySelectorAll('#year, #year-edu, #year-proj, #year-skill, #year-cert, #year-contact')
      .forEach(el => { if(el) el.textContent = year });

    // Make nav show active link based on URL
    const path = location.pathname.split('/').pop();
    document.querySelectorAll('.nav a').forEach(a => {
      if(a.getAttribute('href') === path || (path === '' && a.getAttribute('href') === 'index.html')){
        a.classList.add('active');
      }
    });
  });
})();
