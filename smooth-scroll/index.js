import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

function smoothScroll(toBottom) {
  let direction = '-=100';
  if (toBottom) {
    direction = '+=100';
  }
  gsap.to(window, {
    scrollTo: {y: direction, autoKill: true},
    duration: 1,
  });
}

function touchstart(e) {
  startY = e.changedTouches[0].pageY;
}

function touchmove(e) {
  e.preventDefault();
  const moveY = e.changedTouches[0].pageY;
  if (moveY < startY) {
    smoothScroll(true);
  } else {
    smoothScroll(false);
  }
}
function mousemove(e) {
  e.preventDefault();
  if (0 < e.deltaY) {
    smoothScroll(true);
  } else {
    smoothScroll(false);
  }
}

let startY;

document.body.addEventListener('touchstart', touchstart, {passive: false});
document.body.addEventListener('touchmove', touchmove, {passive: false});
document.body.addEventListener('mousewheel', mousemove, {passive: false});
