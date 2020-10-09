mainContentEl = document.querySelector(".main-content");
//Find the timer
var timerEl = document.querySelector("#timer");
console.log(timerEl);
//Global Timer Variable
var timer = 100;
//Global sore variable
var score = 0; 
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
        score += 10;
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 2){
        console.log("You have clicked option 2!");
        score += 15;
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 3){
        console.log("You have clicked option 3!");
        score += 5;
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 4){
        console.log("You have clicked option 4!");
        score += 20;
        generateNextQuestion()
    }
}
//Make an array of quiz objects and return it
function generateQuizQuestions(){
    var questionArray = [5];
    // for(var i = 0; i < questionArray.length; i++){

    // }
    var questionOne = {
        questionNumber:1,
        question:"What is hello world?",
        option1:"A spotlight",
        option2:"The first program you write",
        option3:"Generic greeting",
        option4:"Some words i dont know",
        correctOption: 1
    };

    var questionTwo = {
        questionNumber:2,
        question:"What time is it",
        option1:"Past midnight",
        option2:"around 3:40",
        option3:"lunch time",
        option4:"dinner time",
        correctOption: 1
    };

}
//Call methid to clear intro and start quiz
function quizStartHandler(){
    document.querySelector(".text-wrapper").remove();
    startTimer();
    generateQuiz();
}
//When a button is clicked this will reset it to the next question
function generateNextQuestion(){
    updateScore();
    document.querySelector(".text-wrapper").remove();
    generateQuiz();
}
function updateScore(){
    var scoreEl = document.querySelector("#score");
    scoreEl.textContent = "Score: " + score;
}
mainContentEl.addEventListener("click", optionSelectorHandler);
generateQuizQuestions();
generateIntro();