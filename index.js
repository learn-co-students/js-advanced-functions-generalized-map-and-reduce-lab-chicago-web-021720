
const map = (arr, fn) => {
    let newArr = []
    for(const item of arr) {
        newArr.push(fn(item))
    }
    return newArr
}

const reduce = (arr, fn, start) => {
    let memo = arr[0]
    if (start) {
        memo += start
    }
    for(let i = 1; i < arr.length; i++) {
        memo = fn(arr[i], memo)
    }
    return memo
}