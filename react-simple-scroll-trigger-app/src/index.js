import React, {useRef, useMemo, createRef} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

import {Header} from './components/Header';
import {ImageCard} from './components/ImageCard';
import {Loading} from './components/Loading';
import {TextSection} from './components/TextSection.js';
import {Footer} from './components/Footer';

import styled from '@emotion/styled';

import 'normalize.css';

import './index.css';

const StyledDemo = styled.div`
  overflow: hidden;
`;

// 100個ぐらいじゃないとそれっぽくでない
const items = [...new Array(100)].map((_, i) => {
  return i;
});

gsap.registerPlugin(ScrollTrigger);

const App = ({context}) => {
  const loadingRef = useRef(null);
  const textSectionRef1 = useRef(null);
  const textSectionRef2 = useRef(null);
  const gallerySectionRef = useRef(null);

  const itemsRef = useMemo(() => {
    return [...new Array(items.length)].fill().map(() => createRef());
  }, []);

  const detectLoadingFinish = ({loadingStatus}) => {
    gsap.to(loadingRef.current, {autoAlpha: 0});
  };

  const showDemo = () => {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);
    const sectionDomList = [
      textSectionRef1.current,
      gallerySectionRef.current,
      textSectionRef2.current,
    ];
    sectionDomList.forEach((sectionDom, index) => {
      const w = sectionDom.querySelector('.wrapper');
      // レベルが違う
      const [x, xEnd] =
        // index % 3
        // index % 5
        index % sectionDomList.length
          ? ['100%', (w.scrollWidth - sectionDom.offsetWidth) * -1]
          : [w.scrollWidth * -1, 0];
      gsap.fromTo(
        w,
        {x},
        {
          x: xEnd,
          scrollTrigger: {
            trigger: sectionDom,
            scrub: 0.5,
          },
        }
      );
    });
  };

  return (
    <>
      <Loading
        ref={loadingRef}
        loadedItemList={itemsRef}
        detectLoadingFinish={detectLoadingFinish}
        showDemo={showDemo}
      ></Loading>
      <StyledDemo>
        <Header></Header>
        <TextSection ref={textSectionRef1}></TextSection>
        <section ref={gallerySectionRef}>
          <ul className="wrapper">
            {items.map((item, i) => {
              return (
                <li key={i}>
                  <ImageCard
                    ref={itemsRef[i]}
                    src={`https://picsum.photos/seed/${item}/200/300`}
                    alt={item}
                  ></ImageCard>
                </li>
              );
            })}
          </ul>
        </section>
        <TextSection ref={textSectionRef2}></TextSection>
        <Footer></Footer>
      </StyledDemo>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
