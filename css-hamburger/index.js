const hamburgerDom = document.querySelector('.hamburger');
const navMenuDom = document.querySelector('.nav-menu');
const navLinkDomList = [...document.querySelectorAll('.nav-link')];

hamburgerDom.addEventListener('click', mobileMenu);
for (let index = 0; index < navLinkDomList.length; index++) {
  const navLinkDom = navLinkDomList[index];
  navLinkDom.addEventListener('click', closeMenu);
}

function mobileMenu() {
  hamburgerDom.classList.toggle('active');
  navMenuDom.classList.toggle('active');
}

function closeMenu() {
  hamburgerDom.classList.remove('active');
  navMenuDom.classList.remove('active');
}
