function detectInteraction(observedEntryInfoList) {
  for (let index = 0; index < observedEntryInfoList.length; index++) {
    const observedEntryInfo = observedEntryInfoList[index];
    if (observedEntryInfo.isIntersecting) {
      const targetDom = observedEntryInfo.target;
      console.log('[attach] targetDom', targetDom);
      targetDom.classList.add('active');
    } else {
      const targetDom = observedEntryInfo.target;
      console.log('[dettach] targetDom', targetDom);
      targetDom.classList.remove('active');
    }
  }
}

const observer = new IntersectionObserver(detectInteraction);
const arrowDom = document.querySelector('.arrow');
observer.observe(arrowDom);
