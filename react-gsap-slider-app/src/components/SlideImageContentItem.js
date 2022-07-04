import styled from '@emotion/styled';

const StyledSlideImageContentItem = styled.li`
  height: 460px;
  width: 340px;
`;

const StyledImage = styled.img`
  height: 460px;
  width: 340px;
`;

const SlideImageContentItem = ({ src, alt, className }) => {
  return (
    <StyledSlideImageContentItem className={className}>
      <StyledImage src={src} alt={alt}></StyledImage>
    </StyledSlideImageContentItem>
  );
};

export { SlideImageContentItem };
