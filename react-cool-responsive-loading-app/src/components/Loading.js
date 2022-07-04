import {useEffect, useRef, useState} from 'react';
import styled from '@emotion/styled';
// import {default as anime} from 'animejs/lib/anime.es.js';
// import {gsap} from 'gsap/all';
const StyledLoadingContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLoadingLineContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  transition: box-shadow 0.5s;
  padding: 2px;
  position: relative;
  width: 40%;
  height: 20px;
  border: 2px solid rgba(32, 186, 230, 0.5);
  border-radius: 20px;
  @media screen and (max-width: 1500px) {
    width: 45%;
  }
  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 70%;
  }
  @media screen and (max-width: 350px) {
    width: 80%;
  }
`;

const StyledLoadingPercent = styled.span`
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  z-index: 999;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.9rem;
  opacity: 0.9;
`;

const StyledLoadingLine = styled.div`
  width: 0%;
  height: inherit;
  border-radius: inherit;
  background-image: linear-gradient(135deg, #20bae6, #6e06ad);
  opacity: 0.8;
`;
// https://greensock.com/forums/topic/22211-timeline-from-the-onupdate-function-comes-undefined-since-the-302/
// https://greensock.com/forums/topic/15784-gsap-reverse-not-working/?do=findComment&comment=119100
// https://greensock.com/docs/v2/TweenMax/progress()
// const tl = gsap.timeline({
//   onStart: function () {
//     console.log('[start]');
//   },
//   onUpdate: function () {
//     console.log(this.progress());
//   },
//   onComplete: function () {
//     console.log('[finish]');
//   },
// });

const Loading = ({isDo, progress}) => {
  const el = useRef(null);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    if (isDo) {
      setPercent(progress);
      el.current.style.width = `${progress}%`;
    }
  }, [isDo, progress]);
  return (
    <StyledLoadingContainer>
      <StyledLoadingLineContainer>
        <StyledLoadingPercent>{`${percent}%`}</StyledLoadingPercent>
        <StyledLoadingLine ref={el}></StyledLoadingLine>
      </StyledLoadingLineContainer>
    </StyledLoadingContainer>
  );
};

export {Loading};
