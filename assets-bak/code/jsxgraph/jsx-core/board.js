class BoardObj {
	constructor({
		dataPath = '',
		boardId = '',
		boardWindow = [-5, 5, -5, 5],
		plotDomain = [-5, 5],
		tAxis = false,
		yAxis = false,
		txtLabels = [],
		imgLabels = [],
	}) {
		this.dataPath = dataPath;
		this.boardId = boardId;
		this.boardWindow = boardWindow;
		this.xmin = boardWindow[0];
		this.xmax = boardWindow[1];
		this.ymin = boardWindow[2];
		this.ymax = boardWindow[3];
		this.plotDomain = plotDomain;
		this.a = plotDomain[0];
		this.b = plotDomain[1];
		this.tAxis = tAxis;
		this.yAxis = yAxis;
		this.txtLabels = txtLabels;
		this.imgLabels = imgLabels;
	
		this.initializeBoard(boardId);
	}

	initializeBoard(id) {
		this.board = JXG.JSXGraph.initBoard(id, {
			boundingbox: [this.xmin, this.ymax, this.xmax, this.ymin],
			showCopyright: false,
			showNavigation: false,
			grid: false,
			axis: false,
		});

		this.boardAspect = this.computeAspectRatio();
		this.placeAxes();
		this.placeTextLabels();
		this.placeImageLabels();
	}

	placeAxes() {
		
		if (this.tAxis) {
			this.board.create('axis', [[this.xmin, 0], [this.xmax, 0]], {
				name: 't',
				ticks: {
					insertTicks: false,
					minorTicks: 0,
					ticksDistance: 1,
					label: { visible: true, offset: [5, -5], anchorX: 'right', anchorY: 'top', fontSize: 16 },
					majorHeight: 5
				}
			});
		}

		if (this.yAxis) {
			this.board.create('axis', [[0, this.ymin], [0, this.ymax]], {
				name: 'y',
				ticks: {
					insertTicks: false,
					minorTicks: 0,
					ticksDistance: 1,
					label: { visible: true, offset: [-5, 0], anchorX: 'right', anchorY: 'middle', fontSize: 16 },
					majorHeight: 5
				}
			});
		}
	}

	placeTextLabels() {
		this.txtLabels.forEach(([fontSize, x, y, text]) => {
			this.board.create('text', [x, y, text], {
				fontSize,
				anchorX: 'left',
				anchorY: 'middle'
			});
		});
	}

	placeImageLabels() {
		this.imgLabels.forEach(([ht, x, y, ar, name]) => {
			this.board.create('image', [
				this.dataPath + name + '.png',
				[x, y],
				[ht * this.boardAspect * ar, ht]
			], {
				fixed: true,
				xAnchor: 'center',
				yAnchor: 'bottom'
			});
		});
	}

	computeAspectRatio() {
		const wPx = this.board.containerObj.clientWidth;
		const hPx = this.board.containerObj.clientHeight;
		const pxPerUnitX = wPx / (this.xmax - this.xmin);
		const pxPerUnitY = hPx / (this.ymax - this.ymin);
		return pxPerUnitY / pxPerUnitX;
	}

	// addPart(func, xStart, xEnd, options = {}) {
	// 	const part = new Piece(this, func, xStart, xEnd, options);
	// 	this.parts.push(part);
	// 	return part;
	// }

	// setVisibility(visible) {
	// 	this.selected = visible;
	// 	this.parts.forEach(part => part.setVisibility(visible));
	// }

	// setOpacity(opacity) {
	// 	this.parts.forEach(part => part.setOpacity(opacity));
	// }

	// toggle() {
	// 	this.setVisibility(!this.selected);
	// }
}
