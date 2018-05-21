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

//-----------------------------------------------------

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

//-----------------------------------------------------

let reverse = function(string) {
  let result = string.split("").reverse().join("");
return result;
}

//-----------------------------------------------------

// let phrase = "Ceci est un test !"
// let tableau = [3, 1, 42, 32, 89]
//
// alert( vowelCount(phrase) );
// alert( myMax(tableau) );
// alert( reverse(phrase) );
