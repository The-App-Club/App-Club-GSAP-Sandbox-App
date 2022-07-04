import styled from '@emotion/styled';

const StyledSlideImageContent = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: #3f56da;
    left: 140px;
    top: 0;
    border-radius: 100%;
    z-index: -9;
  }
`;

const SlideImageContent = ({ children }) => {
  return <StyledSlideImageContent>{children}</StyledSlideImageContent>;
};

export { SlideImageContent };
