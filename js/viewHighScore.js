var initialScore = JSON.parse(localStorage.getItem('user')); 

var initialsDiv = document.querySelector("#initials");
var scoreDiv = document.querySelector("#score");  

initialsDiv.textContent = initialScore.initial;
scoreDiv.textContent = initialScore.score;  