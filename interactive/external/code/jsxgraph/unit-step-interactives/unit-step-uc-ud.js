(function () {
    // === General Settings ===
    const boardId = 'unit-step-uc-ud';
    const imgPath = 'external/code/jsxgraph/img-labels/';
    const xmin = -1, xmax = 7, ymin = -0.8, ymax = 2;

    // === Plot Board 1 (u_c) ===
    const plotboard1 = new BoardObj({
        dataPath: imgPath,
        boardId: boardId + '-plot1',
        boardWindow: [xmin, xmax, ymin, ymax],
        plotDomain: [xmin, xmax],
        tAxis: false,
        yAxis: true,
        grid: false,
        highlight: false,
        txtLabels: [],
        imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
    });
    const tAxis1 = plotboard1.board.create('axis', [[xmin, 0], [xmax, 0]], {
        ticks: { drawLabels: false, drawTicks: false, majorHeight: 0, minorTicks: 0 },
        withLabel: true,
        highlight: false,
        strokeColor: 'black'
    });

    // === Plot Board 2 (u_d) ===
    const plotboard2 = new BoardObj({
        dataPath: imgPath,
        boardId: boardId + '-plot2',
        boardWindow: [xmin, xmax, ymin, ymax],
        plotDomain: [xmin, xmax],
        tAxis: false,
        yAxis: true,
        txtLabels: [],
        imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
    });
    const tAxis2 = plotboard2.board.create('axis', [[xmin, 0], [xmax, 0]], {
        ticks: { drawLabels: false, drawTicks: false, majorHeight: 0, minorTicks: 0 },
        withLabel: true,
        highlight: false,
        strokeColor: 'black'
    });

    // === Plot Board 3 (u_c - u_d) ===
    const plotboard3 = new BoardObj({
        dataPath: imgPath,
        boardId: boardId + '-plot3',
        boardWindow: [xmin, xmax, ymin, ymax],
        plotDomain: [xmin, xmax],
        tAxis: false,
        yAxis: true,
        txtLabels: [],
        imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
    });
    const tAxis3 = plotboard3.board.create('axis', [[xmin, 0], [xmax, 0]], {
        ticks: { drawLabels: false, drawTicks: false, majorHeight: 0, minorTicks: 0 },
        withLabel: true,
        highlight: false,
        strokeColor: 'black'
    });

    // === Gliders for c and d on their own boards ===
    const cAxis = plotboard1.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });
    const dAxis = plotboard2.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });

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
		if (c.X() < d.X()) {
			plotboard2.board.update(); // manually trigger re-render
			plotboard3.board.update(); //
		} else {
			c.setPosition(JXG.COORDS_BY_USER, [d.X() - 0.1, 0]);
			c.update();
		}
	});

    const d = plotboard2.board.create('glider', [4, 0, dAxis], {
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
		if (c.X() < d.X()) {
			plotboard1.board.update(); // manually trigger re-render
			plotboard3.board.update(); // 
		} else {
			d.setPosition(JXG.COORDS_BY_USER, [c.X() + 0.1, 0]);
			d.update();
		}
	});

    // === Label Images for c ===
    plotboard1.board.create('image', [
        imgPath + "c.png",
        [() => c.X() - 0.15, -0.6],
        [0.25 * plotboard1.boardAspect * (59 / 57), 0.25]
    ], { fixed: true, xAnchor: 'center', yAnchor: 'bottom', highlight: false });
    plotboard3.board.create('image', [
        imgPath + "c.png",
        [() => c.X() - 0.15, -0.6],
        [0.25 * plotboard3.boardAspect * (59 / 57), 0.25]
    ], { fixed: true, xAnchor: 'center', yAnchor: 'bottom', highlight: false });

    // === Label Images for d ===
    plotboard2.board.create('image', [
        imgPath + "d.png",
        [() => d.X() - 0.15, -0.7],
        [0.4 * plotboard2.boardAspect * (63 / 78), 0.4]
    ], { fixed: true, xAnchor: 'center', yAnchor: 'bottom', highlight: false });
	plotboard3.board.create('image', [
        imgPath + "d.png",
        [() => d.X() - 0.15, -0.7],
        [0.4 * plotboard3.boardAspect * (63 / 78), 0.4]
    ], { fixed: true, xAnchor: 'center', yAnchor: 'bottom', highlight: false });

    // === Transition lines for c ===
    plotboard1.board.create('line', [[() => c.X(), ymin], [() => c.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });
    plotboard2.board.create('line', [[() => c.X(), ymin], [() => c.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });
    plotboard3.board.create('line', [[() => c.X(), ymin], [() => c.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });

    // === Transition lines for d ===
    plotboard1.board.create('line', [[() => d.X(), ymin], [() => d.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });
    plotboard2.board.create('line', [[() => d.X(), ymin], [() => d.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });
    plotboard3.board.create('line', [[() => d.X(), ymin], [() => d.X(), 1]], {
        strokeColor: 'black',
        strokeWidth: 1,
        opacity: 0.3,
        dash: 1,
        highlight: false,
    });

    // === Piecewise Functions ===
    const uc = createPiecewise({
        boardObj: plotboard1,
        isContinuous: true,
        funcPieces: [
            { func: x => 0, endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'open' }, options: { color: 'blue', strokeWidth: 3 } },
            { func: x => 1, endpoints: { xLeft: c, typeLeft: 'closed', xRight: xmax, typeRight: 'none' }, options: { color: 'blue', strokeWidth: 3 } },
        ],
        imgToggle: [0.5, () => (c.X() + xmax - 1) * 0.5, 1.3, 248 / 125, 'uc', plotboard1]
    });

    const ud = createPiecewise({
        boardObj: plotboard2,
        funcPieces: [
            { func: x => 0, endpoints: { xLeft: xmin, typeLeft: 'none', xRight: d, typeRight: 'open' }, options: { color: 'red', strokeWidth: 3 } },
            { func: x => 1, endpoints: { xLeft: d, typeLeft: 'closed', xRight: xmax, typeRight: 'none' }, options: { color: 'red', strokeWidth: 3 } },
        ],
        imgToggle: [0.5, () => (d.X() + xmax - 1) * 0.5, 1.3, 265 / 111, 'ud', plotboard2]
    });

    const ucudDiff = createPiecewise({
        boardObj: plotboard3,
        funcPieces: [
            { func: () => 0, endpoints: { xLeft: xmin, typeLeft: 'none', xRight: () => c.X(), typeRight: 'open' }, options: { color: 'green', strokeWidth: 4 } },
            { func: () => 1, endpoints: { xLeft: () => c.X(), typeLeft: 'closed', xRight: () => d.X(), typeRight: 'open' }, options: { color: 'green', strokeWidth: 4 } },
            { func: () => 0, endpoints: { xLeft: () => d.X(), typeLeft: 'closed', xRight: xmax, typeRight: 'none' }, options: { color: 'green', strokeWidth: 4 } },
        ],
        imgToggle: [0.5, () => (c.X() + d.X()) * 0.5 - (0.5 * plotboard3.boardAspect * 692 / 111) * 0.5, 1.3, 692 / 111, 'ucud', plotboard3]
    });
})();