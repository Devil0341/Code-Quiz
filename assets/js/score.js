//get local storage from current local storage and save to local storage here

//global variables
var initialsInput = document.getElementById('initials');
var para = document.querySelector('p');
var submit = document.getElementById('submit');
var scoredTime = document.getElementById('results')
var userInitials = document.getElementById('initials');

var userScore = localStorage.getItem('score');
// console.log(userInitials, userScore);
scoredTime.textContent = userScore;

var highScores;

//read high scores and display make a function
function displayHighscore() {

    for (var i = 0; i < highScores.length; i++) {
        

    }

}

submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (initialsInput.value === '') {
        para.textContent = 'You need to type in your initials';
        return;
    }

    var userInitials = initialsInput.value;

    console.log(scoredTime, userScore);

    //read local storage high scores
    highScores = JSON.parse(localStorage.getItem('highScores'));

    //push new highscore and set local storage
    highScores.push({ initials: userInitials, score: userScore })
    localStorage.setItem('highScores', JSON.stringify(highScores))

    //call function line 14
    displayHighscore()
});
