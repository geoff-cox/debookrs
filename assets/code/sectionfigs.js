/* 
Interactive Script illustrating the concepts of
	> Family of Solutions
	> Initial Conditions
	> Particular Solutions
*/

// Create the JSXGraph board
var board = JXG.JSXGraph.initBoard(
	'jsxgraph-IC',
	{
		boundingbox:[-4,8,4,-4],
		keepaspectratio:false,
		axis:true,
		showNavigation:false,
		showCopyright:false
	}
);

// Plot a static subset from the family of solutions at each specified y-value
const y_list = [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.3, 2.5, 2.8, 2.9, 2.99, 2.999, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7];
for (let i=0; i < y_list.length; i++) {
	var f_family = function(x){ return (y_list[i] - 3)*Math.exp(x*x)+3; };
	var graph = board.create(
		'functiongraph',
		[f_family,-4, 4],
		{strokecolor:'green', strokeOpacity:0.35, strokeWidth:3}
	);
}

// Create the interactive slider along the y-axis
var y_slider = board.create(
	'slider',
	[[0,-3],[0,7],[-3,0,7]],
	{ 	// Slider Properties
		withLabel: false,
		size: 5,
		highline: {strokeWidth: 0},
		snapWidth: 0.01
	}
);

// Currently selected y(0) = slider value, corresponding constant C, and the particular solution
var y0 = y_slider.Value();//Math.round((y_slider.Value() + Number.EPSILON) * 100) / 100;
var C0 = y_slider.Value() - 3;
var f0 = function(x){ 
	return (y_slider.Value() - 3)*Math.exp(x*x) + 3; 
};

// Update the particular solution
var plot_soln = board.create(
	'functiongraph',
	[f0, -4, 4],
	{strokecolor: 'blue', strokeOpacity: 0.6, strokeWidth: 4}
);

var label_x = 1.6;
	label_y = 4.2;


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
	[label_x + 0.1, label_y, function(){ return 'y(0) = ' + (y_slider.Value()).toFixed(2); }],
	{fontSize: 16}
);
board.create(
	'text',
	[label_x + 0.1, label_y - 0.7 ,function(){ return 'y = ' + (y_slider.Value() - 3).toFixed(2) + 'e^{x^2} + 3'; }],
	{fontSize: 16}
);
