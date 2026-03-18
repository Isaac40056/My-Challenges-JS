/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        
        let uno = x;

        for(let i = functions.length -1; i >= 0; i--){
            
            uno = functions[i](uno);

        };
        
        return uno;
    };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */