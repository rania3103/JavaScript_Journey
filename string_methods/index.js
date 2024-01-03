let username = " rania3103 "
//print 1st character
console.log(username.charAt(1));
// index of a character
console.log(username.indexOf("a"));
// last index of a character
console.log(username.lastIndexOf("a"));
// length
console.log(username.length);
// remove white space
console.log(username.trim());
// to uppercase
console.log(username.toUpperCase());
// to lowercase
console.log(username.toLowerCase());
// repetition
console.log(username.repeat(3));
// startsWith (check)
let message = username.startsWith("w") ? "it starts with w":"no it doesn't start with w";
console.log(message);
// endsWith (check)
let message2 = username.endsWith("w") ? "it ends with w":"no it doesn't end with w";
console.log(message2);
// includes
let message3 = username.includes("w") ? "it includes w":"no it doesn't include w";
console.log(message3);
// replaceAll
let phonenumber = "99-999-99";
phonenumber = phonenumber.replaceAll("-", ".");
console.log(phonenumber);
/// add characters at the beginning
let number = "99-999-99";
number = number.padStart(20, "8");//(length, char)
console.log(number);
/// add characters at the end
let number2 = "99-999-99";
number2 = number2.padEnd(15, "+");//(length, char)
console.log(number2);