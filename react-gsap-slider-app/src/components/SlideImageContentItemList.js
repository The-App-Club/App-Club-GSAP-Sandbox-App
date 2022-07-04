import { forwardRef } from 'react';
import styled from '@emotion/styled';

const StyledSlideImageContentItemList = styled.ul`
  display: flex;
  position: absolute;
  overflow: hidden;
  height: 460px;
  width: 340px;
  box-shadow: 0px 0px 40px rgba(0, 0, 10, 0.25);
`;

const _SlideImageContentItemList = ({ children }, ref) => {
  return (
    <StyledSlideImageContentItemList ref={ref}>
      {children}
    </StyledSlideImageContentItemList>
  );
};

const SlideImageContentItemList = forwardRef(_SlideImageContentItemList);

export { SlideImageContentItemList };
