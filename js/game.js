// Declare "countdown timer"
//* Countdown timer needs to be global since more than one function will call it

// declare 'timeinteral'

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
function nextQuestion() {
    questionPosition ++;  
    showQuestion(); 
}

function showQuestion(){
    document.getElementById("questionTitle").textContent = questions[questionPosition].question 
    document.getElementById("answer0").textContent = questions[questionPosition].chocies[0]
    document.getElementById("answer1").textContent = questions[questionPosition].chocies[1]
    document.getElementById("answer2").textContent = questions[questionPosition].chocies[2]
    document.getElementById("answer3").textContent = questions[questionPosition].chocies[3]

    document.getElementById("answer0").addEventListener("click", nextQuestion)
}

// Declare the "timeEl"
var timeEL = document.querySelector('#timer');
var startbuttonEl = document.querySelector('#startButton'); 

var startGameEl = document.querySelector('.startGame'); 

//Fucntion "startGame"
startbuttonEl.addEventListener('click', function() {
    //Hide the start screen
    startGameEl.style.display = 'none'; 

    document.querySelector(".quiz").classList.remove("hide")

    showQuestion(); 

    

})

    //Set the question position to 0 

    // Set the starting value of 'countdown'

    // Start the timer 'startTimer'
        //If 'countdown === 0 then 'endGame()
        
// Function 'endGame'       

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