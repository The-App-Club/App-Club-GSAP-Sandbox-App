import {useRef, useLayoutEffect, useState} from 'react';
import {gsap} from 'gsap/all';
import {ScrollTrigger} from 'gsap/all';
import {Section} from './Section';
import {Paragraph} from './Paragraph';

gsap.registerPlugin(ScrollTrigger);

const Outro = () => {
  const [isCrossed, setIsCrossed] = useState(false);

  const outroRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useLayoutEffect(() => {
    const crossedTl = gsap.timeline({
      scrollTrigger: {
        trigger: outroRef.current,
        start: 'top bottom',
        end: 'center center',
        toggleClass: 'is-crossed',
        markers: true,
        scrub: 1,
        onEnter: (e) => {
          setIsCrossed(true);
        },
        onLeave: (e) => {
          setIsCrossed(false);
        },
        onEnterBack: (e) => {
          setIsCrossed(true);
        },
        onLeaveBack: (e) => {
          setIsCrossed(false);
        },
      },
    });
    crossedTl
      .fromTo(
        p1Ref.current,
        {
          xPercent: -100,
        },
        {xPercent: 150}
      )
      .fromTo(
        p2Ref.current,
        {
          xPercent: 100,
        },
        {xPercent: -50},
        '<'
      );

    return () => {
      crossedTl.scrollTrigger.kill();
      crossedTl.kill();
    };
  }, []);

  return (
    <Section
      ref={outroRef}
      style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.7s ease-out',
        overflow: 'hidden',
      }}
      className={isCrossed ? `is-crossed` : ``}
    >
      <Paragraph
        ref={p1Ref}
        style={{
          transform: `translate(-100%, 0%)`,
          fontSize: '12vw',
          fontWeight: 'bold',
        }}
        className={isCrossed ? `is-crossed` : ``}
      >
        COWBOY
      </Paragraph>
      <Paragraph
        ref={p2Ref}
        style={{
          transform: `translate(100%, 0%)`,
          fontSize: '12vw',
          fontWeight: 'bold',
        }}
        className={isCrossed ? `is-crossed` : ``}
      >
        BEBOP
      </Paragraph>
    </Section>
  );
};

export {Outro};
