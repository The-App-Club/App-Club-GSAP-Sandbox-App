import styled from '@emotion/styled';

const StyledSlideContainer = styled.div`
  width: 1280px;
  min-width: 1280px;
  height: 600px;
  position: relative;
`;

const SlideContainer = ({ children }) => {
  return <StyledSlideContainer>{children}</StyledSlideContainer>;
};

export { SlideContainer };
