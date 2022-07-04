import { forwardRef } from 'react';
import styled from '@emotion/styled';

const StyledSlideDescriptionContentItemList = styled.ul`
  position: absolute;
  overflow: hidden;
  width: 500px;
  height: 400px;
`;

const _SlideDescriptionContentItemList = ({ children }, ref) => {
  return (
    <StyledSlideDescriptionContentItemList ref={ref}>
      {children}
    </StyledSlideDescriptionContentItemList>
  );
};

const SlideDescriptionContentItemList = forwardRef(
  _SlideDescriptionContentItemList
);

export { SlideDescriptionContentItemList };
