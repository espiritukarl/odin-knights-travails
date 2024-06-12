export let knightMovement = [
    [1, 2], [1, -2], 
    [2, 1], [2, -1],
    [-1, 2], [-1, -2],
    [-2, 1], [-2, -1]
]

export function isOutOfRange(position) {
    const x = position[0];
    const y = position[1];
    
    return (x < 0 || x > 7 || y < 0 || y > 7);
}

export function addVectors(vec1, vec2) {
    return vec1.map((value, index) => Number(value) + Number(vec2[index]));
}

export function buildChessboard(chessboard) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add((i + j) % 2 === 0 ? 'white' : 'black');
            square.dataset.position = `${i},${j}`;
            chessboard.appendChild(square);
        }
    }
}

