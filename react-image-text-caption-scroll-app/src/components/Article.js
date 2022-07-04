import styled from '@emotion/styled';

const StyledArticle = styled.article`
  padding: 20px;
`;

const Article = ({children}) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export {Article};
