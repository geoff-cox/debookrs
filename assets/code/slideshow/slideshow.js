// Slideshow loader + tool with dark mode support via CSS variables

// Synchronize dark mode from parent <html> to iframe <html>
(function syncDarkModeFromParent() {
  try {
    const iframeHtml = document.documentElement;
    const parentClass = window.parent.document.documentElement.className;
    iframeHtml.className = parentClass;

    // Observe changes to the parent's <html class="...">
    const observer = new MutationObserver(() => {
      iframeHtml.className = window.parent.document.documentElement.className;
    });

    observer.observe(window.parent.document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
  } catch (err) {
    console.warn("[Slideshow] Could not sync dark mode:", err);
  }
})();


window.addEventListener("DOMContentLoaded", () => {
  const iframeId = window.frameElement?.id;
  const canvas = document.querySelector("canvas");

  if (!iframeId || !canvas) {
    console.error("[Slideshow] Could not determine iframe ID or canvas element.");
    return;
  }

  const configPath = `external/code/slideshow/${iframeId}-config.json`;

  fetch(configPath)
    .then(res => res.json())
    .then(config => {
      runSlideshow(canvas.id, config);
    })
    .catch(err => console.error("[Slideshow] Config load failed:", err));

});

function runSlideshow(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const slides = config.slides;
  const settings = config.settings || {};
  const layout = settings.layout || "horizontal";

  let currentSlide = 0;
  let hoverBack = false;
  let hoverNext = false;
  const buttonWidth = 70;
  const buttonHeight = 26;
  const buttonPadding = 10;
  const canvasPadding = 10;
  const controlPanelWidth = 200;
  const fontSize = settings.fontSize || 16;
  const imageCache = {};

  let touchStartX = null;

  canvas.addEventListener("touchstart", e => {
    if (e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
    }
  }, { passive: true });

  canvas.addEventListener("touchend", e => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    const swipeThreshold = 50; // Minimum px to count as a swipe
    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0 && currentSlide < slides.length - 1) {
        currentSlide++;
        drawSlide();
      } else if (deltaX > 0 && currentSlide > 0) {
        currentSlide--;
        drawSlide();
      }
    }
    touchStartX = null;
  }, { passive: true });

  function isDarkMode() {
    return document.documentElement.classList.contains("dark-mode");
  }

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
    const darkModeObserver = new MutationObserver(() => drawSlide());
    darkModeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const dark = isDarkMode();
    const textColor = dark ? "#f0f4f8" : "#0d0d0e";
    const backgroundColor = dark ? "#2a2a2a" : "#f0f4f8";
    const buttonColor = dark ? "#66bb6a" : "#4CAF50";
    const hoverColor = dark ? "#81c784" : "#388e3c";
    const borderColor = dark ? "#444" : "#ccc";
    const indicatorInactive = dark ? "#777" : "#ddd";

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = imageCache[slides[currentSlide].image];
    if (!img) return;

    if (layout === "horizontal") {
      drawHorizontalLayout(ctx, img, textColor, backgroundColor, buttonColor, hoverColor, borderColor, indicatorInactive);
    } else {
      drawVerticalLayout(ctx, img, textColor, backgroundColor, buttonColor, hoverColor, borderColor, indicatorInactive);
    }
  }

  function drawHorizontalLayout(ctx, img, textColor, backgroundColor, buttonColor, hoverColor, borderColor, indicatorInactive) {
    const imageWidth = canvas.width - controlPanelWidth - canvasPadding * 2;
    const imageHeight = canvas.height - 2 * canvasPadding;
    const panelX = imageWidth + canvasPadding;
    const panelY = canvasPadding;
    const panelHeight = imageHeight;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(panelX, panelY, controlPanelWidth, panelHeight);

    const imgAspect = img.width / img.height;
    const panelAspect = imageWidth / imageHeight;
    let drawWidth = imageWidth, drawHeight = imageHeight;
    if (imgAspect > panelAspect) drawHeight = imageWidth / imgAspect;
    else drawWidth = imageHeight * imgAspect;
    ctx.drawImage(img, canvasPadding, canvasPadding, drawWidth, drawHeight);

    drawVerticalSeparator(panelX, panelY, panelHeight, borderColor);

    const reservedHeight = buttonHeight + canvasPadding + 40;
    drawTextBox(
      panelX + canvasPadding,
      panelY + canvasPadding,
      controlPanelWidth - 2 * canvasPadding,
      panelHeight - reservedHeight,
      textColor, backgroundColor, borderColor
    );
    
    const panelCenterX = panelX + controlPanelWidth / 2;
    const totalButtonWidth = 2 * buttonWidth + buttonPadding;
    const xStart = panelCenterX - totalButtonWidth / 2;
    drawButtons(
      xStart, 
      panelY + panelHeight - buttonHeight - 30, 
      buttonColor, hoverColor
    );
    drawSlideIndicators(
      panelX + controlPanelWidth / 2,
      panelY + panelHeight - 10, 
      controlPanelWidth - 2 * canvasPadding, 
      buttonColor, indicatorInactive, /* centered = */ true
    );

  }

  function drawVerticalLayout(ctx, img, textColor, backgroundColor, buttonColor, hoverColor, borderColor, indicatorInactive) {

    const imageHeight = canvas.height * 0.65;
    const panelHeight = canvas.height - imageHeight - canvasPadding * 2;
    const panelY = imageHeight + canvasPadding;

    const textBoxHeight = 60;
    const textBoxWidth = canvas.width - 5 * canvasPadding - 2* buttonWidth - buttonPadding;
    const buttonStartX = textBoxWidth + 3 * canvasPadding;
    const buttonStartY = imageHeight + 2 * canvasPadding;
    const SlideIndicatorsStartX = buttonStartX + buttonWidth;
    const SlideIndicatorsStartY = buttonStartY + buttonHeight + 2 * canvasPadding;
    const imgAspect = img.width / img.height;
    const imageWidth = canvas.width - 2 * canvasPadding;
    const drawHeight = imageHeight;
    const drawWidth = imageWidth;
    ctx.drawImage(img, canvasPadding, canvasPadding, drawWidth, drawHeight);

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(canvasPadding, panelY, canvas.width - 2 * canvasPadding, panelHeight);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(canvasPadding, panelY, canvas.width - 2 * canvasPadding, panelHeight);

    drawTextBox(
      canvasPadding + 10, 
      panelY + 10, 
      textBoxWidth, 
      textBoxHeight, 
      textColor, backgroundColor, borderColor
    );
    drawButtons(
      buttonStartX,
      buttonStartY,
      buttonColor, hoverColor);
    drawSlideIndicators(
      SlideIndicatorsStartX, 
      SlideIndicatorsStartY, 
      null, buttonColor, indicatorInactive, true);
  }

  function drawVerticalSeparator(x, y, height, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - canvasPadding / 2, y);
    ctx.lineTo(x - canvasPadding / 2, y + height);
    ctx.stroke();
  }

  function drawTextBox(x, y, width, height, textColor, backgroundColor, borderColor) {
    const slide = slides[currentSlide];
    const fullText = slide.title + '. ' + slide.text;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
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

  function drawButtons(xStart, y, buttonColor, hoverColor) {
    const xBack = xStart;
    const xNext = xBack + buttonWidth + buttonPadding;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${fontSize}px 'Roboto', sans-serif`;
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 4;

    ctx.fillStyle = currentSlide === 0 ? "#888" : (hoverBack ? hoverColor : buttonColor);
    roundedRect(xBack, y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText("⬅ Back", xBack + buttonWidth / 2, y + buttonHeight / 2);

    ctx.fillStyle = currentSlide === slides.length - 1 ? "#888" : (hoverNext ? hoverColor : buttonColor);
    roundedRect(xNext, y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText("Next ➡", xNext + buttonWidth / 2, y + buttonHeight / 2);

    ctx.shadowColor = "transparent";
  }

  function drawSlideIndicators(centerX, y, availableWidth, buttonColor, inactiveColor, centered = false) {
    const baseRadius = 6, baseSpacing = 20, maxSlides = 8;
    const scale = slides.length > maxSlides ? maxSlides / slides.length : 1;
    const radius = baseRadius * scale, spacing = baseSpacing * scale;
    const totalWidth = (slides.length - 1) * spacing;
    const startX = centered ? centerX - totalWidth / 2 : centerX;

    for (let i = 0; i < slides.length; i++) {
      ctx.fillStyle = (i === currentSlide) ? buttonColor : inactiveColor;
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
    const lines = [];
    for (const paragraph of text.split("\n")) {
      const words = paragraph.split(" ");
      let line = "";
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        if (ctx.measureText(testLine).width > maxWidth && i > 0) {
          lines.push(line.trim());
          line = words[i] + " ";
        } else {
          line = testLine;
        }
      }
      lines.push(line.trim());
    }
    return lines;
  }
  
  canvas.addEventListener("mousemove", e => {
    const { left, top } = canvas.getBoundingClientRect();
    const x = e.clientX - left, y = e.clientY - top;
    const { back, next } = getButtonCoordinates();

    hoverBack = x >= back.x && x <= back.x + buttonWidth && y >= back.y && y <= back.y + buttonHeight && currentSlide > 0;
    hoverNext = x >= next.x && x <= next.x + buttonWidth && y >= next.y && y <= next.y + buttonHeight && currentSlide < slides.length - 1;

    canvas.style.cursor = (hoverBack || hoverNext) ? "pointer" : "default";
    drawSlide();
  });

  canvas.addEventListener("click", e => {
    const { left, top } = canvas.getBoundingClientRect();
    const x = e.clientX - left, y = e.clientY - top;
    const { back, next } = getButtonCoordinates();

    if (hoverBack && currentSlide > 0) currentSlide--;
    else if (hoverNext && currentSlide < slides.length - 1) currentSlide++;
    drawSlide();
  });

  function getButtonCoordinates() {
    if (layout === "horizontal") {
      const imageHeight = canvas.height - 2 * canvasPadding;
      const y = canvasPadding + imageHeight - buttonHeight - 30;
      const panelX = canvas.width - controlPanelWidth + canvasPadding;
      const panelCenter = panelX + (controlPanelWidth - canvasPadding * 2) / 2;
      const totalWidth = 2 * buttonWidth + buttonPadding;
      const xStart = panelCenter - totalWidth / 2;
      return {
        back: { x: xStart, y },
        next: { x: xStart + buttonWidth + buttonPadding, y }
      };
    } else {
      const panelY = canvas.height * 0.65 + canvasPadding;
      const y = panelY + canvas.height * 0.35 - buttonHeight - 30;
      const panelCenter = canvas.width / 2;
      return {
        back: { x: panelCenter - buttonWidth - buttonPadding, y },
        next: { x: panelCenter + buttonPadding, y }
      };
    }
  }
}