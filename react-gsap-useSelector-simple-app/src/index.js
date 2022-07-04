import React, {useRef, useState, useEffect, useCallback, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {Box} from './components/Box';
import {useSelector} from './hooks/useSelector';
import {useArrayRef} from './hooks/useArrayRef';
import {useStateRef} from './hooks/useStateRef';
import {gsap} from 'gsap/all';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = ({context}) => {
  const [q, ref] = useSelector();
  const [refs, setRef] = useArrayRef();
  const [count, setCount, countRef] = useStateRef({defaultValue: 1});
  const [gsapCount, setGsapCount] = useState(0);

  // useEffect(() => {
  //   gsap.to(q('.box'), {x: 200});
  // }, []);
  // useEffect(() => {
  //   gsap.to(refs.current, {x: 200});
  // }, []);
  // https://greensock.com/forums/topic/17530-onrepeat-callback/
  useEffect(() => {
    gsap.to(q('.box'), {
      x: 200,
      repeat: -1,
      onRepeat: () => {
        console.log(gsapCount);
        setGsapCount(countRef.current++);
      },
    });
  }, []);
  return (
    <StyledContainer ref={ref}>
      <Box className={'box'}>CowBoy Bebop</Box>
      <Box ref={setRef}>Box1</Box>
      <Box ref={setRef}>Box2</Box>
      <Box ref={setRef}>Box3</Box>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
