const maxDistance = (movements) => {
    const state = {
        '>': 0,
        '<': 0,
        '*': 0
    };

    [...movements].forEach((movement) => {
        state[movement] += 1;
    });

    return Math.abs(state['>'] - state['<']) + state['*'];
}

console.log(maxDistance('>>*<')) // -> 2

console.log(maxDistance('<<<>')) // -> 2

console.log(maxDistance('>***>')) // -> 5
