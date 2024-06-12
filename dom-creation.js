import { knightMoves } from "./knightMoves.js";
import { buildChessboard } from "./modules.js";

let startPos = null;
let endPos = null;

document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.querySelector('.chessboard');
    const resultDiv = document.getElementById('result');
    const travailButton = document.getElementById('travailButton');

    buildChessboard(chessboard);

    chessboard.addEventListener('click', (event) => {
        if (!event.target.classList.contains('square')) return;
        const [x, y] = event.target.dataset.position.split(',').map(Number);

        if (!startPos) {
            startPos = [x, y];
            event.target.classList.add('start');
        } else if (!endPos) {
            endPos = [x, y];
            event.target.classList.add('end');
        }
    });

    travailButton.addEventListener('click', () => {
        if (!startPos || !endPos) {
            alert('Please select both start and end positions.');
            return;
        }
        const path = knightMoves(startPos, endPos);
        resultDiv.innerHTML = `You made it in ${path.depth} moves!`;
        highlightPath(path.path);
    });
});

function highlightPath(path) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('highlight'));

    
    path.forEach(([x, y], index) => {
        const square = document.querySelector(`.square[data-position="${x},${y}"]`);
        if (square) { 
            square.innerHTML = index
            square.classList.add('highlight');
        }
    });
}