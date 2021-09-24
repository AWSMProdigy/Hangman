const commonWords = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
var myTimer = document.querySelector("#theTimer");
var myWord = document.querySelector("#theWord");
var myResult = document.querySelector("#theResult");
var myButton = document.querySelector("#starto");
var displayedWord;
secondsLeft = 60;
var theWord;

function chooseWord(){
    theWord = commonWords[Math.floor(Math.random()*commonWords.length)];
    console.log(theWord);
    // for(var i = 0; i < theWord.length; i++){
    //     displayedWord[i] = "_";
    // }
    displayedWord = "_".repeat(theWord.length);
    myWord.textContent = displayedWord;
    setTime();
}

function loseGame(){
    console.log("Ur bad tho");
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      myTimer.textContent = secondsLeft + " seconds left.";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        loseGame();
      }
  
    }, 1000);
  }

function getKey(event){
    console.log(event.key)
    console.log(theWord.length)
    for(var i = 0; i < theWord.length; i++){
        if(theWord[i] === event.key){
            console.log("Hallo");
            displayedWord[i] = event.key;
        }
    }  
    myWord.textContent = displayedWord;
    if(displayedWord === theWord){
        myResult.textContent = "You win!";
    }
}


  document.addEventListener("keydown", getKey);
  myButton.addEventListener("click", chooseWord);
