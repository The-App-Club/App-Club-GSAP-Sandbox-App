import {useState, useEffect, useRef} from 'react';

export const useIntersection = (
  triggerRef,
  intersectedCallback,
  unintersectedCallback
) => {
  const cachedRef = useRef(null);
  const cachedIntersectedCallback = useRef(null);
  const cachedUnintersectedCallback = useRef(null);
  const [intersecting, setIntersecting] = useState(false);
  cachedRef.current = triggerRef;
  cachedIntersectedCallback.current = intersectedCallback;
  cachedUnintersectedCallback.current = unintersectedCallback;
  useEffect(() => {
    const _ref = cachedRef.current;
    const _intersectedCallback = cachedIntersectedCallback.current;
    const _unintersectedCallback = cachedUnintersectedCallback.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        // console.log(`[intersected]`, entry.target);
        _intersectedCallback();
      } else {
        // console.log(`[unintersected]`, entry.target);
        _unintersectedCallback();
      }
    });

    observer.observe(_ref.current);

    return () => {
      observer.unobserve(_ref.current);
    };
  });

  return intersecting;
};
