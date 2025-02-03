const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Player setup
let player = {
    x: 50,
    y: canvas.height - 60,
    width: 30,
    height: 50,
    color: "blue",
    speed: 5,
    dx: 0,
    dy: 0
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function updateGameArea() {
    clearCanvas();
    player.x += player.dx;
    player.y += player.dy;
    drawPlayer();
    requestAnimationFrame(updateGameArea);
}

// Movement controls
function moveRight() {
    player.dx = player.speed;
}
function moveLeft() {
    player.dx = -player.speed;
}
function stopMove() {
    player.dx = 0;
}

// Event listeners for movement
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") moveRight();
    if (e.key === "ArrowLeft") moveLeft();
});
document.addEventListener("keyup", stopMove);

// Initialize game
updateGameArea();
