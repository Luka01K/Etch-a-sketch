document.addEventListener("DOMContentLoaded", function() {
    createBoard(32)


    console.log("heyo");
})


function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDiv = size * size;

    for (let i = 0; i < numDiv; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = "#E6E3FA";

        board.insertAdjacentElement('beforeend', div);
    }
}