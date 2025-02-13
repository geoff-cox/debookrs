const canvas = document.getElementById("if-derivation-canvas");
const ctx = canvas.getContext("2d");

// Define slides as objects with an image and text
const slides = [
    { 
        image: "../../assets/figures/if-strategy-0.png", 
        text: 
            "Every first-order linear\n" +
            "differential equation can\n" + 
            "be transformed into a\n" + 
            "direct integration problem,\n" + 
            "but how?\n" + 
            "\n" + 
            "Click \"Next\" to find out."
    },
    { 
        image: "../../assets/figures/if-strategy-1.png",
        text: 
            "1. Multiply the original\n" + 
            "equation by an unknown\n" + 
            "function (integrating\n" + 
            "factor) that makes a\n" + 
            "path for reversing the\n" + 
            "product rule.\n" + 
            "\n" +
            "Thus,\n" + 
            "\"completing the derivative.\""
    },
    {
        image: "../../assets/figures/if-strategy-2.png",
        text:
            "2. Now, working backwards\n" + 
            "from the bottom, apply\n" + 
            "the product rule to the\n" + 
            "left side of the last\n" + 
            "equation.\n" + 
            "\n" +
            "This will bridge the gap\n" + 
            "between the given equation\n" + 
            "and our goal."
    },
    {
        image: "../../assets/figures/if-strategy-3.png",
        text:
            "3. The equations that meet\n" + 
            "in the middle must be\n" +
            "identical. Everything in\n" + 
            "these equations match\n" + 
            "except for what's in the\n" + 
            "boxes.\n" + 
            "\n" +
            "For this method to work,\n" +
            "these must also be equal."
    },
    {
        image: "../../assets/figures/if-strategy-4.png",
        text:
            "4. Matching the boxed\n" + 
            "expressions gives us a\n" + 
            "condition for what the\n" + 
            "integrating factor can be\n" + 
            "in the form of a separable\n" + 
            "differential equation.\n" + 
            "\n" + 
            "Solving this gives us the\n" + 
            "integrating factor!"
    }
];

let currentSlide = 1;

// Button properties
const buttonWidth = 50, buttonHeight = 25;
const backButtonX = 340, nextButtonX = backButtonX + buttonWidth + 10, buttonY = 260;

function drawSlide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw text
    //ctx.fillStyle = "black";
    ctx.fillStyle = `rgb(87, 115, 144)`;
    ctx.font = "bold 16px sans-serif";
    const lines = slides[currentSlide-1].text.split("\n");
    let textX = 340, textY = 20;
    for (let i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], textX, textY + i * 25);
    }
    ctx.fillText("Slide " + currentSlide, nextButtonX + buttonWidth + 10, buttonY + 18);

    // Load and draw image
    const img = new Image();
    img.onload = function () {
        ctx.drawImage(img, 5, 5, 320, 280);
        
        // Draw button after image loads
        drawButton();
    };
    img.onerror = function () {
        console.error("Image failed to load: " + slides[currentSlide-1].image);
        drawButton(); // Still show button if image fails
    };
    img.src = slides[currentSlide-1].image;
}

function drawButton() {

    // Draw Back button (disabled if on first slide)
    ctx.fillStyle = (currentSlide === 1) ? "lightgray" : "lightgray"; // Disabled color
    ctx.fillRect(backButtonX, buttonY, buttonWidth, buttonHeight);
    ctx.strokeStyle = (currentSlide === 1) ? "lightgray" : "black"; // Disabled color
    ctx.strokeRect(backButtonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = (currentSlide === 1) ? "gray" : "black"; // Disabled color
    ctx.font = "18px sans-serif";
    ctx.fillText("Back", backButtonX + 6, buttonY + 19);

    // Draw Next button
    ctx.fillStyle = "lightgray";
    ctx.fillRect(nextButtonX, buttonY, buttonWidth, buttonHeight);
    ctx.strokeStyle = "black";
    ctx.strokeRect(nextButtonX, buttonY, buttonWidth, buttonHeight);
    ctx.fillStyle = "black";
    ctx.font = "18px sans-serif";
    ctx.fillText("Next", nextButtonX + 6, buttonY + 19);

}

// Handle click to navigate slides
canvas.addEventListener("click", function (event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Check if click is inside "Next" button
    if (
        x >= nextButtonX && x <= nextButtonX + buttonWidth &&
        y >= buttonY && y <= buttonY + buttonHeight
        ) {
        currentSlide = currentSlide % slides.length + 1;
        drawSlide();
    }

    // Check if click is inside "Back" button (only works if not disabled)
    if (
        currentSlide > 1 && 
        x >= backButtonX && x <= backButtonX + buttonWidth &&
        y >= buttonY && y <= buttonY + buttonHeight
        ) {
        currentSlide--;
        drawSlide();
    }

});

// Initial draw
drawSlide();