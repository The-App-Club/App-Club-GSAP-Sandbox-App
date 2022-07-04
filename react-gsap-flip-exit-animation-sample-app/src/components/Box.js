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
  user-select: none;

  &.blue {
    background: blue;
  }
  &.red {
    background: red;
  }
  &.purple {
    background: purple;
  }
  &.orange {
    background: orange;
  }
  &.exiting,
  &.exited {
    display: none;
  }
`;

function _Box({children, className, id, handleClick}, ref) {
  return (
    <StyledBox id={id} ref={ref} className={className} onClick={handleClick}>
      {children}
    </StyledBox>
  );
}

const Box = forwardRef(_Box);

export {Box};
