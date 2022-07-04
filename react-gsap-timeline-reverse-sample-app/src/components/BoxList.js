import {forwardRef} from 'react';
import styled from '@emotion/styled';

import {Box} from './Box';
const StyledBoxList = styled.div`
  margin: 2rem 0;
`;

const _BoxList = ({nuts = 10}, ref) => {
  return (
    <StyledBoxList ref={ref} className="boxes">
      {Array(nuts)
        .fill()
        .map((e, index) => {
          return <Box key={index} />;
        })}
    </StyledBoxList>
  );
};

const BoxList = forwardRef(_BoxList);
export {BoxList};
