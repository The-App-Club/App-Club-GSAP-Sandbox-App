import styled from '@emotion/styled';
import rightArrow from '../assets/arrow-right.svg';

const StyledSlideRightArrow = styled.div`
  position: absolute;
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: center;
  right: 0;
  bottom: 0;
  top: 0;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 30px rgba(0, 0, 80, 0.05);
  }
`;

const SlideRightArrow = ({ handleClick,imageList }) => {
  console.log(imageList)
  return (
    <StyledSlideRightArrow onClick={handleClick}>
      <img src={rightArrow} alt="arrow right" />
    </StyledSlideRightArrow>
  );
};

export { SlideRightArrow };
