(function () {
	class Piece {
		constructor(board, func = (x) => 0, endPoints = {}, ops = {}, imgLabels = [], txtLabels = [], alwaysVisible = false) {

			this.board = board;
			this.f = func;

			// this.xLeft = typeof endPoints.xLeft === "object" ? () => endPoints.xLeft.X() : () => endPoints.xLeft;
			// this.xRight = typeof endPoints.xRight === "object" ? () => endPoints.xRight.X() : () => endPoints.xRight;
			this.xLeft = typeof endPoints.xLeft === "function"
				? endPoints.xLeft
				: typeof endPoints.xLeft === "object"
					? () => endPoints.xLeft.X()
					: () => endPoints.xLeft;

			this.xRight = typeof endPoints.xRight === "function"
				? endPoints.xRight
				: typeof endPoints.xRight === "object"
					? () => endPoints.xRight.X()
					: () => endPoints.xRight;

			this.typeLeft = endPoints.typeLeft;
			this.typeRight = endPoints.typeRight;
			this.plotLEndPt = this.typeLeft !== 'none';
			this.plotREndPt = this.typeRight !== 'none';
			this.alwaysVisible = alwaysVisible;
			this.visibleOverride = null; // null = automatic behavior

			this.selected = false;
			this.hovered = false;

			// Save user style
			this.baseStrokeWidth = ops.strokeWidth || 2;
			this.baseColor = ops.color || 'blue';
			this.baseDash = ops.dash || 0;
			this.baseOpacity = ops.opacity !== undefined ? ops.opacity : 1;
			this.basePointSize = 3;

			let shiftxLeft = this.xLeft;
			let shiftxRight = this.xRight;
			if (this.typeLeft === 'open') shiftxLeft = () => this.xLeft() + 0.07;
			if (this.typeRight === 'open') shiftxRight = () => this.xRight() - 0.07;

			this.curve = board.create('functiongraph', [
				t => func(t),
				shiftxLeft,
				shiftxRight
			], {
				strokeColor: this.baseColor,
				strokeWidth: this.baseStrokeWidth,
				dash: this.baseDash,
				opacity: this.baseOpacity,
				visible: false,
				highlight: false
			});

			this.leftPoint = board.create('point', [this.xLeft, () => func(this.xLeft())], {
				fixed: true,
				size: this.basePointSize,
				color: this.baseColor,
				fillOpacity: this.typeLeft === 'open' ? 0 : 1,
				visible: false,
				highlight: false,
				showInfobox: false,
				label: { visible: false }
			});

			this.rightPoint = board.create('point', [this.xRight, () => func(this.xRight())], {
				fixed: true,
				size: this.basePointSize,
				color: this.baseColor,
				fillOpacity: this.typeRight === 'open' ? 0 : 1,
				visible: false,
				highlight: false,
				showInfobox: false,
				label: { visible: false }
			});

			if (this.alwaysVisible) {
				this._setCurveStyle(this.baseStrokeWidth, this.baseOpacity);
				this._setPointStyle(this.basePointSize, this.baseOpacity);
			}
		}

		setPieceStyle(type) {
			switch (type) {
				case 'hoverOn':
					this.hovered = true;
					this._setCurveStyle(this.baseStrokeWidth + 3, this.selected ? 1 : this.baseOpacity);
					this._setPointStyle(this.basePointSize + 3, this.selected ? 1 : this.baseOpacity);
					break;
				case 'hoverOff':
					this.hovered = false;
					this._setCurveStyle(this.baseStrokeWidth, this.selected ? 1 : this.baseOpacity);
					this._setPointStyle(this.basePointSize, this.selected ? 1 : this.baseOpacity);
					break;
				case 'selected':
					this.selected = true;
					this.visibleOverride = null;
					this._setCurveStyle(this.baseStrokeWidth, 1);
					this._setPointStyle(this.basePointSize, 1);
					break;
				case 'reset':
					this.selected = false;
					this.visibleOverride = null;
					this._setCurveStyle(this.baseStrokeWidth, this.baseOpacity);
					this._setPointStyle(this.basePointSize, this.baseOpacity);
					break;
				case 'continuous':
					this.plotLEndPt = false;
					this.plotREndPt = false;
					break;
				case 'hidden':
					this.hovered = false;
					this.visibleOverride = false;
					this._setCurveStyle(this.baseStrokeWidth, 0);
					this._setPointStyle(this.basePointSize, 0);
					break;
				default:
					console.warn(`Unknown piece style: ${type}`);
			}
		}
		
		_setCurveStyle(strokeWidth, opacity) {
			const visible = this.visibleOverride !== null
				? this.visibleOverride
				: (this.selected || this.hovered || this.alwaysVisible);
		
			this.curve.setAttribute({
				strokeWidth,
				opacity,
				visible
			});
		}

		_setPointStyle(size, opacity) {
			const visible = this.visibleOverride !== null
				? this.visibleOverride
				: (this.selected || this.hovered || this.alwaysVisible);
		
			if (this.plotLEndPt) {
				this.leftPoint.setAttribute({
					size,
					visible,
					opacity,
					fillOpacity: this.typeLeft === 'open' ? 0 : opacity
				});
			}
			if (this.plotREndPt) {
				this.rightPoint.setAttribute({
					size,
					visible,
					opacity,
					fillOpacity: this.typeRight === 'open' ? 0 : opacity
				});
			}
		}
	}

	class Piecewise {
		constructor(boardObjOrBoard, pieces, isContinuous = false, imgToggle = null, toggleOn = false, options = {}) {
			this.board = boardObjOrBoard.board || boardObjOrBoard;
			this.boardObj = boardObjOrBoard.board ? boardObjOrBoard : null;
		
			this.pieces = pieces;
			this.options = options;
			this.toggleOn = toggleOn;
			this.imgToggleData = imgToggle;
		
			this.selected = toggleOn; // Track selection status
			this.hovered = false;
			this.alwaysVisible = !toggleOn; // Only static graphs are always visible
		
			if (this.boardObj) {
				this.boardObj.addGraphObject(this);
			}
		
			if (isContinuous) {
				this.pieces.forEach(piece => piece.setPieceStyle('continuous'));
			}
		
			if (imgToggle) {
				this.createImageLabel();
			}
		
			this.setPieceStyle('reset');  // Always start reset, no matter toggleOn
		}
		
		createImageLabel() {
			const [ht, x, y, ar, imgName, brdObj] = this.imgToggleData;
			const path = brdObj.dataPath || '';
		
			this.imgToggle = brdObj.board.create('image', [
				path + imgName + '.png',
				[x, y],
				[ht * brdObj.boardAspect * ar, ht]
			], {
				fixed: true,
				xAnchor: 'center',
				yAnchor: 'bottom',
				opacity: this.toggleOn ? 0.5 : 1
			});
		
			this.imgToggle.rendNode.style.cursor = 'pointer';
		
			// Always allow hover highlight
			this.imgToggle.rendNode.addEventListener('mouseenter', () => this.highlight());
			this.imgToggle.rendNode.addEventListener('mouseleave', () => this.reset());
		
			// Only allow toggle click if toggling is enabled
			if (this.toggleOn) {
				this.imgToggle.rendNode.addEventListener('pointerdown', () => this.toggleSwitch());
			}
		}

		setPieceStyle(type) {
			this.pieces.forEach(piece => piece.setPieceStyle(type));
		}

		highlight() {
			this.setPieceStyle('hoverOn');
		}

		reset() {
			if (this.selected) {
				this.setPieceStyle('selected');
			} else if (this.alwaysVisible) {
				this.setPieceStyle('reset'); // static graphs fade normally
			} else {
				this.setPieceStyle('hidden'); // NEW STATE for toggleable graphs
			}
		}

		toggleSwitch() {
			this.selected = !this.selected;
			if (this.selected) {
				this.setPieceStyle('selected');
				this.imgToggle.setAttribute({ opacity: 1 });
			} else {
				this.setPieceStyle('reset');
				this.imgToggle.setAttribute({ opacity: 0.5 });
			}
		}
	}

	// Attach globally for PreTeXt
	window.Piece = Piece;
	window.Piecewise = Piecewise;
})();
