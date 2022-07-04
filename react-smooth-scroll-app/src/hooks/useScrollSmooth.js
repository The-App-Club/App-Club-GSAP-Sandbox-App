import {useEffect, useRef, useCallback} from 'react';

import gsap from 'gsap';
import {ScrollTrigger, ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// https://developer.mozilla.org/ja/docs/Web/API/EventTarget/addEventListener#%E3%83%91%E3%83%83%E3%82%B7%E3%83%96%E3%83%AA%E3%82%B9%E3%83%8A%E3%83%BC%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%81%AE%E6%80%A7%E8%83%BD%E6%94%B9%E5%96%84
const useScrollSmooth = () => {
  let startY = useRef(0);
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

  const touchstart = useCallback((e) => {
    startY.current = e.changedTouches[0].pageY;
  }, []);

  const touchmove = useCallback((e) => {
    e.preventDefault();
    const moveY = e.changedTouches[0].pageY;
    if (moveY < startY.current) {
      smoothScroll(true);
    } else {
      smoothScroll(false);
    }
  }, []);

  const mousemove = useCallback((e) => {
    e.preventDefault();
    if (0 < e.deltaY) {
      smoothScroll(true);
    } else {
      smoothScroll(false);
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('touchstart', touchstart, {passive: false});
    document.body.addEventListener('touchmove', touchmove, {passive: false});
    document.body.addEventListener('mousewheel', mousemove, {passive: false});

    return () => {
      document.body.removeEventListener('touchstart', touchstart, {
        passive: false,
      });
      document.body.removeEventListener('touchmove', touchmove, {
        passive: false,
      });
      document.body.removeEventListener('mousewheel', mousemove, {
        passive: false,
      });
    };
  }, [touchstart, touchmove, mousemove]);

  return;
};

export {useScrollSmooth};
