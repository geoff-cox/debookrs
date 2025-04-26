// ---- Slideshow Loader ----
// This script loads the slideshow-tool and initializes it with the configuration
// from a JSON file. The JSON file is expected to be named after the iframe ID
// and located in the same directory as this script. The canvas element is also
// expected to be present in the DOM. The script will log errors if the iframe ID
// or canvas element cannot be found, or if the JSON file cannot be loaded.
//
window.addEventListener("DOMContentLoaded", () => {
  const iframeId = window.frameElement?.id;
  if (!iframeId) {
    console.error("[Slideshow] Could not determine iframe ID.");
    return;
  }

  const canvas = document.querySelector("canvas");
  const canvasId = canvas?.id;
  if (!canvasId) {
    console.error("[Slideshow] Canvas not found or lacks ID.");
    return;
  }

  const configPath = `external/code/slideshow/${iframeId}-config.json`;

  fetch(configPath)
    .then(res => res.json())
    .then(config => runSlideshow(canvasId, config))
    .catch(err => console.error("[Slideshow] Config load failed:", err));
});

// ---- Slideshow Tool ----
// This script creates a slideshow on a canvas element. It handles image
// preloading, drawing slides, and managing user interactions like button clicks
// and mouse movements. The slideshow consists of a series of slides, each with
// an image, title, and text. The tool also includes a control panel with
// navigation buttons and a text box for displaying slide information. The
// slideshow is responsive to user interactions, allowing users to navigate
// through the slides using "Back" and "Next" buttons.
function runSlideshow(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  // Fix: Match canvas internal resolution to CSS size
  const displayWidth = canvas.clientWidth;
  const displayHeight = canvas.clientHeight;
  canvas.width = displayWidth;
  canvas.height = displayHeight;

  const slides = config.slides;
  const settings = config.settings || {};

  const buttonWidth = 70;
  const buttonHeight = 26;
  const buttonPadding = 10;
  const canvasPadding = 10;

  const controlPanelWidth = settings.controlPanelWidth || 200;
  const buttonColor = settings.buttonColor || "#4CAF50";
  const hoverColor = settings.hoverColor || "#388e3c";
  const textColor = settings.textColor || "#0d0d0e";
  const fontSize = settings.fontSize || 16;
  const backgroundColor = settings.backgroundColor || (
    document.documentElement.classList.contains("dark-mode") ? "#222" : "#f9f9fb"
  );

  const imageWidth = canvas.width - controlPanelWidth - canvasPadding * 2;
  const imageHeight = canvas.height - 2 * canvasPadding;

  const panelX = imageWidth + canvasPadding;
  const panelY = canvasPadding;
  const panelHeight = imageHeight;

  let currentSlide = 0;
  let hoverBack = false;
  let hoverNext = false;

  const imageCache = {};

  preloadImages(slides, () => drawSlide());

  function preloadImages(slides, callback) {
    let loaded = 0;
    for (const slide of slides) {
      const img = new Image();
      img.onload = () => {
        loaded++;
        if (loaded === slides.length) callback();
      };
      img.src = slide.image;
      imageCache[slide.image] = img;
    }
  }

  function drawSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(panelX, panelY, controlPanelWidth, panelHeight);

    const slide = slides[currentSlide];
    const img = imageCache[slide.image];
    if (img) {
      const imgAspect = img.width / img.height;
      const panelAspect = imageWidth / imageHeight;

      let drawWidth = imageWidth;
      let drawHeight = imageHeight;

      if (imgAspect > panelAspect) {
        drawHeight = imageWidth / imgAspect;
      } else {
        drawWidth = imageHeight * imgAspect;
      }

      ctx.drawImage(img, canvasPadding, canvasPadding, drawWidth, drawHeight);
    }

    const separatorX = panelX - canvasPadding / 2;
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(separatorX, panelY);
    ctx.lineTo(separatorX, panelY + panelHeight);
    ctx.stroke();

    drawTextBox(slide.title + '. ' + slide.text);
    drawButtons();
    drawSlideIndicators();
  }

  function getButtonCoordinates() {
    const y = panelY + panelHeight - buttonHeight - 30;
    const panelCenter = panelX + (controlPanelWidth - canvasPadding * 2) / 2;
    return {
      back: { x: panelCenter - buttonWidth, y },
      next: { x: panelCenter + buttonPadding, y }
    };
  }

  function drawTextBox(fullText) {
    const { back } = getButtonCoordinates();
    const x = panelX + canvasPadding;
    const y = panelY + canvasPadding;
    const width = controlPanelWidth - canvasPadding * 2;
    const height = back.y - panelY - 2 * canvasPadding;

    ctx.fillStyle = "#f0f4f8";
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = `${fontSize}px 'Roboto', sans-serif`;

    const lineHeight = 18;
    const maxLines = Math.floor((height - 10) / lineHeight);
    const wrappedLines = wrapText(ctx, fullText, width - 10);
    for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
      ctx.fillText(wrappedLines[i], x + 5, y + 5 + i * lineHeight);
    }
  }

  function drawButtons() {
    const { back, next } = getButtonCoordinates();
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${fontSize}px 'Roboto', sans-serif`;

    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.fillStyle = currentSlide === 0 ? "#ccc" : (hoverBack ? hoverColor : buttonColor);
    roundedRect(back.x, back.y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText("⬅ Back", back.x + buttonWidth / 2, back.y + buttonHeight / 2);

    ctx.fillStyle = currentSlide === slides.length - 1 ? "#ccc" : (hoverNext ? hoverColor : buttonColor);
    roundedRect(next.x, next.y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText("Next ➡", next.x + buttonWidth / 2, next.y + buttonHeight / 2);

    ctx.shadowColor = "transparent";
  }

  function drawSlideIndicators() {
    const baseRadius = 6;
    const baseSpacing = 20;
    const maxSlideCountBeforeScaling = 8;
    const scale = slides.length > maxSlideCountBeforeScaling ? maxSlideCountBeforeScaling / slides.length : 1;
    const radius = baseRadius * scale;
    const spacing = baseSpacing * scale;
    const totalWidth = (slides.length - 1) * spacing;

    const { back } = getButtonCoordinates();
    const panelWidth = controlPanelWidth - canvasPadding * 2;
    const centerX = panelX + panelWidth / 2;
    const startX = centerX - totalWidth / 2;
    const y = back.y + buttonHeight + 10;

    for (let i = 0; i < slides.length; i++) {
      ctx.fillStyle = (i === currentSlide) ? buttonColor : "#ddd";
      ctx.beginPath();
      ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  function roundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  }

  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && i > 0) {
        lines.push(line.trim());
        line = words[i] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());
    return lines;
  }

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { back, next } = getButtonCoordinates();

    hoverBack = x >= back.x && x <= back.x + buttonWidth && y >= back.y && y <= back.y + buttonHeight && currentSlide > 0;
    hoverNext = x >= next.x && x <= next.x + buttonWidth && y >= next.y && y <= next.y + buttonHeight && currentSlide < slides.length - 1;

    canvas.style.cursor = (hoverBack || hoverNext) ? "pointer" : "default";
    drawSlide();
  });

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const { back, next } = getButtonCoordinates();

    if (hoverBack && currentSlide > 0) {
      currentSlide--;
      drawSlide();
    } else if (hoverNext && currentSlide < slides.length - 1) {
      currentSlide++;
      drawSlide();
    }
  });
}