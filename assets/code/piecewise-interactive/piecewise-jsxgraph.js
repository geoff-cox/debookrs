window.addEventListener("DOMContentLoaded", () => {
    var board = JXG.JSXGraph.initBoard("box", {
      boundingbox: [-0.5, 3.5, 5.5, -1.5],
      axis: true,
      showCopyright: false,
      showNavigation: false,
      grid: false,
    });
  
    // Slider for the switching point a
    const slider = board.create("slider", [
      [0.5, -1],
      [3.5, -1],
      [1, 2, 4]
    ], {
      name: "a",
      snapWidth: 0.1
    });
  
    // Piecewise function definition
    const piecewiseFunc = function(x) {
      const a = slider.Value();
      if (x < a) {
        return x;
      } else {
        return Math.sin(x);
      }
    };
  
    // Graph of the piecewise function
    const graph = board.create("functiongraph", [piecewiseFunc, 0, 5], {
      strokeWidth: 2,
      strokeColor: "#0066cc"
    });
  
    // Endpoint dots: open at (a, a), closed at (a, sin(a))
    const openDot = board.create("point", [
      () => slider.Value(),
      () => slider.Value()
    ], {
      name: "",
      fillColor: "#ffffff",
      strokeColor: "#0066cc",
      fixed: true,
      size: 3
    });
  
    const closedDot = board.create("point", [
      () => slider.Value(),
      () => Math.sin(slider.Value())
    ], {
      name: "",
      fillColor: "#0066cc",
      strokeColor: "#0066cc",
      fixed: true,
      size: 3
    });
  
    // Function labels
    const label1 = board.create("text", [1, 3.2, "f(t) = t"], {
      fontSize: 14,
      fixed: true
    });
  
    const label2 = board.create("text", [3.8, 2.5, "f(t) = sin(t)"], {
      fontSize: 14,
      fixed: true
    });
  });
  