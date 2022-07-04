import gsap from 'gsap';
import {ScrollTrigger, ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
import Swiper from 'swiper';

// https://swiperjs.com/swiper-api

const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
