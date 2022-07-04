import React, {useEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

import {css} from '@emotion/css';

import {Section} from './componets/Section';
import {SectionHeader} from './componets/SectionHeader';
import {ContentLeft} from './componets/ContentLeft';
import {ContentRight} from './componets/ContentRight';
import {Spacer} from './componets/Spacer';

gsap.registerPlugin(ScrollTrigger);

const App = (context) => {
  const [forwardAcitve, setForwardActive] = useState(false);
  const [backwardAcitve, setBackwardActive] = useState(false);

  const introRef = useRef(null);

  const doingRef = useRef(null);
  const doingLeftRef = useRef(null);
  const doingRightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const anim1 = tl
      .set(doingRef.current, {
        scale: 4,
        transformOrigin: `center top`,
      })
      .to(doingRef.current, {
        scale: 2.2,
        y: '-50%',
      })
      .to(doingRef.current, {scale: 1, y: 0});
    anim1.pause();
    const trigger1 = ScrollTrigger.create({
      trigger: introRef.current,
      start: 'bottom 80%',
      end: 'center top',
      onEnter: (e) => {
        // console.log('[enter]');
        anim1.play();
        setForwardActive(true);
        setBackwardActive(false);
      },
      onLeave: (e) => {
        // console.log('[leave]');
      },
      onEnterBack: (e) => {
        // console.log('[enterBack]');
        setForwardActive(false);
        setBackwardActive(true);
        anim1.reverse();
      },
      onLeaveBack: (e) => {
        // console.log('[leaveBack]');
      },
      toggleActions: 'play none none reverse',
      // markers: true,
    });

    // add pin hook
    const trigger2 = ScrollTrigger.create({
      trigger: doingRef.current,
      start: 'center 60%',
      end: '20% top',
      onEnter: (e) => {
        console.log('[enter]');
      },
      onLeave: (e) => {
        console.log('[leave]');
      },
      onEnterBack: (e) => {
        console.log('[enterBack]');
      },
      onLeaveBack: (e) => {
        console.log('[leaveBack]');
      },
      pin: true,
      pinSpacing: false,
      markers: true,
      id: 'chart-pin',
    });

    return () => {
      anim1.kill();
      tl.kill();
      trigger1.kill();
      trigger2.kill();
    };
  }, []);

  return (
    <article>
      <Section
        ref={introRef}
        className={css`
          margin: 0 auto;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 30%;
          width: 100%;
        `}
      >
        <SectionHeader>
          The custom OLED displays on iPhone&nbsp;X deliver the most accurate
          color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax has
          our largest display ever on an&nbsp;iPhone.
        </SectionHeader>
      </Section>

      <Spacer />

      <Section ref={doingRef}>
        <ContentLeft
          ref={doingLeftRef}
          forwardAcitve={forwardAcitve}
          backwardAcitve={backwardAcitve}
        ></ContentLeft>
        <ContentRight
          ref={doingRightRef}
          forwardAcitve={forwardAcitve}
          backwardAcitve={backwardAcitve}
        ></ContentRight>
      </Section>

      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </article>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
