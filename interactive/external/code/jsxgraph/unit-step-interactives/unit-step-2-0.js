(function () {
	// === General Settings ===
	const boardId = 'unit-step-2-0';
	const dataPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -4, xmax = 4, ymin = -2, ymax = 3;

	// === Initialize BoardObj ===
	const boardObj = new BoardObj({
		dataPath: dataPath,
		boardId: boardId + "-plot",
		boardWindow: [xmin, xmax, ymin, ymax],
		plotDomain: [xmin, xmax],
		tAxis: true,
		yAxis: true,
		txtLabels: [],
		imgLabels: [
			[0.35, xmax - 0.3, -0.7, 45 / 81, 't'],
			[0.25, 0, ymin + 0.2, 59 / 57, 'c', 'c', -0.07],
		],
	});

	// === Slider setup ===
	const cAxis = boardObj.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });
	const c = boardObj.board.create('glider', [0, 0, cAxis], {
		name: 'c',
		size: 4,
		color: 'black',
		fillOpacity: 0.2,
		strokeColor: 'black',
		highlight: false,
		showInfobox: false,
		label: { visible: false },
	});

	// === Step function U(t - c)
	const u = createPiecewise({
		boardObj,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'open' },
				options: { color: 'green', strokeWidth: 2, dash: 3 }
			},
			{
				func: () => 1,
				endpoints: { xLeft: c, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'green', strokeWidth: 2, dash: 3, opacity: 0.4 }
			},
		]
	});

	// === Main function: f(t) = 1/5 t^2 - 1
	const f = x => 0.2 * x * x - 1;

	// === f(t) masked left of c (preview of cutoff)
	const fLeft = boardObj.board.create('functiongraph', [
		t => f(t),
		xmin,
		() => c.X()
	], {
		strokeColor: 'blue',
		strokeWidth: 2,
		dash: 2,
		opacity: 0.3,
		highlight: false,
		visible: true
	});
	boardObj.addGraphObject({ setVisibility: () => {}, setOpacity: () => {} }); // dummy

	// === f(t) * u(t - c)
	const fMasked = x => (x >= c.X() ? f(x) : 0);
	const fuGraph = boardObj.board.create('functiongraph', [
		t => fMasked(t),
		xmin,
		xmax
	], {
		strokeColor: 'black',
		strokeWidth: 3,
		highlight: false,
		visible: true
	});
	boardObj.addGraphObject({ setVisibility: () => {}, setOpacity: () => {} }); // dummy

	// === End point on the function
	const fEndPt = boardObj.board.create('point', [
		() => c.X(),
		() => f(c.X())
	], {
		strokeColor: 'black',
		strokeWidth: 2,
		color: 'black',
		opacity: 1,
		fixed: true,
		highlight: false,
		showInfobox: false,
		label: { visible: false }
	});
	boardObj.addGraphObject({ setVisibility: () => {}, setOpacity: () => {} }); // dummy

	// === Vertical Line from slider
	const cutoffLine = boardObj.board.create('line', [
		[() => c.X(), ymin],
		[() => c.X(), () => Math.max(1.5, fMasked(c.X()))]
	], {
		straightFirst: false,
		straightLast: false,
		strokeColor: '#444',
		strokeWidth: 1,
		opacity: 0.5,
		dash: 2
	});
	boardObj.addGraphObject({ setVisibility: () => {}, setOpacity: () => {} }); // dummy

	// === Text labels "on" / "off"
	boardObj.board.create('text', [
		() => (c.X() + xmin) / 2,
		ymin + 0.5,
		'"off"'
	], {
		fontSize: 16,
		anchorX: 'right',
		anchorY: 'middle',
		visible: true,
		fixed: true,
		strokeColor: 'black'
	});

	boardObj.board.create('text', [
		() => (c.X() + xmax) / 2,
		ymin + 0.5,
		'"on"'
	], {
		fontSize: 16,
		anchorX: 'left',
		anchorY: 'middle',
		visible: true,
		fixed: true,
		strokeColor: 'green'
	});

	// === Image: product label
	boardObj.board.create('image', [
		dataPath + '15thtsqrd-1_times_uc.png',
		[1.65, 1.7],
		[1.2 * (838 / 299) * boardObj.boardAspect, 1.2]
	], {
		fixed: true,
		xAnchor: 'center',
		yAnchor: 'bottom'
	});
})();
