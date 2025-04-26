// === General Settings ===
const dataPath = 'external/code/jsxgraph/unit-step-interactives/';
const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
const a = -4, b = 4; // plotting domain

// === Helper to compute xy aspect ratio ===
function getAspectRatio(board, xRange, yRange) {
	const wPx = board.containerObj.clientWidth;
	const hPx = board.containerObj.clientHeight;
	const pxPerUnitX = wPx / xRange;
	const pxPerUnitY = hPx / yRange;
	return pxPerUnitY / pxPerUnitX;
}

// === Initialize Boards ===
const board = JXG.JSXGraph.initBoard("unit-step-2-plots", {
	boundingbox: [xmin, ymax, xmax, ymin],
	showCopyright: false,
	showNavigation: false,
	grid: false,
	axis: false,
});

const xyPlotAspect = getAspectRatio(board, xmax - xmin, ymax - ymin);

// === Axes on board ===
board.create('axis', [[xmin, 0], [xmax, 0]], {
	name: 't',
	ticks: {
		insertTicks: false,
		minorTicks: 0,
		ticksDistance: 1,
		label: { visible: true, offset: [5, -5], anchorX: 'right', anchorY: 'top', fontSize: 16 },
		majorHeight: 5
	}
});

board.create('axis', [[0, ymin], [0, ymax]], {
	name: 'f(t)',
	ticks: {
		insertTicks: false,
		minorTicks: 0,
		ticksDistance: 1,
		label: { visible: true, offset: [-5, 0], anchorX: 'right', anchorY: 'middle', fontSize: 16 },
		majorHeight: 5
	}
});

// === Slider Object ===
const cAxis = board.create('line', [[xmin, 0], [xmax, 0]], {
	visible: false
});
// Create the draggable point that moves only horizontally
const c = board.create('glider', [0, 0, cAxis], {
	name: 'c',
	size: 4,
	color: 'black',
	fillOpacity: 0.2,
	strokeColor: 'black',
	highlight: false,
	showInfobox: false,
	label: { visible: false },
});

const allGraphObjects = [];

// === Graph Object Class ===
class GraphObject {
	constructor(func, imgList, plotBoard, plotAspect) {
		
		this.selected = false;
		this.transition = 0;
		this.imgLabels = [];
		this.txtLabels = [];
		this.f = func;
		this.u = (x, c) => x >= c ? 1 : 0;
		this.fu = (x, c) => this.u(x, c) * this.f(x);

		this.fLeft = plotBoard.create('functiongraph', [
			t => this.f(t), 
			a, () => c.X()
		], {
			strokeColor: 'blue',
			strokeWidth: 1.5,
			opacity: 0.2,
			visible: true,
			dash: 3,
			highlight: false,
		});

		this.fuPlot = plotBoard.create('functiongraph', [
			x => this.fu(x, c.X()), 
			a, b
		], {
			strokeColor: 'black',
			strokeWidth: 3,
			opacity: 1,
			visible: true,
			highlight: false,
		});
		
		// this.uPlot = plotBoard.create('functiongraph', [
		// 	x => this.u(x, c.X()),
		// 	() => c.X(), b
		// ], {
		// 	strokeColor: 'green',
		// 	strokeWidth: 2,
		// 	size: 2,
		// 	opacity: 1,
		// 	visible: true,
		// 	// dash: 3,
		// 	highlight: false,
		// });

		// // open and closed endoints
		// this.uEndPt = plotBoard.create('point', [
		// 	() => c.X(),
		// 	() => this.u(c.X(), c.X())
		// ], {
		// 	strokeColor: 'green',
		// 	strokeWidth: 1,
		// 	size: 2,
		// 	color: 'green',
		// 	opacity: 1,
		// 	fixed: true,
		// 	highlight: false,
		// 	showInfobox: false,
		// 	label: { visible: false }
		// });
		
		this.fEndPt = plotBoard.create('point', [
			() => c.X(),
			() => this.f(c.X())
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

		this.cLine = plotBoard.create('line', [
			[() => c.X(), -1.3],
			[() => c.X(), () => Math.max(1.5, this.fu(c.X(), c.X()))]
		], {
			straightFirst: false,
			straightLast: false,
			strokeColor: '#444',
			strokeWidth: 1,
			dash: 2
		});

		// TEXT LABELS
		const offLabel = plotBoard.create('text', [
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

		const onLabel = plotBoard.create('text', [
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

		// IMAGE LABELS
		if (imgList) {
			imgList.forEach(([ht, ar, x, y, id, xAnchor, xOffset]) => {
				if (!xOffset) {
					xOffset = 0;
				}
				const wd = ht * ar * plotAspect;
				const src = dataPath + id + ".png";
				const img = plotBoard.create('image', [
					src,
					[
						() => xAnchor ? xAnchor.X() + xOffset : x + xOffset,
						y
					],
					[wd, ht]
				], { fixed: true, xAnchor: 'center', yAnchor: 'bottom' });
				this.imgLabels.push(img);
			});
		}

		allGraphObjects.push(this);
	}
}

// === Graphs ===
const objects = {
	funcObj: new GraphObject(
		x => 0.2 * x * x - 1,
		[// Image Labels 
		//	[height	,aspect ratio	,x			,y				,id						,anchor	,xOffset	]
			// [1.2	,438	/ 269	,-3.2		,1.7			,'15thtsqrd-1'			,null	,0			],
			// [0.5	,248	/ 125	,1			,1.1			,'uc'					,c		,0.5		],
			// [0.4	,559	/ 125	,1			,0.1			,'uc-equals-0'			,c		,-1.8		],
			// [0.4	,555	/ 125	,1			,0.1			,'uc-equals-1'			,c		,0.5		],
			[1.2	,838	/ 299	,1.65		,1.7			,'15thtsqrd-1_times_uc'	,null	,0			],
			[0.25	,59		/ 57	,0			,ymin + 0.2		, 'c'					,c		,-0.07		],
			[0.35	,45		/ 81	,xmax-0.3	,-0.7			, 't'					,null	,0			],
		],
		board,
		xyPlotAspect
	),
};