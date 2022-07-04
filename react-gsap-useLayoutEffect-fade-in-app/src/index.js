import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
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

function fadeIn(target, vars) {
  return gsap.from(target, {
    opacity: 0,
    ...vars,
  });
}

const App = ({context}) => {
  const [reversed, setReversed] = useState(false);
  const [animation, setAnimation] = useState(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (animation) {
      if (!reversed) {
        animation.play();
      } else {
        animation.reverse();
      }
    }
  }, [reversed, animation]);

  useLayoutEffect(() => {
    const animation = fadeIn(boxRef.current, {x: 100});
    setAnimation(animation);
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <StyledContainer>
      <Button handleClick={() => setReversed(!reversed)}>Toggle</Button>
      <Box ref={boxRef}>Nice</Box>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
