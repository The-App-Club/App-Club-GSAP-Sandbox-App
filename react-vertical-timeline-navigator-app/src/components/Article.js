import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledArticle = styled.article``;

const _Article = ({children}, ref) => {
  return <StyledArticle ref={ref}>{children}</StyledArticle>;
};

const Article = forwardRef(_Article);

export {Article};
