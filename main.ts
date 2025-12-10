/**
 * @author Makro Skorupan
 * @version 1.0.0
 * @date 2025-12-07
 * @fileoverview Program searches for a word in a sentence
 */

//VARIABLES
let sentence: string = "";
let word: string = "";

//PROCESS & OUTPUT
sentence = prompt("Please enter a sentence:") ?? "";
word = prompt("Please enter a word to search:") ?? "";

if (sentence.includes(word)) {
  console.log(
    "Hooray, the word " + word + " was found in the sentence: " + sentence,
  );
} else {
  console.log(
    "Sorry, the word " + word + " was not found in the sentence: " + sentence,
  );
}

console.log("Done.");
