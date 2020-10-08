mainContentEl = document.querySelector(".main-content");
//Find the timer
var timerEl = document.querySelector("#timer");
console.log(timerEl);
//Global Timer Variable
var timer = 100;
//Global sore variable

//place holder for generated start button

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
    //Make event handler
    startButtonEl.addEventListener("click", quizStartHandler);
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
    divWrapperEl.className="text-wrapper";
    //Make <h2>
    var h2El = document.createElement("h2");
    h2El.className = "quiz-header";
    h2El.textContent = "This is a sample question. I hope it works!" + timer;
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
    optionEl.setAttribute("data-button-id",theOptionumber);
    return optionEl;
}

//Decrement the timer every second
function startTimer(){
    var countdownTimer = setInterval(function(){
        if(timer > 0){
            timer --;
            timerEl.textContent  = "Time: " + timer;
        }else{
            clearInterval(countdownTimer)
        }
    }, 1000);
}


//Check which button was clicked
function optionSelectorHandler(event){
    //console.log(event.target);
    //Check if and which buttons were clicked
    //Call method to check if right, andthen make another quiz
    if(event.target.getAttribute("data-button-id") == 1){
        console.log("You have clicked option 1!");
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 2){
        console.log("You have clicked option 2!");
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 3){
        console.log("You have clicked option 3!");
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 4){
        console.log("You have clicked option 4!");
        generateNextQuestion()
    }
}

//Call methid to clear intro and start quiz
function quizStartHandler(){
    document.querySelector(".text-wrapper").remove();
    startTimer();
    generateQuiz();
}
//When a button is clicked this will reset it to the next question
function generateNextQuestion(){
    document.querySelector(".text-wrapper").remove();
    generateQuiz();
}
mainContentEl.addEventListener("click", optionSelectorHandler);
generateIntro();