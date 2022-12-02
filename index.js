const reverseString = (str) => {
  return str.split("").reverse().join("");
};
reverseString("");

function isPalindrome(word) {
  // Write your algorithm here
  if (word === reverseString(word)) {
    return true;
  } else {
    return false;
  }
}



/* 
  Add your pseudocode here
  if (word === reversed word)
  then return true
  else return false
*/

/*
  Add written explanation of your solution here

  Create a function isPalindrome that accepts an argument that accepts a string
  Write an if statment that returns true if palindrome returns true and false if palindrome returns false.
  
  In order to reverse a string, we have to turn it into an array. 
  To do so, write a function to reverse string:
 
  -Create a variable reverseString that accepts a string as an argument // => ("hello")
  -Split string with .split() in turn turns the string into an array // => ["h", "e", "l", "l", "o"]
  -Reverse array with .reverse() // => ["o", "l", "l", "e", "h"]
  -Use the .join() method to join all elements of the array including ("") to convert it back to a string // => "olleh"
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("=>", isPalindrome("cow"));
}

module.exports = isPalindrome;
