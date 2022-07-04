import styled from '@emotion/styled';
import leftArrow from '../assets/arrow-left.svg';

const StyledSlideLeftArrow = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  bottom: 0;
  top: 0;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
  }
`;
const SlideLeftArrow = ({ handleClick }) => {
  return (
    <StyledSlideLeftArrow onClick={handleClick}>
      <img src={leftArrow} alt="left arrow" />
    </StyledSlideLeftArrow>
  );
};

export { SlideLeftArrow };
