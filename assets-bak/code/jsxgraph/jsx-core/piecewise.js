class Piecewise {
	constructor(board,
		pieces,
		isContinuous = false,
		imgToggle = [],
		toggleOn = false,
		options = {}
	) {
		this.board = board;
		this.pieces = pieces;
		this.options = options;
		this.imgToggle = imgToggle;
		this.selected = false;
		this.hovered = false;

		this.placeImageToogle(imgToggle);
		if (isContinuous) {
			this.pieces.forEach(piece => {
				piece.setPieceStyle('continuous');
			});
		}
	}

	placeImageToogle(imgToggle) {
		const [ht, x, y, ar, imgName, brd] = imgToggle;
		this.imgToggle = brd.board.create('image', [
			dataPath + imgName + '.png',
			[x, y],
			[ht * brd.boardAspect * ar, ht]
		], {
			opacity: 0.3,
			fixed: true,
			xAnchor: 'center',
			yAnchor: 'bottom'
		});
		this.imgToggle.rendNode.style.cursor = 'pointer';
		if (this.toggleOn) {
			this.imgToggle.rendNode.addEventListener('pointerdown', this.toggleSwitch);
		} else {
			this.toggleSwitch();
		}
		this.imgToggle.rendNode.addEventListener('mouseenter', this.highlight);
    	this.imgToggle.rendNode.addEventListener('mouseleave', this.reset);
	}

	setPieceStyle(type) {
		this.pieces.forEach(piece => {
			piece.setPieceStyle(type);
		});
	}

	allSelected() {
		return this.pieces.every(piece => piece.selected);
	}

	toggleSwitch = () => {
		this.selected = !this.selected;
		this.setPieceStyle('selected');
		this.imgToggle.setAttribute({ opacity: this.selected ? 1 : 0.3 });
	};

	highlight = () => {
		this.hovered = true;
		this.setPieceStyle('hoverOn');
	};

	reset = () => {
		this.hovered = false;
		this.setPieceStyle('hoverOff');
	};

}


class Piece {
	constructor(
		board,
		func = (x) => 0,
		endPoints = {xLeft: xmin, typeLeft: 'none', xRight: xmax, typeRight: 'none'},
		ops = {},
		imgLabels = [],
		txtLabels = [],
		aspectCorrection = 1,
	) {

		this.xLeft = typeof endPoints.xLeft === "object" ? () => endPoints.xLeft.X() : () => endPoints.xLeft;
		this.xRight = typeof endPoints.xRight === "object" ? () => endPoints.xRight.X() : () => endPoints.xRight;
		this.yLeft = typeof endPoints.xLeft === "object" ? () => func(endPoints.xLeft.X()) : () => func(endPoints.xLeft);
		this.yRight = typeof endPoints.xRight === "object" ? () => func(endPoints.xRight.X()) : () => func(endPoints.xRight);
		this.plotLEndPt = endPoints.typeLeft !== 'none';
		this.plotREndPt = endPoints.typeRight !== 'none';
		this.typeLeft = endPoints.typeLeft;
		this.typeRight = endPoints.typeRight;
		
		this.selected = false;
		this.hovered = false;
		this.dashed = false;
		this.endPoints = endPoints;
		this.plotEndpoints = true;
		this.imgLabels = [];
		this.txtLabels = [];
		this.f = func;

		let shiftxLeft = this.xLeft;
		let shiftxRight = this.xRight;
		
		if (this.typeLeft === 'open') {
			shiftxLeft = () => this.xLeft() + 0.07;
		}
		if (this.typeRight === 'open') {
			shiftxRight = () => this.xRight() - 0.07;
		}
		
		this.curve = board.create('functiongraph', [
			t => func(t),
			shiftxLeft,
			shiftxRight
		], {
			strokeColor: ops.color || 'blue',
			strokeWidth: ops.strokeWidth || 2,
			dash: ops.dash || 0,
			opacity: 1,
			visible: false,
			highlight: false,
		});

		this.leftPoint = board.create('point', [this.xLeft, this.yLeft], {
			fixed: true,
			size: 3,
			color: ops.color || 'blue',
			fillOpacity: this.typeLeft === 'open' ? 0 : 1,
			visible: false,
			highlight: false,
			showInfobox: false,
			label: { visible: false }
		});
		
		this.rightPoint = board.create('point', [this.xRight, this.yRight], {
			fixed: true,
			size: 3,
			color: ops.color || 'blue',
			fillOpacity: this.typeRight === 'open' ? 0 : 1,
			visible: false,
			highlight: false,
			showInfobox: false,
			label: { visible: false }
		});

		allGraphObjects.push(this);
	}

	setPieceStyle(type) {
		switch (type) {
			case 'hoverOn':
				this.hovered = true;
				this.curve.setAttribute({
					strokeWidth: 4,
					visible: true,
					opacity: this.selected ? 1 : 0.3
				});
				this.leftPoint.setAttribute({
					size: 4,
					visible: this.plotLEndPt,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeLeft === 'open' ? 0 : 1
				});
				this.rightPoint.setAttribute({
					size: 4,
					visible: this.plotREndPt,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeRight === 'open' ? 0 : 1
				});
				break;
			case 'hoverOff':
				this.hovered = false;
				this.curve.setAttribute({
					strokeWidth: 3,
					visible: this.selected,
					opacity: this.selected ? 1 : 0.3
				});
				this.leftPoint.setAttribute({
					size: 3,
					visible: this.plotLEndPt && this.selected,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeLeft === 'open' ? 0 : 1
				});
				this.rightPoint.setAttribute({
					size: 3,
					visible: this.plotREndPt && this.selected,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeRight === 'open' ? 0 : 1
				});
				break;
			case 'selected':
				this.selected = !this.selected;
				this.curve.setAttribute({
					visible: this.selected,
					opacity: this.selected ? 1 : 0.3
				});
				this.leftPoint.setAttribute({
					size: 3,
					visible: this.plotLEndPt && this.selected,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeLeft === 'open' ? 0 : 1
				});
				this.rightPoint.setAttribute({
					size: 3,
					visible: this.plotREndPt && this.selected,
					opacity: this.selected ? 1 : 0.3,
					fillOpacity: this.typeRight === 'open' ? 0 : 1
				});
				break;
			case 'dash':
				this.curve.setAttribute({ dash: 3 });
				break;
			case 'reset':
				this.curve.setAttribute({
					visible: false,
					strokeWidth: 3,
					opacity: 0.3
				});
				this.leftPoint.setAttribute({
					visible: false,
					strokeWidth: 3,
					opacity: 0.3
				});
				this.rightPoint.setAttribute({
					visible: false,
					strokeWidth: 3,
					opacity: 0.3
				});
				break;
			case 'continuous':
				this.plotEndpoints = false;
				break;
			default:
				this.warn(`Unknown style type: ${type}`);
		}
	}
}