(function () {
	// === General Settings ===
	const boardId = 'unit-step-sine-plus-2-uc-ud';
	const imgPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -2, xmax = 10, ymin = -1.8, ymax = 3.8;
	
	// === Plot Board 1 ===
	const plotboard1 = new BoardObj({
		dataPath: imgPath,
		boardId: boardId + '-plot1',
		boardWindow: [xmin, xmax, ymin, ymax],
		plotDomain: [xmin, xmax],
		tAxis: false,
		yAxis: true,
		txtLabels: [],
		imgLabels: [[0.35, xmax - 0.3, 0.3, 45 / 81, 't']],
	});

	const tAxis = plotboard1.board.create('line', [[0, 0], [1, 0]], {
	strokeColor: 'black',
	straightFirst: true,
	straightLast: true,
	fixed: true,
	highlight: false
	});

	const tTicks = plotboard1.board.create('ticks', [tAxis], {
		ticksDistance: Math.PI / 2,
		minorTicks: 0,
		drawZero: false,
		drawLabels: true,
		drawTicks: true,
		label: {
			offset: [0, -10],
			anchorX: 'middle',
			anchorY: 'top',
			fontSize: 16,
		},
		generateLabelText: function (tick) {
			const val = tick.usrCoords[1]; // Correctly extract the x-position

			const n = Math.round((2 * val) / Math.PI);
			if (n === 0) return '0';

			const absN = Math.abs(n);
			const sign = n < 0 ? '-' : '';
			const pi = 'π';

			if (absN === 1) return `${sign}${pi}/2`;
			if (absN === 2) return `${sign}${pi}`;
			if (absN % 2 === 0) return `${sign}${absN / 2}${pi}`;
			return `${sign}${absN}${pi}/2`;
		}
	});

	const cAxis = plotboard1.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });

	const c = plotboard1.board.create('glider', [1.2, 0, cAxis], {
		name: 'c',
		size: 4,
		color: 'black',
		fillOpacity: 0.2,
		strokeColor: 'black',
		highlight: false,
		showInfobox: false,
		label: { visible: false },
	});

	c.on('drag', () => {
		if (c.X() > d.X()) {
			c.setPosition(JXG.COORDS_BY_USER, [d.X() - 0.1, 0]);
			c.update();
		}
	});

	const d = plotboard1.board.create('glider', [4, 0, cAxis], {
		name: 'd',
		size: 4,
		color: 'black',
		fillOpacity: 0.2,
		strokeColor: 'black',
		highlight: false,
		showInfobox: false,
		label: { visible: false },
	});

	d.on('drag', () => {
		if (c.X() > d.X()) {
			c.setPosition(JXG.COORDS_BY_USER, [c.X() - 0.1, 0]);
			c.update();
		}
	});

	const cLabel = plotboard1.board.create('image', [
		imgPath + "c.png",
		[() => c.X() - 0.15, -1],
		[0.25 * plotboard1.boardAspect * (59 / 57), 0.25]
	], {
		fixed: true,
		xAnchor: 'center',
		yAnchor: 'bottom',
		highlight: false,
		label: { visible: false },
	});

	const dLabel = plotboard1.board.create('image', [
		imgPath + "d.png",
		[() => d.X() - 0.15, -1.1],
		[0.4 * plotboard1.boardAspect * (63 / 78), 0.4]
	], {
		fixed: true,
		xAnchor: 'center',
		yAnchor: 'bottom',
		highlight: false,
		label: { visible: false },
	});

	const offRegion1 = plotboard1.board.create('polygon', [
		[xmin, ymin], [() => c.X(), ymin], [() => c.X(), ymax], [xmin, ymax]
	], {
		fillOpacity: 0.15,
		fillColor: 'blue',
		highlight: false,
		borders: { strokeWidth: 0 },
		vertices: { visible: false },
		fixed: true,
		withLabel: false,
		layer: 0 // So that it doesn't prevent image interaction
	});

	const onRegion = plotboard1.board.create('polygon', [
		[() => c.X(), ymin], [xmax, ymin], [xmax, ymax], [() => c.X(), ymax]
	], {
		fillOpacity: 0.15,
		fillColor: 'green',
		highlight: false,
		borders: { strokeWidth: 0 },
		vertices: { visible: false },
		fixed: true,
		withLabel: false,
		layer: 0 // So that it doesn't prevent image interaction
	});

	const offRegion2 = plotboard1.board.create('polygon', [
		[() => d.X(), ymin], [xmax, ymin], [xmax, ymax], [() => d.X(), ymax]
	], {
		fillOpacity: 0.15,
		fillColor: 'blue',
		highlight: false,
		borders: { strokeWidth: 0 },
		vertices: { visible: false },
		fixed: true,
		withLabel: false,
		layer: 0 // So that it doesn't prevent image interaction
	});

	const onLabel = plotboard1.board.create('text', [
		() => (c.X() + d.X())/2,
		() => ymin,
		'ON'
	], {
		fontSize: 16,
		anchorX: 'middle',
		anchorY: 'bottom',
		color: 'green',
		highlight: false,
	});

	const offLabel1 = plotboard1.board.create('text', [
		() => (c.X() + xmin)/2,
		() => ymin,
		'OFF'
	], {
		fontSize: 16,
		anchorX: 'middle',
		anchorY: 'bottom',
		color: 'blue',
		highlight: false,
	});

	const offLabel2 = plotboard1.board.create('text', [
		() => (d.X() + xmax)/2,
		() => ymin,
		'OFF'
	], {
		fontSize: 16,
		anchorX: 'middle',
		anchorY: 'bottom',
		color: 'blue',
		highlight: false,
	});

	const ctransitionLine = plotboard1.board.create('line', [[() => c.X(), ymin], [() => c.X(), 1]], {
		strokeColor: 'black',
		strokeWidth: 1,
		opacity: 0.3,
		dash: 1,
		highlight: false,
	});
	const dtransitionLine = plotboard1.board.create('line', [[() => d.X(), ymin], [() => d.X(), 1]], {
		strokeColor: 'black',
		strokeWidth: 1,
		opacity: 0.3,
		dash: 1,
		highlight: false,
	});

	const ucudDiffAspRatio = 775 / 133;
	const ucudDiff = createPiecewise({
		boardObj: plotboard1,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: () => c.X(), typeRight: 'open' },
				options: { color: 'green', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
			{
				func: () => 1,
				endpoints: { xLeft: () => c.X(), typeLeft: 'closed', xRight: () => d.X(), typeRight: 'open' },
				options: { color: 'green', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
			{
				func: () => 0,
				endpoints: { xLeft: () => d.X(), typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'green', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
		],
		imgToggle: [0.5, 6.9, ymax-0.7, ucudDiffAspRatio, 'ucud-w-par', plotboard1]
	});

	const sineucudDiffAspRatio = 337 / 111;
	const sineucudDiff = createPiecewise({
		boardObj: plotboard1,
		funcPieces: [
			{
				func: () => 0,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: () => c.X(), typeRight: 'open' },
				options: { color: 'red', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
			{
				func: x => Math.sin(x) + 2,
				endpoints: { xLeft: () => c.X(), typeLeft: 'closed', xRight: () => d.X(), typeRight: 'open' },
				options: { color: 'red', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
			{
				func: () => 0,
				endpoints: { xLeft: () => d.X(), typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
				options: { color: 'red', strokeWidth: 4, opacity: 0.8, dash: 0 }
			},
		],
		imgToggle: [0.4, 3.4, ymax-0.65, sineucudDiffAspRatio, 'gt-equals', plotboard1]
	});

	const sineAspRatio = 533 / 133;
	// const xMidpt = () => (c.X() + d.X())*0.5 - (0.5 * plotboard1.boardAspect * sineAspRatio)*0.5;
	// const yMidpt = () => Math.sin((c.X() + d.X())*0.5 - (0.5 * plotboard1.boardAspect * sineAspRatio)*0.5) + 2.4;
	const sine = createPiecewise({
		boardObj: plotboard1,
		funcPieces: [
			{
				func: x => Math.sin(x) + 2,
				endpoints: { xLeft: xmin, typeLeft: 'none', xRight: xmax, typeRight: 'none' },
				options: { color: 'red', strokeWidth: 1, opacity: 0.8, dash: 3, visible: false }
			},
		],
		imgToggle: [0.5, 4.8, ymax-0.7, sineAspRatio, 'sint-plus-2-w-par', plotboard1]
	});
	
})();
