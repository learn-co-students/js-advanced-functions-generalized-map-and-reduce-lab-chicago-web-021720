function map(array, fun) {
    const rez = []
    for (const elm of array) {
        rez.push(fun(elm))
    }
    return rez
}

function reduce(array, fun, start=0) {
    start = (start ? start : array.pop())
    for (const elm of array) {
        start = fun(elm, start)
    }
    return start
}