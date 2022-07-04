import {useId, createRef, useMemo, useState, useLayoutEffect} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.scss';

import gsap from 'gsap';
import {ScrollTrigger, ScrollToPlugin} from 'gsap/all';

const App = ({context}) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

    // キービジュアル
    const topTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.top',
        start: 'top top',
        end: '+=900',
        scrub: true,
        pin: true,
      },
    });
    topTl.fromTo(
      '.top_title',
      {
        opacity: 0,
        scale: 0.2,
      },
      {opacity: 1, scale: 1, ease: 'Power4.out'}
    );
    topTl.to('.top_title_innerLeft', {
      x: -window.innerWidth / 2,
    });
    topTl.to(
      '.top_title_innerRight',
      {
        x: window.innerWidth / 2,
      },
      '<'
    );

    // 説明コンテンツ

    ScrollTrigger.create({
      trigger: '.article_image',
      start: 'top 80',
      endTrigger: '.article_text',
      end: `center 40%`,
      pin: true,
      pinSpacing: false,
    });

    // カード
    const cardTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.cardSection',
        start: 'top top',
        pin: true,
        end: `+=${window.innerHeight}`,
        scrub: 0.5,
      },
    });

    const target = document.querySelector('.cards');
    cardTl.to(target, {
      delay: 0.1,
      x: -target.clientWidth + window.innerWidth - 120,
      ease: 'none',
    });

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  }, []);

  return (
    <div>
      <div className="pin-spacer">
        <section className="top">
          <div className="top_title">
            <span
              className="top_title_innerLeft"
              style={{
                transform: `translate(0px, 0px)`,
              }}
            >
              Hello
            </span>
            <span
              className="top_title_innerRight"
              style={{
                transform: `translate(0px, 0px)`,
              }}
            >
              World
            </span>
          </div>
        </section>
      </div>
      <section className="section js-section-card">
        <article className="article">
          <div className="pin-spacer">
            <img
              className="article_image"
              src="/assets/image/505-1200x900.jpg"
              alt=""
            />
          </div>
          <p className="article_text">
            サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。サンプルテキスト。
          </p>
        </article>
      </section>
      <div className="pin-spacer">
        <section className="cardSection">
          <div className="cards_wrapper">
            <ul
              className="cards"
              style={{
                transform: `translate(0px, 0px)`,
              }}
            >
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/134-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">01</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/60-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">02</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/573-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">03</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/1080-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">04</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/541-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">05</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/533-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">06</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/891-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">07</p>
              </li>
              <li className="singleCard">
                <img
                  className="singleCard_image"
                  src="/assets/image/223-300x400.jpg"
                  alt=""
                />
                <p className="singleCard_text">08</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <section className="bottom"></section>
    </div>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
