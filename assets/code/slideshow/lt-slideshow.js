const canvas = document.getElementById("lt-slideshow-canvas");
const ctx = canvas.getContext("2d");

// Slide definitions
const slides = [
    {
        title:  'Goal',
        image:  '../../assets/figures/lt-roadmap-goal.png',
        text:   'Solve the Initial-Valued Problem.'
    },{
        title:  'Step 1',
        image:  '../../assets/figures/lt-roadmap-step-1.png',
        text:   'Apply the "Forward" Laplace transform to the differential equation, converting it into an algebraic "Laplace" Equation.'
    },{
        title:  'Step 2',
        image:  '../../assets/figures/lt-roadmap-step-2.png',
        text:   'Solve the Laplace Equation for Y(s).\nThis is the "Laplace Solution".'
    },{
        title:  'Step 3',
        image:  '../../assets/figures/lt-roadmap-step-3.png',
        text:   'Prepare Y(s) for a "Backward" transform by writing it as a sum of terms that match entries in the transform table.'
    },{
        title:  'Step 4',
        image:  '../../assets/figures/lt-roadmap-step-4.png',
        text:   'Apply the "Backward" inverse Laplace transform to Y(s).'
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

// Other Customizations
const textColor = `rgb(13, 13, 14)`;
const textFont = `rgb(87, 115, 144)`;

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

// Get button coordinates dynamically
function getButtonCoordinates() {
    const y = slideHeight + canvasPadding + 10;
    const textBoxWidth = canvas.width - 2 * (buttonWidth + buttonPadding) - 2 * canvasPadding;

    const backX = textBoxWidth + 2 * canvasPadding;
    const nextX = backX + buttonWidth + buttonPadding;

    return {
        back: { x: backX, y },
        next: { x: nextX, y }
    };
}

// Draw single slide
function drawSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const slide = slides[currentSlide];
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, canvasPadding, canvasPadding, slideWidth, slideHeight);
    };
    
    img.src = slide.image;

    drawTextBox(slide.title + '. ' + slide.text);
    drawButtons();
    drawSlideIndicators();
}

// Draw text box with wrapping
function drawTextBox(fullText) {
    const { back } = getButtonCoordinates();

    const textBoxX = canvasPadding;
    const textBoxY = back.y;
    const textBoxWidth = canvas.width - 2 * (buttonWidth + buttonPadding) - 2 * canvasPadding;
    const lineHeight = 18;
    const maxLines = 2;
    const textBoxHeight = lineHeight * maxLines + 10;

    ctx.fillStyle = "#f0f4f8";
    ctx.fillRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);
    ctx.strokeStyle = "#ccc";
    ctx.strokeRect(textBoxX, textBoxY, textBoxWidth, textBoxHeight);

    ctx.fillStyle = textColor;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = "15px 'Roboto', sans-serif";

    const wrappedLines = wrapText(ctx, fullText, textBoxWidth - 10);
    for (let i = 0; i < Math.min(wrappedLines.length, maxLines); i++) {
        ctx.fillText(wrappedLines[i], textBoxX + 5, textBoxY + 5 + i * lineHeight);
    }
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

// Draw slide indicators
// function drawSlideIndicators() {
//     const baseRadius = 6;
//     const baseSpacing = 20;
//     const maxSlideCountBeforeScaling = 8;

//     // Scale down indicators if too many
//     const scale = slides.length > maxSlideCountBeforeScaling
//         ? maxSlideCountBeforeScaling / slides.length
//         : 1;

//     const radius = baseRadius * scale;
//     const spacing = baseSpacing * scale;
//     const totalWidth = slides.length * spacing;
//     // const startX = (canvas.width - totalWidth) / 2;

//     const { back } = getButtonCoordinates();
//     const startX = back.x + canvasPadding;  // just below buttons
//     const y = back.y + buttonHeight + 15;   

//     for (let i = 0; i < slides.length; i++) {
//         ctx.fillStyle = (i === currentSlide) ? "#4CAF50" : "#ddd";
//         ctx.beginPath();
//         ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
//         ctx.fill();
//     }
// }

function drawSlideIndicators() {
    const baseRadius = 6;
    const baseSpacing = 20;
    const maxSlideCountBeforeScaling = 8;

    // Scale radius and spacing if slide count is large
    const scale = slides.length > maxSlideCountBeforeScaling
        ? maxSlideCountBeforeScaling / slides.length
        : 1;

    const radius = baseRadius * scale;
    const spacing = baseSpacing * scale;
    const totalWidth = (slides.length - 1) * spacing;

    const { back, next } = getButtonCoordinates();
    const buttonsLeft = back.x;
    const buttonsRight = next.x + buttonWidth;
    const buttonsCenter = (buttonsLeft + buttonsRight) / 2;

    const startX = buttonsCenter - totalWidth / 2;
    const y = back.y + buttonHeight + 15;

    for (let i = 0; i < slides.length; i++) {
        ctx.fillStyle = (i === currentSlide) ? "#4CAF50" : "#ddd";
        ctx.beginPath();
        ctx.arc(startX + i * spacing, y, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}


// function drawSlideIndicators() {
//     const radius = 6;
//     const spacing = 20;
//     const totalWidth = slides.length * spacing;
//     const startX = (canvas.width - totalWidth) / 2;
//     const y = canvas.height - radius - 5;

//     for(let i = 0; i < slides.length; i++) {
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
