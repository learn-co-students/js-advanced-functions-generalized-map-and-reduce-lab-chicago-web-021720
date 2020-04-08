const map = (array, callback) => {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}


const reduce = (array, callback, initialValue) => {

    // Start the "memo" at the initialValue if it's provided. Otherwise, use first item of input array.
    let memo = initialValue || array[0]

    // Start at either the first or second element of the array, depending.
    for (let i = initialValue ? 0 : 1; i < array.length; i++) {
        memo = callback(array[i], memo)
    }

    return memo
}
