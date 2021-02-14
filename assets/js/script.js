//pseudo code
//set up timer function to count down and to subtract -10seconds from every wrong answer
//start quiz button will start the timer and iterate through multiple choice questions
//multiple choice questions are buttons and 4 of them will be clicked on
//ask for intitials and record the results on the second page 


var startButton = document.querySelector('#start-button');
var multipleChoices;
var questions;
var timerEl = document.querySelector('#clock');
var count;
var timerCount = 5;//initialized timer--may need to initialize in the start gane function
var wrongChoice = true;
//starting score & starting time
totScore = 70;

//---start game function, starts timer, presents questions and mltpl choices button
// function startGame(){
//     timer()
// }

//---timer function will get called at the start game function
function timer(){
    count = setInterval(function() {
            timerCount--;
            timerEl.textContent = timerCount;
            //subtract 10 seconds from timer and push to totScore     
            // if (timerCount >=0 && wrongChoice) {
            //     timerCount = timerCount-10
            //    {
        //Test if time has ran out
        if (timerCount === 0) {
            //Clears the interval
            clearInterval(count);
            }
    }, 1000)
    return timerCount;

}
startButton.addEventListener("click", timer);