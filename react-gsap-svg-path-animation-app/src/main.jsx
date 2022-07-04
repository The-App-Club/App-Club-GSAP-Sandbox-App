import {createRoot} from 'react-dom/client';
import {cx, css} from '@emotion/css';
import styled from '@emotion/styled';
import {Slider} from '@mui/material';
import {useEffect, useState, useRef, useMemo, useCallback, useId} from 'react';
import * as d3 from 'd3';
import gsap, {Power4, Power3, Power2} from 'gsap';

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100vh;
  width: 100%;
`;

const paths = {
  step1: `M 16.71 24.473 C 33.912 -3.363 53.826 13.712 75.935 44.812 C 84.482 56.834 85.419 69.487 75.797 77.664 C 59.844 91.222 29.035 89.003 19.094 70.004 C 12.368 57.148 5.621 42.416 16.71 24.473 Z`,
  step2: `M 40.185 33.49 C 48.118 21.773 59.756 22.799 75.15 38.316 C 86.578 49.835 78.14 65.96 62.042 77.212 C 48.267 86.841 29.623 79.343 21.566 64.069 C 16.111 53.731 33.832 42.873 40.185 33.49 Z`,
  step3: `M 20.164 23.213 C 28.097 11.496 44.54 -0.692 59.934 14.825 C 71.362 26.344 78.14 65.96 62.042 77.212 C 48.267 86.841 29.623 79.343 21.566 64.069 C 16.111 53.731 13.811 32.596 20.164 23.213 Z`,
  step4: `M 16.71 24.473 C 33.912 -3.363 53.826 13.712 75.935 44.812 C 84.482 56.834 85.419 69.487 75.797 77.664 C 59.844 91.222 29.035 89.003 19.094 70.004 C 12.368 57.148 5.621 42.416 16.71 24.473 Z`,
};

const App = () => {
  const [size, setSize] = useState(
    window.matchMedia(`(max-width: 768px)`).matches ? 150 : 300
  );
  const [input, setInput] = useState({
    default: window.matchMedia(`(max-width: 768px)`).matches ? 150 : 300,
    min: window.matchMedia(`(max-width: 768px)`).matches ? 150 : 300,
    max: window.matchMedia(`(max-width: 768px)`).matches ? 300 : 500,
  });

  const handleResize = (e) => {
    setInput((input) => {
      return {
        ...input,
        default: window.matchMedia(`(max-width: 768px)`).matches ? 150 : 300,
        min: window.matchMedia(`(max-width: 768px)`).matches ? 150 : 300,
        max: window.matchMedia(`(max-width: 768px)`).matches ? 300 : 500,
      };
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setSize(e.target.value);
  };
  const id = useId();
  const svgDomRef = useRef(null);
  const pathDomRef = useRef(null);

  const tl = useMemo(() => {
    return gsap.timeline({paused: true, repeat: -1});
  }, []);

  const pathList = useMemo(() => {
    return Object.entries(paths).map((item) => {
      return item[1];
    });
  }, []);

  useEffect(() => {
    const pathList = Object.entries(paths).map((item) => {
      return item[1];
    });
    const pairs = d3.pairs(pathList);
    const pathDom = pathDomRef.current;
    tl.fromTo(
      pathDom,
      {
        attr: {d: pairs[0][0]},
      },
      {
        attr: {d: pairs[0][1]},
        duration: 1.4,
        ease: Power4.easeOut,
      }
    )
      .fromTo(
        pathDom,
        {
          attr: {d: pairs[1][0]},
        },
        {
          attr: {d: pairs[1][1]},
          duration: 1.2,
          ease: Power3.easeOut,
        }
      )
      .fromTo(
        pathDom,
        {
          attr: {d: pairs[2][0]},
        },
        {
          attr: {d: pairs[2][1]},
          duration: 0.8,
          ease: Power2.easeOut,
        }
      );

    tl.play();
  }, []);

  return (
    <>
      <div
        className={css`
          position: fixed;
          top: 3rem;
          left: 3rem;
          width: 100%;
          max-width: 20rem;
          margin: 0 auto;
          @media (max-width: 768px) {
            padding: 3rem 0;
            top: 0;
            left: 50%;
            transform: translate(-50%, 0%);
          }
        `}
      >
        <Slider
          defaultValue={input.default}
          min={input.min}
          max={input.max}
          step={1}
          value={size}
          aria-label="Default"
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
      </div>
      <StyledContainer>
        <svg
          ref={svgDomRef}
          width={size}
          viewBox="0 0 100 100"
          className={css`
            display: block;
          `}
        >
          <g>
            <clipPath id={`morph-${id}`}>
              <path
                ref={pathDomRef}
                d={paths.step1}
                className={css`
                  stroke-linejoin: round;
                `}
              />
            </clipPath>
            <image
              clipPath={`url(#morph-${id})`}
              href={`https://media.giphy.com/media/4ilFRqgbzbx4c/giphy.gif`}
              width={'100%'}
              height={'100%'}
            ></image>
          </g>
        </svg>
      </StyledContainer>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
