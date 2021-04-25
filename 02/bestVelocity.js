function calculateBestSprint(arr) {
    if (arr.length < 3) {
        throw new Error(`Sequence is too short!`)
    }
    let bestSeqArr;
    let currBestSeqSum = 0;
    arr.forEach((firstWeekSprint, index) => {
        let secondWeekSprint = arr[index + 1]
        let thirdWeekSprint = arr[index + 2]
        if (!secondWeekSprint || !thirdWeekSprint) {
            return;
        }
        if (firstWeekSprint + secondWeekSprint + thirdWeekSprint >= currBestSeqSum) {
            currBestSeqSum = firstWeekSprint + secondWeekSprint + thirdWeekSprint
            bestSeqArr = [];
            bestSeqArr.push(firstWeekSprint, secondWeekSprint, thirdWeekSprint)
        }
    });

    return `{ sequence: [${bestSeqArr}], sum: ${currBestSeqSum} }`
}

console.log(calculateBestSprint([11, 14, 10, 12]))
console.log(calculateBestSprint([12, 9, 1, 5, 11, 5]))
console.log(calculateBestSprint([76, 80, 81, 77, 83, 78, 80]))
console.log(calculateBestSprint([76, 80]))