import './smooth-scroll.js';

function detectDeviceType() {
  if (window.matchMedia('(max-width: 400px)').matches) {
    import('./index-sp').then((module) => {
      const spScroll = new module.SpScroll();
      spScroll.start();
    });
  } else {
    import('./index-pc').then((module) => {
      const pcScroll = new module.PcScroll();
      pcScroll.start();
    });
  }
}

detectDeviceType();
window.addEventListener('resize', detectDeviceType);
