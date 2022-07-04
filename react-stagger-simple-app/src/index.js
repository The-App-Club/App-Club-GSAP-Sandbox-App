import React, {useRef} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {ImageCard} from './components/ImageCard';

import {gsap} from 'gsap/all';

const StyledImageCardContainer = styled.div`
  margin: 30vh auto;
  padding: 10px;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const App = () => {
  const imageCard1 = useRef(null);
  const imageCard2 = useRef(null);
  const imageCard3 = useRef(null);

  const one = ({isRestore = false}) => {
    const tl = gsap.timeline();
    tl.to(imageCard1.current, {
      opacity: 1,
      delay: 1,
      duration: 1.5,
      y: isRestore ? -100 : 100,
      ease: 'power2.out',
    });
  };
  const two = ({isRestore = false}) => {
    const tl = gsap.timeline();
    tl.to(imageCard2.current, {
      opacity: 1,
      delay: 1,
      duration: 1.5,
      y: isRestore ? -140 : 140,
      ease: 'power2.out',
    });
  };
  const three = ({isRestore = false}) => {
    const tl = gsap.timeline();
    tl.to(imageCard3.current, {
      opacity: 1,
      delay: 1,
      duration: 1.5,
      y: isRestore ? -180 : 180,
      ease: 'power2.out',
    });
  };

  const handleDo = (e) => {
    // https://greensock.com/docs/v3/GSAP/Timeline
    const master = gsap.timeline();
    master.add(one({}), '+=0.5').add(two({}), '+=0.5').add(three({}) , '+=0.5');
  };

  const handleUndo = (e) => {
    // https://greensock.com/docs/v3/GSAP/Timeline
    const master = gsap.timeline();
    master
      .add(one({isRestore: true}), '+=0.5')
      .add(two({isRestore: true}), '+=0.5')
      .add(three({isRestore: true}), '+=0.5');
  };

  return (
    <>
      <button onClick={handleDo}>Do</button>
      <button onClick={handleUndo}>UnDo</button>
      <StyledImageCardContainer>
        <ImageCard
          src="https://picsum.photos/seed/1/200/300"
          alt=""
          ref={imageCard1}
        />
        <ImageCard
          src="https://picsum.photos/seed/1/200/300"
          alt=""
          ref={imageCard2}
        />
        <ImageCard
          src="https://picsum.photos/seed/1/200/300"
          alt=""
          ref={imageCard3}
        />
      </StyledImageCardContainer>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
