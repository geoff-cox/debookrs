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
		grid = false,
		gridOptions = {},
	}) {
		this.dataPath = dataPath;
		this.boardId = boardId;
		this.boardWindow = boardWindow;
		[this.xmin, this.xmax, this.ymin, this.ymax] = boardWindow;

		this.plotDomain = plotDomain;
		[this.a, this.b] = plotDomain;

		this.tAxis = tAxis;
		this.yAxis = yAxis;

		this.txtLabels = txtLabels;
		this.imgLabels = imgLabels;
		this.grid = grid;
		this.gridOptions = gridOptions;

		this.textElements = new Map();
		this.imageElements = new Map();
		this.graphObjects = [];

		this.initializeBoard(boardId);
	}

	initializeBoard(id) {
		this.board = JXG.JSXGraph.initBoard(id, {
			boundingbox: [this.xmin, this.ymax, this.xmax, this.ymin],
			showCopyright: false,
			showNavigation: false,
			grid: this.grid,
			...(this.grid ? { renderer: this.gridOptions } : {}),
			axis: false,
		});

		this.boardAspect = this.computeAspectRatio();
		this.placeAxes();
		this.placeTextLabels();
		this.placeImageLabels();
	}

	computeAspectRatio() {
		const wPx = this.board.containerObj.clientWidth;
		const hPx = this.board.containerObj.clientHeight;
		const pxPerUnitX = wPx / (this.xmax - this.xmin);
		const pxPerUnitY = hPx / (this.ymax - this.ymin);
		return pxPerUnitY / pxPerUnitX;
	}

	placeAxes() {
		if (this.tAxis) {
			this.board.create('axis', [[this.xmin, 0], [this.xmax, 0]], this.axisOptions('t'));
		}
		if (this.yAxis) {
			this.board.create('axis', [[0, this.ymin], [0, this.ymax]], this.axisOptions('y'));
		}
	}

	axisOptions(axis) {
		const isTime = axis === 't';
		return {
			name: axis,
			ticks: {
				insertTicks: false,
				minorTicks: 0,
				ticksDistance: 1,
				label: {
					visible: true,
					offset: isTime ? [5, -5] : [-5, 0],
					anchorX: 'right',
					anchorY: isTime ? 'top' : 'middle',
					fontSize: 16,
				},
				majorHeight: 5,
			}
		};
	}

	placeTextLabels() {
		this.txtLabels.forEach(([fontSize, x, y, text, id]) => {
			const label = this.board.create('text', [x, y, text], {
				fontSize: fontSize,
				anchorX: 'left',
				anchorY: 'middle'
			});
			if (id) this.textElements.set(id, label);
		});
	}

	placeImageLabels() {
		this.imgLabels.forEach(([ht, x, y, ar, name, id]) => {
			const image = this.board.create('image', [
				this.dataPath + name + '.png',
				[x, y],
				[ht * this.boardAspect * ar, ht]
			], {
				fixed: true,
				xAnchor: 'center',
				yAnchor: 'bottom'
			});
			if (id) this.imageElements.set(id, image);
		});
	}

	updateBoardWindow(newWindow) {
		this.board.setBoundingBox(newWindow);
		this.boardWindow = newWindow;
		[this.xmin, this.xmax, this.ymin, this.ymax] = newWindow;
	}

	addTextLabel(fontSize, x, y, text, id = null) {
		const label = this.board.create('text', [x, y, text], {
			fontSize,
			anchorX: 'left',
			anchorY: 'middle'
		});
		if (id) this.textElements.set(id, label);
		return label;
	}

	addImageLabel(ht, x, y, ar, name, id = null) {
		const image = this.board.create('image', [
			this.dataPath + name + '.png',
			[x, y],
			[ht * this.boardAspect * ar, ht]
		], {
			fixed: true,
			xAnchor: 'center',
			yAnchor: 'bottom'
		});
		if (id) this.imageElements.set(id, image);
		return image;
	}

	addGraphObject(obj) {
		this.graphObjects.push(obj);
		return obj;
	}

	setVisibility(visible) {
		this.graphObjects.forEach(obj => obj.setVisibility?.(visible));
	}

	setOpacity(opacity) {
		this.graphObjects.forEach(obj => obj.setOpacity?.(opacity));
	}

	toggle() {
		this.setVisibility(!this.selected);
	}
}