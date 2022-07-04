import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledTextSection = styled.div`
  font-size: 3rem;
  line-height: 1;
  font-weight: 900;
`;

const _TextSection = ({children}, ref) => {
  return (
    <section ref={ref}>
      <StyledTextSection className="wrapper">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </StyledTextSection>
    </section>
  );
};

const TextSection = forwardRef(_TextSection);

export {TextSection};
