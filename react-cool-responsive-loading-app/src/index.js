import React, {useState, useMemo, createRef, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {Loading} from './components/Loading';
import {default as imagesLoaded} from 'imagesloaded';
import {css} from '@emotion/css';

// 100個ぐらいじゃないとそれっぽくでない
const items = [...new Array(200)].map((_, i) => {
  return i;
});

const App = ({context}) => {
  const [isDo, setIsDo] = useState(false);
  const [progress, setProgress] = useState(0);
  const itemsRef = useMemo(() => {
    return [...new Array(items.length)].fill().map(() => createRef());
  }, []);

  useEffect(() => {
    setIsDo(true);
    const images = itemsRef.map((loadedItem) => {
      return loadedItem.current;
    });
    const updateProgress = (instance) => {
      return Math.round((instance.progressedCount * 100) / images.length);
    };
    imagesLoaded(images)
      .on('progress', (instance) => {
        const value = updateProgress(instance);
        setProgress(value);
      })
      .on('always', () => {});
  }, [itemsRef]);

  return (
    <div>
      <Loading isDo={isDo} progress={progress}></Loading>
      <ul
        className={css`
          visibility: hidden;
        `}
      >
        {items.map((item, i) => {
          return (
            <li key={i}>
              <img
                ref={itemsRef[i]}
                src={`https://picsum.photos/seed/${item}/200/300`}
                alt={item}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
