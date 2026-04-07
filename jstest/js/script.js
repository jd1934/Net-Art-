let cuteColors = ["#ff99cc", "#66b3ff", "#ffb3e6", "#99ddff", "#ff80bf"];

// new puppy images that always load
let puppyImages = [
  "https://placedog.net/400/400",
  "https://placedog.net/401/401",
  "https://placedog.net/402/402",
  "https://placedog.net/403/403"
];

function makeCute() {
  const title = document.getElementById("title");
  const puppy = document.getElementById("puppy");

  const randomColor = cuteColors[Math.floor(Math.random() * cuteColors.length)];
  const randomPuppy = puppyImages[Math.floor(Math.random() * puppyImages.length)];

  title.style.color = randomColor;

  title.style.transform = "scale(1.05)";
  puppy.style.transform = "scale(1.1)";

  puppy.src = randomPuppy;

  setTimeout(() => {
    title.style.transform = "scale(1)";
    puppy.style.transform = "scale(1)";
  }, 300);
}

document.getElementById("colorBtn").addEventListener("click", makeCute);