import {createRoot} from 'react-dom/client';
import {useRef, useLayoutEffect, useState, useEffect, useCallback} from 'react';
import {css} from '@emotion/css';
import './styles/index.scss';
import {Button, Slider} from '@mui/material';
import gsap from 'gsap';
import {MathUtils} from 'three';
import * as d3 from 'd3';
import * as BABYLON from 'babylonjs';

const {
  SineEase,
  BackEase,
  BounceEase,
  BezierCurveEase,
  CircleEase,
  CubicEase,
  ElasticEase,
  ExponentialEase,
  PowerEase,
  QuadraticEase,
  QuarticEase,
  QuinticEase,
} = BABYLON;

const App = () => {
  const [tik, setTik] = useState(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(1);
  const [pos, setPos] = useState({y: 0});

  const yScaler = d3.scaleLinear().domain([0, 1]).range([0, 800]);

  const cowboy = useCallback(() => {
    const timer = d3.timer(function (elapsed) {
      const t = MathUtils.clamp(
        (elapsed % (duration * 1000)) / (duration * 1000),
        0,
        1
      );
      setProgress(t);
      if (elapsed > duration * 1000) {
        timer.stop();
      }
    });
  }, [duration]);

  useEffect(() => {
    setPos({
      y: yScaler(new QuarticEase().ease(progress)),
    });
  }, [progress]);

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
        <div
          className={css`
            position: relative;
          `}
        >
          {' '}
          <div
            className={css`
              position: absolute;
              top: ${pos.y}px;
              width: 3rem;
              height: 3rem;
              border-radius: 50%;
              background: red;
            `}
          />
        </div>
      </div>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
