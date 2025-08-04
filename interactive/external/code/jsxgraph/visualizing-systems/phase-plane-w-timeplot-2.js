(function () {
  const boardId1 = 'phase-plane-w-timeplot-2-plot1';
  const boardId2 = 'phase-plane-w-timeplot-2-plot2';
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

  let board1Curves = [], board2Curves = [];

  function clearBoard(board, storage) {
    for (const el of storage) {
      try {
        board.removeObject(el);
      } catch (e) {
        console.warn("Failed to remove object:", e);
      }
    }
    storage.length = 0;
  }

  function plotSolution(x0, y0) {
    clearBoard(board1, board1Curves);
    clearBoard(board2, board2Curves);

    const T = new Array(201);
    const X = new Array(201);
    const Y = new Array(201);
    const h = (tmax - tmin) / 200;

    for (let i = 0; i <= 200; i++) {
      const t = i * h;
      T[i] = t;
      X[i] = xSol(t, x0);
      Y[i] = ySol(t, x0, y0);
    }

    board1Curves.push(board1.create('curve', [X, Y], {
      strokeColor: 'blue', strokeWidth: 2
    }));
    board1Curves.push(board1.create('point', [x0, y0], {
      name: '',
      label: { visible: false },
      showInfobox: false,
      size: 4,
      strokeColor: 'blue',
      fillColor: 'blue',
      fixed: true
    }));
    board1Curves.push(board1.create('text', [x0 + 0.1, y0, `(${x0.toFixed(1)}, ${y0.toFixed(1)})`], {
      fontSize: 14,
      fontWeight: 'bold',
      anchorX: 'left',
      anchorY: 'middle'
    }));

    board2Curves.push(board2.create('curve', [T, X], {
      strokeColor: 'blue', strokeWidth: 2, dash: 0
    }));
    board2Curves.push(board2.create('curve', [T, Y], {
      strokeColor: 'blue', strokeWidth: 2, dash: 2
    }));
  }

  function snapToGrid(val) {
    return Math.round(val / gridSpacing) * gridSpacing;
  }

  board1.on('move', function (e) {
    const coords = board1.getUsrCoordsOfMouse(e);
    const x = snapToGrid(coords[0]);
    const y = snapToGrid(coords[1]);
    if (Math.abs(coords[0] - x) < 0.25 && Math.abs(coords[1] - y) < 0.25) {
      plotSolution(x, y);
    }
  });

  board2.on('move', function (e) {
    const coords = board2.getUsrCoordsOfMouse(e);
    const y = snapToGrid(coords[1]);
    if (Math.abs(coords[0]) < 0.25 && Math.abs(coords[1] - y) < 0.25) {
      plotSolution(1, y);
    }
  });

  board2.create('legend', [2.35, 2.7], {
    labels: ["x(t)", "y(t)"],
    colors: ['blue', 'blue'],
    linelength: 0.4,
    strokeWidth: 2,
    frozen: true,
    fontSize: 16,
    fontWeight: 'bold',
  }).lines[1].setAttribute({ dash: 2 });

})();
