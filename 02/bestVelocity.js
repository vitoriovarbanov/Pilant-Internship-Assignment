

function calculateBestSprint(arr){
    if(arr.length<3){
        throw new Error(`test`)
    }
    let bestSeqArr;
    let currBestSeqSum = 0;
    arr.forEach((el,index) => {
        let secondWeekSprint = arr[index + 1]
        let thirdWeekSprint = arr[index + 2]
        if(!secondWeekSprint || !thirdWeekSprint){
            return;
        }
        if(el + secondWeekSprint + thirdWeekSprint>=currBestSeqSum){
            currBestSeqSum = el + secondWeekSprint + thirdWeekSprint
            bestSeqArr = [];
            bestSeqArr.push(el,secondWeekSprint,thirdWeekSprint)
        }
    });

    console.log(bestSeqArr)
    console.log(currBestSeqSum)
}

calculateBestSprint([76,80,81,77,83,78,80])