import { knightMovement, isOutOfRange, addVectors } from "./modules.js";

export function knightMoves(startpos, endpos) {
    if (isOutOfRange(startpos) || isOutOfRange(endpos)) {
        console.log("Index for input position out of bounds");
        return;
    }

    const queue = [{
        pos: [...startpos], 
        depth: 0, 
        path: [[...startpos]]
    }];

    while(queue.length > 0) {
        let current = queue.shift();
        if (current.pos[0] === endpos[0] && current.pos[1] === endpos[1]) {
            return current;
        }
        
        knightMovement.forEach(move => {
            let newPos = addVectors(current.pos, move);
            if (!isOutOfRange(newPos)) {
                queue.push({ 
                    pos: newPos, 
                    depth: current.depth + 1,
                    path: [...current.path, newPos]
                });
            }
        });
    }
}