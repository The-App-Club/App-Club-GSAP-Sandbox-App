import styled from '@emotion/styled';
import {forwardRef, useEffect} from 'react';
import {gsap} from 'gsap';

const StyledBox = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function _Box({children, className}, ref) {
  return (
    <StyledBox ref={ref} className={className}>
      {children}
    </StyledBox>
  );
}

const Box = forwardRef(_Box);

export {Box};
