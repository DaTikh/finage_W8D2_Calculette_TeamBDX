//---- MAXIMUM ---------------------------------------

let myMax = function(array) {
  let i = 0;
  let max = array[0];
    while (i < array.length) {
      if (array[i] > max) {
        max = array[i];
      }
      i++;
    }
    return max;
}

//---- VOYELLES ----------------------------------------

const VOWELS = ["a", "e", "i", "o", "u", "y"]

let vowelCount = function(string) {
  let count = 0;
    for (char of string) {
      if (VOWELS.includes(char)) {
        count++;
      }
    }
  return count;
}

//---- INVERSION --------------------------------------

let reverse = function(string) {
  let result = string.split("").reverse().join("");
return result;
}

//---- VARIABLES --------------------------------------

let phrase = "Ceci est un test !";
let tableau = [3, 1, 42, 276, 32, 89];


//---- THE END :) -------------------------------------
