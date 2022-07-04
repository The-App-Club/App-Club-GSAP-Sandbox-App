import React, {useId} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
import './index.css';

import {Article} from './components/Article';
import {Section} from './components/Section';
import {Paragraph} from './components/Paragraph';
import {Image} from './components/Image';
import {Nav} from './components/Nav';

import {useIntersectionObserve} from './hooks/useIntersectionObserve';

gsap.registerPlugin(ScrollToPlugin);

const App = ({context}) => {
  const itemInfoList = [
    {
      id: useId(),
      href: `#section1`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/9FACRWmyUORsQ/giphy.gif`,
    },
    {
      id: useId(),
      href: `#section2`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/vncgdgPWLwGRi/giphy.gif`,
    },
    {
      id: useId(),
      href: `#section3`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/iFW661Tf7Mp1e/giphy.gif`,
    },
    {
      id: useId(),
      href: `#section4`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/okECPQ0lVQeD6/giphy.gif`,
    },
    {
      id: useId(),
      href: `#section5`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/LXTQN2kRbaqAw/giphy.gif`,
    },
    {
      id: useId(),
      href: `#section6`,
      paragraphInfoList: [
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
        {
          id: useId(),
          sentence: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia`,
        },
      ],
      imageURL: `https://media.giphy.com/media/e9R0ytwguezTO/giphy.gif`,
    },
  ];

  const [setArticleRef, setNavRef] = useIntersectionObserve();

  return (
    <>
      <Nav ref={setNavRef} />
      <main>
        <Article ref={setArticleRef}>
          {itemInfoList.map((itemInfo, i) => {
            return (
              <Section key={itemInfo.id} id={itemInfo.href}>
                <Image alt={''} src={itemInfo.imageURL} />
                {itemInfo.paragraphInfoList.map((paragraphInfo, j) => {
                  return (
                    <Paragraph key={paragraphInfo.id}>
                      {paragraphInfo.sentence}
                    </Paragraph>
                  );
                })}
              </Section>
            );
          })}
        </Article>
      </main>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
