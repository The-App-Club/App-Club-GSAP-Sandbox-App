import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150vh;
`;

const Footer = ({style}) => {
  return (
    <StyledFooter>
      <div>
        <p>{'Welcome To Cowboy Bebop!'}</p>
      </div>
    </StyledFooter>
  );
};

export {Footer};
