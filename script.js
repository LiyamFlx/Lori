const startBtn = document.getElementById("start-btn");
const gameText = document.getElementById("game-text");
startBtn.addEventListener("click", () => {
    gameText.innerText = "Lori wakes up in her small village with a dream of becoming a hero. What should she do next?";
    startBtn.innerText = "Go on an Adventure";
    startBtn.addEventListener("click", () => {
        gameText.innerText = "Lori packs her bag, says goodbye to her family, and heads into the enchanted forest. The adventure begins!";
        startBtn.style.display = "none";
    });
});
