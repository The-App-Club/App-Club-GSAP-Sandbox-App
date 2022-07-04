import React, {createRef, useRef, useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
import './index.css';

import {ScrollIndictor} from './components/ScrollIndicator';
import {Intro} from './components/Intro';
import {Card} from './components/Card';
import {Outro} from './components/Outro';
import {Spacer} from './components/Spacer';

gsap.registerPlugin(ScrollToPlugin);

const items = [
  {
    cardId: 1,
    pictureURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
    title: `タイトル`,
    sentence: `サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト`,
  },
  {
    cardId: 2,
    pictureURL: `https://media.giphy.com/media/10VjiVoa9rWC4M/giphy.gif`,
    title: `タイトル`,
    sentence: `サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト`,
  },
  {
    cardId: 3,
    pictureURL: `https://media.giphy.com/media/13TdMFTIORb9aU/giphy.gif`,
    title: `タイトル`,
    sentence: `サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト`,
  },
  {
    cardId: 4,
    pictureURL: `https://media.giphy.com/media/MeFiwDSGDApHy/giphy.gif`,
    title: `タイトル`,
    sentence: `サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト`,
  },
  {
    cardId: 5,
    pictureURL: `https://media.giphy.com/media/1ErpEPbfK9ck0/giphy.gif`,
    title: `タイトル`,
    sentence: `サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト`,
  },
];

const App = ({context}) => {
  const introRef = useRef(null);

  const itemsRef = useMemo(() => {
    return items.map((item, index) => {
      return createRef();
    });
  }, []);

  return (
    <>
      <ScrollIndictor></ScrollIndictor>
      <Intro ref={introRef} />
      {items.map((item, index) => {
        const isLeft = index % 2;
        return (
          <Card
            ref={itemsRef[index]}
            key={index}
            isLeft={isLeft}
            header={item.title}
            paragraph={item.sentence}
            src={item.pictureURL}
            alt={index}
          ></Card>
        );
      })}
      <Outro />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
