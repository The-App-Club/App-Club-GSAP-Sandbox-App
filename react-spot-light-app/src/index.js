import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Paragraph} from './components/Paragraph';
import {useSpotLightUp} from './hooks/useSpotLightUp';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  width: 70vw;
  margin: 20px auto;
`;

const StyledSpotLight = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(
    50px 50px at center center,
    transparent,
    transparent 30px,
    rgba(#000, 0.6) 50px
  );
`;

const App = ({context}) => {
  const [spotLightUpRef] = useSpotLightUp();
  return (
    <>
      <StyledSpotLight ref={spotLightUpRef} />
      <StyledContainer>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
        <Paragraph></Paragraph>
      </StyledContainer>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
