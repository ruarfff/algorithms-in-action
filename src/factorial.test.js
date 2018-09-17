const factorial = require('./factorial');

test('calculates factorials', () => {
    expect(factorial(5)).toEqual(120); 
    expect(factorial(20)).toEqual(2432902008176640000);  
});