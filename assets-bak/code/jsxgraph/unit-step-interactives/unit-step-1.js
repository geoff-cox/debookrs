// === General Settings ===
const dataPath = 'external/code/jsxgraph/unit-step-interactives/';
const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
const a = -5, b = 5; // plotting domain

// === Helper to compute xy aspect ratio ===
function getAspectRatio(board, xRange, yRange) {
  const wPx = board.containerObj.clientWidth;
  const hPx = board.containerObj.clientHeight;
  const pxPerUnitX = wPx / xRange;
  const pxPerUnitY = hPx / yRange;
  return pxPerUnitY / pxPerUnitX;
}

// === Draw an open circle by parametric curve ===
function drawOpenCircle(board, x, y, color, r = 0.1, aspect = 1) {
  return board.create('curve', [
    t => x + r * Math.cos(t) * aspect,
    t => y + r * Math.sin(t),
    0, 2 * Math.PI
  ], {
    strokeColor: color,
    strokeWidth: 2,
    fillColor: 'white',
    fillOpacity: 1,
    fixed: true,
    highlight: false,
    visible: false
  });
}

// === Initialize Boards ===
const boardLabels = JXG.JSXGraph.initBoard("unit-step-labels", {
  boundingbox: [xmin, 1, xmax, 0],
  showCopyright: false,
  showNavigation: false,
  grid: false,
  axis: false,
});

const boardCurves = JXG.JSXGraph.initBoard("unit-step-curves", {
  boundingbox: [xmin, ymax, xmax, ymin],
  showCopyright: false,
  showNavigation: false,
  grid: false,
  axis: false,
});

const xyAspect = getAspectRatio(boardLabels, xmax - xmin, 1);
const xyAspectC = getAspectRatio(boardCurves, xmax - xmin, ymax - ymin);

// === Axes on boardCurves ===
boardCurves.create('axis', [[xmin, 0], [xmax, 0]], {
  name: 't',
  ticks: {
    insertTicks: false,
    minorTicks: 0,
    ticksDistance: 1,
    label: { visible: true, offset: [5, -5], anchorX: 'right', anchorY: 'top', fontSize: 16 },
    majorHeight: 5
  }
});

boardCurves.create('axis', [[0, ymin], [0, ymax]], {
  name: 'f(t)',
  ticks: {
    insertTicks: false,
    minorTicks: 0,
    ticksDistance: 1,
    label: { visible: true, offset: [-5, 0], anchorX: 'right', anchorY: 'middle', fontSize: 16 },
    majorHeight: 5
  }
});

boardLabels.create('text', [xmin + 0.2, 0.5, 'Functions:'], {
  fontSize: 16,
  anchorX: 'left',
  anchorY: 'middle'
});

const allGraphObjects = [];

// === Graph Object Class ===
class GraphObject {
  constructor(func, color, imgPos, imgHt, imgAsp, jumpPts, imgID, plotLabels, labelBoard, curveBoard, aspectImg, aspectCurve) {
    const imgWidth = imgHt * imgAsp * aspectImg;
    const imgSize = [imgWidth, imgHt];
    const imgSrc = dataPath + imgID + ".png";

    this.selected = false;
    this.hovered = false;
    this.jumpMarkers = [];
    this.curveLabels = [];

    this.curve = curveBoard.create('functiongraph', [x => func(x), a, b], {
      strokeColor: color,
      strokeWidth: 2,
      opacity: 0.3,
      visible: false
    });

    if (jumpPts) {
      jumpPts.forEach(([x, y1, y2]) => {
        const open = drawOpenCircle(curveBoard, x, y1, color, 0.13, aspectCurve);
        const closed = curveBoard.create('point', [x, y2], {
          size: 3,
          color: color,
          fixed: true,
          opacity: 0.3,
          visible: false,
          label: { visible: false }
        });
        this.jumpMarkers.push({ open, closed });
      });
    }

    if (plotLabels) {
      console.log("Adding curve labels");
      plotLabels.forEach(([x, y, label]) => {
        console.log("x: " + x + ", y: " + y + ", label: " + label);
        const text = curveBoard.create('text', [x, y, label], {
          fontSize: 16,
          anchorX: 'left',
          anchorY: 'bottom',
          visible: false,
          fixed: true,
          strokeColor: "green"
        });
        this.curveLabels.push({ text });
      });
    }

    this.img = labelBoard.create('image', [imgSrc, imgPos, imgSize], {
      opacity: 0.5,
      anchorX: 'left',
      anchorY: 'bottom',
      fixed: true
    });
    this.img.rendNode.style.cursor = 'pointer';

    this.highlight = () => {
      this.hovered = true;
      this.curve.setAttribute({ visible: true, strokeWidth: 4 });
      this.jumpMarkers.forEach(({ open, closed }) => {
        open.setAttribute({ visible: true, strokeWidth: 4 });
        closed.setAttribute({ visible: true, strokeWidth: 4 });
      });
      allGraphObjects.forEach(g => {
        if (g !== this) {
          g.curve.setAttribute({ opacity: 0.1 });
          g.jumpMarkers.forEach(({ open, closed }) => {
            open.setAttribute({ opacity: 0.1 });
            closed.setAttribute({ opacity: 0.1 });
          });
        }
      });
    };

    this.reset = () => {
      this.hovered = false;
      this.curve.setAttribute({ visible: this.selected, strokeWidth: 2 });
      this.jumpMarkers.forEach(({ open, closed }) => {
        open.setAttribute({ visible: this.selected, strokeWidth: 2 });
        closed.setAttribute({ visible: this.selected, strokeWidth: 2 });
      });
      allGraphObjects.forEach(g => {
        g.curve.setAttribute({ opacity: g.selected ? 1 : 0.3 });
        g.jumpMarkers.forEach(({ open, closed }) => {
          open.setAttribute({ opacity: g.selected ? 1 : 0.3 });
          closed.setAttribute({ opacity: g.selected ? 1 : 0.3 });
        });
      });
    };

    this.toggleSwitch = () => {
      this.selected = !this.selected;
      this.img.setAttribute({ opacity: this.selected ? 1 : 0.5 });
      this.curve.setAttribute({ visible: this.selected || this.hovered, opacity: this.selected ? 1 : 0.3 });
      this.jumpMarkers.forEach(({ open, closed }) => {
        open.setAttribute({ visible: this.selected, opacity: this.selected ? 1 : 0.3 });
        closed.setAttribute({ visible: this.selected, opacity: this.selected ? 1 : 0.3 });
      });
      this.curveLabels.forEach(({ text }) => {
        text.setAttribute({ visible: this.selected });
      });
    };

    this.img.rendNode.addEventListener('mouseenter', this.highlight);
    this.img.rendNode.addEventListener('mouseleave', this.reset);
    this.img.rendNode.addEventListener('pointerdown', this.toggleSwitch);

    allGraphObjects.push(this);
  }
}

// === Graphs ===
const curves = {
  curve1: new GraphObject(
    x => 0.2 * x * x - 1,
    'blue',
    [-1.75, 0.09], 0.82, 383 / 255,
    null,
    '15thtsqrd-1',
    null,
    boardLabels, boardCurves,
    xyAspect, xyAspectC
  ),
  curve2: new GraphObject(
    x => x >= 0 ? 1 : 0,
    'green',
    [0.1, 0.3], 0.4, 219 / 125,
    [[0, 0, 1]],
    'u',
    [[-2.2, 2.1, '"off"'], [1.8, 2.1, '"on"']],
    boardLabels, boardCurves,
    xyAspect, xyAspectC
  ),
  curve3: new GraphObject(
    x => x >= 0 ? 0.2 * x * x - 1 : 0,
    'red',
    [1.5, 0.04], 0.92, 814 / 299,
    [[0, 0, -1]],
    '15thtsqrd-1_times_u',
    [[-2.2, 2.1, '"off"'], [1.8, 2.1, '"on"']],
    boardLabels, boardCurves,
    xyAspect, xyAspectC
  )
};