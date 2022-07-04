import React, {useState, useEffect, useRef, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
import styled from '@emotion/styled';
import './index.css';

import {Section} from './components/Section';
import {SectionHeader} from './components/SectionHeader';
import {Paragraph} from './components/Paragraph';
import {Nav} from './components/Nav';
gsap.registerPlugin(ScrollToPlugin);

const StyledContainer = styled.div`
  padding: 20px;
`;

const App = ({context}) => {
  return (
    <>
      <Nav />
      <StyledContainer>
        {[1, 2, 3].map((sectionNumber, index) => {
          return (
            <Section key={index} id={sectionNumber}>
              <SectionHeader>{`Section ${sectionNumber}`}</SectionHeader>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nibh at. Maecenas eget iaculis nunc.
              </Paragraph>
              <Paragraph>
                Praesent at pellentesque augue. Nunc sed ullamcorper risus. Duis
                tincidunt consectetur condimentum. Suspendisse pharetra purus
                urna, ac
              </Paragraph>
              <Paragraph>
                Praesent dui nibh, ullamcorper in justo sed, volutpat cursus
                orci. Etiam vitae sodales massa. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus
              </Paragraph>
            </Section>
          );
        })}
      </StyledContainer>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
