// Minimal JS for nav toggle and theme
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const themeToggle = document.getElementById('themeToggle');

navToggle && navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('show');
});

// Theme: remember in localStorage
function setTheme(isLight){
  if(isLight){
    document.documentElement.classList.add('light');
    themeToggle.textContent = '🌞';
    themeToggle.setAttribute('aria-pressed','true');
  } else {
    document.documentElement.classList.remove('light');
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed','false');
  }
}

themeToggle && themeToggle.addEventListener('click', () => {
  const isLight = document.documentElement.classList.toggle('light');
  setTheme(isLight);
  localStorage.setItem('themeLight', isLight ? '1' : '0');
});

// Initialize
(function(){
  const year = document.getElementById('year');
  year && (year.textContent = new Date().getFullYear());

  const stored = localStorage.getItem('themeLight');
  if(stored !== null){
    setTheme(stored === '1');
  }
})();



