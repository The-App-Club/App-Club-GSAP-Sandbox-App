import {useMotionValue} from 'framer-motion';
import {
  useContext,
  createContext,
  useLayoutEffect,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
import {ScrollToPlugin} from 'gsap/all';
import clamp from 'lodash/clamp';

gsap.registerPlugin(ScrollToPlugin);

const ScrollTriggerContext = createContext({
  progress: 0,
});

const useScrollTrigger = () => {
  return useContext(ScrollTriggerContext);
};

const ScrollTriggerProvider = ({
  children,
  progressesRef,
  sectionNumber,
  jumpedSectionNumber,
  sectionHeight,
  forceJumped,
  setAnimateTitle,
  setAnimateImags,
  setActiveSectionNumber,
}) => {
  const scrollTriggerRef = useRef(null);
  const progress = useMotionValue(0);
  const value = useMemo(
    () => ({
      progress,
    }),
    [progress]
  );

  useEffect(() => {
    const dom = document.querySelector(`#section-${jumpedSectionNumber + 1}`);
    if (dom) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {y: `#section-${jumpedSectionNumber + 1}`, offsetY: 0},
      });
    }
  }, [jumpedSectionNumber, forceJumped]);

  useLayoutEffect(() => {
    const progressDomList = progressesRef.map((progressRef) => {
      return progressRef.current;
    });
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: scrollTriggerRef.current,
        start: 'top top',
        end: `bottom+=${sectionHeight} top`,
        toggleClass: 'is-crossed',
        markers: false,
        scrub: 1,
        pin: true,
        onUpdate: (e) => {
          const p = clamp(e.progress, 0, 1);
          const progressDom = progressDomList[sectionNumber];
          progressDom.style.height = `${p * 100}%`;
          progress.set(p);
          setActiveSectionNumber(sectionNumber);
        },
        onEnter: (e) => {
          console.log('[enter]');
          setAnimateTitle(true);
          setAnimateImags(true);
        },
        onLeave: (e) => {
          console.log('[leave]');
          window['previousSectionNumber'] = sectionNumber;
          setAnimateTitle(false);
          setAnimateImags(false);
        },
        onEnterBack: (e) => {
          console.log('[enterback]');
          setAnimateTitle(true);
          setAnimateImags(true);
        },
        onLeaveBack: (e) => {
          console.log('[leaveback]');
          window['previousSectionNumber'] = sectionNumber;
          setAnimateTitle(false);
          setAnimateImags(false);
        },
      },
    });
    return () => {
      tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);
  return (
    <div ref={scrollTriggerRef}>
      <ScrollTriggerContext.Provider value={value}>
        {children}
      </ScrollTriggerContext.Provider>
    </div>
  );
};

export {ScrollTriggerProvider, useScrollTrigger};
