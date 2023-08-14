//functions to reverse a string in diffarent methodes
//using reduce()and split() method
const str = "Geeks for Geeks";
const reversedString = str.split("").reduce((acc, char) => char + acc, "");
console.log(reversedString);
 

//using split(),reverse() and join()
function ReverseString(str) {
	return str.split('').reverse()
}
// Function call
console.log(ReverseString("Geeks for Geeks"))


// using spread operator
const str = "Geeks for Geeks";
const reversedStr = [...str].reverse().join("");
console.log(reversedStr);


// using array.form() and reverse()
const str = "Geeks for Geeks";
const reversedStr = Array.from(str).reverse().join("");
console.log(reversedStr);


// using spread operator and reduce()
function ReverseString(str) {

	// Returning reverse string
	return [...str].reduce((x, y) => y.concat(x));
}

console.log(ReverseString("Geeks for Geeks"))


// using for loop
const str = "Geeks for Geeks";
let reversedStr = "";
for (let i = str.length - 1; i >= 0; i--) {
	reversedStr += str[i];
}
console.log(reversedStr);


// using substring()
const str = "Geeks for Geeks";
let reversedStr = "";
let i = str.length - 1;
while (i >= 0) {
	reversedStr += str.substring(i, i + 1);
	i--;
}
console.log(reversedStr);


// using recursion
function reverseString(str) {
	if (str === "") {
		return "";
	} else {
		return reverseString(str.substr(1)) + str.charAt(0);
	}
}
const reversed = reverseString("Geeks for Geeks");
console.log(reversed);

