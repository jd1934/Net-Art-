let transformed = false;

document.body.addEventListener("click", () => {
    transformed = !transformed;

    if (transformed) {
        document.body.classList.add("bubbly");
        createBubbles();
    } else {
        document.body.classList.remove("bubbly");
        document.getElementById("bubble-container").innerHTML = "";
    }
});

function createBubbles() {
    const container = document.getElementById("bubble-container");
    container.innerHTML = "";

    for (let i = 0; i < 25; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const size = Math.random() * 60 + 20;
        bubble.style.width = size + "px";
        bubble.style.height = size + "px";

        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.bottom = "-100px";

        bubble.style.background = randomBubbleColor();

        bubble.style.animationDuration = (Math.random() * 3 + 3) + "s";

        container.appendChild(bubble);
    }
}

function randomBubbleColor() {
    const colors = ["#ff66cc", "#66ffcc", "#66a3ff", "#ff99ff"];
    return colors[Math.floor(Math.random() * colors.length)];
}