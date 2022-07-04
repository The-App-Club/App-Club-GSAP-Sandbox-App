import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from '@emotion/styled';

const StyledTitle = styled.h1`
  font-family: 'Bebas Neue';
  font-size: 3rem;
  letter-spacing: 0.1rem;
  .line-wrap {
    word-wrap: break-word;
  }
`;

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: 'power3.out',
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <StyledTitle>
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div ref={(el) => (line2 = el)} className="line">
          {lineContent2}
        </div>
      </div>
    </StyledTitle>
  );
};

export { Title };
