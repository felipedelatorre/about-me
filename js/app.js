'use strict'

function answerValidation(answer) {
    if ((answer === 'YES') || (answer === 'Y')) {
        answer = 'Yes';
    } else if ((answer === 'NO') || (answer === 'N')) {
        answer = 'No';
    } else {
        alert('this is not a valid answer');
    }
    return answer;
}


function takeQuiz() {
    var answer1 = prompt('Did I graduate from OSU-Corvallis? \nYes(y) or No(n)?').toUpperCase();
    answer1 = answerValidation(answer1);
    console.log('Your answer was: ' + answer1 + '\nThe correct answer was No');

    var answer2 = prompt('Bend is located in the south of Oregon? \nYes(y) or No(n)?').toUpperCase();
    answer2 = answerValidation(answer2);
    console.log('Your answer was: ' + answer2 + '\nThe correct answer was No');

    var answer3 = prompt('Do I like to spend most my time explore the outdoors? \nYes(y) or No(n)?').toUpperCase();
    answer3 = answerValidation(answer3);
    console.log('Your answer was: ' + answer3 + '\nThe correct answer was No');

    var answer4 = prompt('Is Pho Viet one of my favorite restaurants? \nYes(y) or No(n)?').toUpperCase();
    answer4 = answerValidation(answer4);
    console.log('Your answer was: ' + answer4 + '\nThe correct answer was Yes');

    var answer5 = prompt('Do I plan to travel the world? \nYes(y) or No(n)?').toUpperCase();
    answer5 = answerValidation(answer5);
    console.log('Your answer was: ' + answer5 + '\nThe correct answer was Yes');
}
