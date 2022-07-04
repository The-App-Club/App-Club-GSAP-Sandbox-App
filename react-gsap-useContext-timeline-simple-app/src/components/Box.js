import styled from '@emotion/styled';
import {forwardRef, useEffect} from 'react';
import {gsap} from 'gsap';
import {useContext} from 'react';
import {NiceContext} from '../contexts/Nice';

const StyledBox = styled.div`
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function _Box({children, id}, ref) {
  const {selected} = useContext(NiceContext);
  useEffect(() => {
    console.log('id, selected', id, Number(selected), Number(selected) === id);
    gsap.to(ref.current, {
      x: Number(selected) === id ? 200 : 0,
    });
  }, [selected, id, ref]);

  return <StyledBox ref={ref}>{children}</StyledBox>;
}

const Box = forwardRef(_Box);

export {Box};
