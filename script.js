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

// Contact form handler (no network)
function handleContactSubmit(e){
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if(!name || !email || !message){
    alert('Please complete all fields');
    return;
  }
  // Provide user feedback — user can copy details or use configured backend
  alert('Thanks ' + name + '! This form is a demo. Configure a form backend to receive messages.');
  form.reset();
}
