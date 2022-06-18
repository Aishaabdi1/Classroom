const Algo = require("./algo");
describe("Algo", () => 
describe("reverse", () => {
    const algorithm = new Algo();
    const result = algorithm.reverse('hello');
    expect(result).toBe('olleh')
})
)


const algo = new Algo();

const str1 = "Hello World!";
const reversed = algo.reverse(str1);

console.log(str1, "->", reversed);

const str2 = "racacar";
const isPalindrome = algo.isPalindrome(str2);

console.log(str2, "->", isPalindrome);

const str3 = "once upon a time there were three little pigs";
const capitalized = algo.capitalize(str3);

console.log(str3, "->", capitalized);
