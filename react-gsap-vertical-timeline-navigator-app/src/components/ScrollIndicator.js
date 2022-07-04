import {useRef} from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import {ScrollTrigger, ScrollToPlugin} from 'gsap/all';
import {useLayoutEffect} from 'react';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const StyledHeaderLine = styled.div`
  height: 15px;
  width: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  z-index: 2;
`;
const StyledHeaderLineBar = styled.div`
  top: 0;
  left: 0;
  height: 15px;
  width: 0;
  background: #158aff;
`;

const ScrollIndictor = () => {
  const barRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      paused: true,
    });
    tl.fromTo(barRef.current, {width: 0}, {width: '100%'});
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <StyledHeaderLine>
      <StyledHeaderLineBar ref={barRef} />
    </StyledHeaderLine>
  );
};

export {ScrollIndictor};
