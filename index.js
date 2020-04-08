const map = (testArray, callBack) => {
    let newArray = [];
    for (let i=0; i < testArray.length; i++) {
        let newElm = callBack(testArray[i])
        newArray.push(newElm)
    }
    return newArray
}

const reduce = (testArray, callBack, startPoint) => {
    //if there is a starting point, let the result qeual that
    //if no starting point, make the starting point array[0] and itersate starting at array[1]

    // sourceArray = [1,2,3]
    // expect(reduce(sourceArray, function(e, memo){return e + memo})).to.equal(6)
    let result = startPoint || testArray[0]

    for (let i = startPoint? 0 : 1; i < testArray.length; i++) {
        result = callBack(testArray[i], result)
    }
    return result
}