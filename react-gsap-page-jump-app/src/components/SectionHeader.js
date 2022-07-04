import styled from '@emotion/styled';

const StyledSectionHeader = styled.h2``;

const SectionHeader = ({children}) => {
  return <StyledSectionHeader>{children}</StyledSectionHeader>;
};

export {SectionHeader};
