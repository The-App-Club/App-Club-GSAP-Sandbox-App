import {forwardRef, useRef, useLayoutEffect, useEffect} from 'react';

import {gsap} from 'gsap';

const _FadeIn = ({animation, children, stagger = 0, x = 0}, ref) => {
  const animationRef = useRef(null);

  useLayoutEffect(() => {
    animationRef.current = gsap.from([...ref.current.children], {
      opacity: 0,
      stagger,
      x,
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (typeof animation.current === 'function') {
      console.log('a');
      animation.current([...ref.current.children]);
    } else if (!animation.current) {
      console.log('b');
      animation.current = animationRef.current;
      console.log(animation);
    }
  }, [animation, ref]);

  return <b ref={ref}>{children} </b>;
};

const FadeIn = forwardRef(_FadeIn);

export {FadeIn};
