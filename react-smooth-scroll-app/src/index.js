import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {useScrollSmooth} from './hooks/useScrollSmooth';

const App = ({context}) => {
  const {current: startY} = useScrollSmooth();
  console.log(startY);
  return (
    <div>
      {[...new Array(30)].map((item, index) => {
        return (
          <div
            key={index}
            style={{
              width: 100,
              height: 100,
            }}
          >
            {index}
          </div>
        );
      })}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 100,
          height: 100,
          background: `pink`,
        }}
      >
        {startY}
      </div>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App />);
