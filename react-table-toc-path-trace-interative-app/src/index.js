import React, {createRef, useMemo, useId} from 'react';
import {createRoot} from 'react-dom/client';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
import './index.css';

import {ScrollIndictor} from './components/ScrollIndicator';
import {Spacer} from './components/Spacer';
import {Article} from './components/Article';
import {Section} from './components/Section';
import {Header} from './components/Header';
import {SubHeader} from './components/SubHeader';
import {Paragraph} from './components/Paragraph';
import {Image} from './components/Image';
import {Nav} from './components/Nav';

gsap.registerPlugin(ScrollToPlugin);

const App = ({context}) => {
  const itemInfoList = [
    {
      id: useId(), // section
      href: '#intro',
      title: 'Intro', //h2
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Progress Nav`, // h3
          paragraphInfoList: [
            // p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
        {
          id: useId(),
          header: `Slides for Developers`, // h3
          paragraphInfoList: [
            // p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(), // section
      href: '#dev',
      title: 'Developer', //h2
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Developer Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(), // section
      href: '#dev-edit-html',
      title: 'Edit HTML', // h2
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Developer Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
              inside of a standard page nav. Scroll the page and note how the marker
              animates to highlight all of the sections that are currently on
              screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#dev-element-classes',
      title: 'Element Classes',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Element Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
        {
          id: useId(),
          header: `Element Mode2`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#dev-slide-classes',
      title: 'Slide Classes',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Slide Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
        {
          id: useId(),
          header: `Slide Mode2`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#dev-export-html',
      title: 'Export HTML',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Export HTML Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#css',
      title: 'CSS Editor',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `CSS Editor Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#css-fonts',
      title: 'Custom Fonts',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Custom Fonts Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#css-developer-mode',
      title: 'Developer Mode',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Developer Fonts Mode`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
    {
      id: useId(),
      href: '#css-examples',
      title: 'Examples',
      blockInfoList: [
        // div
        {
          id: useId(),
          header: `Examples`, //h3
          paragraphInfoList: [
            //p
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
            {
              id: useId(),
              sentence: `This page demonstrates an idea for how progress can be visualized
            inside of a standard page nav. Scroll the page and note how the marker
            animates to highlight all of the sections that are currently on
            screen.`,
            },
          ],
          imageURL: `https://media.giphy.com/media/11KzOet1ElBDz2/giphy.gif`,
        },
      ],
    },
  ];

  const sectionsRef = useMemo(() => {
    return itemInfoList.map((itemInfo, index) => {
      return createRef();
    });
    // eslint-disable-next-line
  }, []);

  const blocksRef = useMemo(() => {
    let a = [...Array(itemInfoList.length)];
    itemInfoList.forEach((itemInfo, i) => {
      a[i] = [...Array(itemInfo.blockInfoList.length)];
      itemInfo.blockInfoList.forEach((blockInfo, j) => {
        a[i][j] = createRef();
      });
    });
    return a;
    // eslint-disable-next-line
  }, []);

  const paragraphsRef = useMemo(() => {
    let a = [...Array(itemInfoList.length)];
    itemInfoList.forEach((itemInfo, i) => {
      a[i] = [...Array(itemInfo.blockInfoList.length)];
      itemInfo.blockInfoList.forEach((blockInfo, j) => {
        a[i][j] = [...Array(blockInfo.paragraphInfoList.length)];
        blockInfo.paragraphInfoList.forEach((paragraphInfo, k) => {
          a[i][j][k] = createRef();
        });
      });
    });
    return a;
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScrollIndictor></ScrollIndictor>
      <Nav />
      <Article>
        {itemInfoList.map((itemInfo, i) => {
          return (
            <Section key={i} id={itemInfo.href} ref={sectionsRef[i]}>
              <Header>{itemInfo.title}</Header>
              {itemInfo.blockInfoList.map((blockInfo, j) => {
                return (
                  <div key={j} id={blockInfo.id} ref={blocksRef[i][j]}>
                    <SubHeader>{blockInfo.header}</SubHeader>
                    {blockInfo.paragraphInfoList.map((paragraphInfo, k) => {
                      return (
                        <Paragraph key={k} ref={paragraphsRef[i][j][k]}>
                          {paragraphInfo.sentence}
                        </Paragraph>
                      );
                    })}
                    <Image src={blockInfo.imageURL} alt={''} />
                  </div>
                );
              })}
            </Section>
          );
        })}
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
      </Article>
    </>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
