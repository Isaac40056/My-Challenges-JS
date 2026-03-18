/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    
    let current = 0;

    for(let i = 0; i < args.length; i++) {
        current++;
    }

    return current;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */