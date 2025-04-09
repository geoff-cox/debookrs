// Slideshow core script (patched)
// Assumes global drawSlide function is defined after slideshow is initialized

(function syncDarkModeFromParent() {
  try {
    const iframeHtml = document.documentElement;
    const parentClass = window.parent.document.documentElement.className;
    iframeHtml.className = parentClass;

    const observer = new MutationObserver(() => {
      iframeHtml.className = window.parent.document.documentElement.className;
      if (typeof window.drawSlide === "function") {
        window.drawSlide();
      }
    });

    observer.observe(window.parent.document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  } catch (err) {
    console.warn("[Slideshow] Could not sync dark mode:", err);
  }
})();

// Layout constants
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let config = null;
let currentSlide = 0;

function drawSlide() {
  const { slides, colors } = config;
  const isDark = document.documentElement.classList.contains("dark-mode");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const canvasPadding = 10;
  const controlHeight = 110;
  const imageHeight = canvas.height - controlHeight - 2 * canvasPadding;

  // Draw image
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, canvasPadding, canvasPadding, canvas.width - 2 * canvasPadding, imageHeight);
    drawControlPanel(slides[currentSlide], isDark);
  };
  img.src = slides[currentSlide].image;
}

function drawControlPanel(slide, isDark) {
  const panelX = 10;
  const panelY = canvas.height - 100;
  const panelWidth = canvas.width - 20;
  const panelHeight = 90;

  // Panel background
  ctx.fillStyle = isDark ? "#1e1e1e" : "#f0f4f8";
  ctx.fillRect(panelX, panelY, panelWidth, panelHeight);

  // Text
  ctx.fillStyle = isDark ? "#ddd" : "#333";
  ctx.font = "14px 'Roboto', sans-serif";
  ctx.textBaseline = "top";
  const textPadding = 10;
  const text = `${slide.title}. ${slide.text}`;
  const lines = wrapText(ctx, text, panelWidth - 2 * textPadding);
  for (let i = 0; i < Math.min(2, lines.length); i++) {
    ctx.fillText(lines[i], panelX + textPadding, panelY + textPadding + i * 18);
  }

  // Buttons
  const buttonWidth = 70, buttonHeight = 26, buttonPadding = 10;
  const totalButtonWidth = buttonWidth * 2 + buttonPadding;
  const buttonStartX = panelX + (panelWidth - totalButtonWidth) / 2;
  const buttonY = panelY + panelHeight - buttonHeight - 28;

  drawButton(buttonStartX, buttonY, "Back", currentSlide === 0);
  drawButton(buttonStartX + buttonWidth + buttonPadding, buttonY, "Next", currentSlide === config.slides.length - 1);

  // Slide indicators
  drawSlideIndicators(panelX, panelY + panelHeight - 18, panelWidth, isDark);
}

function drawButton(x, y, label, disabled) {
  ctx.fillStyle = disabled ? "#aaa" : "#4CAF50";
  ctx.beginPath();
  ctx.roundRect(x, y, 70, 26, 6);
  ctx.fill();
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + 35, y + 13);
}

function drawSlideIndicators(panelX, y, panelWidth, isDark) {
  const count = config.slides.length;
  const max = 8;
  const scale = count > max ? max / count : 1;
  const spacing = 20 * scale;
  const radius = 6 * scale;
  const totalWidth = (count - 1) * spacing;
  const startX = panelX + (panelWidth - totalWidth) / 2;

  for (let i = 0; i < count; i++) {
    ctx.beginPath();
    ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = i === currentSlide ? "#4CAF50" : isDark ? "#555" : "#ccc";
    ctx.fill();
  }
}

function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let line = "";
  for (const word of words) {
    const test = line + word + " ";
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(line.trim());
      line = word + " ";
    } else {
      line = test;
    }
  }
  lines.push(line.trim());
  return lines;
}

// Click and hover handlers
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const panelY = canvas.height - 100;
  const panelWidth = canvas.width - 20;
  const buttonWidth = 70, buttonHeight = 26, buttonPadding = 10;
  const buttonStartX = 10 + (panelWidth - (buttonWidth * 2 + buttonPadding)) / 2;
  const buttonY = panelY + 90 - buttonHeight - 28;

  if (x >= buttonStartX && x <= buttonStartX + buttonWidth &&
      y >= buttonY && y <= buttonY + buttonHeight && currentSlide > 0) {
    currentSlide--;
    drawSlide();
  }
  if (x >= buttonStartX + buttonWidth + buttonPadding &&
      x <= buttonStartX + 2 * buttonWidth + buttonPadding &&
      y >= buttonY && y <= buttonY + buttonHeight && currentSlide < config.slides.length - 1) {
    currentSlide++;
    drawSlide();
  }
});

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  canvas.style.cursor = "default";

  const panelY = canvas.height - 100;
  const panelWidth = canvas.width - 20;
  const buttonWidth = 70, buttonHeight = 26, buttonPadding = 10;
  const buttonStartX = 10 + (panelWidth - (buttonWidth * 2 + buttonPadding)) / 2;
  const buttonY = panelY + 90 - buttonHeight - 28;

  if (
    (x >= buttonStartX && x <= buttonStartX + buttonWidth && currentSlide > 0) ||
    (x >= buttonStartX + buttonWidth + buttonPadding && x <= buttonStartX + 2 * buttonWidth + buttonPadding && currentSlide < config.slides.length - 1)
  ) {
    canvas.style.cursor = "pointer";
  }
});

// Allow external loader to provide config and initialize
window.runSlideshow = (slideConfig) => {
  config = slideConfig;
  drawSlide();
  window.drawSlide = drawSlide;
};
