import styled from '@emotion/styled';

const StyledDescription = styled.p`
  font-family: 'Poppins';
  margin-top: 200px;
  width: 340px;
  font-weight: 300;
  line-height: 24px;
  font-size: 14px;
  margin-left: 47px;
`;

const Description = ({ children }) => {
  return <StyledDescription>{children}</StyledDescription>;
};

export { Description };
