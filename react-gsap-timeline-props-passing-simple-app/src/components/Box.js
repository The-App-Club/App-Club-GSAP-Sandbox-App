import styled from '@emotion/styled';
import {forwardRef, useEffect} from 'react';

const StyledBox = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function _Box({children, timeline, index}, ref) {
  // add 'left 100px' animation to timeline
  useEffect(() => {
    timeline && timeline.to(ref.current, {x: -100}, index * 0.1);
  }, [timeline, ref, index]);

  return <StyledBox ref={ref}>{children}</StyledBox>;
}

const Box = forwardRef(_Box);

export {Box};
