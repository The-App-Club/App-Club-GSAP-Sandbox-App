import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledCardHeader = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  align-items: center;
`;

const _CardHeader = ({children}, ref) => {
  return <StyledCardHeader ref={ref}>{children}</StyledCardHeader>;
};

const CardHeader = forwardRef(_CardHeader);

export {CardHeader};
