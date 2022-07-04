import styled from '@emotion/styled';

const StyledParagraph = styled.p``;

const Paragraph = ({children}) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export {Paragraph};
