(function () {
  const boardId1 = 'phase-plane-w-timeplot-plot1';
  const boardId2 = 'phase-plane-w-timeplot-plot2';
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

  const xAxis = board1.create('axis', [[0, 0], [1, 0]], {
    name: 'x',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', position: 'rt', offset: [0,-10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5]},
      drawZero: false,
      insertTicks: false,
      tickDistance: 0.5,
      minorTicks: 1
    },
  });

  const yAxis = board1.create('axis', [[0, 0], [0, 1]], {
    name: 'y',
    withLabel: false,
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 2]},
      drawZero: false,
      insertTicks: false,
      tickDistance: 0.5,
      minorTicks: 1
    },
  });

  board1.create('text',[-0.25, ymax,"y"], {fontSize: 16, fontWeight: 'bold', anchorY: 'top', useMathjax: true});

  const tAxis = board2.create('axis', [[0, 0], [1, 0]], {
    name: 't',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: 'rt', offset: [0,-10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', anchorY: 'top', offset: [3, -5]},
      drawZero: false,
      insertTicks: false,
      tickDistance: 0.5,
      minorTicks: 1
    },
  });

  const xyAxis = board2.create('axis', [[0, 0], [0, 1]], {
    name: 'xy',
    withLabel: false,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: [0,ymax], offset: [-10,0] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right', offset: [-5, 0]},
      drawZero: false,
      insertTicks: false,
      tickDistance: 1,
      minorTicks: 1
    },
  });

  function dx(x, y) { return -x; }
  function dy(x, y) { return -y + 2 * x; }

  function normalize(vx, vy, scale = 0.25) {
    const mag = Math.sqrt(vx * vx + vy * vy);
    if (mag < 1e-5) return [0, 0];
    return [vx * scale / mag, vy * scale / mag];
  }

  for (let x = xmin; x <= xmax; x += gridSpacing) {
    for (let y = ymin; y <= ymax; y += gridSpacing) {
      const [nx, ny] = normalize(dx(x, y), dy(x, y));
      board1.create('arrow', [[x - nx / 2, y - ny / 2], [x + nx / 2, y + ny / 2]], {
        strokeColor: 'gray', strokeWidth: 1.2, fixed: true, highlight: false
      });
    }
  }

  const curves = [], points = [], labels = [], timeCurves = [];
  const colors = ['blue', 'green', 'red', 'orange', 'purple', 'brown', 'teal'];
  let colorIndex = 0;

  function eulerTrajectory(x0, y0, h = 0.05, steps = 200) {
    const trajectory = [[x0, y0]];
    let x = x0, y = y0;
    for (let i = 0; i < steps; i++) {
      const kx = dx(x, y);
      const ky = dy(x, y);
      x += h * kx;
      y += h * ky;
      trajectory.push([x, y]);
    }
    return trajectory;
  }

  board1.on('down', function (e) {
    const coords = board1.getUsrCoordsOfMouse(e);
    const x0 = coords[0], y0 = coords[1];
    const pts = eulerTrajectory(x0, y0);
    const color = colors[colorIndex % colors.length];
    colorIndex++;

    const curve = board1.create('curve', [
      pts.map(p => p[0]),
      pts.map(p => p[1]),
      'parametric'
    ], { strokeColor: color, strokeWidth: 3 });
    curves.push(curve);

    const pt = board1.create('point', [x0, y0], {
      name: '', size: 3, color: color, fixed: true, highlight: false
    });
    points.push(pt);

    const lbl = board1.create('text', [x0 + 0.1, y0, `(${x0.toFixed(1)}, ${y0.toFixed(1)})`], {
      fontSize: 14, fontWeight: 'bold', fixed: true, anchorX: 'left', anchorY: 'middle'
    });
    labels.push(lbl);

    const t = pts.map((_, i) => i * 0.05);
    const xVals = pts.map(p => p[0]);
    const yVals = pts.map(p => p[1]);

    const xPlot = board2.create('curve', [t, xVals], {
      strokeColor: color, strokeWidth: 2, dash: 0, name: 'x(t)', withLabel: false });
    const yPlot = board2.create('curve', [t, yVals], {
      strokeColor: color, strokeWidth: 2, dash: 2, name: 'y(t)', withLabel: false });
    timeCurves.push(xPlot, yPlot);
  });

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.style.position = 'absolute';
  resetBtn.style.top = '10px';
  resetBtn.style.left = '10px';
  resetBtn.style.zIndex = '10';
  resetBtn.style.padding = '6px 12px';
  resetBtn.style.fontSize = '14px';
  resetBtn.style.border = '1px solid #ccc';
  resetBtn.style.borderRadius = '4px';
  resetBtn.style.backgroundColor = '#f8f8f8';
  resetBtn.style.cursor = 'pointer';
  resetBtn.style.boxShadow = '1px 1px 3px rgba(0, 0, 0, 0.2)';
  document.getElementById(boardId1).appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    [...curves, ...points, ...labels].forEach(el => board1.removeObject(el));
    timeCurves.forEach(el => board2.removeObject(el));
    curves.length = points.length = labels.length = timeCurves.length = 0;
    colorIndex = 0;
  });

  legend = board2.create('legend', [2.35, 2.7], {
    labels: ["x(t)", "y(t)"],
    colors: ['blue', 'blue'],
    linelength: 0.4,
    strokeWidth: 2,
    frozen: true,
    fontSize: 16,
    fontWeight: 'bold',
  });

  // Make the legend line dashed to match curve
  legend.lines[1].setAttribute({ dash: 2 });
  board2.update();

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
          strokeColor: 'gray', strokeWidth: 1.2, fixed: true, highlight: false, visible: false
        }));
      }
    }
  }
  drawSlopeField();

  const checkbox = document.createElement('label');
  checkbox.style.position = 'absolute';
  checkbox.style.top = '10px';
  checkbox.style.left = '10px';
  checkbox.style.zIndex = '10';
  checkbox.innerHTML = '<input type="checkbox" id="toggleSlopeField"> Show slope field';
  document.getElementById(boardId1).appendChild(checkbox);
  document.getElementById('toggleSlopeField').addEventListener('change', function () {
    slopeFieldArrows.forEach(arrow => arrow.setAttribute({ visible: this.checked }));
    board1.update();
  });

})();
