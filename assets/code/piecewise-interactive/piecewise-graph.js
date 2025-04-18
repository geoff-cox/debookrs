window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#piecewise-slider-canvas");
    const ctx = canvas.getContext("2d");
  
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = 0.5;
    slider.max = 4;
    slider.step = 0.01;
    slider.value = 2;
    slider.style.position = "absolute";
    slider.style.width = "80%";
    slider.style.left = "10%";
    slider.style.bottom = "10px";
    slider.style.zIndex = 10;
  
    canvas.parentElement.style.position = "relative";
    canvas.parentElement.appendChild(slider);
  
    function draw() {
      const a = parseFloat(slider.value);
      const W = canvas.width;
      const H = canvas.height;
  
      const tMin = 0, tMax = 5;
      const yMin = -1.5, yMax = 3;
      const tToX = t => (t - tMin) / (tMax - tMin) * W;
      const yToY = y => H - (y - yMin) / (yMax - yMin) * H;
  
      ctx.clearRect(0, 0, W, H);
  
      // Axes
      ctx.strokeStyle = "#444";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(tToX(tMin), yToY(0));
      ctx.lineTo(tToX(tMax), yToY(0));
      ctx.moveTo(tToX(0), yToY(yMin));
      ctx.lineTo(tToX(0), yToY(yMax));
      ctx.stroke();
  
      // Axis ticks and labels
      ctx.fillStyle = "#222";
      ctx.font = "12px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
  
      for (let t = 0; t <= 5; t++) {
        const x = tToX(t);
        ctx.beginPath();
        ctx.moveTo(x, yToY(0) - 5);
        ctx.lineTo(x, yToY(0) + 5);
        ctx.stroke();
        ctx.fillText(t.toString(), x, yToY(0) + 7);
      }
  
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      for (let y = -1; y <= 2; y++) {
        const yPix = yToY(y);
        ctx.beginPath();
        ctx.moveTo(tToX(0) - 5, yPix);
        ctx.lineTo(tToX(0) + 5, yPix);
        ctx.stroke();
        ctx.fillText(y.toString(), tToX(0) - 7, yPix);
      }
  
      // Plot t for t < a
      ctx.strokeStyle = "blue";
      ctx.beginPath();
      for (let t = tMin; t <= a; t += 0.01) {
        const x = tToX(t);
        const y = yToY(t);
        if (t === tMin) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
  
      // Plot sin(t) for t ≥ a
      ctx.strokeStyle = "green";
      ctx.beginPath();
      for (let t = a; t <= tMax; t += 0.01) {
        const x = tToX(t);
        const y = yToY(Math.sin(t));
        if (t === a) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
  
      // Open circle at (a, a)
      ctx.beginPath();
      ctx.arc(tToX(a), yToY(a), 5, 0, 2 * Math.PI);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 2;
      ctx.stroke();
  
      // Filled circle at (a, sin(a))
      ctx.beginPath();
      ctx.arc(tToX(a), yToY(Math.sin(a)), 5, 0, 2 * Math.PI);
      ctx.fillStyle = "green";
      ctx.fill();
  
      // Function annotations
      ctx.fillStyle = "blue";
      ctx.textAlign = "center";
      ctx.fillText("f(t) = t", tToX((0 + a) / 2), yToY(yMax) + 5);
  
      ctx.fillStyle = "green";
      ctx.fillText("f(t) = sin(t)", tToX((a + tMax) / 2), yToY(yMax) + 5);
    }
  
    slider.addEventListener("input", draw);
    window.addEventListener("resize", draw);
    draw();
  });
  