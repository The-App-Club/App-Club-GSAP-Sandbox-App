import styled from '@emotion/styled';

const StyledArticle = styled.article``;

const Article = ({children}) => {
  return <StyledArticle>{children}</StyledArticle>;
};

export {Article};
