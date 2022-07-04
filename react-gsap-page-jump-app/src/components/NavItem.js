import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
import styled from '@emotion/styled';

gsap.registerPlugin(ScrollToPlugin);

const StyledListItem = styled.li`
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = ({sectionNumber}) => {
  const handleClick = (e) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {y: `#section-${sectionNumber}`, offsetY: 70},
    });
  };

  return (
    <StyledListItem
      onClick={handleClick}
    >{`Section ${sectionNumber}`}</StyledListItem>
  );
};

export {NavItem};
