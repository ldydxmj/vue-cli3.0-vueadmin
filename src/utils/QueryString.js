import queryString from 'query-string'
export default {
    stringify: (params) => {
        var randomWord = function (randomFlag, min, max) {
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

        // let result = queryString.stringify(params);
        let _k = randomWord(true, 4, 4)
        let params2 = {
            ...params
        }
        params2._k = _k
        let result = queryString.stringify(params2)
        return '?' + result
    },
    parse: (str) => {
        let result = queryString.parse(str)
        delete result._k
        return result
    }
}
