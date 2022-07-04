import gsap from 'gsap';
import {ScrollToPlugin} from 'gsap/all';
gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('nav button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {y: '#section' + (index + 1), offsetY: 0},
    });
  });
});

const detectInteraction = (observedEntryInfoList) => {
  for (let index = 0; index < observedEntryInfoList.length; index++) {
    const observedEntryInfo = observedEntryInfoList[index];
    if (observedEntryInfo.isIntersecting) {
      console.log(`attach animation to`, observedEntryInfo.target);

      gsap.to(observedEntryInfo.target, {opacity: 0.7, duration: 2});
    } else {
      console.log(`detach animation from`, observedEntryInfo.target);

      gsap.to(observedEntryInfo.target, {opacity: 0, duration: 2});
    }
  }
};

const sentenceObserver = new IntersectionObserver(detectInteraction);
const observedItemDomList = [...document.querySelectorAll('.sentence')];
for (let index = 0; index < observedItemDomList.length; index++) {
  const observedItemDom = observedItemDomList[index];
  sentenceObserver.observe(observedItemDom);
}

let mutationObserver = new MutationObserver(coolCallBack);

function coolCallBack(mutations) {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
      console.log('[Mutation Detected childList]', mutation);
    }
    if (mutation.type === 'attributes') {
      console.log('[Mutation Detected attributes]', mutation);
    }

    if (mutation.type === 'subtree') {
      console.log('[Mutation Detected subtree]', mutation);
    }
  }
}

mutationObserver.observe(document.querySelector('#section2'), {
  // https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/
  // 変更対象のプロパティをフィルタリングできる
  childList: true,
  attributes: true,
  subtree: true,
});
