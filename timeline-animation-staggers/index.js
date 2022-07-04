import gsap from 'gsap';

function clearGrid() {
  const containerDom = document.querySelector(`#container`);
  const cellDomList = [...containerDom.querySelectorAll('*')];
  for (let index = 0; index < cellDomList.length; index++) {
    const cellDom = cellDomList[index];
    cellDom.parentElement.removeChild(cellDom);
  }
}

// https://codepen.io/GreenSock/pen/vYBRPbO
function buildGrid(info) {
  clearGrid();
  const containerDom = document.querySelector(`#container`);
  const rows = info.grid[0] || 5;
  const cols = info.grid[1] || 5;
  const gutter = info.gutter || 1;
  const width = info.width || 100;
  const wPerCol = (width - cols * gutter) / cols;
  const w = (wPerCol / width) * 100;
  const l = rows * cols;
  const className = info.className;
  containerDom.style.lineHeight = `0`;
  containerDom.style.padding = `${gutter}px 0 0 ${gutter}px`;
  containerDom.style.display = 'inline-block';
  containerDom.style.width = `${width}px`;
  for (let i = 0; i < l; i++) {
    const cellDom = document.createElement('div');
    cellDom.style.display = 'inline-block';
    cellDom.style.margin = `0 ${(gutter / width) * 100}% ${
      (gutter / width) * 100
    }% 0`;
    cellDom.style.width = `${w}%`;
    cellDom.setAttribute('class', className);
    cellDom.setAttribute('data-index', i);
    cellDom.addEventListener('click', onCellClick, false);
    containerDom.appendChild(cellDom);
  }
}

function updateCellGrid(row, col) {
  cellGrid = [row, col];
}

function updateSelection(targetFrom, targetAaxis, targetEaseing) {
  selections = {
    from: targetFrom,
    axis: targetAaxis,
    ease: targetEaseing,
  };
}

function detectChangeParameter(event, keyName) {
  if (keyName === 'Row') {
    parameter.row = event;

    updateCellGrid(parameter.row, parameter.col);

    buildGrid({
      grid: cellGrid,
      className: 'cell',
      width: window.innerWidth * 0.6,
      gutter: 2,
      parent: '#container',
    });
  }
  if (keyName === 'Col') {
    parameter.col = event;

    updateCellGrid(parameter.row, parameter.col);

    buildGrid({
      grid: cellGrid,
      className: 'cell',
      width: window.innerWidth * 0.6,
      gutter: 2,
      parent: '#container',
    });
  }
  if (keyName === 'From') {
    parameter.from = event;
  }
  if (keyName === 'Axis') {
    if (event === 'both') {
      parameter.axis = null;
    } else {
      parameter.axis = event;
    }
  }
  if (keyName === 'Easing') {
    parameter.easing = event;
  }

  updateSelection(parameter.from, parameter.axis, parameter.easing);

  updateAnimation();
}

function updateFromCell(value) {
  selections.from = value;
  if (!isNaN(value)) {
    gsap.fromTo(
      "[data-index='" + value + "']",
      {rotation: 0},
      {
        duration: 0.4,
        rotation: 360,
        backgroundColor: '#88ce02',
        ease: 'power1.inOut',
      }
    );
  }
}

function animateCellList(from, axis, ease) {
  tl.to('.cell', {
    duration: 1,
    scale: 0.1,
    y: 60,
    yoyo: true,
    repeat: 1,
    ease: 'power1.inOut',
    stagger: {
      amount: 1.5,
      grid: cellGrid,
      axis: axis,
      ease: ease,
      from: from,
    },
  });
}

function updateAnimation() {
  tl.seek(0).clear();
  animateCellList(selections.from, selections.axis, selections.ease);
}

function onCellClick(e) {
  const cellNumber = Number(e.target.getAttribute('data-index'));
  updateFromCell(cellNumber);
  updateAnimation();
}

let tl = gsap.timeline({repeat: -1, repeatDelay: 0.5});

let parameter = {
  from: 'center',
  axis: 'both',
  easing: 'none',
  row: 8,
  col: 16,
};

let cellGrid = [parameter.row, parameter.col];

let selections = {
  from: parameter.from,
  axis: parameter.axis,
  ease: parameter.easing,
};

let controllerInfo = {
  From: parameter.from,
  Axis: parameter.axis,
  Easing: parameter.easing,
  Row: parameter.row,
  Col: parameter.col,
};

const gui = new dat.GUI();
gui.width = 300;
gui.add(controllerInfo, 'Row', 8, 16, 1).onChange((event) => {
  detectChangeParameter(event, 'Row');
});
gui.add(controllerInfo, 'Col', 16, 50, 1).onChange((event) => {
  detectChangeParameter(event, 'Col');
});
gui
  .add(controllerInfo, 'From', ['center', 'end', 'edges', 'random'])
  .onChange((event) => {
    detectChangeParameter(event, 'From');
  });

gui.add(controllerInfo, 'Axis', ['both', 'x', 'y']).onChange((event) => {
  detectChangeParameter(event, 'Axis');
});

gui
  .add(controllerInfo, 'Easing', ['none', 'power3.inOut', 'power2.in'])
  .onChange((event) => {
    detectChangeParameter(event, 'Easing');
  });
gui.open();

buildGrid({
  grid: cellGrid,
  className: 'cell',
  width: window.innerWidth * 0.6,
  gutter: 2,
  parent: '#container',
});
