import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 30px;
  padding: 30px;
  width: 100%;
  background-image: url(https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif);
  background-origin: top left;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -0% 50%;
`;

const _Footer = ({children}, ref) => {
  return <StyledFooter ref={ref}>{'Thank You Watching'}</StyledFooter>;
};

const Footer = forwardRef(_Footer);

export {Footer};
