/**
 * 路由判断
 * @param {*} referPath 当前路径
 * @param {*} pathnames 要判断的路径数组
 */
export function equalHistoryPath(referPath, pathnames) {
    let paths = []
    if (typeof pathnames === 'string') {
        paths = pathnames.split(',')
    } else {
        pathnames.forEach(path => {
            paths.push(path)
        })
    }

    return paths.findIndex(pathname => {
        return referPath === pathname
    }) >= 0
}
