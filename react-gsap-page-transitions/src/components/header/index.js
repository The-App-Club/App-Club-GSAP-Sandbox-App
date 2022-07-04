import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  a {
    margin: 0 28px;
    text-decoration: none;
    color: #181818;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: 'Poppins';
  }
`;
const Header = () => {
  return (
    <StyledHeader>
      <NavLink
        to="/"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        {'Home'}
      </NavLink>
      <NavLink
        to="/about"
        exact
        activeStyle={{
          fontWeight: 'bold',
          color: 'red',
        }}
      >
        {'About'}
      </NavLink>
    </StyledHeader>
  );
};

export default Header;
