window.addEventListener("DOMContentLoaded", () => {
  // Initialize JSXGraph board
  const board = JXG.JSXGraph.initBoard("box", {
    boundingbox: [-1, 4, 5, -2],
    showCopyright: false,
    showNavigation: false,
    grid: false,
    axis: true,
    defaultAxes: {
      x: {
          ticks: {
              insertTicks: false, // Disable automatic placement
              minorTicks: 1, // One minor tick between major ticks
              ticksDistance: 1, // Major ticks at every 2 units
              label: {
                  visible: true, // Show tick labels
                  offset: [0, -10], // Offset labels slightly above the axis
                  // anchorX: 'middle', // Center the label horizontally
                  // anchorY: 'top',  // Align the label to the top of the axis
                  fontSize: 16, // Set the font size
                  //cssClass: 'my-tick-labels' // Apply a CSS class
              }
          }
      },
      y: {
          ticks: {
              insertTicks: false,
              minorTicks: 1,
              ticksDistance: 1,
              label: {
                  visible: true,
                  offset: [-10, 0],
                  // anchorX: 'right',
                  // anchorY: 'middle',
                  fontSize: 16,
                  //cssClass: 'my-tick-labels'
              }
          }
      }
    }
  });

  const container = document.getElementById("box");
  container.style.position = "relative";

  // === Create number input for transition point 'a' ===
  const transitionInput = document.createElement("input");
  transitionInput.type = "number";
  transitionInput.min = 0;
  transitionInput.max = 5;
  transitionInput.step = 0.5;
  transitionInput.value = 2;
  transitionInput.style.position = "absolute";
  transitionInput.style.right = "20px";
  transitionInput.style.top = "10px";
  transitionInput.style.zIndex = 10;
  transitionInput.style.width = "4em";

  const inputLabel = document.createElement("span");
  inputLabel.innerHTML = "Transition @ 𝓽=";
  inputLabel.style.position = "absolute";
  inputLabel.style.right = "75px";
  inputLabel.style.top = "10px";
  inputLabel.style.zIndex = 10;
  inputLabel.style.fontFamily = "sans-serif";
  inputLabel.style.fontSize = "1.0em";

  // const tLabel = document.createElement("div");
  // tLabel.style.position = "absolute";
  // tLabel.style.top = "82%"; // position below the axis (adjust as needed)
  // tLabel.style.left = "50%";
  // tLabel.style.transform = "translateX(-50%)";
  // tLabel.style.fontFamily = "monospace";
  // tLabel.style.fontSize = "0.9em";
  // tLabel.style.padding = "2px 6px";
  // tLabel.style.border = "1px solid #ccc";
  // tLabel.style.borderRadius = "4px";
  // tLabel.style.background = "#f9f9f9";
  // tLabel.style.zIndex = 10;
  // tLabel.innerText = "t = 0.00";

  // board.on('update', () => {
  //   const tVal = tSlider.Value().toFixed(2);
  //   tLabel.innerText = `t = ${tVal}`;
  
  //   // Map t-value to pixel position on canvas
  //   const W = board.canvasWidth;
  //   const tMin = tSlider.min;  // or hardcode as 0
  //   const tMax = tSlider.max;  // or hardcode as 5
  //   const px = ((tSlider.Value() - tMin) / (tMax - tMin)) * W;
  
  //   tLabel.style.left = `${px}px`;
  // });

  container.appendChild(inputLabel);
  container.appendChild(transitionInput);

  

  // === Slider for 't', placed on t axis ===
  const tSlider = board.create('slider', [
    [0, 0], // LEFT endpoint (x, y)
    [5, 0], // RIGHT endpoint
    [0, 0, 5]   // [min, initial, max]
  ], {
    snapWidth: 0.01,
    withLabel: false  // hide name label
  });

  // === Define piecewise function ===
  const f1 = x => x;
  const f2 = x => Math.sin(x);

  const a = () => parseFloat(transitionInput.value);
  const t = () => tSlider.Value();

  // === Function graphs ===
  const g1 = board.create('functiongraph', [f1, 0, a], {
    strokeColor: '#3366cc',
    strokeWidth: () => (t() < a() ? 4 : 1.5)
  });
  
  const g2 = board.create('functiongraph', [f2, a, 5], {
    strokeColor: '#33aa66',
    strokeWidth: () => (t() >= a() ? 4 : 1.5)
  });

  // === Point that follows the function ===
  const pointOnGraph = board.create('point', [
    () => t(),
    () => (t() < a() ? f1(t()) : f2(t()))
  ], {
    name: '',
    fillColor: '#ff0000',
    strokeColor: '#ff0000',
    size: 4,
    fixed: true
  });

  // Rendered label image for "f(t) = t"
  const label1 = board.create(
    'image', [
      'external/code/piecewise-interactive/ft-equals-t.png',
      [0.3, 2.0],                 // bottom-left corner
      [3.4*(0.4), 1*(0.4)]        // 279/83 ≈ 3.4
    ], {
      opacity: () => (t() >= a() ? 0.2 : 1),
    }
  );
  // Rendered label image for "f(t) = sin(t)"
  const label2 = board.create(
    'image', [
      'external/code/piecewise-interactive/ft-equals-sin.png',
      [2.5, 1],
      [5.3*(0.4), 1*(0.4)]    // 438/83 ≈ 5.3
    ], {
      opacity: () => (t() >= a() ? 1 : 0.2),
    }
  );

  const imageWidth = 0.2;   // in graph units
  const imageHeight = 0.35;

  const tLabel = board.create(
    'image', [
      'external/code/piecewise-interactive/t.png',
      [
        () => t() - imageWidth / 2,
        -0.8
      ],
      [imageWidth, imageHeight]
    ]
  );

  container.appendChild(label1);
  container.appendChild(label2);

  if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
    MathJax.typesetPromise();
  }
});
