import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledStage = styled.div`
  width: 400px;
  height: 300px;
  margin-left: 40%;
  opacity: 1;
  transition: opacity 0.5s;
  &.active {
    background-image: url(https://placehold.jp/400x300.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
  }
`;

const _Stage = ({children}, ref) => {
  return <StyledStage ref={ref}></StyledStage>;
};

const Stage = forwardRef(_Stage);

export {Stage};
