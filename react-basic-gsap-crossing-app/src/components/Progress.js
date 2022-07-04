import {useEffect, forwardRef} from 'react';
import {useScrollTrigger} from './ScrollTriggerProvider';

const _Progress = ({children, sectionNumber}, ref) => {
  return (
    <div
      ref={ref}
      className="progress"
      data-section-number={sectionNumber}
    ></div>
  );
};

const Progress = forwardRef(_Progress);

export {Progress};
