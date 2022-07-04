import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  min-height: 100vh;
  padding: 10px;
  max-width: 300px;
  width: 100%;
  margin: 0 auto 0;
  &:nth-of-type(1) {
    margin: 30px auto 0;
  }
`;

const _Section = ({children, id}, ref) => {
  return (
    <StyledSection ref={ref} id={id.replace(/^#/, '')}>
      {children}
    </StyledSection>
  );
};

const Section = forwardRef(_Section);

export {Section};
