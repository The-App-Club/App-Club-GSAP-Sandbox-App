import styled from '@emotion/styled';

const StyledSubHeader = styled.h3`
  padding-top: 1rem;
`;

const SubHeader = ({children}) => {
  return <StyledSubHeader>{children}</StyledSubHeader>;
};

export {SubHeader};
