export function runSlideshow(canvas, config) {
    const ctx = canvas.getContext("2d");

    const slides = config.slides;
    const settings = config.settings || {};

    // Pull settings or use defaults
    const controlPanelWidth = settings.controlPanelWidth ?? 200;
    const buttonColor = settings.buttonColor ?? "#4CAF50";
    const hoverColorOn = settings.hoverColor ?? "#388e3c";
    const hoverColorOff = settings.hoverColor ?? "#4CAF50";
    const textColor = settings.textColor ?? "#0d0d0e";
    const fontSize = settings.fontSize ?? 16;

    // All other logic as per the full code already built
    let currentSlide = 0;

    const buttonWidth = 70;
    const buttonHeight = 26;
    const buttonPadding = 10;

    const canvasPadding = 10;
    const imageWidth = canvas.width - controlPanelWidth - canvasPadding * 2;
    const imageHeight = canvas.height - canvasPadding * 2;

    // Hover state
    let hoverBack = false;
    let hoverNext = false;

    // Preload images
    slides.forEach(slide => {
        const img = new Image();
        img.src = slide.image;
    });

    function drawSlide() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Control panel background
        ctx.fillStyle = "#f9f9fb";
        ctx.fillRect(imageWidth + canvasPadding, 0, controlPanelWidth, canvas.height);

        // Draw image
        const slide = slides[currentSlide];
        const img = new Image();
        img.onload = function () {
            ctx.drawImage(img, canvasPadding, canvasPadding, imageWidth, imageHeight);

            // Separator
            const separatorX = imageWidth + canvasPadding + canvasPadding / 2;
            ctx.strokeStyle = "#ccc";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(separatorX, canvasPadding);
            ctx.lineTo(separatorX, canvas.height - canvasPadding);
            ctx.stroke();
        };
        img.src = slide.image;

        drawTextBox(slide.title + '. ' + slide.text);
        drawButtons();
        drawSlideIndicators();
    }

    function getButtonCoordinates() {
        const y = canvas.height - canvasPadding - buttonHeight - 20;
        const panelLeft = imageWidth + 2 * canvasPadding;
        const panelCenter = panelLeft + (controlPanelWidth - canvasPadding * 2) / 2;

        const backX = panelCenter - buttonWidth;
        const nextX = panelCenter + buttonPadding;

        return {
            back: { x: backX, y },
            next: { x: nextX, y }
        };
    }

    function drawTextBox(fullText) {
        const { back } = getButtonCoordinates();
        const x = imageWidth + 2 * canvasPadding;
        const y = canvasPadding;
        const width = controlPanelWidth - canvasPadding;
        const height = back.y - canvasPadding * 2;

        ctx.fillStyle = "#f0f4f8";
        ctx.fillRect(x, y, width, height);
        ctx.strokeStyle = "#ccc";
        ctx.strokeRect(x, y, width, height);

        ctx.fillStyle = textColor;
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.font =  fontSize + "px 'Roboto', sans-serif";

        const lineHeight = 18;
        const maxLines = Math.floor((height - 10) / lineHeight);
        const wrappedLines = wrapText(ctx, fullText, width - 10);

        for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
            ctx.fillText(wrappedLines[i], x + 5, y + 5 + i * lineHeight);
        }
    }

    function drawButtons() {
        const { back, next } = getButtonCoordinates();
        const buttonRadius = 8;

        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "16px 'Roboto', sans-serif";

        // Style with shadow
        ctx.shadowColor = "rgba(0, 0, 0, 0.1)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;

        // Back button
        ctx.fillStyle = currentSlide === 0 ? "#ccc" : (hoverBack ? hoverColorOn : hoverColorOff);
        roundedRect(back.x, back.y, buttonWidth, buttonHeight, buttonRadius);
        // ctx.fillStyle = "#fff";
        ctx.fillStyle = buttonColor;  
        ctx.fillText("⬅ Back", back.x + buttonWidth / 2, back.y + buttonHeight / 2 + 1);

        // Next button
        ctx.fillStyle = currentSlide === slides.length - 1 ? "#ccc" : (hoverNext ? hoverColorOn : hoverColorOff);
        roundedRect(next.x, next.y, buttonWidth, buttonHeight, buttonRadius);
        // ctx.fillStyle = "#fff";
        ctx.fillStyle = buttonColor;
        ctx.fillText("Next ➡", next.x + buttonWidth / 2, next.y + buttonHeight / 2 + 1);

        // Reset shadow
        ctx.shadowColor = "transparent";
    }

    function drawSlideIndicators() {
        const baseRadius = 6;
        const baseSpacing = 20;
        const maxSlideCountBeforeScaling = 8;

        const scale = slides.length > maxSlideCountBeforeScaling
            ? maxSlideCountBeforeScaling / slides.length
            : 1;

        const radius = baseRadius * scale;
        const spacing = baseSpacing * scale;
        const totalWidth = (slides.length - 1) * spacing;

        const { back } = getButtonCoordinates();
        const panelLeft = imageWidth + 2 * canvasPadding;
        const panelWidth = controlPanelWidth - canvasPadding * 2;
        const centerX = panelLeft + panelWidth / 2;
        const startX = centerX - totalWidth / 2;
        const y = back.y + buttonHeight + 15;

        for (let i = 0; i < slides.length; i++) {
            ctx.fillStyle = (i === currentSlide) ? "#4CAF50" : "#ddd";
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

    canvas.addEventListener("click", function (event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const coords = getButtonCoordinates();

        // Back
        if (currentSlide > 0 &&
            mouseX >= coords.back.x && mouseX <= coords.back.x + buttonWidth &&
            mouseY >= coords.back.y && mouseY <= coords.back.y + buttonHeight) {
            currentSlide--;
            drawSlide();
        }

        // Next
        if (currentSlide < slides.length - 1 &&
            mouseX >= coords.next.x && mouseX <= coords.next.x + buttonWidth &&
            mouseY >= coords.next.y && mouseY <= coords.next.y + buttonHeight) {
            currentSlide++;
            drawSlide();
        }
    });

    // Hover effect logic
    canvas.addEventListener("mousemove", function (event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const coords = getButtonCoordinates();

        hoverBack = currentSlide > 0 &&
            mouseX >= coords.back.x && mouseX <= coords.back.x + buttonWidth &&
            mouseY >= coords.back.y && mouseY <= coords.back.y + buttonHeight;

        hoverNext = currentSlide < slides.length - 1 &&
            mouseX >= coords.next.x && mouseX <= coords.next.x + buttonWidth &&
            mouseY >= coords.next.y && mouseY <= coords.next.y + buttonHeight;

        canvas.style.cursor = (hoverBack || hoverNext) ? "pointer" : "default";
        drawSlide();
    });

    // Initial render
    drawSlide();

}
