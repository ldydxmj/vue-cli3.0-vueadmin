import QueryString from './QueryString'
/**
 * hisotry的push方法重写
 * @param {object} history
 * @param {object} options
 * @param {object} options.path  路径
 * @param {object} options.query 参数对象
 */
export function historyPush(history, options) {
    if (options.query && typeof options.query === 'string') {
        options.query = QueryString.parse(options.query)
    }
    if (typeof options.query === 'object') {
        options.query._k = randomWord()
    }
    history.push(options)
}

/**
 * history的replace方法重写
 * @param {*} history
 * @param {*} options
 */

export function historyReplace(history, options) {
    if (options.query && typeof options.query === 'string') {
        options.query = QueryString.parse(options.query)
    }

    history.replace(options)
}

export function randomWord(randomFlag, min, max) {
    if (!randomFlag) {
        randomFlag = true
    }
    if (!min) {
        min = 4
    }
    if (!max) {
        max = 4
    }
    var str = ''
    var range = min
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    // 随机产生
    if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min
    }
    for (var i = 0; i < range; i++) {
        var pos = Math.round(Math.random() * (arr.length - 1))
        str += arr[pos]
    }
    return str
}
