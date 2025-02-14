const canvas = document.getElementById("if-derivation-canvas");
const ctx = canvas.getContext("2d");

// Define slides as objects with an image and text
const slides = [
    { 
        image: "../../assets/figures/if-strategy-10.png", 
        text: 
            "Every first-order linear\n" +
            "differential equation\n" + 
            "can be transformed into\n" + 
            "a direct integration\n" + 
            "problem, but how?\n" + 
            "\n" + 
            "Click \"Next\" to find out."
    },
    { 
        image: "../../assets/figures/if-strategy-11.png",
        text: 
            "1. Multiply the original\n" + 
            "equation by an unknown\n" + 
            "function (the integrating\n" + 
            "factor) that makes a\n" + 
            "path to our goal of \n" + 
            "reversing the product\n" + 
            "rule."
    },
    {
        image: "../../assets/figures/if-strategy-12.png",
        text:
            "2. Now, working\n" + 
            "backwards, apply the\n" + 
            "product rule to the\n" + 
            "left side of our final\n" + 
            "goal equation.\n" + 
            "\n" +
            "This will bridge the gap\n" + 
            "between our starting\n" + 
            "equation and goal."
    },
    {
        image: "../../assets/figures/if-strategy-13.png",
        text:
            "3. The equations that\n" + 
            "meet in the middle are\n" +
            "identical except for\n" + 
            "the boxed expressions.\n" + 
            "\n" +
            "This tells us that\n" + 
            "the μ we are looking\n" +
            "for is the one that\n" +
            "makes the boxes equal."
    },
    {
        image: "../../assets/figures/if-strategy-14.png",
        text:
            "4. The condition\n" + 
            "that requires the\n" + 
            "boxed expressions to\n" + 
            "be equal is in the\n" + 
            "form of a separable\n" + 
            "differential equation\n" + 
            "that we can solve\n" + 
            "to get the\n" + 
            "integrating factor, μ!"
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