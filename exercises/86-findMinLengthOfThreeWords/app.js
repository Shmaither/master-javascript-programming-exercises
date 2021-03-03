function findMinLengthOfThreeWords(w1, w2, w3) {
    let arrLengths = [w1.length, w2.length, w3.length];
    arrLengths.sort((a, b) => a - b);
    return arrLengths[0];
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1