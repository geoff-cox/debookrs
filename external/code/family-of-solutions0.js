/* 
Interactive Script illustrating the concepts of
	> Family of Solutions
	> Initial Conditions
	> Particular Solutions
*/

var box_x_L = -3.1, box_x_R = 3.1, box_y_B = -2, box_y_T = 7;

// Create the JSXGraph board
var board = JXG.JSXGraph.initBoard(
	'interactive-family-slate',
	{
		boundingbox:[box_x_L,box_y_T,box_x_R,box_y_B],
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

// Plot a static subset from the family of solutions at each specified y-value
const y_list = [];
for (let i = box_y_B+1; i <= 3; i += 1) {
	y_list.push(i);
}
y_list.push(2.5);
y_list.push(3.5);
for (let i = 4; i <= box_y_T-1; i += 1) {
	y_list.push(i);
}
const c_list   = [  -4,   -3,   -2,   -1,  -.5,    0,   .5,    1,    2,    3];
const c_list_x = [ 0.2, 0.25, 0.30, 0.35, 0.37, 0.70, 0.45, 0.43, 0.34, 0.29];
const c_list_y = [-1.6, -0.6, 0.60, 1.60, 2.25, 2.95, 3.70, 4.30, 5.35, 6.40];

for (let i=0; i<y_list.length; i++) {
	var f_family = function(x){ return (y_list[i] - 3)*Math.exp(x*x)+3; };
	board.create(
		'functiongraph',
		[f_family, box_x_L, box_x_R],
		{strokecolor:'green', strokeOpacity:0.35, strokeWidth:3}
	);

	board.create(
		'text',
		[c_list_x[i], c_list_y[i], c_list[i]],
		{fontSize: 18, strokecolor: 'blue'}
	);
}

var txt = board.create('text', [-1, 1, 'C'], {
    fontSize: 24,
    visible: false
});

plot_soln.on('over', (evt) => {
	// Display text
    txt.setAttribute({visible: true});
});
plot_soln.on('out', (evt) => {
	// Hide text
	txt.setAttribute({visible: false});
});


