// let name = prompt("Whats your name?");
// alert('Hello ' + name);

// let likeCats = confirm("Do you like cats?");
// if (likeCats) {
//     console.log("Hi cat lover");
// }
// else {
//  console.log("I wonder why not");
// }

 // Create an array of words
 let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
    ];
    // Pick a random word
    let word = words[Math.floor(Math.random() * words.length)];
    // Set up the answer array
    let answerArray = [];
    for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
    }
    let remainingLetters = word.length;
    // The game loop
    while (remainingLetters > 0) {
    // Show the player their progress
    alert(answerArray.join(" "));
    // Get a guess from the player
    let guess = prompt("Guess a letter, or click Cancel to stop playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    answerArray[j] = guess;
    remainingLetters--;
    }
    }
    }
   
    // The end of the game loop
    }
    // Show the answer and congratulate the player
    alert(answerArray.join(" "));
    alert("Good job! The answer was " + word);
