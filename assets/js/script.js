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
var timerCount = 70;//initialized timer--may need to initialize in the start gane function
var wrongChoice = true;
//starting score & starting time
totScore = 70;


var currentQuestionIndex;
//questions to be asked --array-object
var quizQuestions = [
    {
        question: 'Commonly used data type Do Not include?',//key&value
        answers: {//key and the value is an object with key values in it.
            a: 'strings',
            b: 'Boolean',
            c: 'alerts',
            d:'numbers',
        },
        correctAnswer: 'c'//key&value
    },
    {
        question: 'The condition in an if/else statement is enclosed within?',
        answers: {
            a: 'curly brackets',
            b: 'quotes',
            c: 'parentheses',
            d: 'square brackets'
        },
        correctAnswer: 'c'

    },
    {
        question: 'Arrays in JavaScript can be used to store?',
        answers: {
            a: 'numbers and strings',
            b: 'others Arrays',
            c: 'boolean',
            d: 'all of the above'
        },
        correctAnswer: 'd'

    },
    {
        question: 'String values must be enclosed within --- when being assigned to variables?',
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parentheses',
        },
        correctAnswer: 'c'

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'alerts',
            d: 'console.log',
        },
        correctAnswer: 'd'

    },
]


//---start game function, starts timer, presents questions and mltpl choices button
function startGame() {
    startButton.disabled = true;
    timer();
    currentQuestionIndex = 0;
    var currentQuestion = quizQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);
}


//---timer function will get called at the start game function
function timer() {
    count = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        //Test if time has ran out
        if (timerCount === 0) {
            //Clears the interval
            clearInterval(count);
        }
    }, 1000)
    return timerCount;

}
startButton.addEventListener('click', timer);

//---Function for the questions in quiz
function displayQuestion(question) {
    console.log('display question:', question);//to see what this object contains

    // var questionElem = document.createElement('h3');//creates an empty h3 tag, stores in questionElem

    // questionElem.textContent = question.question;//put text into my h3

    // document.getElementById('question').append(questionElem);//stick my questionElem into #question
    
    document.getElementById('answer-a').textContent = quizQuestions[0].answers.a;
    document.getElementById('answer-b').textContent = quizQuestions[0].answers.b;
    document.getElementById('answer-c').textContent = quizQuestions[0].answers.c;
    document.getElementById('answer-d').textContent = quizQuestions[0].answers.d;
 

    //create form for intitals and results on second page??
    // var submitInitials = document.createElement('form');


    //score write to html may need to use location
    // var score 
    // score.textContent = totScore
    // document.getElementById('results').append(score);


    
    //create form for intitals and results on second page??
    // var submitInitials = document.createElement('form');

    //set attributes next

} //end of diplay block

// //add event listener and logic for buttons in questions and submit form---stuck here!!!
// olElem.addEventListener('click', function () {
//     if ((libutton1 = !correctAnswer)||
//         (libutton2 = !correctAnswer)||
//         (libutton3 = !correctAnswer)||
//         (libutton4 = !correctAnswer)) {
//         timerCount = timerCount - 10
//         totScore = totScore - 10
//     }
//     else displayQuestion(currentQuestion) //move to next question??
// }

//---------Function for form submit initials and read results

//need local storage function