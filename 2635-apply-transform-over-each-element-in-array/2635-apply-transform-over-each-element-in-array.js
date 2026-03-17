/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let resultado = []

    for (let i = 0; i < arr.length; i++) {
        resultado[i] = fn(arr[i], i);
    };

    return resultado;
};

