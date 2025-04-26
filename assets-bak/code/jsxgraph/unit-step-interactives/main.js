// === General Settings ===
const boardId = 'unit-step-4';
const dataPath = 'external/code/jsxgraph/unit-step-interactives/';
const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
const a = -4, b = 4; // plotting domain

// ====================
// === Plot Board 1 ===
// ====================

// === Static Labels ===
const plotTxtLabels1 = [];
const plotImgLabels1 = [
    [0.35,	xmax - 0.3,	-0.7,		45	/ 81,	't'],
];

// === Create Plot Board 1 ===
const plotboard1 = new BoardObj({
    dataPath: dataPath,
    boardId: boardId + '-plot1',
    boardWindow: [xmin, xmax, ymin, ymax],
    plotDomain: [a, b],
    tAxis: true,
    yAxis: true,
	txtLabels: plotTxtLabels1,
    imgLabels: plotImgLabels1,
});

// === Transistion point slider ===
const cAxis = plotboard1.board.create('line', [[xmin, 0], [xmax, 0]], {
	visible: false
});

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
	dataPath + "c.png",
	[() => c.X() - 0.08, ymin + 0.3],
	[0.25 * plotboard1.boardAspect * 59	/ 57, 0.25]
], {
	fixed: true,
	xAnchor: 'center',
	yAnchor: 'bottom',
	highlight: false,
	label: { visible: false },
});

this.cLine1 = plotboard1.board.create('line', [
	[() => c.X(), -1.3],
	[() => c.X(), 1.4]
], {
	straightFirst: false,
	straightLast: false,
	strokeColor: '#444',
	strokeWidth: 1,
	opacity: 0.5,
	dash: 2
});

const allGraphObjects = [];

const f1ImgLabels = [];
const f1TxtLabels = [];

// === f Piece 1 ===
const f1 = new Piece(plotboard1.board,
	(x) => 0.2 * x * x - 1,
	{	// endpoint info
		xLeft: -4,
		typeLeft: 'none',
		xRight: c,
		typeRight: 'none', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'blue',
		strokeWidth: 3
	},
	f1ImgLabels,
	f1TxtLabels,
);

const f2ImgLabels = [];
const f2TxtLabels = [];

// === f Piece 2 ===
const f2 = new Piece(plotboard1.board,
	(x) => 0.2 * x * x - 1,
	{	// endpoint info
		xLeft: c,
		typeLeft: 'none',
		xRight: 4,
		typeRight: 'none', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'blue',
		strokeWidth: 3
	},
	f2ImgLabels,
	f2TxtLabels,
);

const f = new Piecewise(plotboard1.board,
	[f1, f2],
	true,
	[1.1,	-3,	1.5,		596	/ 299,	'lp-15thtsqrd-1-rp', plotboard1],
	false,
);

const u1ImgLabels = [];
const u1TxtLabels = [];

// === u Piece 1 ===
const u1 = new Piece(plotboard1.board,
	(x) => 0,
	{	// endpoint info
		xLeft: -4,
		typeLeft: 'none',
		xRight: c,
		typeRight: 'open', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'green',
		strokeWidth: 3
	},
	u1ImgLabels,
	u1TxtLabels,
);

const u2ImgLabels = [];
const u2TxtLabels = [];
// === u Piece 2 ===
const u2 = new Piece(plotboard1.board,
	(x) => 1,
	{	// endpoint info
		xLeft: c,
		typeLeft: 'closed',
		xRight: 4,
		typeRight: 'none', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'green',
		strokeWidth: 3
	},
	u2ImgLabels,
	u2TxtLabels,
);

const u = new Piecewise(plotboard1.board,
	[u1, u2],
	false,
	[0.55,	2,	1.5,	248	/ 125,	'uc', plotboard1],
	false,
);


// ====================
// === Plot Board 2 ===
// ====================

// === Static Labels ===
const plotTxtLabels2 = [];
const plotImgLabels2 = [];

// === Create Plot Board 2 ===
const plotboard2 = new BoardObj({
    dataPath: dataPath,
    boardId: boardId + '-plot2',
    boardWindow: [xmin, xmax, ymin, ymax],
    plotDomain: [a, b],
    tAxis: true,
    yAxis: true,
	txtLabels: plotTxtLabels2,
    imgLabels: plotImgLabels2,
});

this.cLine2 = plotboard2.board.create('line', [
	[() => c.X(), -1.3],
	[() => c.X(), ymax]
], {
	straightFirst: false,
	straightLast: false,
	strokeColor: '#444',
	strokeWidth: 1,
	opacity: 0.5,
	dash: 2
});

const cLabel2 = plotboard2.board.create('image', [
	dataPath + "c.png",
	[() => c.X() - 0.08, ymin + 0.3],
	[0.25 * plotboard2.boardAspect * 59	/ 57, 0.25]
], {
	fixed: true,
	xAnchor: 'center',
	yAnchor: 'bottom',
	highlight: false,
	label: { visible: false },
});

c.on('drag', () => {
	plotboard2.board.update();
});

// === u Piece 1 ===
const uu1 = new Piece(plotboard2.board,
	(x) => 0 + 0.05,
	{	// endpoint info
		xLeft: -4,
		typeLeft: 'none',
		xRight: c,
		typeRight: 'open', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 3,
		color: 'green',
		strokeWidth: 3
	},
	[],
	[],
);

// === u Piece 2 ===
const uu2 = new Piece(plotboard2.board,
	(x) => 1,
	{	// endpoint info
		xLeft: c,
		typeLeft: 'closed',
		xRight: 4,
		typeRight: 'none', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 3,
		color: 'green',
		opacity: 0.2,
		strokeWidth: 3
	},
	[],
	[],
);

const uu = new Piecewise(plotboard2.board,
	[uu1, uu2],
	false,
	[0.55,	2,	1.5,	248	/ 125,	'uc', plotboard2],
	false,
);

// === fu Piece 1 ===
const fu1 = new Piece(plotboard2.board,
	(x) => 0,
	{	// endpoint info
		xLeft: -4,
		typeLeft: 'none',
		xRight: c,
		typeRight: 'open', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'red',
		strokeWidth: 3
	},
	[],
	[],
);
// === fu Piece 2 ===
const fu2 = new Piece(plotboard2.board,
	(x) => 0.2 * x * x - 1,
	{	// endpoint info
		xLeft: c,
		typeLeft: 'closed',
		xRight: 4,
		typeRight: 'none', // 'open', 'closed', 'none'
	},
	{	// curve options
		dash: 0,
		color: 'red',
		strokeWidth: 3
	},
	[],
	[],
);

const fu = new Piecewise(plotboard2.board,
	[fu1, fu2],
	false,
	[1.1,	1,	1.5,	937	/ 299,	'15thtsqrd-1_times_uc', plotboard2],
	false,
);