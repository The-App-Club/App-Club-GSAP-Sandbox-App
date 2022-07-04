import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  width: 30%;
  padding: 40px;
  margin-right: 70%;
  margin-left: 30px;
  margin-bottom: 200vh;
  border: 5px solid #e9a;
  border-radius: 20px;
  opacity: 0.2;
  transition: all 1.2s;

  &.active {
    opacity: 1 !important;
  }
`;

const _Section = ({children}, ref) => {
  return <StyledSection ref={ref}>{children}</StyledSection>;
};

const Section = forwardRef(_Section);

export {Section};
