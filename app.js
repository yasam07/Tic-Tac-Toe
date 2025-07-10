let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let countBtn = document.querySelector('.countbtn');
let newGame = document.querySelector('.newgame');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');



let count = 0;


let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
            count++
            countBtn.innerText = `Count is ${count}`;
        }
        else {
            box.innerText = 'X';
            turnO = true;
            count++
            countBtn.innerText = `Count is ${count}`;
        }
        box.disabled = true;

        checkWinner();
    })

})

const boxesdisabled = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const boxesenabled = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = '';
        count = 0;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    boxesdisabled();
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '')
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }

    }
}

const resetGame = () => {
    turnO = true;
    count = 0;
    countBtn.innerText = `Count is ${count}`;
    boxesenabled();
    msgContainer.classList.add("hide");

}

const countClicks = () => {

    countBtn.innerText = `Count is ${count}`;
}


countBtn.addEventListener('click', countClicks);
newGame.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);

