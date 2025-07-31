// === Euler's Method Interactive Tool ===
(function () {
	const boardId = 'euler-ivp-tool';
	const imgPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -0.5, xmax = 3, ymin = -5.5, ymax = 5.5;

	// === SETTINGS ===
  const t0 = 0, y0 = -2;
  const h = 0.5;
  const f = (t, y) => 6*t + y;
  const showInitialPoint = false;
  const snapToVertical = true;
  const showConnectingLine = true;

  let board = JXG.JSXGraph.initBoard(boardId + '-plot1', {
    boundingbox: [xmin, ymax, xmax, ymin],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: false },
    zoom: { enabled: false },
  });

  function initializeBoard() {
    let state = {
      started: false,
      currentIndex: 0,
      points: [{ t: t0, y: y0 }],
      guessPreview: null,
      directionLines: [],
      wrongGuesses: [],
      locked: false
    };

    // board.create('image', [
    //   imgPath + 'euler-ivp-label.png',
    //   [1, 4], [3, 1.2],
	  // [0.6 * board.boardAspect * (1133 / 131), 0.6]
    // ], {
    //   fixed: true,
    //   layer: 1
    // });

    const ghostPoint = board.create('point', [t0, y0], {
      name: '', size: 6, color: 'blue', fillColor: 'lightblue',
      visible: !showInitialPoint, fixed: true
    });

    const startPoint = board.create('point', [t0, y0], {
      name: '', size: 6, color: 'green', fillColor: 'green',
      visible: showInitialPoint, fixed: true
    });

    ghostPoint.on('up', () => {
      if (!state.started) {
        state.started = true;
        ghostPoint.setAttribute({ visible: false });
        startPoint.setAttribute({ visible: true });
        showSlopeSegment(t0, y0);
        enableNextGuess();
      }
    });

    function showSlopeSegment(t, y) {
      const slope = f(t, y);
      const dx = 0.4;
      const dy = slope * dx;
      const line = board.create('arrow', [[t - dx, y - dy], [t + dx, y + dy]], {
        straightFirst: false,
        straightLast: false,
        strokeColor: 'purple', dash: 2, strokeWidth: 2, fixed: true
      });
      state.directionLines.push(line);
    }

    function enableNextGuess() {
      const { t, y } = state.points[state.currentIndex];
      const tNext = t + h;
      const yNext = y + h * f(t, y);
      const snapRadius = 0.25;

      if (state.guessPreview) board.removeObject(state.guessPreview);

      state.guessPreview = board.create('point', [tNext, yNext], {
        name: '', size: 5, opacity: 0.5,
        color: 'orange', fillColor: 'orange',
        visible: false, fixed: true
      });

      board.on('move', function (e) {
        if (!state.started || state.locked) return;
        const coords = board.getUsrCoordsOfMouse(e);
        const snappedY = Math.round(coords[1] / snapRadius) * snapRadius;
        const x = snapToVertical ? tNext : coords[0];
        state.guessPreview.moveTo([x, snappedY]);
        state.guessPreview.setAttribute({ visible: true });
      });

      board.on('up', function (e) {
        if (!state.started || state.locked) return;
        const coords = board.getUsrCoordsOfMouse(e);
        const snappedY = Math.round(coords[1] / snapRadius) * snapRadius;
        const x = snapToVertical ? tNext : coords[0];

        if (Math.abs(snappedY - yNext) <= snapRadius && Math.abs(x - tNext) <= snapRadius) {
          const newPoint = board.create('point', [tNext, yNext], {
            name: '', size: 4, color: 'green', fillColor: 'green', fixed: true
          });

          if (showConnectingLine) {
            const prev = state.points[state.currentIndex];
            board.create('line', [[prev.t, prev.y], [tNext, yNext]], {
              straightFirst: false, straightLast: false, strokeColor: 'black', strokeWidth: 2, fixed: true
            });
          }

          state.points.push({ t: tNext, y: yNext });
          state.currentIndex++;
          showSlopeSegment(tNext, yNext);

          if (tNext + h <= xmax) {
            enableNextGuess();
          }
        } else {
          const wrong = board.create('point', [x, snappedY], {
            name: '', size: 4, strokeColor: 'red', strokeWidth: 2,
            fillColor: 'white', fixed: true
          });
          state.wrongGuesses.push(wrong);
        }
      });
    }
  }

  initializeBoard();

  // === RESET BUTTON ===
  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.style.position = 'absolute';
  resetButton.style.top = '10px';
  resetButton.style.right = '10px';
  resetButton.style.zIndex = 10;
  document.getElementById(boardId + '-plot1').appendChild(resetButton);

  resetButton.addEventListener('click', () => {
    JXG.JSXGraph.freeBoard(board);
    const container = document.getElementById(boardId + '-plot1');
    container.innerHTML = '';
    board = JXG.JSXGraph.initBoard(boardId + '-plot1', {
      boundingbox: [xmin, ymax, xmax, ymin],
      axis: true,
      showCopyright: false,
      showNavigation: false,
      pan: { enabled: false },
      zoom: { enabled: false },
    });
    initializeBoard();
  });
})();
