import styled from '@emotion/styled';
import {forwardRef} from 'react';
const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Times New Roman', Times, serif;
  position: sticky;
  text-align: center;
  font-size: 60px;
  padding: 30px;
  top: 0;
  z-index: 1;
  width: 100%;
  background-image: url(https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif);
  background-origin: top left;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -0% -0%;
`;

const _Header = ({children}, ref) => {
  return <StyledHeader ref={ref}>{'CowBoy Bebop'}</StyledHeader>;
};

const Header = forwardRef(_Header);

export {Header};
