import styled from '@emotion/styled';

const StyledSlideDescriptionContent = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  align-items: center;
`;

const SlideDescriptionContent = ({ children }) => {
  return (
    <StyledSlideDescriptionContent>{children}</StyledSlideDescriptionContent>
  );
};

export { SlideDescriptionContent };
