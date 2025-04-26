/* 
Interactive Script illustrating the concepts of
	> Family of Solutions
	> Initial Conditions
	> Particular Solutions
*/

var box_x_L = -3.1, box_x_R = 3.1, box_y_B = -2, box_y_T = 7;

// Create the JSXGraph board
var board = JXG.JSXGraph.initBoard(
	'interactive-drag-ic-slate',
	{
		boundingbox:[box_x_L,box_y_T,box_x_R,box_y_B],
		keepaspectratio:false,
		axis:true,
		defaultAxes: {
			x: {ticks: {label: {fontsize: 16}}},
			y: {ticks: {label: {fontsize: 16}}},
		},
		showNavigation:false,
		showCopyright:false
	}
);

// Plot a static subset from the family of solutions at each specified y-value
const y_list = [];
for (let i = box_y_B; i <= 3; i += 0.5) {
	y_list.push(i);
}
y_list.push(2.75);
y_list.push(2.90);
y_list.push(3.10);
y_list.push(3.25);
for (let i = 3.5; i <= box_y_T; i += 0.5) {
	y_list.push(i);
}
// const y_list = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.3, 2.5, 2.8, 2.9, 2.99, 2.999, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7];
var x_i = 0;
var draw = true;
for (let i=0; i<y_list.length; i++) {
	var f_family = function(x){ return (y_list[i] - 3)*Math.exp(x*x)+3; };
	board.create(
		'functiongraph',
		[f_family, box_x_L, box_x_R],
		{strokecolor:'green', strokeOpacity:0.35, strokeWidth:3}
	);
	// if (draw) {
	// 	board.create(
	// 		'text',
	// 		[x_i, f_family(x_i) ,function(){ return (y_list[i] - 3).toFixed(1); }],
	// 		{fontSize: 12}
	// 	);
	// }
	// draw = !draw;
	// x_i += 0.1;
}

// Create the interactive slider along the y-axis
var y_slider = board.create(
	'slider',
	[[0,box_y_B+1],[0,box_y_T-1],[box_y_B+1,1,box_y_T-1]],
	{ 	// Slider Properties
		withLabel: false,
		size: 5,
		highline: {strokeWidth: 0},
		snapWidth: 0.05
	}
);

// Currently selected y(0) = slider value, corresponding constant C, and the particular solution
var f0 = function(x){ 
	return (y_slider.Value() - 3)*Math.exp(x*x) + 3; 
};

// Update the particular solution
var plot_soln = board.create(
	'functiongraph',
	[f0, box_x_L, box_x_R],
	{strokecolor: 'blue', strokeOpacity: 0.6, strokeWidth: 4}
);

var label_x = 1.6;
	label_y = 3.7;


var label_line = function(x){ return ( (label_y - y_slider.Value())/label_x )*x + y_slider.Value(); }

board.create(
	'functiongraph',
	[label_line, 0, label_x],
	{
		strokecolor:	'black', 
		strokeOpacity:	1, 
		strokeWidth:	1
	});
	
board.create(
	'text',
	[label_x + 0.1, label_y, function(){ return 'Initial Condition:' }],
	{fontSize: 14}
);
board.create(
	'text',
	[label_x + 0.1, label_y - 0.5, function(){ return 'y(0) = ' + (y_slider.Value()).toFixed(2); }],
	{fontSize: 16}
);
board.create(
	'text',
	[label_x + 0.1, label_y - 1.1, function(){ return 'Particular Solution:' }],
	{fontSize: 14}
);
board.create(
	'text',
	[label_x + 0.1, label_y - 1.5 ,function(){ return 'y = ' + (y_slider.Value() - 3).toFixed(2) + 'e^{x^2} + 3'; }],
	{fontSize: 16}
);
var 
	from	= board.create('point', [label_x + 0.6, label_y - 2.1], { visible: false });
	to 		= board.create('point', [label_x + 0.6, label_y - 1.8], { visible: false });
board.create('arrow', [from, to]);
board.create(
	'text',
	[label_x + 0.55, label_y - 2.3 ,function(){ return 'c_1'; }],
	{fontSize: 16}
);
