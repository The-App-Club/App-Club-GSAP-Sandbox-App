import gsap from 'gsap';

let parameter = {
  message: 'ちくわっしゅっ',
  fontSize: 30,
  textColor: '#3f51b5',
  duration: 1,
  opacity: 1,
  scale: 0.5,
  x: 30,
  y: 0,
  easingType: 'power1',
  progress: 0,
};

let controllerInfo = {
  Message: parameter.message,
  'Font Size': parameter.fontSize,
  'Text Color': parameter.textColor,
  Duration: parameter.duration,
  Opacity: parameter.opacity,
  Scale: parameter.scale,
  X: parameter.x,
  Y: parameter.y,
  'Easing Type': parameter.easingType,
  Progress: parameter.progress,
  'Animation Restart': () => {
    restart();
  },
};

function restart() {
  window.dispatchEvent(new CustomEvent('restart'));
}

function reflectProgress() {
  window.dispatchEvent(
    new CustomEvent('progress', {
      detail: parameter.progress,
    })
  );
}

function detectChangeParameter(event, keyName) {
  const itemDom = document.querySelector('.msg');
  if (keyName === 'Message') {
    parameter.message = event;
    itemDom.innerHTML = event;
  }
  if (keyName === 'Font Size') {
    parameter.fontSize = event;
    itemDom.style.fontSize = `${event}px`;
  }
  if (keyName === 'Text Color') {
    parameter.textColor = event;
    itemDom.style.color = `${parameter.textColor}`;
  }
  if (keyName === 'Duration') {
    parameter.duration = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'Opacity') {
    parameter.opacity = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'Scale') {
    parameter.scale = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'X') {
    parameter.x = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'Y') {
    parameter.y = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'Easing Type') {
    parameter.easingType = event;
    update();
    setTimeout(() => {
      restart();
    }, 120);
  }
  if (keyName === 'Progress') {
    parameter.progress = event;
    reflectProgress();
  }
}

const gui = new dat.GUI();
gui.width = 300;
const html = gui.addFolder('HTML');
html.add(controllerInfo, 'Message').onChange((event) => {
  detectChangeParameter(event, 'Message');
});
html.open();

const css = gui.addFolder('CSS');
css.add(controllerInfo, 'Font Size', 16, 50, 1).onChange((event) => {
  detectChangeParameter(event, 'Font Size');
});
css.addColor(controllerInfo, 'Text Color').onChange((event) => {
  detectChangeParameter(event, 'Text Color');
});
css.open();

const js = gui.addFolder('JS');
js.add(controllerInfo, 'Duration', 0, 2, 0.1).onChange((event) => {
  detectChangeParameter(event, 'Duration');
});
js.add(controllerInfo, 'Opacity', 0, 1, 0.01).onChange((event) => {
  detectChangeParameter(event, 'Opacity');
});
js.add(controllerInfo, 'Scale', 0, 1, 0.01).onChange((event) => {
  detectChangeParameter(event, 'Scale');
});
js.add(controllerInfo, 'X', -window.innerWidth, window.innerWidth, 1).onChange(
  (event) => {
    detectChangeParameter(event, 'X');
  }
);
js.add(
  controllerInfo,
  'Y',
  -window.innerHeight,
  window.innerHeight,
  1
).onChange((event) => {
  detectChangeParameter(event, 'Y');
});
js.add(controllerInfo, 'Easing Type', ['none', 'power1', 'bounce']).onChange(
  (event) => {
    detectChangeParameter(event, 'Easing Type');
  }
);
js.open();

const animation = gui.addFolder('Animation');
animation.add(controllerInfo, 'Animation Restart');
animation.add(controllerInfo, 'Progress', 0, 1, 0.01).onChange((event) => {
  detectChangeParameter(event, 'Progress');
});
animation.open();

let stats;
stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = 0;
stats.domElement.style.top = 0;
document.body.appendChild(stats.domElement);

function loop() {
  requestAnimationFrame(loop);
  stats.begin();
  stats.end();
}

const itemDom = document.querySelector('.msg');
itemDom.innerHTML = parameter.message;

function update() {
  const animationTimeline = gsap.timeline().to(
    '.msg',
    {
      duration: parameter.duration,
      ease: parameter.easingType,
      opacity: parameter.opacity,
      scale: parameter.scale,
      x: parameter.x,
      y: parameter.y,
    },
    0.5
  );

  window.addEventListener('restart', (e) => {
    animationTimeline.restart();
  });
  window.addEventListener('progress', (e) => {
    animationTimeline.pause().progress(e.detail);
  });
}

update();
loop();
