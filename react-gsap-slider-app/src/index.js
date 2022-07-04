import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { gsap } from 'gsap/all';
import { TweenLite, Power3 } from 'gsap';

import 'reset-css';
import './index.scss';

import { SlideSection } from './components/SlideSection';
import { SlideContainer } from './components/SlideContainer';

import { SlideLeftArrow } from './components/SlideLeftArrow';
import { SlideRightArrow } from './components/SlideRightArrow';
import { SlideContent } from './components/SlideContent';
import { SlideDescriptionContent } from './components/SlideDescriptionContent';
import { SlideImageContent } from './components/SlideImageContent';
import { SlideDescriptionContentItemList } from './components/SlideDescriptionContentItemList';
import { SlideDescriptionContentItem } from './components/SlideDescriptionContentItem';
import { SlideImageContentItemList } from './components/SlideImageContentItemList';
import { SlideImageContentItem } from './components/SlideImageContentItem';

gsap.registerPlugin([TweenLite, Power3]);

const testimonials = [
  {
    name: 'Julia Cameron',
    title: 'Creative Director, VISA',
    image: `${require('./assets/image3.jpg')}`,
    quote:
      "It's all good. I was amazed at the quality of the Design. We've seen amazing results already.",
  },
  {
    name: 'Mark Jacobs',
    title: 'Tech Lead, Google',
    image: `${require('./assets/image.jpg')}`,
    quote:
      'The rebranding has really helped our business. Definitely worth the investment.',
  },
  {
    name: 'Lisa Bearings',
    title: 'Brand Coordinator, Facebook',
    image: `${require('./assets/image2.jpg')}`,
    quote:
      'The service was excellent. Absolutely wonderful! A complete redesign did it for us.',
  },
];

function App() {
  let imageList = useRef(null);
  let testimonialList = useRef(null);
  const imageWidth = 340;

  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });

  useEffect(() => {
    TweenLite.to(testimonialList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  //Image transition
  const slideLeft = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: -imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const slideRight = (index, duration, multiplied = 1) => {
    TweenLite.to(imageList.children[index], duration, {
      x: imageWidth * multiplied,
      ease: Power3.easeOut,
    });
  };

  const scale = (index, duration) => {
    TweenLite.from(imageList.children[index], duration, {
      scale: 1.2,
      ease: Power3.easeOut,
    });
  };

  //Content transition

  const fadeOut = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 0,
    });
  };

  const fadeIn = (index, duration) => {
    TweenLite.to(testimonialList.children[index], duration, {
      opacity: 1,
      delay: 1,
    });
  };

  const getCurrentActiveImageDomIndex = () => {
    const activeItemIndex = [...imageList.children].findIndex((dom) => {
      return dom.classList.contains('active');
    });
    return activeItemIndex;
  };

  const nextSlide = () => {
    // console.log('imageList', getCurrentActiveImageDomIndex());
    if (imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive2: true });
      //Image transition
      slideLeft(0, 1);
      slideLeft(1, 1);
      scale(1, 1);
      slideLeft(2, 1);
      slideLeft(2, 0);
      fadeOut(0, 1);
      fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive3: true });
      //Image transition
      slideRight(0, 1);
      slideLeft(1, 1, 2);
      slideLeft(2, 1, 2);
      scale(2, 1);
      //content transition
      fadeOut(1, 1);
      fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive1: true, isActive3: false });
      //Image transition
      slideLeft(2, 1, 3);
      slideLeft(0, 1, 0);
      slideLeft(1, 0, 0);
      scale(0, 1);
      //content transition
      fadeOut(2, 1);
      fadeIn(0, 1);
    }
  };

  const prevSlide = () => {
    if (imageList.children[0].classList.contains('active')) {
      setState({ isActive1: false, isActive3: true });
      //Image transition
      slideLeft(2, 0, 3);
      slideLeft(2, 1, 2);
      scale(2, 1);
      slideRight(0, 1);
      slideRight(1, 1);
      //content transtion
      fadeOut(0, 1);
      fadeIn(2, 1);
    } else if (imageList.children[1].classList.contains('active')) {
      setState({ isActive2: false, isActive1: true });
      //Image transition
      slideLeft(0, 0);
      slideRight(0, 1, 0);
      slideRight(1, 1, 0);
      slideRight(2, 1, 2);
      scale(0, 1);
      //content transtion
      fadeOut(1, 1);
      fadeIn(0, 1);
    } else if (imageList.children[2].classList.contains('active')) {
      setState({ isActive2: true, isActive3: false });
      slideLeft(2, 1);
      slideLeft(1, 0, 2);
      slideLeft(1, 1);
      scale(1, 1);
      //content transtion
      fadeOut(2, 1);
      fadeIn(1, 1);
    }
  };

  return (
    <SlideSection>
      <SlideContainer>
        <SlideLeftArrow handleClick={prevSlide}></SlideLeftArrow>
        <SlideContent>
          <SlideImageContent>
            <SlideImageContentItemList ref={(el) => (imageList = el)}>
              <SlideImageContentItem
                className={state.isActive1 ? 'active' : ''}
                src={testimonials[0].image}
                alt={testimonials[0].name}
              ></SlideImageContentItem>
              <SlideImageContentItem
                className={state.isActive2 ? 'active' : ''}
                src={testimonials[1].image}
                alt={testimonials[1].name}
              ></SlideImageContentItem>
              <SlideImageContentItem
                className={state.isActive3 ? 'active' : ''}
                src={testimonials[2].image}
                alt={testimonials[2].name}
              ></SlideImageContentItem>
            </SlideImageContentItemList>
          </SlideImageContent>
          <SlideDescriptionContent>
            <SlideDescriptionContentItemList
              ref={(el) => (testimonialList = el)}
            >
              <SlideDescriptionContentItem
                testimonialInfo={testimonials[0]}
                className={state.isActive1 ? 'active' : ''}
              ></SlideDescriptionContentItem>
              <SlideDescriptionContentItem
                testimonialInfo={testimonials[1]}
                className={state.isActive2 ? 'active' : ''}
              ></SlideDescriptionContentItem>
              <SlideDescriptionContentItem
                testimonialInfo={testimonials[2]}
                className={state.isActive2 ? 'active' : ''}
              ></SlideDescriptionContentItem>
            </SlideDescriptionContentItemList>
          </SlideDescriptionContent>
        </SlideContent>
        <SlideRightArrow handleClick={nextSlide}></SlideRightArrow>
      </SlideContainer>
    </SlideSection>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
