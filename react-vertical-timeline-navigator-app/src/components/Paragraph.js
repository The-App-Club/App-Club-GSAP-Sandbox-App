import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledParagraph = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

const _Paragraph = ({children}, ref) => {
  return <StyledParagraph ref={ref}>{children}</StyledParagraph>;
};

const Paragraph = forwardRef(_Paragraph);

export {Paragraph};
