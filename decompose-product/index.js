import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function decompose(selectorClassName, newTop, newLeft) {
  gsap.to(selectorClassName, {
    top: newTop,
    left: newLeft,
    duration: 1,
    ease: 'linear',
  });
}

function compose(targetDom, selectorClassName) {
  const initTopPos = targetDom.getAttribute('data-init-top');
  const initLeftPos = targetDom.getAttribute('data-init-left');
  gsap.to(selectorClassName, {
    top: Number(initTopPos || 0),
    left: Number(initLeftPos || 0),
    duration: 1,
    ease: 'linear',
  });
}

function sceneFix(targetDom) {
  targetDom.parentElement.classList.add('sticky');
}

function coolExplode() {
  const itemInfoList = [
    {
      selectorClassName: '.slide',
      top: -300,
      left: 250,
      callbackOnEnter: sceneFix,
    },
    {selectorClassName: '.barrel', top: -200, left: 150},
    {selectorClassName: '.spring', top: -100, left: 50},
    {
      selectorClassName: '.glob',
      top: -0,
      left: -50,
    },
  ];
  for (let index = 0; index < itemInfoList.length; index++) {
    const {selectorClassName, top, left, callbackOnEnter, callbackOnLeave} =
      itemInfoList[index];

    gsap.to('.scene', {
      scrollTrigger: {
        trigger: selectorClassName,
        start: 'top 50%',
        end: '300px 10%',
        onEnter: (e) => {
          console.log('onEnter', e.trigger);
          if (callbackOnEnter) {
            callbackOnEnter(e.trigger);
          }
          decompose(selectorClassName, top, left);
        },
        onLeave: (e) => {
          console.log('onLeave', e.trigger);
          if (callbackOnLeave) {
            callbackOnLeave(e.trigger);
          }
          compose(e.trigger, selectorClassName);
        },
        onEnterBack: (e) => {
          console.log('onEnterBack', e.trigger);
          if (callbackOnEnter) {
            callbackOnEnter(e.trigger);
          }
          decompose(selectorClassName, top, left);
        },
        onLeaveBack: (e) => {
          console.log('onLeaveBack', e.trigger);
          if (callbackOnLeave) {
            callbackOnLeave(e.trigger);
          }
          compose(e.trigger, selectorClassName);
        },
        markers: true,
      },
      duration: 0.5,
      ease: 'lenear',
    });
  }
}

function sceneUnFix(targetDom) {
  const fixDomList = [...document.querySelectorAll('.fixed')];
  for (let index = 0; index < fixDomList.length; index++) {
    const fixDom = fixDomList[index];
    fixDom.classList.remove("fixed")
  }
}

coolExplode();

