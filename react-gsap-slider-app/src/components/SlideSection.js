import styled from '@emotion/styled';

const StyledSlideSection = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    width: 900px;
    height: 550px;
    background: #f2f2f6;
    right: 0;
    bottom: 0;
    opacity: 0.8;
    z-index: -10;
  }
`;

const SlideSection = ({ children }) => {
  return <StyledSlideSection>{children}</StyledSlideSection>;
};

export { SlideSection };
