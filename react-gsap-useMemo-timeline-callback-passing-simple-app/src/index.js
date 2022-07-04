import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
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
  const boxRef = useRef(null);
  const circleRef = useRef(null);

  const tl = useMemo(() => {
    return gsap.timeline({paused: true});
  }, []);

  // pass a callback to child elements, this will add animations to the timeline
  const addAnimation = useCallback(
    (animation, index) => {
      tl.add(animation, index * 0.1);
    },
    [tl]
  );

  useEffect(() => {
    if (!reversed) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [tl, reversed]);

  return (
    <StyledContainer>
      <Button handleClick={() => setReversed(!reversed)}>Toggle</Button>
      <Box ref={boxRef} timeline={tl} index={0} addAnimation={addAnimation}>
        Box
      </Box>
      <Circle
        ref={circleRef}
        timeline={tl}
        rotation={360}
        index={1}
        addAnimation={addAnimation}
      >
        Circle
      </Circle>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
