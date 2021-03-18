/**
 * make random id
 * @returns {string}
 * @constructor
 */
export const ID = () => '_' + Math.random().toString(36).substr(2, 36)

/**
 * group array by object key
 * @param xs
 * @param key
 * @returns {*}
 */
export const groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    ;(rv[x[key]] = rv[x[key]] || []).push(x)
    return rv
  }, {})
}
