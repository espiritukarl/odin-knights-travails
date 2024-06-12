import { knightMovement, isOutOfRange, addVectors } from "./modules.js"

function knightMoves(startpos, endpos) {
    if (isOutOfRange(startpos) || isOutOfRange(endpos)) {
        console.log("Index for input position out of bounds")
        return
    }

    const queue = [{
        pos: [...startpos], 
        depth: 0, 
        path: [[...startpos]]
    }]

    while(queue.length > 0) {
        let current = queue.shift()
        if (current.pos[0] === endpos[0] && current.pos[1] === endpos[1]) {
            console.log(`You made it in ${current.depth} moves! Here's your path:`)
            console.log(current.path)
            return
        }
        
        knightMovement.forEach(x => {
            if(!isOutOfRange(addVectors(current.pos, x))) {
                queue.push({ 
                    pos: addVectors(current.pos, x), 
                    depth: current.depth+1,
                    path: [...current.path, addVectors(current.pos, x)]
                })
            }
        })
    }
}

knightMoves([5, 7], [0, 1])