import {motion} from 'framer-motion';
import {useEffect, useMemo, createRef} from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/css';

import gsap from 'gsap';

const StyledStaggerImage = styled(motion.div)`
  position: absolute;
  top: 330px;
  right: 400px;
  display: flex;
  gap: 3rem;
  align-items: center;
`;

const StyledImage = styled(motion.div)`
  & {
    overflow: hidden;
    position: relative;
    width: 120px;
    img {
      display: block;
      width: 100%;
      max-width: 100%;
    }
  }
`;

const StaggerImage = ({
  parentId,
  imageInfoList,
  isAnimate,
  sectionNumber,
  activeSectionNumber,
}) => {
  const imagesRef = useMemo(() => {
    return imageInfoList.map((imageInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const imageDomList = imagesRef.map((imageref, _) => {
      return imageref.current;
    });
    if (sectionNumber === activeSectionNumber) {
      if (isAnimate) {
        gsap
          .timeline()
          .from(imageDomList, {opacity: 0, y: 120, stagger: 0.2})
          .to(imageDomList, {opacity: 1, y: 0, stagger: 0.2});
      } else {
        gsap
          .timeline()
          .from(imageDomList, {opacity: 1, y: 0, stagger: 0.1})
          .to(imageDomList, {opacity: 0, y: 120, stagger: 0.1});
      }
    } else {
      gsap.timeline().set(imageDomList, {opacity: 0, y: 120});
    }
    // eslint-disable-next-line
  }, [isAnimate, sectionNumber, activeSectionNumber]);

  return (
    <StyledStaggerImage>
      {imageInfoList.map((imageInfo, index) => {
        return (
          <StyledImage
            key={index}
            className={css`
              top: ${imageInfo.pos.top};
              left: ${imageInfo.pos.left};
            `}
          >
            <img
              ref={imagesRef[index]}
              src={imageInfo.url}
              alt={imageInfo.alt}
            />
          </StyledImage>
        );
      })}
    </StyledStaggerImage>
  );
};

export {StaggerImage};
