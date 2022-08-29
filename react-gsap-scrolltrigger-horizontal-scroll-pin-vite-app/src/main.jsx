import {createRoot} from 'react-dom/client';
import {css, cx} from '@emotion/css';
import {Spacer} from './components/Spacer';

import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import '@fontsource/inter';
import './styles/index.css';
import './styles/index.scss';
import {useEffect, useRef} from 'react';
import {useMemo} from 'react';

import {MathUtils} from 'three';
import {useState} from 'react';
import {useDebouncedCallback} from 'use-debounce';
import {BebopLottie} from './components/BebopLottie';

const App = () => {
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
        endProgress: 0.5,
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
        endProgress: 1.0,
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
        markers: true,
        onUpdate: (instance) => {
          const progress = MathUtils.clamp(instance.progress, 0, 1);
          setProgress(progress);
        },
      },
    });

    const increment =
      (scrollingDom.scrollWidth - scrollerDomRef.current.clientWidth) /
      (sections.length - 1);

    sections.forEach((section, index) => {
      scrollTL.to(
        sections,
        {
          x: () => `-=${increment}px`,
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
    ScrollTrigger.getById('pc-trigger-scroll')?.kill();
    gsap.registerPlugin(ScrollTrigger);
    setUpScrollTrigger();
    return () => {};
  }, []);
  return (
    <div>
      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene1
      </section>
      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene2
      </section>

      <section
        ref={scrollerDomRef}
        className={cx(
          css`
            min-height: 100vh;
            overflow: hidden;
          `,
          'viewport scroll'
        )}
      >
        <div
          ref={scrollingDomRef}
          className={cx(
            css`
              width: ${slides.length * 100}%;
              height: 100%;
              display: flex;
              .slide {
                align-items: center;
                justify-content: center;
                display: inline-flex;
                width: 100vw;
                border: 1px solid blue;
              }
            `
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
      </section>

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene3
      </section>

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene4
      </section>

      <section className="min-h-screen w-full flex items-center justify-center text-3xl">
        Scene5
      </section>
    </div>
  );
};

const scrollingDom = document.getElementById('root');

const root = createRoot(scrollingDom);

root.render(<App />);
