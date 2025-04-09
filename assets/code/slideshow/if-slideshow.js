(function () {
  const script = document.createElement("script");
  script.src = "external/code/slideshow/slideshow-tool.js";
  script.onload = function () {
    runSlideshow("if-derivation-canvas", {
      slides: [
        {
          title: "Goal",
          image: "external/figures/if-strategy-10.png",
          text: "Every first-order linear differential equation can be transformed into a direct integration problem, but how?\n\nClick \"Next\" to find out."
        },
        {
          title: "1",
          image: "external/figures/if-strategy-11.png",
          text: "Multiply the original equation by an unknown function (the integrating factor)..."
        },
        {
          title: "2",
          image: "external/figures/if-strategy-12.png",
          text: "Apply the product rule to bridge the gap between equations."
        },
        {
          title: "3",
          image: "external/figures/if-strategy-13.png",
          text: "Compare boxed expressions to determine the integrating factor."
        },
        {
          title: "4",
          image: "external/figures/if-strategy-14.png",
          text: "Solve the separable equation to find \u03BC, the integrating factor."
        }
      ],
      settings: {
        controlPanelWidth: 190,
        buttonColor: "#4CAF50",
        hoverColor: "#388e3c",
        textColor: "#0d0d0e",
        fontSize: 16
      }
    });
  };
  document.head.appendChild(script);
})();


// function runSlideshow(canvasId, config) {
//   const canvas = document.getElementById(canvasId);
//   const ctx = canvas.getContext("2d");

//   const slides = config.slides;
//   const settings = config.settings || {};

//   const buttonWidth = 70;
//   const buttonHeight = 26;
//   const buttonPadding = 10;
//   const canvasPadding = 10;

//   const controlPanelWidth = settings.controlPanelWidth || 200;
//   const buttonColor = settings.buttonColor || "#4CAF50";
//   const hoverColor = settings.hoverColor || "#388e3c";
//   const textColor = settings.textColor || "#0d0d0e";
//   const fontSize = settings.fontSize || 16;

//   const imageWidth = canvas.width - controlPanelWidth - canvasPadding * 2;
//   const imageHeight = canvas.height - canvasPadding * 2;

//   let currentSlide = 0;
//   let hoverBack = false;
//   let hoverNext = false;

//   const imageCache = {};

//   preloadImages(slides, () => drawSlide());

//   function preloadImages(slides, callback) {
//     let loaded = 0;
//     for (const slide of slides) {
//       const img = new Image();
//       img.onload = () => {
//         loaded++;
//         if (loaded === slides.length) callback();
//       };
//       img.src = slide.image;
//       imageCache[slide.image] = img;
//     }
//   }

//   function drawSlide() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillStyle = "#f9f9fb";
//     ctx.fillRect(imageWidth + canvasPadding, 0, controlPanelWidth, canvas.height);

//     const slide = slides[currentSlide];
//     const img = imageCache[slide.image];
//     if (img) {
//       ctx.drawImage(img, canvasPadding, canvasPadding, imageWidth, imageHeight);
//     }

//     const separatorX = imageWidth + canvasPadding + canvasPadding / 2;
//     ctx.strokeStyle = "#ccc";
//     ctx.lineWidth = 1;
//     ctx.beginPath();
//     ctx.moveTo(separatorX, canvasPadding);
//     ctx.lineTo(separatorX, canvas.height - canvasPadding);
//     ctx.stroke();

//     drawTextBox(slide.title + '. ' + slide.text);
//     drawButtons();
//     drawSlideIndicators();
//   }

//   function getButtonCoordinates() {
//     const y = canvas.height - canvasPadding - buttonHeight - 20;
//     const panelLeft = imageWidth + 2 * canvasPadding;
//     const panelCenter = panelLeft + (controlPanelWidth - canvasPadding * 2) / 2;
//     return {
//       back: { x: panelCenter - buttonWidth, y },
//       next: { x: panelCenter + buttonPadding, y }
//     };
//   }

//   function drawTextBox(fullText) {
//     const { back } = getButtonCoordinates();
//     const x = imageWidth + 2 * canvasPadding;
//     const y = canvasPadding;
//     const width = controlPanelWidth - canvasPadding;
//     const height = back.y - canvasPadding * 2;

//     ctx.fillStyle = "#f0f4f8";
//     ctx.fillRect(x, y, width, height);
//     ctx.strokeStyle = "#ccc";
//     ctx.strokeRect(x, y, width, height);

//     ctx.fillStyle = textColor;
//     ctx.textAlign = "left";
//     ctx.textBaseline = "top";
//     ctx.font = `${fontSize}px 'Roboto', sans-serif`;

//     const lineHeight = 18;
//     const maxLines = Math.floor((height - 10) / lineHeight);
//     const wrappedLines = wrapText(ctx, fullText, width - 10);
//     for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
//       ctx.fillText(wrappedLines[i], x + 5, y + 5 + i * lineHeight);
//     }
//   }

//   function drawButtons() {
//     const { back, next } = getButtonCoordinates();
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.font = `${fontSize}px 'Roboto', sans-serif`;

//     ctx.shadowColor = "rgba(0,0,0,0.1)";
//     ctx.shadowBlur = 4;
//     ctx.shadowOffsetX = 2;
//     ctx.shadowOffsetY = 2;

//     ctx.fillStyle = currentSlide === 0 ? "#ccc" : (hoverBack ? hoverColor : buttonColor);
//     roundedRect(back.x, back.y, buttonWidth, buttonHeight, 8);
//     ctx.fillStyle = "#fff";
//     ctx.fillText("⬅ Back", back.x + buttonWidth / 2, back.y + buttonHeight / 2);

//     ctx.fillStyle = currentSlide === slides.length - 1 ? "#ccc" : (hoverNext ? hoverColor : buttonColor);
//     roundedRect(next.x, next.y, buttonWidth, buttonHeight, 8);
//     ctx.fillStyle = "#fff";
//     ctx.fillText("Next ➡", next.x + buttonWidth / 2, next.y + buttonHeight / 2);

//     ctx.shadowColor = "transparent";
//   }

//   function drawSlideIndicators() {
//     const baseRadius = 6;
//     const baseSpacing = 20;
//     const maxSlideCountBeforeScaling = 8;
//     const scale = slides.length > maxSlideCountBeforeScaling ? maxSlideCountBeforeScaling / slides.length : 1;
//     const radius = baseRadius * scale;
//     const spacing = baseSpacing * scale;
//     const totalWidth = (slides.length - 1) * spacing;

//     const { back } = getButtonCoordinates();
//     const panelLeft = imageWidth + 2 * canvasPadding;
//     const panelWidth = controlPanelWidth - canvasPadding * 2;
//     const centerX = panelLeft + panelWidth / 2;
//     const startX = centerX - totalWidth / 2;
//     const y = back.y + buttonHeight + 15;

//     for (let i = 0; i < slides.length; i++) {
//       ctx.fillStyle = (i === currentSlide) ? buttonColor : "#ddd";
//       ctx.beginPath();
//       ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
//       ctx.fill();
//     }
//   }

//   function roundedRect(x, y, width, height, radius) {
//     ctx.beginPath();
//     ctx.moveTo(x + radius, y);
//     ctx.lineTo(x + width - radius, y);
//     ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
//     ctx.lineTo(x + width, y + height - radius);
//     ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
//     ctx.lineTo(x + radius, y + height);
//     ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
//     ctx.lineTo(x, y + radius);
//     ctx.quadraticCurveTo(x, y, x + radius, y);
//     ctx.closePath();
//     ctx.fill();
//   }

//   function wrapText(ctx, text, maxWidth) {
//     const words = text.split(' ');
//     const lines = [];
//     let line = '';
//     for (let i = 0; i < words.length; i++) {
//       const testLine = line + words[i] + ' ';
//       const metrics = ctx.measureText(testLine);
//       if (metrics.width > maxWidth && i > 0) {
//         lines.push(line.trim());
//         line = words[i] + ' ';
//       } else {
//         line = testLine;
//       }
//     }
//     lines.push(line.trim());
//     return lines;
//   }

//   canvas.addEventListener("mousemove", (event) => {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     const { back, next } = getButtonCoordinates();

//     hoverBack = x >= back.x && x <= back.x + buttonWidth && y >= back.y && y <= back.y + buttonHeight && currentSlide > 0;
//     hoverNext = x >= next.x && x <= next.x + buttonWidth && y >= next.y && y <= next.y + buttonHeight && currentSlide < slides.length - 1;

//     canvas.style.cursor = (hoverBack || hoverNext) ? "pointer" : "default";
//     drawSlide();
//   });

//   canvas.addEventListener("click", (event) => {
//     const rect = canvas.getBoundingClientRect();
//     const x = event.clientX - rect.left;
//     const y = event.clientY - rect.top;
//     const { back, next } = getButtonCoordinates();

//     if (hoverBack && currentSlide > 0) {
//       currentSlide--;
//       drawSlide();
//     } else if (hoverNext && currentSlide < slides.length - 1) {
//       currentSlide++;
//       drawSlide();
//     }
//   });
// }
