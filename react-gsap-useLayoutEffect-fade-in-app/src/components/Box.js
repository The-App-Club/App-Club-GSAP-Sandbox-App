import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledBox = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function _Box({children}, ref) {
  return <StyledBox ref={ref}>{children}</StyledBox>;
}

const Box = forwardRef(_Box);

export {Box};
