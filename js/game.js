// Define "Start Button"
var startButtonEl = document.querySelector('#startQuizButton'); 

//Define "start game page"
var startGameEl = document.querySelector('.startGamePage'); 

// Declare "countdown timer"
var countdown; 

// declare 'timeInterval'
var timeInterval;

// Declare the "timeEl"
var timeEl = document.getElementById('timer');
var mainEl = document.getElementById('main'); 

var timeRemaining = 11; 
var holdtime = 0; 
var incorrectAnswer = 10; 

//Funtion to start timer, hide start game page and show questions 
timeInterval = startButtonEl.addEventListener('click', function() { 

    if (holdtime === 0) {
        holdtime = setInterval(function () {
            timeRemaining--; 
            timeEl.textContent = timeRemaining + " seconds remaining!"; 
        
             if (!timeRemaining){
                clearInterval(holdtime); 
                gameOver();
                timeEl.textContent = 'Times Up!'
             } 
        }, 1000);
    } 
    //Hide the start screen
    startGameEl.style.display = 'none'; 
    //Show Question area and questions and start countdown timer 
    document.querySelector(".quiz").classList.remove("hide") 
    showQuestion(); 
}); 

var questionPosition = 0; 
var score = 0; 
var chosenAnswer; 
var quizDiv = document.querySelector('.quiz'); 

// questions list 
var questions = [
    { 
        question: "What color is an apple?", 
        chocies: [ "Red", "Orange", "Blue", "Purple"], 
        correctAnswer: "Red", 
    }, 
    {
        question: "What color is a banana?", 
        chocies: [ "Blue", "Yellow", "Red", "Orange"], 
        correctAnswer: "Yellow", 
    }, 
    {
        question: "What color is an orange?", 
        chocies: [ "Purple", "Blue", "Yellow", "Orange"], 
        correctAnswer: "Orange", 
    }
]
// Function to show next question 
function nextQuestion() {
    questionPosition++;
    
    if(questionPosition >= questions.length){
        gameOver(); 
    } else {
        showQuestion(); 
    }
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

//function to Compare Answers 
function compareAnswer(event) {

    chosenAnswer = questions[questionPosition].chocies
    console.log(chosenAnswer); 
    console.log("yes"); 

    if(chosenAnswer == questions[questionPosition].correctAnswer){
        score++; 
        console.log("yes"); 
    } 
}

var endGameDiv = document.querySelector('.endGame'); 

function gameOver() {
   //Hide the question area 
   document.querySelector('.quiz').classList.add("hide")

   endGameDiv.innerHTML = ""; 
   timeEl.innerHTML = "";

   var createH1 = document.createElement("h1"); 
   createH1.setAttribute("id", "createH1"); 
   createH1.textContent = "Quiz is over!"

   endGameDiv.appendChild(createH1); 
   //Show the record high score 
}