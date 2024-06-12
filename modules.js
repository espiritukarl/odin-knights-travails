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

function buildBoard(size) {
    const matrix = (rows, cols) => new Array(cols).fill(0).map(() => new Array(rows).fill(0))

    return matrix(size,size)
}
