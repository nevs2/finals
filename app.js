const toggle = document.getElementById('navbarToggle');
const links = document.getElementById('navbarLinks');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('active');
});
