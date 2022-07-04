import styled from '@emotion/styled';

const StyledSection = styled.section`
  height: 100vh;
  &:nth-of-type(1) {
    margin-top: 70px;
  }
`;

const Section = ({children, id}) => {
  return <StyledSection id={`section-${id}`}>{children}</StyledSection>;
};

export {Section};
