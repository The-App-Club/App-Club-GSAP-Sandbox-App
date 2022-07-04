import {default as imagesLoaded} from 'imagesloaded';
import {useState, useEffect, useRef, forwardRef} from 'react';
import styled from '@emotion/styled';

const StyledLoader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _Loading = ({loadedItemList, detectLoadingFinish, showDemo}, ref) => {
  const percentTextRef = useRef(null);
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const images = loadedItemList.map((loadedItem) => {
      return loadedItem.current;
    });
    const updateProgress = (instance) => {
      return Math.round((instance.progressedCount * 100) / images.length);
    };
    imagesLoaded(images)
      .on('progress', (instance) => {
        const percent = updateProgress(instance);
        setPercent(percent);
      })
      .on('always', () => {
        detectLoadingFinish({loadingStatus: 1});
        showDemo();
      });
  }, [loadedItemList, detectLoadingFinish, showDemo]);

  return (
    <StyledLoader ref={ref}>
      <div>
        <h1>Loading</h1>
        <h2 ref={percentTextRef}>{`${percent}%`}</h2>
      </div>
    </StyledLoader>
  );
};

const Loading = forwardRef(_Loading);
export {Loading};
