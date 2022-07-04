import styled from '@emotion/styled';

const StyledButton = styled.button`
  font-weight: 100;
  color: black;
  font-size: 1rem;
  width: 100%;
  display: block;
  border-radius: 2rem;
  background: black;
  outline: none;
  color: white;
  cursor: pointer;
  padding: 2rem;
`;

const Button = ({handleClick, buttonDisplayName}) => {
  return (
    <StyledButton onClick={handleClick}>
      Click me to {buttonDisplayName}
    </StyledButton>
  );
};

export {Button};
