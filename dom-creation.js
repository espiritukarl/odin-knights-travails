import { knightMoves } from "./knightMoves.js";
import { buildChessboard } from "./modules.js";

let startPos = null;
let endPos = null;

document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.querySelector('.chessboard');
    const img = document.createElement("img")

    buildChessboard(chessboard);

    chessboard.addEventListener('click', (event) => {
        if (!event.target.classList.contains('square')) return;
        const [x, y] = event.target.dataset.position.split(',').map(Number);

        if (!startPos) {
            startPos = [x, y];
            img.src = "knight.svg"
            img.alt = "Chess Knight"
            event.target.append(img)
        } else if (!endPos) {
            endPos = [x, y];
            event.target.classList.add('end');
        }
    });

    travail()
    restart()
});

function travail() {
    const resultDiv = document.getElementById('result');
    const travailButton = document.getElementById('travailButton');
    travailButton.addEventListener('click', () => {
        if (!startPos || !endPos) {
            alert('Please select both start and end positions.');
            return;
        }
        const path = knightMoves(startPos, endPos);
        resultDiv.innerHTML = `You made it in ${path.depth} moves!`;
        highlightPath(path.path);
    });
}

function highlightPath(path) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.classList.remove('highlight'));
    const img = document.createElement("img")
    
    path.forEach(([x, y], index) => {
        const square = document.querySelector(`.square[data-position="${x},${y}"]`);
        if (square) { 
            if (index === path.length - 1) {
                if (!square.hasChildNodes()) {
                    img.src = "knight.svg"
                    img.alt = "Chess Knight"
                    square.append(img)
                }
                square.classList.remove("end")
                square.classList.add("travail-end")
            } else if (index === 0) {
                square.innerHTML = index
                square.classList.add('travail-end')
            } else {            
                square.innerHTML = index
                square.classList.add('highlight')
            }
        }
    });
}

function restart() {
    const resultDiv = document.getElementById('result');
    const restartButton = document.getElementById('restartButton');
    restartButton.addEventListener('click', () => {
        startPos = null;
        endPos = null;
        resultDiv.innerHTML = 'Click to place a Knight, then click to place a Target';

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.classList.remove('highlight', 'end', 'travail-end');
            square.innerHTML = '';
        });
    });

}