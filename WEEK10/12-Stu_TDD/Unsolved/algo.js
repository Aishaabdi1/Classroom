function Algo() {}

Algo.prototype.reverse = function(str) {};
const algorithm = new Algo ();
const result = algorithm.reverse('hello');

expect(result).toBe('olleh')

Algo.prototype.isPalindrome = function(str) {};
const algorithm = new Algo ();
const result = algorithm.isPalindrome('racecar');

expect(result).toBe(true);




Algo.prototype.capitalize = function(str) {};

module.exports = Algo;
