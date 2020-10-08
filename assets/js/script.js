mainContentEl = document.querySelector(".main-content");
//Find the timer
var timerEl = document.querySelector("#timer");
console.log(timerEl);
//Global Timer Variable
var timer = 10;

//Genetate the introduction text
function generateIntro(){
    //Make Div Wrapper 
    var divWrapperEl = document.createElement("div");
    divWrapperEl.className = "text-wrapper";
    //console.log(divWrapperEl);
    //Make <h2>
    var h2El = document.createElement("h2");
    h2El.className = "intro-text-h2";
    h2El.textContent = "Coding Quiz Challenge!";
    // add <h2>
    divWrapperEl.appendChild(h2El);
    //Make <p>
    var pEl = document.createElement("p");
    pEl.className = "intro-text-p";
    pEl.innerText = "Try to answer all the questions on time and correctly! Answering wrong will deduct time!";
    //Add <p>
    divWrapperEl.appendChild(pEl);
    //Create button
    var startButtonEl = document.createElement("button");
    startButtonEl.innerText = "Start";
    startButtonEl.id = "start";
    //Add Button
    divWrapperEl.appendChild(startButtonEl);
    //Add div onto page
    mainContentEl.appendChild(divWrapperEl);
}

//Remove the intro
function removeIntro(){
    var intro = document.querySelector("div.text-wrapper");
    //console.log(intro);
    intro.remove();
    //console.log("Intro Removed!");
}

//generate the quiz slide
function generateQuiz() {
    var divWrapperEl = document.createElement("div");
    //Make <h2>
    var h2El = document.createElement("h2");
    h2El.className = "quiz-header";
    h2El.textContent = "This is a sample question. I hope it works!";
    //add to div
    divWrapperEl.appendChild(h2El);
    for(var i = 1; i <= 4; i++){
        var optionEl = generateOption(i);
        divWrapperEl.appendChild(optionEl);
    }

    //add to main
    mainContentEl.appendChild(divWrapperEl);
}
//Generate an option for the quiz
function generateOption(theOptionumber){
    var optionEl = document.createElement("button");
    optionEl.innerText = "Option " + theOptionumber;
    optionEl.className = "quiz-button";
    return optionEl;
}

//Decrement the timer every second
var countdownTimer = setInterval(function(){
    if(timer > 0){
        timer --;
        console.log(timer);
        timerEl.textContent  = "Time: " + timer;
    }else{
        clearInterval(countdownTimer)
    }
}, 1000);

generateQuiz();