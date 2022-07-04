import styled from '@emotion/styled';
import {motion} from 'framer-motion';
import gsap from 'gsap';
import {useEffect, useMemo, createRef} from 'react';
const StyledBannerRow = styled(motion.span)`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
`;

const StyledBannerLetter = styled(motion.span)`
  font-size: 3rem;
  font-weight: 500;
  display: inline-block;
`;

const StyledBannerTitle = StyledBannerLetter;

const StyledBanner = styled(motion.div)`
  position: absolute;
  top: 100px;
  left: 100px;
`;

const Banner = ({
  title = 'Cowboy Bebop',
  isAnimate,
  sectionNumber,
  activeSectionNumber,
}) => {
  const charsRef = useMemo(() => {
    return [...title].map((imageInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    const charDomList = charsRef.map((charRef, _) => {
      return charRef.current;
    });
    if (sectionNumber === activeSectionNumber) {
      if (isAnimate) {
        gsap
          .timeline()
          .from(charDomList, {opacity: 0, y: 200, stagger: 0.1})
          .to(charDomList, {opacity: 1, y: 0, stagger: 0.1});
      } else {
        gsap
          .timeline()
          .from(charDomList, {opacity: 1, y: 0, stagger: 0.1})
          .to(charDomList, {opacity: 0, y: 200, stagger: 0.1});
      }
    } else {
      gsap.timeline().set(charDomList, {opacity: 0, y: 200});
    }
    // eslint-disable-next-line
  }, [isAnimate, sectionNumber, activeSectionNumber]);

  return (
    <StyledBanner>
      <StyledBannerRow>
        <StyledBannerTitle>
          {[...title].map((letter, index) => (
            <StyledBannerLetter key={index} ref={charsRef[index]}>
              {letter}
            </StyledBannerLetter>
          ))}
        </StyledBannerTitle>
      </StyledBannerRow>
    </StyledBanner>
  );
};

export {Banner};
