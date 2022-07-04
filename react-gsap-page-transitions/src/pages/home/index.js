import styled from '@emotion/styled';
import { Title } from '../../components/title';
import { Description } from '../../components/description';

const StyledHomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Home = () => {
  return (
    <StyledHomePage>
      <Title
        lineContent="Solving Solutions that"
        lineContent2="need expert insight"
      />
      <Description>
        Does project report used question death, out more rhetoric unpleasing
        what compared both of sentinels.
      </Description>
    </StyledHomePage>
  );
};

export { Home };
