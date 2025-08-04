import { createPiece, createPiecewise } from './utils.js';

// === Board setup ===
const boardId = 'unit-step-demo';
const imgPath = './img-labels/';
const xmin = -4, xmax = 4, ymin = -2, ymax = 3;

const boardObj = new BoardObj({
	dataPath: imgPath,
	boardId,
	boardWindow: [xmin, xmax, ymin, ymax],
	plotDomain: [xmin, xmax],
	tAxis: true,
	yAxis: true,
	txtLabels: [],
	imgLabels: [[0.35, xmax - 0.3, -0.7, 45 / 81, 't']],
});

// === Glider to control step location ===
const axisLine = boardObj.board.create('line', [[xmin, 0], [xmax, 0]], { visible: false });
const c = boardObj.board.create('glider', [0, 0, axisLine], {
	name: 'c',
	size: 4,
	color: 'black',
	fillOpacity: 0.2,
	strokeColor: 'black',
	highlight: false,
	showInfobox: false,
	label: { visible: false },
});

// === Function and step definition ===
const quad = x => 0.2 * x * x - 1;

const f = createPiecewise({
	boardObj,
	isContinuous: true,
	funcPieces: [
		{
			func: quad,
			endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'none' },
			options: { color: 'blue', strokeWidth: 3 },
		},
		{
			func: quad,
			endpoints: { xLeft: c, typeLeft: 'none', xRight: xmax, typeRight: 'none' },
			options: { color: 'blue', strokeWidth: 3 },
		},
	],
	imgToggle: [1.1, -3, 1.5, 596 / 299, 'lp-15thtsqrd-1-rp', boardObj],
	toggleOn: false,
});

const u = createPiecewise({
	boardObj,
	funcPieces: [
		{
			func: () => 0,
			endpoints: { xLeft: xmin, typeLeft: 'none', xRight: c, typeRight: 'open' },
			options: { color: 'green', strokeWidth: 3 },
		},
		{
			func: () => 1,
			endpoints: { xLeft: c, typeLeft: 'closed', xRight: xmax, typeRight: 'none' },
			options: { color: 'green', strokeWidth: 3 },
		},
	],
	imgToggle: [0.55, 2, 1.5, 248 / 125, 'uc', boardObj],
	toggleOn: false,
});
