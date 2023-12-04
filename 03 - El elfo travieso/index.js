const findNaughtyStep = (original, modified) => {
    const longestWord  = original.length >= modified.length ? original : modified;
    const shortestWord  = original.length >= modified.length ? modified : original;

    const naughtyStep = [...longestWord].find((letter, index) =>  letter !== shortestWord[index]);

    return naughtyStep ?? ''
}


console.log(findNaughtyStep('abcd', 'abcde'))// 'e'

console.log(findNaughtyStep('stepfor', 'stepor'))// 'f'

console.log(findNaughtyStep('abcde', 'abcde')) // ''