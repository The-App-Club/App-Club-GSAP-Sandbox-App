import {useEffect} from 'react';
import {motion, useMotionValue, useTransform} from 'framer-motion';
import {forwardRef} from 'react';
import {useScrollTrigger} from './ScrollTriggerProvider';
import styled from '@emotion/styled';

const StyledSection = styled(motion.section)``;

const _Section = ({children, id, sectionInfo}, ref) => {
  const {progress} = useScrollTrigger();

  // Fade background from start to finish.
  const bg = useTransform(
    progress,
    [0, 1],
    [sectionInfo.startColor || `#FEF7DC`, sectionInfo.endColor || `#E6DDC6`]
  );

  return (
    <StyledSection id={id} ref={ref} style={{backgroundColor: bg}}>
      {children}
    </StyledSection>
  );
};

const Section = forwardRef(_Section);

export {Section};
