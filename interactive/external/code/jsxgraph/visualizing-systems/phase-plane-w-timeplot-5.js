(function () {
  const boardId1 = 'phase-plane-w-timeplot-5-plot1';
  const boardId2 = 'phase-plane-w-timeplot-5-plot2';
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

  board1.create('axis', [[0, 0], [1, 0]], {
    name: 'x', withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', position: 'rt', offset: [0, -10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5] },
      drawZero: false, insertTicks: false, tickDistance: gridSpacing, minorTicks: 1
    },
  });

  board1.create('axis', [[0, 0], [0, 1]], {
    name: 'y', withLabel: false,
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 2] },
      drawZero: false, insertTicks: false, tickDistance: gridSpacing, minorTicks: 1
    },
  });

  board2.create('axis', [[0, 0], [1, 0]], {
    name: 't', withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: 'rt', offset: [0, -10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5] },
      drawZero: false, insertTicks: false, tickDistance: gridSpacing, minorTicks: 1
    },
  });

  board2.create('axis', [[0, 0], [0, 1]], {
    name: 'xy', withLabel: false,
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 0] },
      drawZero: false, insertTicks: false, tickDistance: 1, minorTicks: 1
    },
  });

  const slopeFieldArrows = [];
  function drawSlopeField() {
    const dx = (x, y) => -x;
    const dy = (x, y) => -2 * y + x;
    const normalize = (vx, vy, scale = 0.2) => {
      const mag = Math.sqrt(vx * vx + vy * vy);
      if (mag < 1e-5) return [0, 0];
      return [vx * scale / mag, vy * scale / mag];
    };
    for (let x = xmin; x <= xmax; x += gridSpacing) {
      for (let y = ymin; y <= ymax; y += gridSpacing) {
        const [nx, ny] = normalize(dx(x, y), dy(x, y));
        slopeFieldArrows.push(board1.create('arrow', [[x - nx / 2, y - ny / 2], [x + nx / 2, y + ny / 2]], {
          strokeColor: '#999', strokeWidth: 1.2, fixed: true, highlight: false, visible: true,
          lastArrow: { size: 3 }
        }));
      }
    }
  }
  drawSlopeField();

  function xSol(t, x0) { return x0 * Math.exp(-t); }
  function ySol(t, x0, y0) {
    const C = y0;
    return C * Math.exp(-2 * t) + x0 * (Math.exp(-t) - Math.exp(-2 * t));
  }

  let lastElements = [];

  function plotSolution(x0, y0) {
    const T = Array.from({ length: 201 }, (_, i) => i * (tmax - tmin) / 200);
    const X = T.map(t => xSol(t, x0));
    const Y = T.map(t => ySol(t, x0, y0));

    lastElements.forEach(el => {
      try { el.board.removeObject(el); } catch {}
    });
    lastElements = [];

    const xColor = '#0077cc';
    const yColor = '#cc4400';

    const curve1 = board1.create('curve', [X, Y], { strokeColor: xColor, strokeWidth: 2 });
    const pt1 = board1.create('point', [x0, y0], {
      size: 4, strokeColor: xColor, fillColor: xColor, fixed: true,
      name: `(${x0.toFixed(1)}, ${y0.toFixed(1)})`, label: { fontSize: 14, fontWeight: 'bold', anchorX: 'middle', anchorY: y0 >= 0 ? 'bottom' : 'top', offset: y0 >= 0 ? [0,8] : [0, -5] }
    });

    const xt = board2.create('curve', [T, X], { strokeColor: xColor, strokeWidth: 2 });
    const yt = board2.create('curve', [T, Y], { strokeColor: yColor, strokeWidth: 2 });

    const labelOffsetX = 0.1, labelOffsetY = 0.2;
    const labelXAbove = x0 < y0;

    const labelXt = board2.create('text', [T[1] + labelOffsetX, X[1] + (labelXAbove ? -labelOffsetY : labelOffsetY), 'x(t)'], {
      fontSize: 14, fontWeight: 'bold', anchorX: 'left', anchorY: labelXAbove ? 'top' : 'bottom', strokeColor: xColor
    });

    const labelYt = board2.create('text', [T[1] + labelOffsetX, Y[1] + (labelXAbove ? labelOffsetY : -labelOffsetY), 'y(t)'], {
      fontSize: 14, fontWeight: 'bold', anchorX: 'left', anchorY: labelXAbove ? 'bottom' : 'top', strokeColor: yColor
    });

    const ptX0 = board2.create('point', [0, x0], {
      name: '', size: 3, strokeColor: xColor, fillColor: '#ffffff', fixed: true, highlight: false, face: 'o'
    });

    const ptY0 = board2.create('point', [0, y0], {
      name: '', size: 3, strokeColor: yColor, fillColor: '#ffffff', fixed: true, highlight: false, face: '[]'
    });

    const ptXProj = board1.create('point', [x0, 0], {
      name: '', size: 3, strokeColor: xColor, fillColor: '#ffffff', fixed: true, highlight: false, face: 'o'
    });

    const ptYProj = board1.create('point', [0, y0], {
      name: '', size: 3, strokeColor: yColor, fillColor: '#ffffff', fixed: true, highlight: false, face: '[]'
    });

    const vertLine = board1.create('line', [[x0, y0], [x0, 0]], {
      dash: 2, strokeWidth: 2, strokeColor: xColor, straightFirst: false, straightLast: false, fixed: true
    });
    const horzLine = board1.create('line', [[x0, y0], [0, y0]], {
      dash: 2, strokeWidth: 2, strokeColor: yColor, straightFirst: false, straightLast: false, fixed: true
    });

    lastElements = [curve1, pt1, xt, yt, labelXt, labelYt, ptX0, ptY0, ptXProj, ptYProj, vertLine, horzLine];
  }

  function snapToGrid(val) {
    return Math.round(val / gridSpacing) * gridSpacing;
  }

  board1.on('down', function (e) {
    const coords = board1.getUsrCoordsOfMouse(e);
    const x = snapToGrid(coords[0]);
    const y = snapToGrid(coords[1]);
    plotSolution(x, y);
  });

  board2.on('down', function (e) {
    const coords = board2.getUsrCoordsOfMouse(e);
    const y = snapToGrid(coords[1]);
    plotSolution(1.0, y);
  });

  plotSolution(1.0, 0.0);
})();
