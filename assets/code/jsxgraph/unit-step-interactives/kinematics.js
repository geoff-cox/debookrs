// Initialize JSXGraph board
const board = JXG.JSXGraph.initBoard("box_f", {
    boundingbox: [-4, 4, 4, -4],
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

const container = document.getElementById("box_f");
container.style.position = "relative";

// === Slider for 't', placed on t axis ===
const tSlider = board.create('slider', [
    [-3, 0],       // LEFT endpoint (x, y)
    [3, 0],       // RIGHT endpoint
    [-3, 0.5, 3]     // [min, initial, max]
], {
    snapWidth: 0.01,
    withLabel: false,  // hide name label
    size: 3,
    fillColor: '#000000',
});

// === Define piecewise function ===
const f = x => 0.25 * x * x;
// const U = x => () => (t() < 0 ? 0 : 1);

const t = () => tSlider.Value();

// === Function graphs ===
const fGraph = board.create('functiongraph', [f, -3, 3], {
strokeColor: '#3366cc',
strokeWidth: () => (t() < 0 ? 4 : 1.5),
});

const uGraph = board.create('functiongraph', [
    t => t < 0 ? 0 : 1,
    -3, 3
  ], { 
    strokeColor: 'blue', 
    name: 'u(t)'
});

// === Point that follows the function ===
const pointOnGraph = board.create('point', [
    () => t(),
    () => f(t())
], {
    name: '',
    fillColor: '#ff0000',
    strokeColor: '#ff0000',
    size: 3,
    fixed: true,
    draggable: false,
});

let imageHt, aspect;

imageHt = 0.4; aspect = 279 / 83;
// Rendered label image for "f(t) = t"
const label1 = board.create(
'image', [
    'external/code/jsxgraph/piecewise-interactive/ft-equals-t.png',
    [0.3, 2.0], [ imageHt * aspect , imageHt ]
], {
    opacity: () => (t() >= 0 ? 0.4 : 1),
}
);

imageHt = 0.4; aspect = 438 / 83;
// Rendered label image for "f(t) = sin(t)"
const label2 = board.create(
'image', [
    'external/code/jsxgraph/piecewise-interactive/ft-equals-sin.png',
    [ 2.5 , 1 ], [ imageHt * aspect , imageHt ]
], {
    opacity: () => (t() >= 0 ? 1 : 0.4),
}
);

imageHt = 0.25; aspect = 45 / 81;
const w = imageHt * aspect;
const h = imageHt;
const tLabel = board.create(
'image', [
    'external/code/jsxgraph/piecewise-interactive/t.png',
    [ () => t() - w * 0.5 , -0.75 ], [ w , h ]
]
);
