import styled from '@emotion/styled';
import {useRef, forwardRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import {Paragraph} from './Paragraph';
import {CardHeader} from './CardHeader';
import {Picture} from './Picture';

const StyledCard = styled.div`
  margin: 0 auto;
  max-width: 40%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100vh;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const StyledText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  flex-direction: column;
`;

const _Card = ({children, header, paragraph, src, alt, isLeft}, ref) => {
  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const pictureRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80p%',
        end: `+=${window.innerHeight / 2}`,
        scrub: 1,
        markers: false,
      },
    });

    tl.fromTo(
      headerRef.current,
      {y: 150, opacity: 0, x: 0},
      {
        y: 0,
        x: isLeft ? -200 : 200,
        opacity: 1,
        ease: 'none',
        duration: 1,
      },
      '<'
    );

    tl.fromTo(
      paragraphRef.current,
      {y: 150, opacity: 0, x: 0},
      {
        y: 0,
        x: isLeft ? -200 : 200,
        opacity: 1,
        ease: 'none',
        duration: 1,
      },
      '<'
    );

    tl.fromTo(
      pictureRef.current,
      {scale: 1},
      {scale: 1.6, ease: 'none', duration: 1},
      '<'
    );
    return () => {
      tl.kill();
    };
    // eslint-disable-next-line
  }, []);

  const renderLeft = () => {
    return (
      <StyledCard ref={ref}>
        <StyledText>
          <CardHeader ref={headerRef}>{header}</CardHeader>
          <Paragraph ref={paragraphRef}>{paragraph}</Paragraph>
        </StyledText>
        <Picture ref={pictureRef} src={src} alt={alt} />
      </StyledCard>
    );
  };
  const renderRight = () => {
    return (
      <StyledCard ref={ref}>
        <Picture ref={pictureRef} src={src} alt={alt} />
        <StyledText>
          <CardHeader ref={headerRef}>{header}</CardHeader>
          <Paragraph ref={paragraphRef}>{paragraph}</Paragraph>
        </StyledText>
      </StyledCard>
    );
  };

  return <>{isLeft ? renderLeft() : renderRight()}</>;
};

const Card = forwardRef(_Card);

export {Card};
