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

const App = () => {
  const scrollerDomRef = useRef(null);
  const scrollingDomRef = useRef(null);

  const slides = useMemo(() => {
    return [
      {
        component: () => {
          return (
            <div className="flex">
              <div className="slide-item one">slide 1 left content</div>
              <div className="slide-item two">slide 1 right content</div>
            </div>
          );
        },
      },
      // {
      //   component: () => {
      //     return (
      //       <div className="flex">
      //         <div className="slide-item one">slide 2 left content</div>
      //         <div className="slide-item two">slide 2 right content</div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   component: () => {
      //     return (
      //       <div className="flex">
      //         <div className="slide-item one">slide 3 left content</div>
      //         <div className="slide-item two">slide 3 right content</div>
      //       </div>
      //     );
      //   },
      // },
      // {
      //   component: () => {
      //     return (
      //       <div className="flex">
      //         <div className="slide-item one">slide 4 left content</div>
      //         <div className="slide-item two">slide 4 right content</div>
      //       </div>
      //     );
      //   },
      // },
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
          const p = MathUtils.clamp(instance.progress, 0, 1);
          console.log(p);
        },
      },
    });

    const increment =
      (scrollingDom.scrollWidth - scrollerDomRef.current.clientWidth) /
      (sections.length - 1);

    console.log(
      scrollingDom.scrollWidth,
      increment,
      scrollerDomRef.current.clientWidth
    );

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
      <section className="min-h-screen w-full">Scene1</section>
      <section className="min-h-screen w-full">Scene2</section>

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
              /* width: ${slides.length * 300}%; */
              width: ${slides.length * 100}%;
              height: 100%;
              display: flex;
              .slide {
                align-items: center;
                display: inline-flex;
                width: 100vw;
                border: 1px solid blue;
              }
              .slide-item {
                display: flex;
                align-items: center;
                width: 50%;
              }
            `
          )}
        >
          {slides.map((slide, index) => {
            return (
              <div className="slide" key={index}>
                {slide.component()}
              </div>
            );
          })}
        </div>
      </section>

      <section className="min-h-screen w-full">Scene3</section>

      <section className="min-h-screen w-full">Scene4</section>

      <section className="min-h-screen w-full">Scene5</section>
    </div>
  );
};

const scrollingDom = document.getElementById('root');

const root = createRoot(scrollingDom);

root.render(<App />);
