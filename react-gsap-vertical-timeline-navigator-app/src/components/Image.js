import styled from '@emotion/styled';

const StyledImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`;

const Image = ({src, alt}) => {
  return (
    <StyledImageContent>
      <StyledImage src={src} alt={alt}></StyledImage>
    </StyledImageContent>
  );
};

export {Image};
