import {css, cx} from '@emotion/css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import {useState, useMemo, useEffect, useRef} from 'react';
import {MathUtils} from 'three';
import {useDebouncedCallback} from 'use-debounce';
import {BebopLottie} from './BebopLottie';

const HorizontalScrollContent = ({isDebug = false}) => {
  const scrollerDomRef = useRef(null);
  const scrollingDomRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const slides = useMemo(() => {
    return [
      {
        component: () => {
          return (
            <div className="flex items-center">
              <h2 className="text-3xl">Slide 1</h2>
            </div>
          );
        },
      },
      {
        startProgress: 0.25,
        endProgress: 0.35,
        component: ({progress, startProgress, endProgress}) => {
          return (
            <div className="flex items-center flex-col justify-center">
              <h2 className="text-3xl">Slide 2</h2>
              <BebopLottie
                progress={progress}
                startProgress={startProgress}
                endProgress={endProgress}
              />
            </div>
          );
        },
      },
      {
        component: () => {
          return (
            <div className="flex items-center">
              <h2 className="text-3xl">Slide 3</h2>
            </div>
          );
        },
      },
      {
        startProgress: 0.75,
        endProgress: 0.85,
        component: ({progress, startProgress, endProgress}) => {
          return (
            <div className="flex items-center flex-col justify-center">
              <h2 className="text-3xl">Slide 4</h2>
              <BebopLottie
                progress={progress}
                startProgress={startProgress}
                endProgress={endProgress}
              />
            </div>
          );
        },
      },
    ];
  }, []);

  const handleResize = useDebouncedCallback((e) => {
    ScrollTrigger.getById('pc-trigger-scroll')?.kill();
    setUpScrollTrigger();

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, 500);

  const setUpScrollTrigger = () => {
    const scrollingDom = scrollingDomRef.current;

    const sections = [...scrollingDomRef.current.children];

    const scrollTL = gsap.timeline({
      scrollTrigger: {
        id: 'pc-trigger-scroll',
        trigger: scrollerDomRef.current,
        pin: true,
        start: 'center center',
        end: `+=${scrollingDom.offsetWidth * slides.length}`,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: isDebug,
        onUpdate: (instance) => {
          const progress = MathUtils.clamp(instance.progress, 0, 1);
          setProgress(progress);
        },
      },
    });

    // const increment =
    //   (scrollingDom.scrollWidth - scrollerDomRef.current.clientWidth) /
    //   (sections.length - 1);

    sections.forEach((section, index) => {
      scrollTL.to(
        sections,
        {
          // x: () => `-=${increment}px`,
          x: () => `-=${window.innerWidth * 1}px`,
          // x: () => `-=${window.innerWidth * 2}px`,
          ease: 'none',
        },
        '+=0.3'
      );
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    handleResize();
    return () => {};
  }, []);

  return (
    <section
      ref={scrollerDomRef}
      className={cx(
        css`
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: calc(var(--vh, 1vh) * 100);
          overflow: hidden;
        `,
        'viewport scroll'
      )}
    >
      <div
        className={css`
          position: absolute;
          overflow: hidden;
          top: 0;
        `}
      >
        <div
          ref={scrollingDomRef}
          className={cx(
            css`
              width: ${slides.length * 100}vw;
              /* width: ${slides.length * 200}vw; */
              height: 100%;
              display: flex;
              .slide {
                flex-shrink: 0;
                align-items: center;
                justify-content: center;
                display: flex;
                min-height: 100vh;
                min-height: calc(var(--vh, 1vh) * 100);
                width: 100vw;
                /* width: 200vw; */
                /* border: 1px solid blue; */
                position: relative;
              }
            `,
            `bg-gray-100`
          )}
        >
          {slides.map((slide, index) => {
            return (
              <div className="slide" key={index}>
                {slide.component({
                  progress,
                  startProgress: slide.startProgress,
                  endProgress: slide.endProgress,
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export {HorizontalScrollContent};
