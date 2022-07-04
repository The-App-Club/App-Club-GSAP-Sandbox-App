import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

// https://www.to-r.net/media/scrolltrigger/
gsap.to('.sidebar', {
  scrollTrigger: {
    trigger: '.sidebar',
    start: 'top top',
    end: 'bottom bottom',
    endTrigger: 'footer',
    pin: true,
  },
});

const togglerDom = document.querySelector('.theme-change-toggler');
const body = document.body;

togglerDom.addEventListener('change', function () {
  if (togglerDom.checked === true) {
    body.style.setProperty('--bg', 'var(--dark)');
    body.style.setProperty('--text', 'var(--light)');
  } else {
    body.style.setProperty('--bg', 'var(--light)');
    body.style.setProperty('--text', 'var(--dark)');
  }
});
