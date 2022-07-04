import styled from '@emotion/styled';

const StyledParagraph = styled.p`
  max-width: 30vw;
  margin: 0 auto 50px;
`;

const Paragraph = ({children}) => {
  return <StyledParagraph>{children}</StyledParagraph>;
};

export {Paragraph};
