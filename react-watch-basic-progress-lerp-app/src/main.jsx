import {createRoot} from 'react-dom/client';
import {useRef, useLayoutEffect, useState, useEffect, useCallback} from 'react';
import {css} from '@emotion/css';
import '@fontsource/inter';
import './styles/index.scss';
import {Button, Slider} from '@mui/material';
import {isMobile} from 'react-device-detect';
import * as d3 from 'd3';
import {samples} from 'culori';
import {Spacer} from './components/Spacer';
import gsap, {Power3, Linear} from 'gsap';
import {MathUtils, Vector2} from 'three';

const a = ['#FFE6E6', '#F2D1D1', '#DAEAF1', '#C6DCE4'];

const interpolatorList = d3.pairs(a).map(([from, to], index) => {
  return (t) => {
    return d3.interpolateHsl(from, to)(t);
  };
});

// samples(interpolatorList.length)

// console.log(interpolatorList)

const App = () => {
  const [tik, setTik] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(1);

  const cowboy = useCallback(() => {
    const time = {t: 0};
    gsap.to(time, {
      t: 1,
      ease: Linear.easeInOut,
      duration,
      onUpdate: (instance) => {
        const t = MathUtils.clamp(time.t, 0, 1);
        setProgress(t);
      },
    });
  }, [duration]);

  useEffect(() => {
    if (!tik) {
      return;
    }
    cowboy();
  }, [tik]);

  const handleClick = (e) => {
    setTik(new Date());
  };

  const handleChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <>
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 3rem;
        `}
      >
        <div
          className={css`
            margin: 0 auto;
            max-width: 20rem;
            width: 100%;
            display: flex;
            gap: 1rem;
            @media (max-width: 768px) {
              max-width: 100%;
            }
          `}
        >
          <Slider
            defaultValue={0}
            min={0}
            max={10}
            step={0.1}
            value={duration}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={handleChange}
          />
          <Button onClick={handleClick} variant={'outlined'}>
            {'Do'}
          </Button>
        </div>
        {[...Array(3).keys()].map((n, index) => {
          return <Spacer key={index} />;
        })}
        <div
          className={css`
            font-size: 3rem;
          `}
        >
          {`${(progress * 100).toFixed(2)} %`}
        </div>
        {[...Array(3).keys()].map((n, index) => {
          return <Spacer key={index} />;
        })}
        <div
          className={css`
            background: linear-gradient(135deg, #ef9f9f 32%, #f47c7c 92%);
            background-repeat: no-repeat;
            background-size: ${progress * 100}% 100%;
            border-radius: 3px;
            height: 10px;
            width: 100%;
          `}
        />
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
