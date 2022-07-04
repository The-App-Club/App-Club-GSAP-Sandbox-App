import {forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
`;

const _Image = ({src, alt}, ref) => {
  return (
    <StyledImageContent ref={ref}>
      <StyledImage src={src} alt={alt} />
    </StyledImageContent>
  );
};

const Image = forwardRef(_Image);

export {Image};
