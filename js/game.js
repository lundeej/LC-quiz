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

var timeRemaining = 75; 
var holdtime ; 
var incorrectAnswer = 10; 

//Funtion to start timer, hide start game page and show questions 
timeInterval = startButtonEl.addEventListener('click', function() { 
    
    timeEl.textContent = timeRemaining + " seconds remaining!"; 

    holdtime = setInterval(function () {
        timeRemaining--; 
        timeEl.textContent = timeRemaining + " seconds remaining!"; 
            
            if (!timeRemaining){
                clearInterval(holdtime); 
                gameOver();
                timeEl.textContent = 'Times Up!'
            } 
        }, 1000);
    
    //Hide the start screen
    startGameEl.style.display = 'none'; 
    //Show Question area and questions and start countdown timer 
    document.querySelector(".quiz").classList.remove("hide") 
    
    showQuestion(); 
}); 

var questionPosition = 0; 
var score = 0; 
var quizDiv = document.querySelector('.quiz'); 
var correctAnswerDiv = document.querySelector("#correctAnswer"); 

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
        question: "What color is a watermelon?", 
        chocies: [ "Blue", "Green", "Red", "Orange"], 
        correctAnswer: "Green", 
    }, 
    {
        question: "What color is an orange?", 
        chocies: [ "Purple", "Blue", "Yellow", "Orange"], 
        correctAnswer: "Orange", 
    }, 
    {
        question: "What color is a pickle?", 
        chocies: [ "Purple", "Blue", "Green", "Orange"], 
        correctAnswer: "Green", 
    }
]

// Function to show next question 
function nextQuestion() {
    
    if(this.innerHTML !== questions[questionPosition].correctAnswer) {
        
        correctAnswerDiv.textContent = "The correct answer is " + questions[questionPosition].correctAnswer + "."; 
        timeRemaining = timeRemaining - incorrectAnswer;   
    } 

    questionPosition++;
    if(questionPosition >= questions.length){
        clearInterval(holdtime); 
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

var endGameDiv = document.querySelector('.endGame'); 

function gameOver() {
   //Hide the question area 
   document.querySelector('.quiz').classList.add("hide")
   document.querySelector('.endGame').classList.remove("hide")
   
   timeEl.innerHTML = "";

   //Show the record high score 
   var highScoreEl = document.querySelector("#highScore"); 
   highScoreEl.innerHTML = "Your score is " + timeRemaining; 
}

function returnText(){
    
    var initialInput = document.getElementById("initials").value; 
    
    localStorage.setItem("initial", initialInput); 
    
}