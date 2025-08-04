(function () {
  const boardId = 'phase-plane-slopefield-plot1';
  const xmin = -3, xmax = 3, ymin = -3, ymax = 3;
  const gridSpacing = 0.5;

  const board = JXG.JSXGraph.initBoard(boardId, {
    boundingbox: [xmin, ymax, xmax, ymin],
    axis: false,
    showNavigation: false,
    showCopyright: false,
  });

  const xAxis = board.create('axis', [[xmin, 0], [xmax, 0]], {
    name: 'x',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: 'rt', offset: [0,-10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right'},
      drawZero: false,
      insertTicks: false,
      tickDistance: 0.5,
      minorTicks: 1
    },
  });

  const yAxis = board.create('axis', [[0, 0], [0, 1]], {
    name: 'y',
    withLabel: true,
    label: { fontSize: 16, fontWeight: 'bold', color: 'black', position: 'rt', offset: [0,-10] },
    ticks: {
      drawLabels: true,
      label: { fontSize: 14, anchorX: 'right'},
      drawZero: false,
      insertTicks: false,
      tickDistance: 0.5,
      minorTicks: 1
    },
  });

  var grid = board.create('grid', [xAxis, yAxis], {
    majorStep: 0.5,
    strokeColor: '#ddd',
    strokeWidth: 0.2,
    highlight: false,
    fixed: true,
  });

  function dx(x, y) {
    return -x;
  }

  function dy(x, y) {
    return -y + 2*x;
  }

  function normalize(vx, vy, scale = 0.25) {
    const mag = Math.sqrt(vx * vx + vy * vy);
    if (mag < 1e-5) return [0, 0];
    return [vx * scale / mag, vy * scale / mag];
  }

  for (let x = xmin; x <= xmax; x += gridSpacing) {
    for (let y = ymin; y <= ymax; y += gridSpacing) {
      const vx = dx(x, y);
      const vy = dy(x, y);
      const [nx, ny] = normalize(vx, vy);
      board.create('arrow', [[x - nx / 2, y - ny / 2], [x + nx / 2, y + ny / 2]], {
        strokeColor: 'gray', strokeWidth: 1.2, fixed: true, highlight: false
      });
    }
  }

  const curves = [];
  const points = [];
  const labels = [];
  const colors = ['blue', 'green', 'red', 'orange', 'purple', 'brown', 'teal'];
  let colorIndex = 0;

  function eulerTrajectory(x0, y0, h = 0.05, steps = 200) {
    const points = [[x0, y0]];
    let x = x0, y = y0;
    for (let i = 0; i < steps; i++) {
      const kx = dx(x, y);
      const ky = dy(x, y);
      x += h * kx;
      y += h * ky;
      points.push([x, y]);
    }
    return points;
  }

  board.on('down', function (e) {
    const coords = board.getUsrCoordsOfMouse(e);
    const x = coords[0];
    const y = coords[1];

    const pts = eulerTrajectory(x, y);
    const color = colors[colorIndex % colors.length];
    colorIndex++;

    const curve = board.create('curve', [
      pts.map(p => p[0]),
      pts.map(p => p[1]),
      'parametric'
    ], {
      strokeColor: color, strokeWidth: 3
    });
    curves.push(curve);

    const point = board.create('point', [x, y], {
      name: '', size: 3, color: color, fixed: true, highlight: false
    });
    points.push(point);

    const label = board.create('text', [x + 0.1, y, `(${x.toFixed(1)}, ${y.toFixed(1)})`], {
      fontSize: 18, fontWeight: 'bold', fixed: true, anchorX: 'left', anchorY: 'middle'
    });
    labels.push(label);
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

  document.getElementById(boardId).appendChild(resetBtn);

  resetBtn.addEventListener('click', () => {
    while (curves.length) board.removeObject(curves.pop());
    while (points.length) board.removeObject(points.pop());
    while (labels.length) board.removeObject(labels.pop());
    colorIndex = 0;
  });
})();
