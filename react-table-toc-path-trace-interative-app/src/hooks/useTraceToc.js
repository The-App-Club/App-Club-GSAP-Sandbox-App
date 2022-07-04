import {useRef, useCallback, useEffect} from 'react';
var tocItems;

// Factor of screen size that the element must cross
// before it's considered visible
var TOP_MARGIN = 0.1,
  BOTTOM_MARGIN = 0.2;

var pathLength;

var lastPathStart, lastPathEnd;

// https://medium.com/@teh_builder/ref-objects-inside-useeffect-hooks-eb7c15198780
const useTraceToc = () => {
  const tocRef = useRef(null);
  const tocMarkerPathRef = useRef(null);

  const sync = useCallback((tocMarkerPathDom) => {
    var windowHeight = window.innerHeight;

    var pathStart = pathLength,
      pathEnd = 0;

    var visibleItems = 0;

    tocItems.forEach(function (item) {
      var targetBounds = item.target.getBoundingClientRect();

      if (
        targetBounds.bottom > windowHeight * TOP_MARGIN &&
        targetBounds.top < windowHeight * (1 - BOTTOM_MARGIN)
      ) {
        pathStart = Math.min(item.pathStart, pathStart);
        pathEnd = Math.max(item.pathEnd, pathEnd);

        visibleItems += 1;

        item.listItem.classList.add('visible');
      } else {
        item.listItem.classList.remove('visible');
      }
    });

    // Specify the visible path or hide the path altogether
    // if there are no visible items
    if (visibleItems > 0 && pathStart < pathEnd) {
      if (pathStart !== lastPathStart || pathEnd !== lastPathEnd) {
        tocMarkerPathDom.setAttribute('stroke-dashoffset', '1');
        tocMarkerPathDom.setAttribute(
          'stroke-dasharray',
          '1, ' + pathStart + ', ' + (pathEnd - pathStart) + ', ' + pathLength
        );
        tocMarkerPathDom.setAttribute('opacity', 1);
      }
    } else {
      tocMarkerPathDom.setAttribute('opacity', 0);
    }

    lastPathStart = pathStart;
    lastPathEnd = pathEnd;
  }, []);

  const drawPath = useCallback((tocDom, tocMarkerPathDom) => {
    tocItems = [...tocDom.querySelectorAll('li')];

    // Cache element references and measurements
    tocItems = tocItems.map(function (item) {
      var anchor = item.querySelector('a');
      var target = document.getElementById(
        anchor.getAttribute('href').slice(1)
      );

      return {
        listItem: item,
        anchor: anchor,
        target: target,
      };
    });

    // Remove missing targets
    tocItems = tocItems.filter(function (item) {
      return !!item.target;
    });

    var path = [];
    var pathIndent;

    tocItems.forEach(function (item, i) {
      var x = item.anchor.offsetLeft - 5,
        y = item.anchor.offsetTop,
        height = item.anchor.offsetHeight;

      if (i === 0) {
        path.push('M', x, y, 'L', x, y + height);
        item.pathStart = 0;
      } else {
        // Draw an additional line when there's a change in
        // indent levels
        if (pathIndent !== x) {
          path.push('L', pathIndent, y);
        }

        path.push('L', x, y);

        // Set the current path so that we can measure it
        tocMarkerPathDom.setAttribute('d', path.join(' '));
        item.pathStart = tocMarkerPathDom.getTotalLength() || 0;

        path.push('L', x, y + height);
      }

      pathIndent = x;

      tocMarkerPathDom.setAttribute('d', path.join(' '));
      item.pathEnd = tocMarkerPathDom.getTotalLength();
    });

    pathLength = tocMarkerPathDom.getTotalLength();

    sync.bind(this, tocMarkerPathDom);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const tocDom = tocRef.current;
    const tocMarkerPathDom = tocMarkerPathRef.current;
    const bindedDrawPath = drawPath.bind(this, tocDom, tocMarkerPathDom);
    const bindedSync = sync.bind(this, tocMarkerPathDom);
    window.addEventListener('load', bindedDrawPath, {passive: false});
    window.addEventListener('scroll', bindedSync, {passive: false});
    window.addEventListener('resize', bindedDrawPath, {passive: false});
    return () => {
      window.removeEventListener('load', bindedDrawPath, {passive: false});
      window.removeEventListener('scroll', bindedSync, {passive: false});
      window.removeEventListener('resize', bindedDrawPath, {passive: false});
    };
    // eslint-disable-next-line
  }, []);

  const setTocRef = useCallback((node) => {
    if (tocRef.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    tocRef.current = node;
  }, []);
  const setTocMarkerPathRef = useCallback((node) => {
    if (tocMarkerPathRef.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
      // Check if a node is actually passed. Otherwise node would be null.
      // You can now do what you need to, addEventListeners, measure, etc.
    }

    // Save a reference to the node
    tocMarkerPathRef.current = node;
  }, []);

  return [setTocRef, setTocMarkerPathRef];
};

export {useTraceToc};
