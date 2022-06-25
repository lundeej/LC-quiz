
//Declare question 
var questionPosition = 0; 
var questions = [
    { 
        question: "What is the color", 
        chocies: [ "answerA", "answerB", "answerC", "answerD"], 
        correctAnswer: "answerA", 
    }, 
    {
        question: "question2", 
        chocies: [ "answerE", "answerF", "answerG", "answerH"], 
        correctAnswer: "answerF", 
    }, 
    {
        question: "question3", 
        chocies: [ "answerI", "answerJ", "answerK", "answerL"], 
        correctAnswer: "answerL", 
    }
]
// Function to show next question 
function nextQuestion() {
    questionPosition ++;  
    showQuestion(); 
}

// Function to Show the Questions
function showQuestion(){
    document.getElementById("questionTitle").textContent = questions[questionPosition].question 
    document.getElementById("answer0").textContent = questions[questionPosition].chocies[0]
    document.getElementById("answer1").textContent = questions[questionPosition].chocies[1]
    document.getElementById("answer2").textContent = questions[questionPosition].chocies[2]
    document.getElementById("answer3").textContent = questions[questionPosition].chocies[3]
    
    // Go to next question 
    document.getElementById('answer0').addEventListener("click", nextQuestion)
    document.getElementById('answer1').addEventListener("click", nextQuestion)
    document.getElementById('answer2').addEventListener("click", nextQuestion)
    document.getElementById('answer3').addEventListener("click", nextQuestion)

}

// Define "Start Button"
var startButtonEl = document.querySelector('#startQuizButton'); 

//Define "start game page"
var startGameEl = document.querySelector('.startGamePage'); 

//Fucntion "startGame"
startButtonEl.addEventListener('click', function() {
    //Hide the start screen
    startGameEl.style.display = 'none'; 
    //Show Question area and questions 
    document.querySelector(".quiz").classList.remove("hide")
    showQuestion(); 
})

// Declare "countdown timer"

// declare 'timeInterval'
var timeInterval;

// Declare the "timeEl"
var timeEl = document.getElementById('timer');
var mainEl = document.getElementById('main'); 

var timerId = setInterval(countdown, 1000); 

var timeRemaining = 10; 

function countdown() {
    if( !timeRemaining ){
        clearInterval(timerId); 
        gameOver(); 
    }   else {
        timeEl.textContent = timeRemaining + ' seconds remaining'; 
        timeRemaining--; 
    }
}

function gameOver() {
   timeEl.textContent = 'Game Over'
}

        //If 'countdown === 0 then 'endGame()
        
    // Function 'endGame'       
    // function endGame () 

        //Hide the question area 

        //Show the record high score 

    // Fucntion 'answerQuestion'
        //Check if the selected answe is correct

            //If the answer is wrong 

                //then we need to subtract from 'countdown'

        //Increse the question position by 1 

        // If I've passed the last question 
            //Then 'endGame'

        // Else 
            //Display the currect question 
            //displayCurrentQuestion();

    //Function 'displayCurrentQuestion'

    // Function 'recordTheHighScore'