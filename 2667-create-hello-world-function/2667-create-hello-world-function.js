/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function() {
        return "Hello World";
    }
};

createHelloWorld();

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */