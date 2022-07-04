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

function _Box({children, addAnimation, index}, ref) {
  useEffect(() => {
    const animation = gsap.to(ref.current, {
      x: -100,
    });
    addAnimation(animation, index);

    return () => {
      animation.progress(0).kill();
    };
  }, [addAnimation, index, ref]);

  return <StyledBox ref={ref}>{children}</StyledBox>;
}

const Box = forwardRef(_Box);

export {Box};
