import styled from '@emotion/styled';

const StyledSlideDescriptionContentItem = styled.li`
  --text: #2e293c;
  width: 500px;
  height: 400px;
  color: var(--text);
  display: flex;
  align-items: center;
  position: absolute;
  opacity: 0;
  &:nth-of-type(1) {
    &:after {
      content: '';
      position: absolute;
      height: 12px;
      width: 310px;
      background: var(--text);
      opacity: 0.3;
      left: 0;
      top: 206px;
    }
  }
  &:nth-of-type(2) {
    &:after {
      content: '';
      position: absolute;
      height: 12px;
      width: 148px;
      background: var(--text);
      opacity: 0.3;
      left: 54px;
      top: 126px;
    }
  }
  &:nth-of-type(3) {
    &:after {
      content: '';
      position: absolute;
      height: 12px;
      width: 280px;
      background: var(--text);
      opacity: 0.3;
      left: 144px;
      top: 166px;
    }
  }
`;

const StyledCaption = styled.div`
  width: 500px;
`;

const StyledQuote = styled.p`
  font-size: 26px;
  letter-spacing: 0.88px;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const StyledName = styled.h3`
  --secondary: #a09da6;
  font-size: 18px;
  letter-spacing: 0.88px;
  line-height: 28px;
  color: var(--secondary);
  font-weight: 600;
`;

const StyledTitle = styled.h4`
  --secondary: #a09da6;
  font-size: 18px;
  letter-spacing: 0.88px;
  line-height: 28px;
  color: var(--secondary);
`;

const SlideDescriptionContentItem = ({ testimonialInfo, className }) => {
  return (
    <StyledSlideDescriptionContentItem className={className}>
      <StyledCaption>
        <StyledQuote>{testimonialInfo.quote}</StyledQuote>
        <StyledName>{testimonialInfo.name}</StyledName>
        <StyledTitle>{testimonialInfo.title}</StyledTitle>
      </StyledCaption>
    </StyledSlideDescriptionContentItem>
  );
};

export { SlideDescriptionContentItem };
