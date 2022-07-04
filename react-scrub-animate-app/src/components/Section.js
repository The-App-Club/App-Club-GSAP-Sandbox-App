import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  &.is-crossed {
    background: #333333;
  }
`;

const _Section = ({children, style}, ref) => {
  return (
    <StyledSection ref={ref} style={style}>
      {children}
    </StyledSection>
  );
};

const Section = forwardRef(_Section);

export {Section};
