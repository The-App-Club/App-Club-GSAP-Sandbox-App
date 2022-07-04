import React from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {Flip} from 'gsap/all';
import styled from '@emotion/styled';

import {Box} from './components/Box';
import {Button} from './components/Button';

const StyledBoxes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const {useState, useLayoutEffect, useRef} = React;

gsap.registerPlugin(Flip);
let count = 0;
const wrapColor = gsap.utils.wrap(['blue', 'red', 'purple', 'orange']);

function createItem() {
  return {id: ++count, color: wrapColor(count), status: 'entered'};
}

function App() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  const [layout, setLayout] = useState(() => {
    return {
      items: [createItem(), createItem(), createItem(), createItem()].reverse(),
    };
  });

  useLayoutEffect(() => {
    if (!layout.state) {
      return;
    }

    // get the items that are exiting in this batch
    const exiting = layout.items.filter((item) => {
      return item.status === 'exiting';
    });

    // Flip.from returns a timeline
    const timeline = Flip.from(layout.state, {
      absolute: true,
      ease: 'power1.inOut',
      targets: q('.box'),
      scale: true,
      simple: true,
      onEnter: (elements) => {
        return gsap.fromTo(
          elements,
          {
            opacity: 0,
            scale: 0,
          },
          {
            opacity: 1,
            scale: 1,
            delay: 0.2,
            duration: 0.3,
          }
        );
      },
      onLeave: (elements) => {
        return gsap.to(elements, {
          opacity: 0,
          scale: 0,
        });
      },
    });

    // remove the exiting items from the DOM after the animation is done
    timeline.add(() => {
      removeItems(exiting);
    });
    // eslint-disable-next-line
  }, [layout]);

  const removeItems = (exitingItems) => {
    if (!exitingItems.length) {
      return;
    }

    setLayout((prev) => ({
      state: Flip.getState(q('.box')),
      items: prev.items.filter((item) => !exitingItems.includes(item)),
    }));
  };

  const addItem = () => {
    console.log(q('.box'));
    setLayout({
      state: Flip.getState(q('.box')),
      items: [createItem(), ...layout.items],
    });
  };

  const shuffle = () => {
    setLayout({
      state: Flip.getState(q('.box')),
      items: [...gsap.utils.shuffle(layout.items)],
    });
  };

  const remove = (item) => {
    // set the item as exiting which will add a CSS class for display: none;
    item.status = 'exiting';

    setLayout({
      ...layout,
      state: Flip.getState(q('.box')),
    });
  };

  return (
    <div ref={el}>
      <div>
        <Button className="button" handleClick={addItem}>
          Add Box
        </Button>
        <Button className="button" handleClick={shuffle}>
          Shuffle
        </Button>
      </div>
      <StyledBoxes>
        {layout.items.map((item) => {
          return (
            <Box
              id={`box-${item.id}`}
              key={item.id}
              className={`box ${item.color} ${item.status}`}
              onClick={() => remove(item)}
            >
              Click Me
            </Box>
          );
        })}
      </StyledBoxes>
    </div>
  );
}

const container = document.querySelector('#root');

const root = createRoot(container);

root.render(<App />);
