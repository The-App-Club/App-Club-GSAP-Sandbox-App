import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  height: 100%;
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
