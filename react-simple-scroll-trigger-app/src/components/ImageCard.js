import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  object-fit: cover;
`;

const _ImageCard = ({src, alt}, ref) => {
  return (
    <StyledImageCard>
      <StyledImage ref={ref} src={src} alt={alt} />
    </StyledImageCard>
  );
};

const ImageCard = forwardRef(_ImageCard);

export {ImageCard};
