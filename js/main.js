//Popout Menu
const menu = document.getElementById('menu');
const navLinks = document.getElementsByClassName('popout-nav-link');

let showNav = () => {
  const nav = document.getElementById('popout-nav');
  nav.classList.add('is-active');
}

let hideNav = () => {
  const nav = document.getElementById('popout-nav');
  nav.classList.remove('is-active');
}

let addListeners = elements => {
  for (let i=0; i<elements.length; i++) {
    elements[i].addEventListener('click', hideNav, false);
  }
};

menu.addEventListener('click', showNav, false);
addListeners(navLinks);
