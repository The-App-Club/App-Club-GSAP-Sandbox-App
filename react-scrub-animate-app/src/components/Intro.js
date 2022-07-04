import styled from '@emotion/styled';
import {SplitText} from './SplitText';
import {forwardRef} from 'react';

const StyledIntro = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 50vh;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const _Intro = ({children}, ref) => {
  return (
    <StyledIntro ref={ref}>
      <StyledImage
        src="https://3.bp.blogspot.com/-s0gPoL4q4Jk/Wt33MK4-XWI/AAAAAAAATwU/faHml48jkLY43g82p8IGObbTjx0sadNTwCLcBGAs/s400/cowboy%2Bbebop.jpg"
        alt="bebop"
      ></StyledImage>
      <SplitText isStart={true} />
    </StyledIntro>
  );
};

const Intro = forwardRef(_Intro);

export {Intro};
