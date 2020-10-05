module.exports = function reverse (n) {
    // let res = 0
    // if (n < 0) n = -n
    // while (n > 0) {
    //     res = res * 10 + n % 10
    //     n = parseInt(n / 10)
    // }
    // return res
    return parseInt([...String(n)].reverse().join(''))
}

