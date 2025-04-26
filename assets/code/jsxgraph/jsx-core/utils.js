(function () {
	/**
	 * Create a Piece object and optionally register it.
	 */
	window.createPiece = function ({
		board,
		func,
		endpoints,
		options = {},
		txtLabels = [],
		imgLabels = [],
		registerWith = null,
		alwaysVisible = false
	}) {
		const piece = new Piece(board, func, endpoints, options, imgLabels, txtLabels, alwaysVisible);
		if (registerWith?.addGraphObject) {
			registerWith.addGraphObject(piece);
		}
		return piece;
	};

	/**
	 * Create a Piecewise object from multiple piece specs.
	 */
	window.createPiecewise = function ({
		boardObj,
		funcPieces,
		isContinuous = false,
		imgToggle = null,
		toggleOn = false
	}) {
		const pieces = funcPieces.map(spec =>
			window.createPiece({
				board: boardObj.board,
				registerWith: boardObj,
				alwaysVisible: !toggleOn,
				...spec
			})
		);
		return new Piecewise(boardObj, pieces, isContinuous, imgToggle, toggleOn);
	};
})();
