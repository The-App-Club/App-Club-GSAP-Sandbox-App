import React, {useRef, useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {Box} from './components/Box';
import {FadeIn} from './components/FadeIn';
import {Button} from './components/Button';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = ({context}) => {
  const [reversed, setReversed] = useState(false);
  const fadeInRef = useRef(null);
  const animationRef = useRef(null);

  // const toggle = () => {
  //   animationRef.current.reversed(!animationRef.current.reversed());
  // };

  useEffect(() => {
    if (!reversed) {
      animationRef.current.play();
    } else {
      animationRef.current.reverse();
    }
  }, [reversed]);

  return (
    <StyledContainer>
      <Button
        handleClick={() => {
          // toggle();
          setReversed(!reversed);
        }}
      >
        Toggle
      </Button>
      <FadeIn stagger={0.1} x={100} ref={fadeInRef} animation={animationRef}>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
      </FadeIn>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
