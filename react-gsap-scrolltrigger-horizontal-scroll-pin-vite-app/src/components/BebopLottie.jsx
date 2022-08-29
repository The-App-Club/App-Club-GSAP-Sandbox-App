import {css, cx} from '@emotion/css';
import animationData from '../lotties/77-im-thirsty.json';
import {useEffect, useMemo, useRef} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useLottie, useLottieInteractivity} from 'lottie-react';
import {transform} from 'framer-motion';

const BebopLottie = ({
  progress,
  startProgress,
  endProgress,
  className = css``,
}) => {
  const itemDomRef = useRef(null);

  // https://lottiereact.com/hooks/useLottie#params
  const {goToAndStop, animationContainerRef, View, animationItem} = useLottie(
    {
      animationData,
      loop: false,
      autoplay: false,
      className: cx(
        css`
          width: 600px;
          height: 600px;
          @media (max-width: 1400px) {
            width: 500px;
            height: 500px;
          }
          @media (max-width: 768px) {
            width: 350px;
            height: 400px;
          }
        `
      ),
    },
    {}
  );

  useEffect(() => {
    if (!animationItem) {
      return;
    }
    const itemDom = itemDomRef.current;
    const maxFrames = animationItem.totalFrames;
    if (startProgress < progress && progress <= endProgress) {
      const clampedProgress = transform(
        [startProgress, endProgress],
        [0, 1]
      )(progress);
      // console.log(
      //   `progress,clampedProgress,startProgress,endProgress`,
      //   progress,
      //   clampedProgress,
      //   startProgress,
      //   endProgress
      // );
      const frame = maxFrames * clampedProgress;
      animationItem.goToAndStop(frame, true);
    }
    return () => {};
  }, [animationItem, progress, startProgress, endProgress]);

  return (
    <div
      ref={itemDomRef}
      className={cx(
        css`
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        `,
        className
      )}
    >
      {View}
    </div>
  );
};

export {BebopLottie};
