// Add your functions here
function map(sourceArr, callback) {
    const newArr = [];
    for(const e of sourceArr) {
        newArr.push(callback(e));
    }
    return newArr;
}

function reduce(sourceArr, callback, acc) {
    if (acc === undefined) {
        acc = sourceArr[0];
        sourceArr = sourceArr.slice(1);
    }
    for (const e of sourceArr) {
        acc = callback(e, acc);
    }
    return acc;  
}