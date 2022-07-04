import styled from '@emotion/styled';

// MEMO mainの高さ分を引数にとってTOP位置に配置する
const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100vh;
`;

const StyledFooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = ({ children }) => {
  return (
    <StyledFooter>
      <StyledFooterContent>{'@copyright Cowboy Bebop'}</StyledFooterContent>
    </StyledFooter>
  );
};

export default Footer;
