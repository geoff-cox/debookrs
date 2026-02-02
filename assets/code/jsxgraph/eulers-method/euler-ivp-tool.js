// === Euler's Method Interactive Tool ===
// Interactive visualization of Euler's Method for solving initial value problems.
// Users click to start, then guess where the next point should be based on the slope.
// The tool validates guesses and builds the approximate solution step by step.
(function () {
	const boardId = 'euler-ivp-tool';
	const imgPath = 'external/code/jsxgraph/img-labels/';
	const xmin = -0.5, xmax = 3, ymin = -5.5, ymax = 5.5;

	// === SETTINGS ===
  const t0 = 0, y0 = -2;          // Initial condition: y(t0) = y0
  const h = 0.5;                  // Step size for Euler's method
  const f = (t, y) => 6*t + y;    // Differential equation: y' = f(t, y)
  const showInitialPoint = false; // Whether to show the green starting point immediately
  const snapToVertical = true;    // Constrain guesses to vertical line at next t value
  const showConnectingLine = true; // Draw lines connecting successive points

  let board = JXG.JSXGraph.initBoard(boardId + '-plot1', {
    boundingbox: [xmin, ymax, xmax, ymin],
    axis: true,
    showCopyright: false,
    showNavigation: false,
    pan: { enabled: false },
    zoom: { enabled: false },
  });

  // Store reset button outside board container
  let resetButton = null;

  function initializeBoard() {
    // State object tracks the current state of the interactive
    let state = {
      started: false,        // Whether user has clicked to start
      currentIndex: 0,       // Index of the current point in the points array
      points: [{ t: t0, y: y0 }], // Array of computed points
      guessPreview: null,    // The orange preview point that follows the mouse
      directionLines: [],    // Array of purple slope arrows
      wrongGuesses: [],      // Array of incorrect guess points (red circles)
      locked: false,         // Lock state to prevent interaction
      moveHandler: null,     // Reference to mouse move handler
      upHandler: null        // Reference to mouse up handler
    };

    // board.create('image', [
    //   imgPath + 'euler-ivp-label.png',
    //   [1, 4], [3, 1.2],
	  // [0.6 * board.boardAspect * (1133 / 131), 0.6]
    // ], {
    //   fixed: true,
    //   layer: 1
    // });

    // Create the initial "ghost" point that users click to start
    const ghostPoint = board.create('point', [t0, y0], {
      name: '', size: 6, color: 'blue', fillColor: 'lightblue',
      visible: true, fixed: true
    });

    // Create the actual starting point (shown after clicking ghost point)
    const startPoint = board.create('point', [t0, y0], {
      name: '', size: 6, color: 'green', fillColor: 'green',
      visible: false, fixed: true
    });

    // Start the interactive when user clicks the ghost point
    ghostPoint.on('up', () => {
      if (!state.started) {
        state.started = true;
        ghostPoint.setAttribute({ visible: false });
        startPoint.setAttribute({ visible: true });
        showSlopeSegment(t0, y0);
        enableNextGuess();
        board.update();
      }
    });

    // Display the slope direction at a given point
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

    // Enable the user to guess the next point
    function enableNextGuess() {
      const { t, y } = state.points[state.currentIndex];
      const tNext = t + h;
      const yNext = y + h * f(t, y); // Correct y-value using Euler's method
      const snapRadius = 0.25;       // Grid snap tolerance

      // Remove previous preview point if it exists
      if (state.guessPreview) board.removeObject(state.guessPreview);

      // Create new preview point (will follow mouse)
      state.guessPreview = board.create('point', [tNext, yNext], {
        name: '', size: 5, opacity: 0.5,
        color: 'orange', fillColor: 'orange',
        visible: false, fixed: false
      });

      // Remove old event handlers to prevent accumulation
      if (state.moveHandler) {
        board.off('move', state.moveHandler);
      }
      if (state.upHandler) {
        board.off('up', state.upHandler);
      }

      // Mouse move handler: update preview point position
      state.moveHandler = function (evt) {
        if (!state.started || state.locked) return;
        
        const coords = board.getUsrCoordsOfMouse(evt);
        const snappedY = Math.round(coords[1] / snapRadius) * snapRadius;
        const x = snapToVertical ? tNext : coords[0];
        
        state.guessPreview.moveTo([x, snappedY], 0);
        state.guessPreview.setAttribute({ visible: true });
        board.update();
      };

      // Mouse up handler: check if guess is correct
      state.upHandler = function (evt) {
        if (!state.started || state.locked) return;
        
        const coords = board.getUsrCoordsOfMouse(evt);
        const snappedY = Math.round(coords[1] / snapRadius) * snapRadius;
        const x = snapToVertical ? tNext : coords[0];

        // Check if guess is close enough to correct answer
        if (Math.abs(snappedY - yNext) <= snapRadius && Math.abs(x - tNext) <= snapRadius) {
          state.guessPreview.setAttribute({ visible: false });
          
          // Create permanent green point at correct location
          const newPoint = board.create('point', [tNext, yNext], {
            name: '', size: 4, color: 'green', fillColor: 'green', fixed: true
          });

          // Draw line connecting to previous point
          if (showConnectingLine) {
            const prev = state.points[state.currentIndex];
            board.create('line', [[prev.t, prev.y], [tNext, yNext]], {
              straightFirst: false, straightLast: false, strokeColor: 'black', strokeWidth: 2, fixed: true
            });
          }

          // Update state and continue to next point
          state.points.push({ t: tNext, y: yNext });
          state.currentIndex++;
          showSlopeSegment(tNext, yNext);

          // Clean up event handlers before adding new ones
          board.off('move', state.moveHandler);
          board.off('up', state.upHandler);
          state.moveHandler = null;
          state.upHandler = null;

          // Enable next guess if we haven't reached the end
          if (tNext + h <= xmax) {
            enableNextGuess();
          }
          
          board.update();
        } else {
          // Incorrect guess: show red circle
          const wrong = board.create('point', [x, snappedY], {
            name: '', size: 4, strokeColor: 'red', strokeWidth: 2,
            fillColor: 'white', fixed: true
          });
          state.wrongGuesses.push(wrong);
          board.update();
        }
      };

      // Attach event handlers to the board
      board.on('move', state.moveHandler);
      board.on('up', state.upHandler);
    }
  }

  initializeBoard();

  // === RESET BUTTON ===
  // Create a reset button that clears the board and restarts the interactive
  if (!resetButton) {
    resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.style.position = 'absolute';
    resetButton.style.top = '10px';
    resetButton.style.right = '10px';
    resetButton.style.zIndex = '1000';
    resetButton.style.padding = '8px 16px';
    resetButton.style.backgroundColor = '#f0f0f0';
    resetButton.style.border = '1px solid #ccc';
    resetButton.style.borderRadius = '4px';
    resetButton.style.cursor = 'pointer';
    
    const container = document.getElementById(boardId + '-plot1');
    container.style.position = 'relative';
    container.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
      // Free the old board and remove the reset button
      JXG.JSXGraph.freeBoard(board);
      container.removeChild(resetButton);
      resetButton = null;
      
      // Recreate the board
      board = JXG.JSXGraph.initBoard(boardId + '-plot1', {
        boundingbox: [xmin, ymax, xmax, ymin],
        axis: true,
        showCopyright: false,
        showNavigation: false,
        pan: { enabled: false },
        zoom: { enabled: false },
      });
      
      // Reinitialize the interactive elements
      initializeBoard();
      
      // Recreate the reset button
      resetButton = document.createElement('button');
      resetButton.textContent = 'Reset';
      resetButton.style.position = 'absolute';
      resetButton.style.top = '10px';
      resetButton.style.right = '10px';
      resetButton.style.zIndex = '1000';
      resetButton.style.padding = '8px 16px';
      resetButton.style.backgroundColor = '#f0f0f0';
      resetButton.style.border = '1px solid #ccc';
      resetButton.style.borderRadius = '4px';
      resetButton.style.cursor = 'pointer';
      container.appendChild(resetButton);
    });
  }
})();
