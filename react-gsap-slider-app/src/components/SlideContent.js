import styled from '@emotion/styled';

const StyledSlideContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const SlideContent = ({ children }) => {
  return <StyledSlideContent>{children}</StyledSlideContent>;
};

export { SlideContent };
