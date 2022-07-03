var initialScore = JSON.parse(localStorage.getItem('user')); 

var initialScoreDiv = document.querySelector("#initialScore");

initialScoreDiv.textContent = initialScore.initial + " : " + initialScore.score; 