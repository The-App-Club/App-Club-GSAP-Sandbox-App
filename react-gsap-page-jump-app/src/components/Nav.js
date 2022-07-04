import styled from '@emotion/styled';
import {NavItem} from './NavItem';
const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        {[1, 2, 3].map((sectionNumber, index) => {
          return <NavItem key={index} sectionNumber={sectionNumber} />;
        })}
      </StyledList>
    </StyledNav>
  );
};

export {Nav};
