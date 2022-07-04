import {useRef, useCallback} from 'react';

// https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
const useIntersectionObserve = () => {
  const articleRef = useRef(null);
  const navRef = useRef(null);

  const detachActiveClass = (href) => {
    const domList = [...navRef.current.children];
    for (let index = 0; index < domList.length; index++) {
      const dom = domList[index];
      const domId = dom.getAttribute('data-section-id');
      if (domId !== href) {
        dom.classList.remove('active');
      }
    }
  };
  function attachActiveClass(currentDomId) {
    const linkDomList = [...navRef.current.children];
    const currentLinkDom = linkDomList.find((linkDom, index) => {
      return linkDom.getAttribute('data-section-id') === currentDomId;
    });
    currentLinkDom.classList.add('active');
  }

  function detectIntersection(observedEntryInfoList) {
    for (let index = 0; index < observedEntryInfoList.length; index++) {
      const observedEntryInfo = observedEntryInfoList[index];
      const dom = observedEntryInfo.target;
      const href = dom.getAttribute('id');
      if (observedEntryInfo.isIntersecting) {
        // if (!window.matchMedia('(max-width: 768px)').matches) {
        attachActiveClass(href);
        detachActiveClass(href);
        // }
      }
    }
  }

  const observer = new IntersectionObserver(detectIntersection, {
    rootMargin: `-130px`,
  });
  const setArticleRef = useCallback((node) => {
    if (articleRef.current) {
      // Make sure to cleanup any events/references added to the last instance
      observer.unobserve();
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      const sectionDomList = [...node.children];
      for (let index = 0; index < sectionDomList.length; index++) {
        const sectionDom = sectionDomList[index];
        observer.observe(sectionDom);
      }
    }

    // Save a reference to the node
    articleRef.current = node;
    // eslint-disable-next-line
  }, []);
  const setNavRef = useCallback((node) => {
    if (navRef.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      // console.log(node);
    }

    // Save a reference to the node
    navRef.current = node;
    // eslint-disable-next-line
  }, []);
  return [setArticleRef, setNavRef];
};

export {useIntersectionObserve};
