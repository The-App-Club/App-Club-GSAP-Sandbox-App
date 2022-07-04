import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150vh;
`;
const Header = ({style}) => {
  return (
    <StyledHeader>
      <div>
        <h1>ScrollTrigger</h1>
        <h2>demo</h2>
      </div>
    </StyledHeader>
  );
};

export {Header};
