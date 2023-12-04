const decode = (message) => {
    const ranges = [...message].reduce((ranges, character, index) => {
        if (character === "(") {
            ranges.push([index])
        }
        else if (character === ")") {
            const notCompletedRangeIndex = ranges.findLastIndex(r => r.length === 1);
            ranges[notCompletedRangeIndex].push(index)
        }

        return ranges;
    }, []);

    const decodedMessage = ranges
        .reverse()
        .reduce((updateMessage, range) => {
            const leftMessage = updateMessage.substring(0, range[0]);
            const rightMessage = updateMessage.substring(range[1] + 1);
            const parenthesesMessage = updateMessage.substring(range[0] + 1, range[1])
            const reverseParenthesesMessage = [...parenthesesMessage].reverse().join('');

            return `${leftMessage}(${reverseParenthesesMessage})${rightMessage}`
        }, message)
        ?.replaceAll('(', '')
        ?.replaceAll(')', '');

    return decodedMessage;
}


console.log(decode('hola (odnum)')) // hola mundo

console.log(decode('(olleh) (dlrow)!')) // hello world!

console.log(decode('sa(u(cla)atn)s')) // santaclaus
