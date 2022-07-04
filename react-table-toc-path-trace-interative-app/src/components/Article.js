import styled from '@emotion/styled';

const StyledArticle = styled.article`
  margin: 0 auto;
  padding: 1rem;
  max-width: 800px;
  font-size: 1.2rem;
  font-family: 'Frank Ruhl Libre', sans-serif;
`;

const Article = ({children}, ref) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export {Article};
