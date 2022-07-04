import React, {useEffect, useRef, useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import styled from '@emotion/styled';
import gsap from 'gsap';
import {Button} from './components/Button';
import {BoxList} from './components/BoxList';

const StyledContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 30%;
`;

const App = ({context}) => {
  const timeline = useMemo(() => {
    return gsap.timeline({paused: true});
  }, []);
  const divRef = useRef(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    console.log(divRef.current.childNodes);
    timeline.from(divRef.current.childNodes, {
      y: 100,
      opacity: 0,
      ease: 'power4.inOut',
      duration: 0.7,
      stagger: 0.1,
    });
  }, [timeline]);

  useEffect(() => {
    if (play) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [timeline, play]);
  return (
    <StyledContainer>
      <Button
        handleClick={(e) => {
          setPlay(!play);
        }}
        buttonDisplayName={play ? 'reverse' : 'play'}
      ></Button>
      <BoxList nuts={5} ref={divRef}></BoxList>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
