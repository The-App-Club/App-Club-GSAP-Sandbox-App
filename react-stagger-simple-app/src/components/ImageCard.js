import styled from '@emotion/styled';
import {forwardRef} from 'react';
const StyledImageCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`;

const _ImageCard = ({width, height, src, alt}, ref) => {
  return (
    <StyledImageCard ref={ref}>
      <StyledImage width={width} height={height} src={src} alt={alt} />
    </StyledImageCard>
  );
};

const ImageCard = forwardRef(_ImageCard);

export {ImageCard};
