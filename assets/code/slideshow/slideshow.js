// Slideshow loader with native iFrame-based dark mode support via CSS variables

// Maybe still needed:
// (function syncDarkModeFromParent() {
//   try {
//     const iframeHtml = document.documentElement;
//     const parentClass = window.parent.document.documentElement.className;
//     iframeHtml.className = parentClass;

//     // Observe changes to the parent's <html class="...">
//     const observer = new MutationObserver(() => {
//       iframeHtml.className = window.parent.document.documentElement.className;
//     });

//     observer.observe(window.parent.document.documentElement, {
//       attributes: true,
//       attributeFilter: ['class']
//     });
//   } catch (err) {
//     console.warn("[Slideshow] Could not sync dark mode:", err);
//   }
// })();

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
  const canvasPadding = 5;
  const buttonWidth = 70;
  const buttonHeight = 26;
  const panelPadding = 6;
  const totalButtonWidth = 2 * buttonWidth + panelPadding;
  
  const fontSize = settings.fontSize || 16;
  const fontStyle = settings.fontStyle || "normal";
  const imageCache = {};
  const backButton = { text: "◀ Back", x: 0, y: 0 };
  const nextButton = { text: "Next ▶", x: 0, y: 0 };
  const indicators = { baseRadius: 6, baseSpacing: 20 };

  const minPanelWidth = totalButtonWidth + 3 * panelPadding;
  const minPanelHeight = buttonHeight + 3 * panelPadding + 2 * indicators.baseRadius;

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

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    
    const dark = isDarkMode();
    const textColor = dark ? "#f2f2f2" : "#0d0d0e";
    const backgroundColor = dark ? "#2c2d29" : "#f0f4f8";
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

    // ---- Control panel ----
    const panelWidth = Math.max(minPanelWidth, settings.textPanelWidth || 0);
    const panelHeight = canvas.height - 2 * canvasPadding;
    const panelX = canvas.width - panelWidth - canvasPadding;
    const panelY = canvasPadding;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(panelX, panelY, panelWidth, panelHeight);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(panelX, panelY, panelWidth, panelHeight);

    // ---- Image ----
    const drawWidth = canvas.width - panelWidth - 4 * canvasPadding;
    const drawHeight = canvas.height - 2 * canvasPadding;
    const imgAspect = img.height / img.width;
    let imageWidth = drawWidth, imageHeight = imageWidth * imgAspect;
    if (imageHeight > drawHeight) {
      imageHeight = drawHeight, imageWidth = imageHeight / imgAspect;
    }
    const imgX = canvasPadding;
    const imgY = (canvas.height - imageHeight) / 2;
    ctx.drawImage(img, imgX, imgY, imageWidth, imageHeight);

    // ---- Separator ----
    drawVerticalSeparator(panelX, panelY, panelHeight, borderColor);

    // ---- Text box ----
    const textBoxX = panelX + panelPadding;
    const textBoxY = panelY + panelPadding;
    const textBoxWidth = panelWidth - 2 * canvasPadding;
    const textBoxHeight = panelHeight - (buttonHeight + canvasPadding + 40);
    drawTextBox(textBoxX, textBoxY, textBoxWidth, textBoxHeight, textColor, backgroundColor, borderColor);
    
    // ---- Buttons ----
    const buttonX = textBoxX;
    const buttonTopY = textBoxY + textBoxHeight + panelPadding;
    const buttonBottomY = buttonTopY + buttonHeight;
    drawButtons(buttonX, buttonTopY, buttonColor, hoverColor);
    
    // ---- Slide indicators ----
    const indicatorX = panelX + panelWidth / 2;
    const indicatorCenterY = buttonBottomY + (panelHeight - buttonBottomY) / 2;
    const indicatorMaxWidth = totalButtonWidth;
    drawSlideIndicators(indicatorX, indicatorCenterY, indicatorMaxWidth, buttonColor, indicatorInactive, /* centered = */ true);

  }

  function drawVerticalLayout(ctx, img, textColor, backgroundColor, buttonColor, hoverColor, borderColor, indicatorInactive) {

    // ---- Control panel ----
    const panelHeight = Math.max(minPanelHeight, settings.textPanelHeight || 0);
    const panelWidth = canvas.width - 2 * canvasPadding;
    const panelX = canvasPadding;
    const panelY = canvas.height - panelHeight - canvasPadding;
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(panelX, panelY, panelWidth, panelHeight);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(panelX, panelY, panelWidth, panelHeight);

    // ---- Image ----
    const drawHeight = canvas.height - panelHeight - 4 * canvasPadding;
    const drawWidth = canvas.width - 2 * canvasPadding;
    const imgAspect = img.width / img.height;
    let imageHeight = drawHeight, imageWidth = imageHeight * imgAspect;
    if (imageWidth > drawWidth) {
      imageWidth = drawWidth, imageHeight = imageWidth / imgAspect;
    }
    const imgX = (canvas.width - imageWidth) / 2;
    const imgY = canvasPadding;
    ctx.drawImage(img, imgX, imgY, imageWidth, imageHeight);

    // ---- Separator ----
    drawHorizontalSeparator(panelX, panelY, panelWidth, borderColor);

    // ---- Buttons ----
    const buttonX = canvas.width - totalButtonWidth - panelPadding - canvasPadding;
    const buttonTopY = panelY + panelPadding;
    const buttonBottomY = buttonTopY + buttonHeight;
    drawButtons(buttonX, buttonTopY, buttonColor, hoverColor);

    // ---- Text box ----
    const textBoxX = panelX + panelPadding;
    const textBoxY = panelY + panelPadding;
    const textBoxHeight = panelHeight - 2 * panelPadding;
    const textBoxWidth = buttonX - panelPadding - textBoxX;
    drawTextBox(textBoxX, textBoxY, textBoxWidth, textBoxHeight, textColor, backgroundColor, borderColor);

    // ---- Slide indicators ----
    const indicatorX = buttonX + buttonWidth;
    const indicatorCenterY = buttonBottomY + (textBoxHeight - buttonHeight) / 2;
    const indicatorMaxWidth = totalButtonWidth;
    drawSlideIndicators(indicatorX, indicatorCenterY, indicatorMaxWidth, buttonColor, indicatorInactive, /* centered = */ true);

  }

  function drawVerticalSeparator(x, y, height, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - canvasPadding, y);
    ctx.lineTo(x - canvasPadding, y + height);
    ctx.stroke();
  }

  function drawHorizontalSeparator(x, y, width, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y - canvasPadding);
    ctx.lineTo(x + width, y - canvasPadding);
    ctx.stroke();
  }

  function drawTextBox(x, y, width, height, textColor, backgroundColor, borderColor) {
    const slide = slides[currentSlide];
    const fullText = slide.title + slide.text;

    ctx.fillStyle = backgroundColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = borderColor;
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = fontStyle + ` ${fontSize}px 'Roboto', sans-serif`;

    const lineHeight = 18;
    const maxLines = Math.floor((height - 10) / lineHeight);
    const wrappedLines = wrapText(ctx, fullText, width - 10);
    for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
      ctx.fillText(wrappedLines[i], x + 5, y + 5 + i * lineHeight);
    }
  }

  function drawButtons(xStart, y, buttonColor, hoverColor) {
    const xBack = xStart;
    const xNext = xBack + buttonWidth + panelPadding;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `${fontSize}px 'Roboto', sans-serif`;
    ctx.shadowColor = "rgba(0,0,0,0.1)";
    ctx.shadowBlur = 4;

    ctx.fillStyle = currentSlide === 0 ? "#888" : (hoverBack ? hoverColor : buttonColor);
    roundedRect(xBack, y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText(backButton.text, xBack + buttonWidth / 2, y + 1.05 * buttonHeight / 2);
  
    ctx.fillStyle = currentSlide === slides.length - 1 ? "#888" : (hoverNext ? hoverColor : buttonColor);
    roundedRect(xNext, y, buttonWidth, buttonHeight, 8);
    ctx.fillStyle = "#fff";
    ctx.fillText(nextButton.text, xNext + buttonWidth / 2, y + 1.05 * buttonHeight / 2);

    ctx.shadowColor = "transparent";

    // Save button coordinates for hover detection
    backButton.x = xBack;
    backButton.y = y;
    nextButton.x = xNext;
    nextButton.y = y;
  }

  function drawSlideIndicators(centerX, centerY, maxWidth, buttonColor, inactiveColor, centered = false) {
    const baseRadius = indicators.baseRadius, baseSpacing = indicators.baseSpacing;
    const indicatorWidth = (slides.length - 1) * baseSpacing + 2 * baseRadius + 2 * canvasPadding;
    const scale = indicatorWidth > maxWidth ? maxWidth / indicatorWidth : 1;
    const radius = baseRadius * scale, spacing = baseSpacing * scale;
    const totalWidth = (slides.length - 1) * spacing;
    const startX = centered ? centerX - totalWidth / 2 : centerX;

    for (let i = 0; i < slides.length; i++) {
      ctx.fillStyle = (i === currentSlide) ? buttonColor : inactiveColor;
      ctx.beginPath();
      ctx.arc(startX + i * spacing, centerY, radius, 0, 2 * Math.PI);
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
    const back = backButton;
    const next = nextButton;

    hoverBack = x >= back.x && x <= back.x + buttonWidth && y >= back.y && y <= back.y + buttonHeight && currentSlide > 0;
    hoverNext = x >= next.x && x <= next.x + buttonWidth && y >= next.y && y <= next.y + buttonHeight && currentSlide < slides.length - 1;

    canvas.style.cursor = (hoverBack || hoverNext) ? "pointer" : "default";
    drawSlide();
  });

  canvas.addEventListener("click", e => {
    if (hoverBack && currentSlide > 0) currentSlide--;
    else if (hoverNext && currentSlide < slides.length - 1) currentSlide++;
    drawSlide();
  });

  // Register dark mode observer once
  const darkModeObserver = new MutationObserver(() => {
    drawSlide();
  });
  darkModeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"]
  });

}
