(function () {
  // === General Settings ===
	const boardId = 'euler-spiral-system';
  const xmin = -3, xmax = 3, ymin = -3, ymax = 3;
  
  const board = JXG.JSXGraph.initBoard({
    boardId: boardId + '-plot1', 
		boardWindow: [xmin, xmax, ymin, ymax],
		plotDomain: [xmin, xmax],
		// tAxis: true,
		// yAxis: true,
		txtLabels: [],
		// boundingbox: [xmin, ymax, xmax, ymin],
		axis: true,
    // showCopyright: false,
    // showNavigation: false
  });

})();  

//   const h = board.create('slider', [[-2.8, 2.6], [-1.8, 2.6], [0.1, 0.1, 0.5]], {
//     name: 'h', snapWidth: 0.01
//   });

//   const steps = board.create('slider', [[-2.8, 2.3], [-1.8, 2.3], [1, 5, 10]], {
//     name: 'steps', snapWidth: 1
//   });

//   const x0 = 1, y0 = 0;

//   const computeEulerSteps = () => {
//     const pts = [[x0, y0]];
//     let x = x0, y = y0;
//     const stepSize = h.Value();
//     const n = steps.Value();

//     for (let i = 0; i < n; i++) {
//       const dx = x + y;
//       const dy = -x + y;
//       x = x + stepSize * dx;
//       y = y + stepSize * dy;
//       pts.push([x, y]);
//     }
//     return pts;
//   };

//   let eulerPoints = [];
//   let eulerPath = null;

//   const drawEulerPath = () => {
//     if (eulerPoints.length) {
//       eulerPoints.forEach(p => board.removeObject(p));
//     }
//     if (eulerPath) board.removeObject(eulerPath);

//     const pts = computeEulerSteps();
//     eulerPoints = pts.map(([x, y]) => board.create('point', [x, y], {
//       size: 2,
//       fixed: true,
//       color: 'red',
//       name: ''
//     }));

//     eulerPath = board.create('curve', [
//       pts.map(p => p[0]),
//       pts.map(p => p[1]]),
//       'parametric'
//     ], {
//       strokeColor: 'red', strokeWidth: 2
//     });
//   };

//   h.on('drag', drawEulerPath);
//   steps.on('drag', drawEulerPath);
//   drawEulerPath();
// })();
