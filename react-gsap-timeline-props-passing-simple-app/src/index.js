import React, {useRef, useState, useEffect, useCallback} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {Box} from './components/Box';
import {Circle} from './components/Circle';
import {Button} from './components/Button';

import {gsap} from 'gsap/all';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = ({context}) => {
  const [reversed, setReversed] = useState(false);
  const [tl, setTl] = useState();
  const boxRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    setTl(tl);
  }, []);

  useEffect(() => {
    tl && tl.reversed(reversed);
  }, [reversed, tl]);

  return (
    <StyledContainer>
      <Button handleClick={() => setReversed(!reversed)}>Toggle</Button>
      <Box ref={boxRef} timeline={tl} index={0}>
        Box
      </Box>
      <Circle ref={circleRef} timeline={tl} rotation={360} index={1}>
        Circle
      </Circle>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
