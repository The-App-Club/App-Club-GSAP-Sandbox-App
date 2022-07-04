import {useRef, useMemo} from 'react';
import {gsap} from 'gsap';

const useSelector = () => {
  const ref = useRef();
  const q = useMemo(() => {
    return gsap.utils.selector(ref);
  }, [ref]);
  return [q, ref];
};

export {useSelector};
