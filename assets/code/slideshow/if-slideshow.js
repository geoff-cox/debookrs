const canvas = document.getElementById("if-derivation-canvas"); 
const ctx = canvas.getContext("2d");

// Slide definitions
const slides = [
    {
        title:  'Goal',
        image:  '../../assets/figures/if-strategy-10.png',
        text:   'Every first-order linear differential equation can be transformed into a direct integration problem, but how?\n' + '\n' + 'Click "Next" to find out.'
    },{
        title:  '1',
        image:  '../../assets/figures/if-strategy-11.png',
        text:   'Multiply the original equation by an unknown function (the integrating factor) that makes a path to our goal of reversing the product rule.'
    },{
        title:  '2',
        image:  '../../assets/figures/if-strategy-12.png',
        text:   'Now, working backwards, apply the product rule to the left side of our final goal equation. This will bridge the gap between our starting equation and goal.'
    },{
        title:  '3',
        image:  '../../assets/figures/if-strategy-13.png',
        text:   'The equations that meet in the middle are identical except for the boxed expressions. This tells us that the μ we are looking for is the one that makes the boxes equal.'
    },{
        title:  '4',
        image:  '../../assets/figures/if-strategy-14.png',
        text:   'The condition that requires the boxed expressions to be equal is in the form of a separable differential equation that we can solve to get the integrating factor, μ!'
    }
];

let currentSlide = 0;

// Button Dimensions and Position (Calculated Dynamically)
const buttonWidth = 70;
const buttonHeight = 26;
const buttonPadding = 10;

// Slide and Canvas Padding
const canvasPadding = 10;
const slideWidth = canvas.width - 2 * canvasPadding;
const slideHeight = canvas.height - 80;

// Control Panel Dimensions
const controlPanelWidth = 190; // right-hand column for text, buttons, and indicators
const imageWidth = canvas.width - controlPanelWidth - canvasPadding * 2;
const imageHeight = canvas.height - canvasPadding * 2;

// Other Customizations
const textColor = `rgb(13, 13, 14)`;
const textFontSize = "16";

// Text Styling
ctx.font = "16px 'Roboto', sans-serif";
ctx.textBaseline = "top";
ctx.fillStyle = "#577390";
ctx.textAlign = "left";

// Preload Images
slides.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
});

function drawSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const slide = slides[currentSlide];
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, canvasPadding, canvasPadding, imageWidth, imageHeight);

        // Draw vertical separator
        const separatorX = imageWidth + canvasPadding + canvasPadding / 2;
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 1;
        // ctx.setLineDash([4, 2]); // Optional: dashed
        ctx.beginPath();
        ctx.moveTo(separatorX, canvasPadding);
        ctx.lineTo(separatorX, canvas.height - canvasPadding);
        ctx.stroke();
        // ctx.setLineDash([]); // Reset to solid
    };
    img.src = slide.image;

    drawTextBox(slide.title + '. ' + slide.text);
    drawButtons();
    drawSlideIndicators();
}

// Draw text box with wrapping
function drawTextBox(fullText) {
    const { back } = getButtonCoordinates();

    const textBoxX = imageWidth + 2 * canvasPadding;
    const textBoxY = canvasPadding;
    const textBoxWidth = controlPanelWidth - canvasPadding;
    const textBoxHeight = back.y - canvasPadding - canvasPadding; // Fill to top of buttons

    ctx.fillStyle = "#f0f4f8";
    ctx.fillRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);
    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);

    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = textFontSize + "px 'Roboto', sans-serif";

    const lineHeight = 18;
    const maxLines = Math.floor((textBoxHeight - 10) / lineHeight);
    const wrappedLines = wrapText(ctx, fullText, textBoxWidth - 10);

    for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
        ctx.fillText(wrappedLines[i], textBoxX + 5, textBoxY + 5 + i * lineHeight);
    }
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

    const { back, next } = getButtonCoordinates();
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

// Get button coordinates dynamically
function getButtonCoordinates() {
    const buttonY = canvas.height - canvasPadding - buttonHeight - 20; // Leave room for indicators
    const panelLeft = imageWidth + 2 * canvasPadding;
    const panelCenter = panelLeft + (controlPanelWidth - canvasPadding * 2) / 2;

    const backX = panelCenter - buttonWidth;
    const nextX = panelCenter + buttonPadding;

    return {
        back: { x: backX, y: buttonY },
        next: { x: nextX, y: buttonY }
    };
}

// Helper Function: Wrap text to fit within a specified width
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

// Draw navigation buttons
function drawButtons() {
    const { back, next } = getButtonCoordinates();
    const y = back.y;
    const buttonRadius = 8;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "16px 'Roboto', sans-serif";

    // Back Button
    ctx.fillStyle = currentSlide === 0 ? "#ccc" : "#4CAF50";
    roundedRect(back.x, y, buttonWidth, buttonHeight, buttonRadius);
    ctx.fillStyle = "#fff";
    ctx.fillText("Back", back.x + buttonWidth / 2, y + buttonHeight / 2 + 1);

    // Next Button
    ctx.fillStyle = currentSlide === slides.length - 1 ? "#ccc" : "#4CAF50";
    roundedRect(next.x, y, buttonWidth, buttonHeight, buttonRadius);
    ctx.fillStyle = "#fff";
    ctx.fillText("Next", next.x + buttonWidth / 2, y + buttonHeight / 2 + 1);
}

// Utility for rounded rectangle
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

// function drawSlideIndicators() {
//     const baseRadius = 6;
//     const baseSpacing = 20;
//     const maxSlideCountBeforeScaling = 8;

//     // Scale radius and spacing if slide count is large
//     const scale = slides.length > maxSlideCountBeforeScaling
//         ? maxSlideCountBeforeScaling / slides.length
//         : 1;

//     const radius = baseRadius * scale;
//     const spacing = baseSpacing * scale;
//     const totalWidth = (slides.length - 1) * spacing;

//     const { back, next } = getButtonCoordinates();
//     const buttonsLeft = back.x;
//     const buttonsRight = next.x + buttonWidth;
//     const buttonsCenter = (buttonsLeft + buttonsRight) / 2;

//     const startX = buttonsCenter - totalWidth / 2;
//     const y = back.y + buttonHeight + 15;

//     for (let i = 0; i < slides.length; i++) {
//         ctx.fillStyle = (i === currentSlide) ? "#4CAF50" : "#ddd";
//         ctx.beginPath();
//         ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
//         ctx.fill();
//     }
// }

// Click handler using dynamic button positions
canvas.addEventListener("click", function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const coords = getButtonCoordinates();

    // Back button
    if (currentSlide > 0 &&
        mouseX >= coords.back.x && mouseX <= coords.back.x + buttonWidth &&
        mouseY >= coords.back.y && mouseY <= coords.back.y + buttonHeight) {
        currentSlide--;
        drawSlide();
    }

    // Next button
    if (currentSlide < slides.length - 1 &&
        mouseX >= coords.next.x && mouseX <= coords.next.x + buttonWidth &&
        mouseY >= coords.next.y && mouseY <= coords.next.y + buttonHeight) {
        currentSlide++;
        drawSlide();
    }
});

// Hover effect for buttons
canvas.addEventListener("mousemove", function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const coords = getButtonCoordinates();
    canvas.style.cursor = "default";

    if ((currentSlide > 0 &&
        mouseX >= coords.back.x && mouseX <= coords.back.x + buttonWidth &&
        mouseY >= coords.back.y && mouseY <= coords.back.y + buttonHeight) ||
        (currentSlide < slides.length - 1 &&
        mouseX >= coords.next.x && mouseX <= coords.next.x + buttonWidth &&
        mouseY >= coords.next.y && mouseY <= coords.next.y + buttonHeight)) {
            canvas.style.cursor = "pointer";
    }
});

// Initial load
drawSlide();
