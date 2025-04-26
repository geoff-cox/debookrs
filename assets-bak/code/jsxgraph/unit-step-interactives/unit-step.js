// Shared time slider
const board_t = JXG.JSXGraph.initBoard('box_t', {
    boundingbox: [-1, 1.2, 6, -0.2],
    axis: false,
    showCopyright: false,
    showNavigation: false
  });
  
  const time = board_t.create('slider', [[0,0], [5,0], [0,0,5]], {
    snapWidth: 0.1
  });
  board_t.create('text', [4.5, 0.8, 'Time (t)']);
  
  // Unit step board
  const board_u = JXG.JSXGraph.initBoard('box_u', {
    boundingbox: [-1, 1.5, 6, -0.5],
    axis: true,
    showCopyright: false,
    showNavigation: false
  });
  board_t.addChild(board_u);
  
  board_u.create('functiongraph', [
    t => t >= 1 ? 1 : 0,
    0, 6
  ], { strokeColor: 'blue', name: 'u(t - 1)' });
  
  board_u.create('functiongraph', [
    t => t >= 3 ? 1 : 0,
    0, 6
  ], { strokeColor: 'green', name: 'u(t - 3)' });
  
  // Expression board: (t - 1)u(t - 1) - (t - 1)u(t - 3)
  const board_expr = JXG.JSXGraph.initBoard('box_expr', {
    boundingbox: [-1, 4, 6, -1],
    axis: true,
    showCopyright: false,
    showNavigation: false
  });
  board_t.addChild(board_expr);
  
  board_expr.create('functiongraph', [
    t => (t >= 1 ? (t - 1) : 0) - (t >= 3 ? (t - 1) : 0),
    0, 6
  ], { strokeColor: 'orange' });
  
  // Sum board: (t - 1)u(t - 1) - (t - 1)u(t - 3) + 2u(t - 3)
  const board_sum = JXG.JSXGraph.initBoard('box_sum', {
    boundingbox: [-1, 4, 6, -1],
    axis: true,
    showCopyright: false,
    showNavigation: false
  });
  board_t.addChild(board_sum);
  
  board_sum.create('functiongraph', [
    t => (t >= 1 ? (t - 1) : 0) - (t >= 3 ? (t - 1) : 0) + (t >= 3 ? 2 : 0),
    0, 6
  ], { strokeColor: 'black' });
  