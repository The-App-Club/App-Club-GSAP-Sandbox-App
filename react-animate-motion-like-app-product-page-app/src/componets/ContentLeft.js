import {forwardRef, useEffect, useRef} from 'react';
import styled from '@emotion/styled';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';

import {Image} from './Image';
import {Paragraph} from './Paragraph';

gsap.registerPlugin(ScrollTrigger);

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledParagraphContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: calc(50% - 60px);
  left: -360px;
`;

const StyledContentLeft = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 30%;
  position: relative;
`;

const _ContentLeft = ({forwardAcitve, backwardAcitve}, ref) => {
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const anim1 = tl
      .to(
        ref.current,
        {
          x: '-50%',
          y: '50%',
        },
        2
      )
      .to(
        image1Ref.current,
        {
          autoAlpha: 0,
        },
        2
      )
      .to(
        image2Ref.current,
        {
          x: '50%',
        },
        2
      )
      .to(
        image3Ref.current,
        {
          x: '50%',
        },
        2
      )
      .to(
        paragraph1Ref.current,
        {
          autoAlpha: 1,
          x: "30%",
          fontSize: "3rem",
          color: `skyblue`,
        },
        2
      ).to(
        paragraph2Ref.current,
        {
          autoAlpha: 1,
          x: "30%",
          fontSize: "0.8rem",
          color: `skyblue`,
        },
        2
      );
    anim1.pause();
    if (forwardAcitve && !backwardAcitve) {
      console.log('Forward');
      anim1.play();
    } else if (!forwardAcitve && backwardAcitve) {
      console.log('Backward');
    }
    return () => {
      anim1.reverse();
      setTimeout(() => {
        anim1.kill();
        tl.kill();
      }, 800);
    };
  }, [forwardAcitve, backwardAcitve, ref]);
  return (
    <StyledContentLeft ref={ref}>
      <StyledParagraphContainer>
        <Paragraph ref={paragraph1Ref}>iPhone Xs Max</Paragraph>
        <Paragraph ref={paragraph2Ref}>6.5" dsiplay</Paragraph>
      </StyledParagraphContainer>
      <StyledImageContainer>
        <Image
          ref={image1Ref}
          className="iphone1-img"
          src="/img/iphone-1.png"
          alt=""
        />
        <Image
          ref={image2Ref}
          className="iphone-stick"
          src="/img/iphone-3.png"
          alt=""
        />
        <Image
          ref={image3Ref}
          className="iphone1-img-behind"
          src="/img/iphone-left.png"
          alt=""
        />
      </StyledImageContainer>
    </StyledContentLeft>
  );
};

const ContentLeft = forwardRef(_ContentLeft);

export {ContentLeft};
