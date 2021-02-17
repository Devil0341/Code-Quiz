//pseudo code
//set up timer function to count down and to subtract -10seconds from every wrong answer
//start quiz button will start the timer and iterate through multiple choice questions
//multiple choice questions are buttons and 4 of them will be clicked on
//ask for intitials and record the results on the second page 


var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#clock');
var count;
var timerCount = 70;//initialized timer--may need to initialize in the start gane function
var question;
var wrongChoice = false;
var rightChoice = false;
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
            d: 'numbers',
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
    rightChoice = false;//????????? not sure if i need this here
    currentQuestionIndex = 0;
    var currentQuestion = quizQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);
    timer();
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
startButton.addEventListener('click', startGame);

//---Function for the questions in quiz
function displayQuestion(question) {
    // console.log('display question:', questions);//to see what this object contains

    var questionElem = document.createElement('h3');//creates an empty h3 tag, stores in questionElem

    questionElem.textContent = question.question;//put text into my h3

    document.getElementById('question').append(questionElem);//stick my questionElem into #question

    var btnElA = document.createElement('button');//creates the button for multiple choice
    btnElA.textContent = quizQuestions[0].answers.a;//access the array object for iteration and write it to the html
    document.getElementById('answer-a').appendChild(btnElA);//access the assoc div and append the button with content

    var btnElB = document.createElement('button');
    btnElB.textContent = quizQuestions[0].answers.b;
    document.getElementById('answer-b').appendChild(btnElB);

    var btnElC = document.createElement('button');
    btnElC.textContent = quizQuestions[0].answers.c;
    document.getElementById('answer-c').appendChild(btnElC);

    var btnElD = document.createElement('button');
    btnElD.textContent = quizQuestions[0].answers.d;
    document.getElementById('answer-d').appendChild(btnElD);
    //---------------------------------
    //Instead of addEventListener I am using this when user clicks on any button execute checkAnswer which will run the rightAnswer or wrongAnswer function
    //????????????????????????????????????
    btnElA.setAttribute("onClick", "checkAnswer()");
    btnElB.setAttribute("onClick", "checkAnswer()");
    btnElC.setAttribute("onClick", "checkAnswer()");
    btnElD.setAttribute("onClick", "checkAnswer()");
};//end of displayQuestions block

// When a button is clicked checkAnswer function will run rightAnswer or wrongAnswer function if conditional is met
function checkAnswer(event) {
    if (quizQuestions[0].correctAnswer === quizQuestions.answers) {
        rightChoice = true;
        rightAnswer();
    }
    else {
        wrongChoice = true;
        wrongAnswer();

    }
    //functions to run if conditional is met
    //if user gets the multiple choice question correct, move to next question
    function rightAnswer() {
        if (rightChoice) {
            displayQuestion()
        }
    }
    //if user gets multiple choice question incorrect, subtract 10 from totScore and reduce time by 10 seconds and move user to next question
    function wrongAnswer() {
        if (wrongAnswer) {
            timerCount = timerCount - 10;
            var reduceScore = timerCount - 10;
            totScore = reduceScore
        }
        displayQuestion()
    }

}//end of check answer block

//---------Function for form submit initials and read results
//need local storage function
