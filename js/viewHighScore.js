var initialScore = JSON.parse(localStorage.getItem('user')); 

var initialScoreDiv = document.querySelector("#initialScore");

function allStorage(){
    
    var values = [], 
        keys = Object.keys(localStorage), 
        i = keys.length; 

    while ( i-- ){
        values.push(localStorage.getItem(keys[i])); 
    }

    return values; 
}

initialScoreDiv.textContent = initialScore.initial + " : " + initialScore.score; 
