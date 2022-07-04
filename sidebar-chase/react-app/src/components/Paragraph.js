import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledParagraph = styled.p`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
  &.is-crossed {
    color: #ffffff;
  }
`;

const _Paragraph = ({children, style, className}, ref) => {
  return (
    <StyledParagraph ref={ref} style={style} className={className}>
      {children}
    </StyledParagraph>
  );
};

const Paragraph = forwardRef(_Paragraph);

export {Paragraph};
