import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledSection = styled.section``;

const _Section = ({children, className}, ref) => {
  return (
    <StyledSection ref={ref} className={className}>
      {children}
    </StyledSection>
  );
};

const Section = forwardRef(_Section);

export {Section};
