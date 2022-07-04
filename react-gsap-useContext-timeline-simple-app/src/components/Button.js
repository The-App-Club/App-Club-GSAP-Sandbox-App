import styled from '@emotion/styled';

const StyledButton = styled.button`
  --light: #dee4de;
  --dark: #123455;
  --green-light: #b9eeb7;
  display: inline-block;
  outline: none;
  border: none;
  padding: 8px 14px;
  background: var(--light);
  background-image: linear-gradient(
    to bottom,
    hsl(0deg 0% 100%),
    hsl(0deg 0% 94%)
  );
  -webkit-box-shadow: 0px 1px 0px #414141;
  -moz-box-shadow: 0px 1px 0px #414141;
  box-shadow: 0px 1px 0px #414141;
  color: var(--dark);
  text-decoration: none;
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;
  padding: 12px 25px;
  font-family: 'Signika Negative', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;

  &:hover {
    background: var(--green-light);
    background-image: linear-gradient(to bottom, #57a818, #4d9916);
    -webkit-box-shadow: 0px 1px 0px fefefe;
    -moz-box-shadow: 0px 1px 0px fefefe;
    box-shadow: 0px 1px 0px fefefe;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Button = ({handleClick, children}) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export {Button};
