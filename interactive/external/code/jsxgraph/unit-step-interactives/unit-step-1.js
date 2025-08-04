(function () {
	// === General Settings ===
	const boardId = 'unit-step-1';
	const imgPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
	
	// === Title Board 1 ===
	const titleboard = new BoardObj({
		dataPath: imgPath,
		boardId: boardId + '-title',
		boardWindow: [xmin, xmax, 0, 1],
		plotDomain: [xmin, xmax],
		tAxis: false,
		yAxis: false,
		txtLabels: [],
		imgLabels: [],
	});

  // === Plot Board 1 ===
	const plotboard = new BoardObj({
		dataPath: imgPath,
		boardId: boardId + '-plot',
		boardWindow: [xmin, xmax, ymin, ymax],
		plotDomain: [xmin, xmax],
		tAxis: true,
		yAxis: true,
		txtLabels: [],
		imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
	});
  
	const f = createPiecewise({
		boardObj: plotboard,
		isContinuous: true,
		funcPieces: [
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: 0, typeRight: 'none' },
				options: { color: 'blue', strokeWidth: 2, opacity: 0.3, dash: 3 }
			},
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: 0, typeLeft: 'none', xRight: xmax, typeRight: 'none' },
				options: { color: 'blue', strokeWidth: 3, opacity: 0.3, dash: 3 }
			},
		],
		imgToggle: [0.95, -0.7, 0, 596 / 299, 'lp-15thtsqrd-1-rp', titleboard],
    toggleOn: true,
    alwaysVisible: false,
	});

	const u = createPiecewise({
		boardObj: plotboard,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: 0, typeRight: 'open' },
				options: { color: 'green', strokeWidth: 3, opacity: 0.3, dash: 3 }
			},
			{
				func: () => 1,
				endpoints: { xLeft: 0, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'green', strokeWidth: 2, opacity: 0.3, dash: 3 }
			},
		],
		imgToggle: [0.5, 0.95, 0.2, 248 / 125, 'uc', titleboard],
    toggleOn: true,
    alwaysVisible: false,
	});

	const fu = createPiecewise({
		boardObj: plotboard,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: 0, typeRight: 'open' },
				options: { color: 'red', strokeWidth: 3 }
			},
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: 0, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'red', strokeWidth: 3 }
			},
		],
		imgToggle: [0.45, -2, 0.2, 937 / 299, 'ft-equals', titleboard],
    toggleOn: true,
    alwaysVisible: false,
	});
})();
