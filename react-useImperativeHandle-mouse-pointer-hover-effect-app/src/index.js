import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {Circle} from './components/Circle';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = ({context}) => {
  const circleRefs = useRef([]);

  // reset on re-renders
  circleRefs.current = [];

  useEffect(() => {
    circleRefs.current.forEach((ref) => {
      ref.moveTo(window.innerWidth / 2, window.innerHeight / 2);
    });

    const onMove = ({clientX, clientY}) => {
      circleRefs.current.forEach((ref) => {
        ref.moveTo(clientX, clientY);
      });
    };

    window.addEventListener('pointermove', onMove);

    return () => {
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const addCircleRef = (ref) => {
    if (ref) {
      circleRefs.current.push(ref);
    }
  };

  return (
    <StyledContainer>
      <p>Move your mouse around</p>
      <Circle size="sm" ref={addCircleRef} delay={0} />
      {/* <Circle size="md" ref={addCircleRef} delay={0.1} /> */}
      {/* <Circle size="lg" ref={addCircleRef} delay={0.2} /> */}
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
