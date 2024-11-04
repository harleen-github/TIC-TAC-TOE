let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcont = document.querySelector(".msg-container"); // corrected selector
let msg = document.querySelector("#msg");
let turn0 = true; // player O

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "O";
            turn0 = !turn0;
        } else {
            box.innerText = "X";
            turn0 = !turn0;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // corrected empty string assignment
    }
};

const showWinner = (winner) => {
    msg.innerText = `CONGRATS, WINNER IS ${winner}`; // corrected template literal
    msgcont.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (const pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            if (pos1 === 'O') {
                console.log("winner is player 1");
                showWinner("PLAYER 1 (O)");
            } else {
                console.log("player 2 is winner");
                showWinner("PLAYER 2 (X)");
            }
            return; // Exit after a winner is found
        }
        else{
            showWinner("its a DRAW!!");
            return;
        }
    }
};

const resetGame = () => {
    turn0 = true;
    enableboxes();
    msgcont.classList.add("hide");
};

newgamebtn.addEventListener("click", resetGame); // corrected to pass the function reference
resetbtn.addEventListener("click", resetGame);
