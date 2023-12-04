const manufacture = (gifts, materials) => {

    const manufacturedGifts = gifts.filter(gift => {
        const unionSet = new Set([...gift, ...materials]);
        const unionLength = Array.from(unionSet).length;
        
        return unionLength === materials.length;
    });

    return manufacturedGifts;
}


console.log(manufacture(['tren', 'oso', 'pelota'], 'tronesa')) // ["tren", "oso"]

console.log(manufacture(['juego', 'puzzle'], 'jlepuz')) // ["puzzle"]

console.log(manufacture(['libro', 'ps5'], 'psli')) // []