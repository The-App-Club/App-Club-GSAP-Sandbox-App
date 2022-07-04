import styled from '@emotion/styled';
import {forwardRef, useEffect} from 'react';
import {gsap} from 'gsap';

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

function _Circle({children, addAnimation, index, rotation}, ref) {
  useEffect(() => {
    const animation = gsap.to(ref.current, {rotate: rotation, x: 100});
    addAnimation(animation, index);

    return () => {
      animation.progress(0).kill();
    };
  }, [addAnimation, ref, index, rotation]);

  return <StyledCircle ref={ref}>{children}</StyledCircle>;
}

const Circle = forwardRef(_Circle);

export {Circle};
