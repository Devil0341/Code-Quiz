//get local storage from current local storage and save to local storage here

//global variables
var initialsInput = document.getElementById('initials');
var para = document.querySelector('p');
var submit = document.getElementById('submit');
var scoredTime = document.getElementById('results')
var userInitials = document.getElementById('initials');





submit.addEventListener('click', function (event) {
    event.preventDefault();

    if (initialsInput.value === '') {
        para.textContent = 'You need to type in your initials';
        return;
    }

    var userInitials = initialsInput.value;
    var userScore = localStorage.getItem('score');
    // console.log(userInitials, userScore);
    scoredTime.textContent = userScore;
    console.log(scoredTime, userScore);
});
