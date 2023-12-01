const findFirstRepeated = (gifts) => {
    const hashMap = {};

    const firstRepeated = gifts.find(gift => {
        hashMap[gift] = (hashMap[gift] ?? 0) + 1;

        return hashMap[gift] > 1;
    }) ?? -1;

    return firstRepeated;
}


const firstRepeatedId = findFirstRepeated([2, 1, 3, 5, 3, 2])
console.log(firstRepeatedId) // 3

const firstRepeatedId2 = findFirstRepeated([1, 2, 3, 4])
console.log(firstRepeatedId2) // -1

const firstRepeatedId3 = findFirstRepeated([5, 1, 5, 1])
console.log(firstRepeatedId3) // 5