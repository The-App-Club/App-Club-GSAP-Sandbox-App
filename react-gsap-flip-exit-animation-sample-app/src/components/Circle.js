import styled from '@emotion/styled';
import {forwardRef, useEffect} from 'react';

const StyledCircle = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function _Circle({children, timeline, index, rotation}, ref) {
  useEffect(() => {
    // add 'right 100px, rotate 360deg' animation to timeline
    timeline &&
      timeline.to(ref.current, {rotate: rotation, x: 100}, index * 0.1);
  }, [timeline, rotation, index, ref]);

  return <StyledCircle ref={ref}>{children}</StyledCircle>;
}

const Circle = forwardRef(_Circle);

export {Circle};
