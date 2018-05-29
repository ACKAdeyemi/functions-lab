// --------- TEST 1 ---------
function addTwo(num1,num2) {
  return num1 + num2;
}

// --------- TEST 2 ---------
function addThree(num1,num2,num3) {
  return num1 + num2 + num3;
}

// --------- TEST 3 ---------
function multiplyTwo(num1,num2) {
  return num1 * num2;
}

// --------- TEST 4 ---------
function reverseWord(str) {
    return str.split("").reverse().join("");
} //splits word into the individual characters. This uses every space as a break point to breakup the word.
//reverse is an array method
//join converts back to a string

// --------- TEST 5 ---------
function increaseByPercentage (per,inc) {
  return per * (1 + inc/100);
}

// --------- TEST 6 ---------
function celciusToFahrenheit (num) {
  return num * 9 / 5 + 32;
}

// --------- TEST 6 ---------
function fahrenheitToCelcius (num) {
  return (num - 32) * 5 / 9;
}

// --------- TEST 7 ---------
function stripVowels(string) {
  return string.replace(/[aeiou]/gi, "");
} //replace takes 2 arguments, what you want oreplace and what you watn to replace it with - this says take the content in square brackets, search g for globally, i for case insensitive and replace with empty string


// do not delete
runTests();
