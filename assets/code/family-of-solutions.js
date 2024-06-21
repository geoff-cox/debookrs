/* 
Interactive Script illustrating the concepts of
	> Family of Solutions
	> Particular Solutions
*/

// Define the x and y ranges for the board
var x_L = -3.1, x_R = 3.1, y_B = -2, y_T = 7;

// Create the JSXGraph board
var board = JXG.JSXGraph.initBoard(
	'interactive-family-slate',
	{
		boundingbox:[x_L,y_T,x_R,y_B],
		keepaspectratio:false,
		axis:true,
		defaultAxes: {
			x: {ticks: {insertTicks: false, ticksDistance: 1, label: {fontsize: 14}}},
			y: {ticks: {label: {fontsize: 14}}},
		},
		showNavigation:false,
		showCopyright:false
	}
);

// Added because the board is too small in pretext's side-by-side environment
// Comment out or adjust as needed
board.resizeContainer(300, 300);

// Placeholder text area for the function labels
var txt = board.create('text', [0.9, 3.35, ''], {
    fontSize: 16,
    visible: false
});

// Hardcode a subset of the family of solutions' y-intercepts and corresponding constants
const y_list 	= [  -1,    0,    1,    2,  2.5,    3,  3.5,    4,    5,    6];
const c_list	= [  -4,   -3,   -2,   -1,  -.5,    0,   .5,    1,    2,    3];

// Create the family of solution objects
const f_str = [];
const f_list = [];
const f_plot = [];

for (let i=0; i<y_list.length; i++) {

	// Define the family of solutions arrays
	f_str.push('y = ' + c_list[i] + 'e^{x^2} + 3');
	f_list.push(function(x){ return (y_list[i] - 3)*Math.exp(x*x)+3; });
	f_plot.push(board.create(
		'functiongraph',
		[f_list[i], x_L, x_R],
		{strokecolor:'green', strokeOpacity:0.35, strokeWidth:3}
	));

	// Dynamic text labels with mouse-over
	f_plot[i].on('over', (evt) => {
		txt.setAttribute({visible: true});
		txt.setText(f_str[i]);
	});
	f_plot[i].on('out', (evt) => {
		txt.setAttribute({visible: false});
		txt.setText(f_str[i]);
	});
}






