// === General Settings ===
const dataPath = 'external/code/jsxgraph/unit-step-interactives/';
const xmin = -4, xmax = 4, ymin = -2, ymax = 3;
const a = -5, b = 5; // plotting domain

// === Helper to compute xy aspect ratio ===
function getAspectRatio(board, xRange, yRange) {
	const wPx = board.containerObj.clientWidth;
	const hPx = board.containerObj.clientHeight;
	const pxPerUnitX = wPx / xRange;
	const pxPerUnitY = hPx / yRange;
	return pxPerUnitY / pxPerUnitX;
}

// === Draw an open circle by parametric curve ===
function drawOpenCircle(board, x, y, color, r = 0.1, aspect = 1) {
	return board.create('curve', [
		t => x + r * Math.cos(t) * aspect,
		t => y + r * Math.sin(t),
		0, 2 * Math.PI
	], {
		strokeColor: color,
		strokeWidth: 2,
		fillColor: 'white',
		fillOpacity: 1,
		fixed: true,
		highlight: false,
		visible: false
	});
}

// === Initialize Boards ===
const titleBoard = JXG.JSXGraph.initBoard("unit-step-3-title", {
	boundingbox: [xmin, 1, xmax, 0],
	showCopyright: false,
	showNavigation: false,
	grid: false,
	axis: false,
});

const plotBoard = JXG.JSXGraph.initBoard("unit-step-3-plots", {
	boundingbox: [xmin, ymax, xmax, ymin],
	showCopyright: false,
	showNavigation: false,
	grid: false,
	axis: false,
});

const titleAspect = getAspectRatio(titleBoard, xmax - xmin, 1);
const plotAspect = getAspectRatio(plotBoard, xmax - xmin, ymax - ymin);

// === Axes on plotBoard ===
plotBoard.create('axis', [[xmin, 0], [xmax, 0]], {
	name: 't',
	ticks: {
		insertTicks: false,
		minorTicks: 0,
		ticksDistance: 1,
		label: { visible: true, offset: [5, -5], anchorX: 'right', anchorY: 'top', fontSize: 16 },
		majorHeight: 5
	}
});

plotBoard.create('axis', [[0, ymin], [0, ymax]], {
	name: 'f(t)',
	ticks: {
		insertTicks: false,
		minorTicks: 0,
		ticksDistance: 1,
		label: { visible: true, offset: [-5, 0], anchorX: 'right', anchorY: 'middle', fontSize: 16 },
		majorHeight: 5
	}
});

titleBoard.create('text', [xmin + 0.2, 0.5, 'Functions:'], {
	fontSize: 16,
	anchorX: 'left',
	anchorY: 'middle'
});

// === General Labels ===
const fEqualsHt = 0.4;
const fEqualsAsp = 384 / 125;
titleBoard.create('image', [
	dataPath + "ft-equals.png",
	[-2, 0.3],
	[fEqualsHt * titleAspect * fEqualsAsp, fEqualsHt]
], {
	fixed: true,
	xAnchor: 'center',
	yAnchor: 'bottom'
});

const tHt = 0.35;
const tAsp = 45 / 81;
plotBoard.create('image', [
	dataPath + "t.png",
	[xmax - 0.3, -0.7],
	[tHt * titleAspect * tAsp, tHt]
], {
	fixed: true,
	xAnchor: 'center',
	yAnchor: 'bottom'
});

class GraphObject {
	constructor({ func, color, imgPos, imgHt, imgAsp, jumpPts = [], imgID, plotLabels = [], labelBoard, curveBoard, aspectImg, aspectCurve }) {
		this.func = func;
		this.color = color;
		this.selected = false;
		this.hovered = false;
		this.jumpMarkers = [];
		this.curveLabels = [];

		const imgWidth = imgHt * imgAsp * aspectImg;
		const imgSize = [imgWidth, imgHt];
		const imgSrc = dataPath + imgID + ".png";

		this.curve = curveBoard.create('functiongraph', [x => this.func(x), a, b], {
			strokeColor: color,
			strokeWidth: 2,
			opacity: 0.3,
			visible: false
		});

		jumpPts.forEach(([x, y1, y2]) => {
			const open = curveBoard.create('point', [x, y1], {
				strokeColor: color,
				strokeWidth: 2,
				size: 3,
				color,
				fillOpacity: 0.1,
				fixed: true,
				highlight: false,
				visible: false,
				opacity: 0.3,
				label: { visible: false }
			});
			const closed = curveBoard.create('point', [x, y2], {
				size: 3,
				color,
				fixed: true,
				opacity: 0.3,
				visible: false,
				label: { visible: false }
			});
			this.jumpMarkers.push({ open, closed });
		});

		plotLabels.forEach(([x, y, label]) => {
			const text = curveBoard.create('text', [x, y, label], {
				fontSize: 16,
				anchorX: 'left',
				anchorY: 'bottom',
				visible: false,
				fixed: true,
				strokeColor: "green"
			});
			this.curveLabels.push({ text });
		});

		this.img = labelBoard.create('image', [imgSrc, imgPos, imgSize], {
			opacity: 0.5,
			anchorX: 'left',
			anchorY: 'bottom',
			fixed: true
		});
		this.img.rendNode.style.cursor = 'pointer';

		this.img.rendNode.addEventListener('pointerdown', () => this.toggle());
		this.img.rendNode.addEventListener('mouseenter', () => this.highlight());
		this.img.rendNode.addEventListener('mouseleave', () => this.reset());
	}

	toggle() {
		this.selected = !this.selected;
		this.img.setAttribute({ opacity: this.selected ? 1 : 0.5 });
		this.update();
		checkAndShowProduct();
	}

	highlight() {
		if (isProductActive()) {
			this.setOpacity(0.2);
			return;
		}
		this.hovered = true;
		this.curve.setAttribute({ visible: true, strokeWidth: 4 });
		this.setOpacity(1);
	}

	reset() {
		this.hovered = false;
		const show = this.selected && !isProductActive();
		this.curve.setAttribute({ visible: show, strokeWidth: 2 });
		this.setOpacity(this.selected ? 1 : 0.3);
	}

	update() {
		const show = this.selected && !isProductActive();
		this.curve.setAttribute({ visible: show, opacity: this.selected ? 1 : 0.3 });
		this.setOpacity(this.selected ? 1 : 0.3);
		this.curveLabels.forEach(({ text }) => text.setAttribute({ visible: this.selected }));
	}

	setOpacity(alpha) {
		this.curve.setAttribute({ opacity: alpha });
		this.jumpMarkers.forEach(({ open, closed }) => {
			open.setAttribute({ opacity: alpha });
			closed.setAttribute({ opacity: alpha });
		});
	}

	setVisibility(isVisible) {
		this.curve.setAttribute({ visible: isVisible });
		this.jumpMarkers.forEach(({ visible: isVisible }) => {
			open.setAttribute({ visible: isVisible });
			closed.setAttribute({ visible: isVisible });
		});
	}
}

const curves = {
	curve1: new GraphObject({
		func: x => 0.2 * x * x - 1,
		color: 'blue',
		imgPos: [-0.95, 0.09],
		imgHt: 0.82,
		imgAsp: 596 / 299,
		jumpPts: [],
		imgID: 'lp-15thtsqrd-1-rp',
		labelBoard: titleBoard,
		curveBoard: plotBoard,
		aspectImg: titleAspect,
		aspectCurve: plotAspect
	}),
	curve2: new GraphObject({
		func: x => x >= 0 ? 1 : 0,
		color: 'green',
		imgPos: [0.4, 0.3],
		imgHt: 0.4,
		imgAsp: 248 / 125,
		jumpPts: [[0, 0, 1]],
		imgID: 'uc',
		plotLabels: [[-2.2, 2.1, '"off"'], [1.8, 2.1, '"on"']],
		labelBoard: titleBoard,
		curveBoard: plotBoard,
		aspectImg: titleAspect,
		aspectCurve: plotAspect
	})
};

function isProductActive() {
	return curves.curve1.selected && curves.curve2.selected;
}

const fTimesU = plotBoard.create('functiongraph', [
	x => isProductActive() ? curves.curve1.curve.Y(x) * curves.curve2.curve.Y(x) : 0,
	a, b
], {
	strokeColor: 'red',
	strokeWidth: 3,
	visible: false
});

function checkAndShowProduct() {
	const productOn = isProductActive();
	fTimesU.setAttribute({ visible: productOn });

	Object.values(curves).forEach(curve => {
		curve.curve.setAttribute({ visible: !productOn });
		curve.jumpMarkers.forEach(({ open, closed }) => {
			open.setAttribute({ visible: !productOn });
			closed.setAttribute({ visible: !productOn });
		});
		curve.curveLabels.forEach(({ text }) => text.setAttribute({ visible: !productOn }));
	});
}
