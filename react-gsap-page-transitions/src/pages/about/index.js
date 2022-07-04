import styled from '@emotion/styled';
import { Title } from '../../components/title';
import { Description } from '../../components/description';

const StyledAboutPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const About = () => {
  return (
    <StyledAboutPage>
      <Title lineContent="How we get" lineContent2="things done" />
      <Description>
        A character his cache I succeed employed entire been it find the more
        and may the to his their five and towards in lay rippedup, what and so
        endure before for her been decades the few to than would was concept.
      </Description>
    </StyledAboutPage>
  );
};

export { About };
