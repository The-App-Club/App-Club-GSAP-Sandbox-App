import styled from '@emotion/styled';
import {forwardRef} from 'react';

const StyledPicture = styled.picture`
  width: 100%;
  max-width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  max-width: 100%;
  display: block;
`;

const _Picture = ({src, alt}, ref) => {
  return (
    <StyledPicture ref={ref}>
      <StyledImage src={src} alt={alt} />
    </StyledPicture>
  );
};

const Picture = forwardRef(_Picture);

export {Picture};
