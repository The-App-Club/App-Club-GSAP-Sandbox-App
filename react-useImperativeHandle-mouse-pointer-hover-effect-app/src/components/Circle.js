import styled from '@emotion/styled';
import {forwardRef, useRef, useImperativeHandle} from 'react';
import {gsap} from 'gsap';

const StyledCircle = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 0;
  left: 0;
  opacity: 0.3;
  background: #5686b6;
  &.sm {
    width: 30px;
    height: 30px;
  }

  &.md {
    width: 60px;
    height: 60px;
  }

  &.lg {
    width: 90px;
    height: 90px;
  }
`;

function _Circle({children, size, delay}, ref) {
  const el = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        moveTo(x, y) {
          gsap.to(el.current, {x, y, delay});
        },
      };
    },
    [delay]
  );

  return (
    <StyledCircle ref={el} className={size}>
      {children}
    </StyledCircle>
  );
}

const Circle = forwardRef(_Circle);

export {Circle};
