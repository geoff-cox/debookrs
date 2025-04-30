(function () {
	// === General Settings ===
	const boardId = 'unit-step-2';
	const imgPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
	
	// === Plot Board 1 ===
	const plotboard1 = new BoardObj({
		dataPath: imgPath,
		boardId: boardId + '-plot1',
		boardWindow: [xmin, xmax, ymin, ymax],
		plotDomain: [xmin, xmax],
		tAxis: true,
		yAxis: true,
		txtLabels: [],
		imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
	});

	const cAxis = plotboard1.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });

	const c = plotboard1.board.create('glider', [0, 0, cAxis], {
		name: 'c',
		size: 4,
		color: 'black',
		fillOpacity: 0.2,
		strokeColor: 'black',
		highlight: false,
		showInfobox: false,
		label: { visible: false },
	});

	const cLabel1 = plotboard1.board.create('image', [
		imgPath + "c.png",
		[() => c.X() - 0.08, ymin + 0.3],
		[0.25 * plotboard1.boardAspect * (59 / 57), 0.25]
	], {
		fixed: true,
		xAnchor: 'center',
		yAnchor: 'bottom',
		highlight: false,
		label: { visible: false },
	});

	const offRegion = plotboard1.board.create('polygon', [
		[xmin, ymin], [() => c.X(), ymin], [() => c.X(), ymax], [xmin, ymax]
	], {
		fillOpacity: 0.15,
		fillColor: 'blue',
		highlight: false,
		borders: { strokeWidth: 0 },
		vertices: { visible: false }
	});

	const onRegion = plotboard1.board.create('polygon', [
		[() => c.X(), ymin], [xmax, ymin], [xmax, ymax], [() => c.X(), ymax]
	], {
		fillOpacity: 0.15,
		fillColor: 'green',
		highlight: false,
		borders: { strokeWidth: 0 },
		vertices: { visible: false },
		highlight: false,
		fixed: true,
		withLabel: false,
		layer: 0 // So that it doesn't prevent image interaction
	});

	const onLabel = plotboard1.board.create('text', [
		() => (c.X() + xmax)/2,
		() => ymin + 0.2,
		'"on"'
	], {
		fontSize: 20,
		anchorX: 'left',
		anchorY: 'bottom',
		color: 'green',
		highlight: false,
	});

	const offLabel = plotboard1.board.create('text', [
		() => (c.X() + xmin)/2,
		() => ymin + 0.2,
		'"off"'
	], {
		fontSize: 20,
		anchorX: 'right',
		anchorY: 'bottom',
		color: 'blue',
		highlight: false,
	});

	const f = createPiecewise({
		boardObj: plotboard1,
		isContinuous: true,
		funcPieces: [
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'none' },
				options: { color: 'blue', strokeWidth: 2, opacity: 0.3, dash: 3 }
			},
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: c, typeLeft: 'none', xRight: xmax, typeRight: 'none' },
				options: { color: 'blue', strokeWidth: 3, opacity: 0.3, dash: 3 }
			},
		],
		imgToggle: [1.1, 1.5, 1.7, 596 / 299, 'lp-15thtsqrd-1-rp', plotboard1]
	});

	const u = createPiecewise({
		boardObj: plotboard1,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'open' },
				options: { color: 'green', strokeWidth: 3, opacity: 0.3, dash: 3 }
			},
			{
				func: () => 1,
				endpoints: { xLeft: c, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'green', strokeWidth: 2, opacity: 0.3, dash: 3 }
			},
		],
		imgToggle: [0.5, 3, 2, 248 / 125, 'uc', plotboard1]
	});

	const fu = createPiecewise({
		boardObj: plotboard1,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'open' },
				options: { color: 'red', strokeWidth: 3 }
			},
			{
				func: x => 0.2 * x * x - 1,
				endpoints: { xLeft: c, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'red', strokeWidth: 3 }
			},
		],
		imgToggle: [0.5, 0.35, 2, 937 / 299, 'ft-equals', plotboard1]
	});
})();
