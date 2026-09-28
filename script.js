document.addEventListener("DOMContentLoaded", function () {

    const openLetterButton = document.getElementById("openLetter");
    const envelope = document.querySelector(".envelope");
    const letterScreen = document.getElementById("letterScreen");
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // STEP 7/8: Open Envelope & Hide Cover Screen
    openLetterButton.addEventListener("click", function () {
        envelope.classList.add("open");
        openLetterButton.style.display = "none";

        setTimeout(function () {
            letterScreen.classList.add("hide");
            document.body.style.overflow = "auto";
        }, 1200);
    });

    // STEP 9: Runaway NO Button
    function moveNoButton() {
        noButton.style.position = "fixed";

        const padding = 20;
        const maxX = window.innerWidth - noButton.offsetWidth - padding;
        const maxY = window.innerHeight - noButton.offsetHeight - padding;

        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }

    noButton.addEventListener("mouseover", moveNoButton);
    noButton.addEventListener("click", moveNoButton);

    // STEP 10: YES Button Celebration
    yesButton.addEventListener("click", function () {
        // Hide decision buttons
        yesButton.style.display = "none";
        noButton.style.display = "none";

        // Show confirmation message inside main contract
        let message = document.getElementById("signedMessage");
        if (!message) {
            message = document.createElement("div");
            message.id = "signedMessage";
            message.innerHTML = "🎉 CONTRACT SIGNED! FOREVER & ALWAYS 💖";
            document.querySelector("main").appendChild(message);
        }

        // Spawn floating hearts
        for (let i = 0; i < 30; i++) {
            createHeart();
        }
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.innerText = ["💖", "💗", "💕", "😍", "✨"][Math.floor(Math.random() * 5)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

});
