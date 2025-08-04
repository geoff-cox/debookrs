(function () {
  const boardId1 = 'phase-plane-w-timeplot-3-plot1';
  const boardId2 = 'phase-plane-w-timeplot-3-plot2';
  const tmin = -0.75, tmax = 3.75, xmin = -3, xmax = 3, ymin = -3, ymax = 3;
  const gridSpacing = 0.5;

  const board1 = JXG.JSXGraph.initBoard(boardId1, {
    boundingbox: [xmin, ymax, xmax, ymin],
    axis: false,
    showNavigation: false,
    showCopyright: false,
    grid: false,
  });

  const board2 = JXG.JSXGraph.initBoard(boardId2, {
    boundingbox: [tmin, ymax, tmax, ymin],
    axis: false,
    showNavigation: false,
    showCopyright: false,
    grid: false,
  });

  board1.create('grid', [], { gridX: gridSpacing, gridY: gridSpacing, snapToGrid: false });
  board2.create('grid', [], { gridX: gridSpacing, gridY: gridSpacing, snapToGrid: false });

  const slopeFieldArrows = [];
  function drawSlopeField() {
    const dx = (x, y) => -x;
    const dy = (x, y) => -2 * y + x;
    const normalize = (vx, vy, scale = 0.25) => {
      const mag = Math.sqrt(vx * vx + vy * vy);
      if (mag < 1e-5) return [0, 0];
      return [vx * scale / mag, vy * scale / mag];
    };
    for (let x = xmin; x <= xmax; x += gridSpacing) {
      for (let y = ymin; y <= ymax; y += gridSpacing) {
        const [nx, ny] = normalize(dx(x, y), dy(x, y));
        slopeFieldArrows.push(board1.create('arrow', [[x - nx / 2, y - ny / 2], [x + nx / 2, y + ny / 2]], {
          strokeColor: 'gray', strokeWidth: 1.2, fixed: true, highlight: false, visible: true
        }));
      }
    }
  }
  drawSlopeField();

  board1.create('axis', [[0, 0], [1, 0]], {
    name: 'x',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', position: 'rt', offset: [0, -10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5] },
      drawZero: false,
      insertTicks: false,
      tickDistance: gridSpacing,
      minorTicks: 1
    },
  });

  board1.create('axis', [[0, 0], [0, 1]], {
    name: 'y',
    withLabel: false,
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 2] },
      drawZero: false,
      insertTicks: false,
      tickDistance: gridSpacing,
      minorTicks: 1
    },
  });

  board1.create('text', [-0.25, ymax, "y"], { fontSize: 16, fontWeight: 'bold', anchorY: 'top', useMathjax: true });

  board2.create('axis', [[0, 0], [1, 0]], {
    name: 't',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: 'rt', offset: [0, -10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5] },
      drawZero: false,
      insertTicks: false,
      tickDistance: gridSpacing,
      minorTicks: 1
    },
  });

  board2.create('axis', [[0, 0], [0, 1]], {
    name: 'xy',
    withLabel: false,
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 0] },
      drawZero: false,
      insertTicks: false,
      tickDistance: 1,
      minorTicks: 1
    },
  });

  function xSol(t, x0) { return x0 * Math.exp(-t); }
  function ySol(t, x0, y0) {
    const C = y0;
    return C * Math.exp(-2 * t) + x0 * (Math.exp(-t) - Math.exp(-2 * t));
  }

  const phaseCurves = {}, timeCurves = {};
  let lastKey = null;

  const T = new Array(201);
  const h = (tmax - tmin) / 200;
  for (let i = 0; i <= 200; i++) T[i] = i * h;

  for (let x0 = -2.5; x0 <= 2.5; x0 += gridSpacing) {
    for (let y0 = -2.5; y0 <= 2.5; y0 += gridSpacing) {
      const key = `${x0.toFixed(1)}_${y0.toFixed(1)}`;
      const X = T.map(t => xSol(t, x0));
      const Y = T.map(t => ySol(t, x0, y0));

      phaseCurves[key] = [
        board1.create('curve', [X, Y], { visible: false, strokeColor: 'blue', strokeWidth: 2 }),
        board1.create('point', [x0, y0], {
          visible: false,
          size: 4,
          strokeColor: 'blue', fillColor: 'blue', fixed: true, showInfobox: false, label: { visible: false }
        }),
        board1.create('text', [x0 + 0.1, y0, `(${x0.toFixed(1)}, ${y0.toFixed(1)})`], {
          visible: false,
          fontSize: 14,
          fontWeight: 'bold',
          anchorX: 'left',
          anchorY: 'middle'
        })
      ];

      timeCurves[key] = [
        board2.create('curve', [T, X], { visible: false, strokeColor: 'blue', strokeWidth: 2 }),
        board2.create('curve', [T, Y], { visible: false, strokeColor: 'blue', strokeWidth: 2, dash: 2 })
      ];
    }
  }

  function toggleVisibility(key) {
    if (key === lastKey) return;
    if (lastKey && phaseCurves[lastKey]) {
      phaseCurves[lastKey].forEach(el => el.setAttribute({ visible: false }));
      timeCurves[lastKey].forEach(el => el.setAttribute({ visible: false }));
    }
    if (phaseCurves[key]) {
      phaseCurves[key].forEach(el => el.setAttribute({ visible: true }));
      timeCurves[key].forEach(el => el.setAttribute({ visible: true }));
      lastKey = key;
    }
  }

  function snapToGrid(val) {
    return Math.round(val / gridSpacing) * gridSpacing;
  }

  let hoverTimeout;
  function onHover(handler) {
    return function (e) {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => handler(e), 40);
    };
  }

  board1.on('move', onHover(function (e) {
    const coords = board1.getUsrCoordsOfMouse(e);
    const x = snapToGrid(coords[0]);
    const y = snapToGrid(coords[1]);
    const key = `${x.toFixed(1)}_${y.toFixed(1)}`;
    if (Math.abs(coords[0] - x) < 0.25 && Math.abs(coords[1] - y) < 0.25) {
      toggleVisibility(key);
    }
  }));

  board2.on('move', onHover(function (e) {
    const coords = board2.getUsrCoordsOfMouse(e);
    const y = snapToGrid(coords[1]);
    const key = `1.0_${y.toFixed(1)}`;
    if (Math.abs(coords[0]) < 0.25 && Math.abs(coords[1] - y) < 0.25) {
      toggleVisibility(key);
    }
  }));

  board2.create('legend', [2.35, 2.7], {
    labels: ["x(t)", "y(t)"],
    colors: ['blue', 'blue'],
    linelength: 0.4,
    strokeWidth: 2,
    frozen: true,
    fontSize: 16,
    fontWeight: 'bold'
  }).lines[1].setAttribute({ dash: 2 });

})();
