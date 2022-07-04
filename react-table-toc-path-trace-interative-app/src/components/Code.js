import styled from '@emotion/styled';

const StyledCodeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledPre = styled.pre`
  white-space: pre;
  overflow: auto;
  width: 100%;
  max-width: 100%;
`;

const StyledCode = styled.code`
  display: block;
  background-color: #f9f9f9;
  padding: 10px;
`;

const Code = ({children}) => {
  return (
    <StyledCodeContent>
      <StyledPre>
        <StyledCode></StyledCode>
      </StyledPre>
    </StyledCodeContent>
  );
};

export {Code};
