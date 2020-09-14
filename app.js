let cells = document.querySelectorAll('.row > div');
const epicWinCombinations = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

let player1 = "X";
let turn = 0;
let gameOver = false;

resetButton.addEventListener("click", restartGame);

cells.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
        if (e.target.textContent === "" && gameOver === false) {
            e.target.textContent = player1;

            turnCount++;
            checkWin();
            if (player1 === "X") {
                player1 = "O";
            } else {
                player1 = "X";
            }
        }
    });
});

function checkWin() {
    for (let i = 0; i < epicWinCombinations.length; i++) {
        let XCount = 0;
        let OCount = 0;

        for (let j = 0; j < epicWinCombinations[i].length; j++) {
            if (epicWinCombinations[i][j].textContent === "X") {
                XCount++
            } else if (epicWinCombinations[i][j].textContent === "O") {
                Ocount++
            }
        }
    }
}

if (XCount === 3) {
    setTimeout(() => {
        alert("X Wins");
    }, 0);
    gameOver = true;
    resetButton.style.display = "block";
} else if (Ocount === 3) {
    setTimeout(() => {
        alert("0 Wins");
    }, 0);
    gameOver = true;
    resetButton.style.display = "block";
} else if (turnCount === 9) {
    setTimeout(() => {
        alert("Draw");
    }, 0);
    gameOver = true;
    resetButton.style.display = "block";
}



Function restartGame(restartGame) {
    turnCount = 0;
    player1 = "X";

    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}
//cells[0].textContent
//if else statements
// ===