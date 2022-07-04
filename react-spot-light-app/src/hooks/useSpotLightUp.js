import {useRef, useCallback} from 'react';

function useSpotLightUp() {
  // https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
  const ref = useRef(null);
  const spotLightUp = function (e) {
    ref.current.style.background = `radial-gradient(50px 50px at ${e.clientX}px ${e.clientY}px, transparent, transparent 30px, rgba(0,0,0,0.6) 50px)`;
  };

  const setRef = useCallback((node) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
      document.body.removeEventListener('mousemove', spotLightUp);
    }

    if (node) {
      console.log(ref.current);
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
      document.body.addEventListener('mousemove', spotLightUp);
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
}

export {useSpotLightUp};
