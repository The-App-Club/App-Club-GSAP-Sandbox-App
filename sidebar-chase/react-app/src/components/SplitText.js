import {useEffect, useLayoutEffect, useRef, useMemo} from 'react';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import gsap from 'gsap';

import styled from '@emotion/styled';

import {countGrapheme} from '../plugins/countGrapheme';

const StyledText = styled.div`
  font-size: 14rem;
  color: whitesmoke;
  font-family: 'Times New Roman', Times, serif;
  padding: 10px;
  /* font-size: 1.5rem; */
`;
// https://splitting.js.org/guide.html#words
const SplitText = ({text = 'Welcome to Cowboy Bebop !!!!', isStart}) => {
  const tl = useMemo(() => {
    return gsap.timeline({paused: true});
  }, []);
  const el = useRef(null);
  useLayoutEffect(() => {
    const [{words, chars}] = Splitting({
      target: el.current,
      by: 'chars',
      whitespace: true,
    });
    // console.log(words.map((word)=>{return countGrapheme(word.textContent)}), chars);
    // https://greensock.com/docs/v3/Staggers
    tl.fromTo(
      words,
      {
        opacity: 0,
        scale: 4,
        stagger: 0.3,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
      }
    ).fromTo(
      chars,
      0.5,
      {
        y: 0,
        rotation: -360,
        opacity: 1,
        transformOrigin: `center center`,
        stagger: 0.1,
      },
      {
        y: 30,
        rotation: 0,
        opacity: 1,
        transformOrigin: `center center`,
        stagger: 0.1,
        onStart: (e) => {},
        onUpdate: (e) => {},
        onComplete: (e) => {},
      },
      '-=1'
    );
  }, []);

  useEffect(() => {
    if (isStart) {
      tl.play();
    } else {
      tl.reverse();
    }
    return () => {
      tl.kill();
    };
  }, [isStart, tl]);

  return <StyledText ref={el}>{text}</StyledText>;
};

export {SplitText};
