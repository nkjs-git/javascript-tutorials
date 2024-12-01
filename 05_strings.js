const str1 = "This is BLR"

console.log(str1.length)

console.log(str1.toLowerCase())

console.log(str1.toUpperCase())

console.log(str1[3])
//console.log(str1[1]) this will not work

// to access charecter using negetive index
console.log(str1.at(-1))

//substring 
// A substring is a part or a portion of a string.
// string.substring(indexStart, indexEnd) is used to return a portion of the string.
// indexStart: the position of the first character you'd like to include.
// indexEnd: the position of the first character you'd like to ignore.
// the indexEnd argument is optional which means you can leave it out
console.log(str1.substring(0,5))

// Combine string
// The + operator is used to add 2 numbers
// The + operator is used to concatenate 2 strings
let prefix = "Mrs.";
let name1 = "Sam";
let string1 = prefix + " " + name1


// String interpolation

// A template string is a string created with the backtick character: `
// Template strings can span multiple lines
// Template strings support interpolation with the ${variableName} syntax

let language = "JavaScript";
console.log(`I am learning ${language}`)