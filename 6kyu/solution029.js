// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

// My Solution
function toCamelCase(str){
	let arr = str.split('')
	for(i = 0; i < arr.length; i++) {
  	if(arr[i] == '_' || arr[i] == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('')
}

console.log(toCamelCase("The_stealth_Warrior"))