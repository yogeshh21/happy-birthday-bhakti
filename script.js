// ================================
// ELEMENTS
// ================================

const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const surpriseBtn = document.getElementById("surprise");
const finalMessage = document.getElementById("finalMessage");

// ================================
// START WEBSITE
// ================================

startBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 700);

    // Play music
    music.volume = 0.2;
    music.play().catch(() => {
        console.log("Music autoplay blocked until user interaction.");
    });

});

// ================================
// SCROLL ANIMATION
// ================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = 0;
    section.style.transform = "translateY(80px)";
    section.style.transition = "1s ease";

    observer.observe(section);

});

// ================================
// HEART CONFETTI
// ================================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-40px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.transition = "5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.style.transform = `translateY(${window.innerHeight + 100}px) rotate(360deg)`;
        heart.style.opacity = "0";

    }, 20);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}

// ================================
// SURPRISE BUTTON
// ================================

surpriseBtn.addEventListener("click", () => {

    surpriseBtn.style.display = "none";

    finalMessage.style.display = "block";

    // 150 floating hearts
    for (let i = 0; i < 150; i++) {

        setTimeout(createHeart, i * 40);

    }

    // Scroll to message
    finalMessage.scrollIntoView({
        behavior: "smooth"
    });

});

// ================================
// GALLERY LIGHTBOX
// ================================

const images = document.querySelectorAll(".grid img");

images.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.left = "0";
        overlay.style.top = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.cursor = "pointer";
        overlay.style.zIndex = "99999";

        const photo = document.createElement("img");

        photo.src = img.src;

        photo.style.maxWidth = "90%";
        photo.style.maxHeight = "90%";
        photo.style.borderRadius = "20px";
        photo.style.boxShadow = "0 20px 50px rgba(255,255,255,.2)";

        overlay.appendChild(photo);

        document.body.appendChild(overlay);

        overlay.onclick = () => {

            overlay.remove();

        };

    });

});

// ================================
// FLOATING HEARTS
// ================================

setInterval(() => {

    if (loader.style.display === "none") {

        createHeart();

    }

}, 1800);