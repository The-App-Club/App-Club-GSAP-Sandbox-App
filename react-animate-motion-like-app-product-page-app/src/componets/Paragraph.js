import { forwardRef } from 'react';
import styled from '@emotion/styled';

const StyledParagraph = styled.p`
  font-weight: bold;
`;

const _Paragraph = ({children}, ref) => {
  return <StyledParagraph ref={ref}>{children}</StyledParagraph>;
};

const Paragraph = forwardRef(_Paragraph)

export {Paragraph};
