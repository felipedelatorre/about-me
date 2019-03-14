'use strict'

function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(9);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }
var score = 0;

alert('Wecome to the Guessing Game. This is the 1st part of a 3 part game. Please only answer with Yes or No');

// GAME 1

var questions = ['Is my name Felipe?', 'Do I have a brother and a sister?', 'Do I like the cold?', 'Is my favorite food mexican?', 'Did I go to school at COCC?']
var answers = [];
var key = ['Yes', 'No', 'No', 'Yes', 'Yes'];

for (var i = 0; i < questions.length; i++) {
  var answersPreValidation = (prompt(questions[i]).toUpperCase());
  if (answersPreValidation === 'YES' || answersPreValidation === 'Y') {
    answersPreValidation = 'Yes';
    answers.push(answersPreValidation)
  } else if (answersPreValidation === 'NO' || answersPreValidation === 'N') {
    answersPreValidation = 'No';
    answers.push(answersPreValidation)
  } else {
      alert('This is not a valid input')
      i -= 1;
  }
}

// Calculate current score

for (var i = 0; i < questions.length; i++) {
    if (answers[i] === key[i]) {
        score++;
    }
}
alert('Your current score is ' + score);

// GAME 2

alert('Welcome to the 2nd part of the game. You only have 4 tries. Guess what number I am thinking of');

var randomNumber = getRandomInt();
var randomStringNumber = randomNumber.toString();
var tries = 4; 
for (var i = 0; i < 4; i++) {
    var guessedNumber = prompt('Guess the number');
    if (guessedNumber === randomStringNumber) {
        alert('Nice!!!');
        score++;
        break;
    } else {
        if (guessedNumber > randomNumber) {
            alert('Your number is too high');
        } else {
            alert('Your number is too low');
        }
        tries--;
        alert('You have ' + tries + ' try(ies) left');
    }
}

alert('Your current score is ' + score);

// Game 3
// alert('Congrats you made it to the last part of the game. For your last task you will have to guess the make of car that I have owned. You have 6 tries. You only have to guess one.')

// var carOwned = ['HONDA', 'DODGE']
// tries = 6;

// for (var i = 0; i < 6; i++) {
//     var guessedCar = prompt('Guess the car make').toUpperCase;
//     if (guessedCar === carOwned.forEach(element){return element;}); {

//     }
// }


console.log(score);
console.log(questions);
console.log(answers);
console.log(key);