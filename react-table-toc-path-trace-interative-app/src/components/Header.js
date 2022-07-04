import styled from '@emotion/styled';

const StyledHeader = styled.h2`
  padding-top: 1rem;
`;

const Header = ({children}) => {
  return <StyledHeader>{children}</StyledHeader>;
};

export {Header};
