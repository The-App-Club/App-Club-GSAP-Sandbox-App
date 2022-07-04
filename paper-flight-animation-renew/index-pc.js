// import * as ScrollMagic from 'scrollmagic';
// import {ScrollToPlugin, CSSRulePlugin} from 'gsap/all';
// import {ScrollMagicPluginGsap} from 'scrollmagic-plugin-gsap';
// import { TweenMax,  TweenLite, TimelineMax ,TimelineLite, Power1, Linear} from 'gsap/gsap-core';
// import gsap from 'gsap/all';
// ScrollMagicPluginGsap(ScrollMagic, TweenLite, TimelineLite);

// gsap.registerPlugin(CSSRulePlugin);
// gsap.registerPlugin(ScrollToPlugin);

class PcScroll {
  start() {
    console.log('PC');

    let svg = document.querySelector(`#trace-layer`),
      plane = document.querySelector(`.plane`),
      pathString = document.querySelector(`#path-cubic`).getAttribute('d'),
      pathCubic = Snap.path.toCubic(pathString),
      arrayPath = [],
      quantity = 900,
      duration = svg.getBoundingClientRect().height,
      position = {
        x: pathCubic[0].x,
        y: [pathCubic[0].y],
      },
      dot,
      i;

    let containerDom = document.querySelector('.container');
    containerDom.style.height = `${svg.getBoundingClientRect().height}px`;

    let controller = new ScrollMagic.Controller();

    // function to measure how to keep element vertically centered
    function calcOffset() {
      let center =
          window.scrollY +
          window.innerHeight / 2 -
          plane.getBoundingClientRect().height / 2,
        offset = plane.offsetTop,
        distance = center - offset;
    }

    function setUpPoint(segment) {
      for (let i = 0; i < segment.length; i += 2) {
        let point = {};
        point.x = segment[i];
        point.y = segment[i + 1];
        arrayPath.push(point);
      }
    }

    //set starting position for plane
    TweenLite.set(plane, {
      x: 0,
      y: -180,
    });

    for (let i = 0; i < pathCubic.length; i++) {
      let segment = pathCubic[i],
        point;
      segment.shift();
      point = setUpPoint(segment);
    }

    // add looping plane to timeline
    let planeTL1 = new TimelineMax().add(
      TweenMax.to(plane, duration, {
        bezier: {
          values: arrayPath,
          type: 'cubic',
          autoRotate: true,
        },
        ease: Linear.easeInOut,
        onUpdate: calcOffset,
      })
    );

    let scene = new ScrollMagic.Scene({
      triggerElement: '.container',
      duration: duration,
    })
      .setTween(planeTL1)
      .addTo(controller)
      // when scroll direction changes, plane direction changes
      .on('update', function (e) {
        let st = e.target.controller().info('scrollDirection');
        if (st === 'FORWARD') {
          plane.setAttribute('src', './images/paper-right.png');
        } else if (st === 'REVERSE') {
          plane.setAttribute('src', './images/paper-left.png');
        }
      });
  }
}

export {PcScroll};
