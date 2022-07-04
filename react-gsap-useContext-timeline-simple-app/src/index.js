import React, {createRef, useRef, useState, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

import styled from '@emotion/styled';
import {Box} from './components/Box';
import {Menu} from './components/Menu';

import {NiceContext} from './contexts/Nice';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = ({context}) => {
  const [selected, setSelected] = useState('2');

  const boxItemRefs = useMemo(() => {
    return [1, 2, 3].map((_) => {
      return createRef();
    });
  }, []);

  // const boxRef1 = useRef(null);
  // const boxRef2 = useRef(null);
  // const boxRef3 = useRef(null);

  return (
    <NiceContext.Provider value={{selected, setSelected}}>
      <StyledContainer>
        <Menu />
        {[1, 2, 3].map((number, index) => {
          return (
            <Box key={index} ref={boxItemRefs[index]} id={number}>
              Box1
            </Box>
          );
        })}
        {/* <Box ref={boxRef1} id={'1'}>
          Box1
        </Box>
        <Box ref={boxRef2} id={'2'}>
          Box2
        </Box>
        <Box ref={boxRef3} id={'3'}>
          Box3
        </Box> */}
      </StyledContainer>
    </NiceContext.Provider>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
