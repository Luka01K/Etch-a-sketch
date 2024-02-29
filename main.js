let color = "black"

let click = false;

document.addEventListener('DOMContentLoaded', function() {
    createBoard(16);

    document.querySelector('body').addEventListener('click', function(e) {
        if (e.target.tagName != "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {
                draw.innerHTML = "The pen is down."
            } else {
                draw.innerHTML = "The pan is up."
            }
        }
    })

    let btnPopup = document.querySelector("#popup");
    btnPopup.addEventListener('click', function () {
        let size = getSize();
        createBoard(size);
    })
    console.log("heyo");
})


function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = "white";
        div.addEventListener('mouseover', colorDiv)
        

        board.insertAdjacentElement('beforeend', div);
    }
}


function getSize() {
    let input = prompt("Enter the size of the board? (0 - 100)");
    let message = document.querySelector("#message");

    if (input == "") {
        message.innerHTML = "Please provide a number."
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Please provide a number between 0 and 100."
    } else {
        message.innerHTML = "Lets draw!"
        return input;
    }
}


function colorDiv() {
    if (click) {
        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() *360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = "black";
        }
    }
}


function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let allDivs = document.querySelectorAll('div');
    allDivs.forEach((div) => div.style.backgroundColor = "white")
}


