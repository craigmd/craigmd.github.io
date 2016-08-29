//Popout Menu
const menu = document.getElementById('menu');
const exitButton = document.getElementById('exit');

let showNav = () => {
  const nav = document.getElementById('popout-nav');
  nav.classList.add('is-active');
}

let hideNav = () => {
  const nav = document.getElementById('popout-nav');
  nav.classList.remove('is-active');
}

menu.addEventListener('click', showNav, false);
exitButton.addEventListener('click', hideNav, false);
