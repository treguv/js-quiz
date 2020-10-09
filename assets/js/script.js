mainContentEl = document.querySelector(".main-content");
//Find the timer
var timerEl = document.querySelector("#timer");
console.log(timerEl);
//Global Timer Variable
var timer = 100;
//Global sore variable
var score = 0; 
//Global question number
var theQuestionNumber = 0;
//Generate the questions
var questionArray = generateQuizQuestions();
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
function generateQuiz(questionArray) {
    var divWrapperEl = document.createElement("div");
    divWrapperEl.className="text-wrapper";
    //Make <h2>
    var h2El = document.createElement("h2");
    h2El.className = "quiz-header";
    //Update the question header to be the propper question from array
    console.log(questionArray[theQuestionNumber]);
    h2El.textContent = questionArray[theQuestionNumber].question;
    //add to div
    divWrapperEl.appendChild(h2El);
    //fill in the question options
    var option1El = generateOption(questionArray[theQuestionNumber].option1,1);
    var option2El = generateOption(questionArray[theQuestionNumber].option2,2);
    var option3El = generateOption(questionArray[theQuestionNumber].option3,3);
    var option4El = generateOption(questionArray[theQuestionNumber].option4,4);
    //add to div
    divWrapperEl.appendChild(option1El);
    divWrapperEl.appendChild(option2El);
    divWrapperEl.appendChild(option3El);
    divWrapperEl.appendChild(option4El);
    //add to main
    mainContentEl.appendChild(divWrapperEl);
}
//Generate an option for the quiz
function generateOption(theOption,theId){
    var optionEl = document.createElement("button");
    optionEl.innerText =  theOption;
    optionEl.className = "quiz-button";
    optionEl.setAttribute("data-button-id",theId);
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
        if(questionArray[theQuestionNumber].correctOption == 1){
            score += 10;
        }else{
            timer -= 3;
        }
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 2){
        console.log("You have clicked option 2!");
        console.log(questionArray[theQuestionNumber].correctOption);
        if(questionArray[theQuestionNumber].correctOption == 2){
            score += 10;
        }else{
            timer -= 3;
        }
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 3){
        console.log("You have clicked option 3!");
        if(questionArray[theQuestionNumber].correctOption == 3){
            score += 10;
        }else{
            timer -= 3;
        }
        generateNextQuestion()
    }
    if(event.target.getAttribute("data-button-id") == 4){
        console.log("You have clicked option 4!");
        if(questionArray[theQuestionNumber].correctOption == 4){
            score += 10;
        }else{
            timer -= 3;
        }
        generateNextQuestion()
    }
}
//Make an array of quiz objects and return it
function generateQuizQuestions(){
    var questionArray = [3];
    var questionOne = {
        questionNumber:1,
        question:"What is hello world?",
        option1:"A spotlight",
        option2:"The first program you write",
        option3:"Generic greeting",
        option4:"Some words i dont know",
        correctOption: 2
    };

    var questionTwo = {
        questionNumber:2,
        question:"What time is it",
        option1:"Past midnight",
        option2:"around 3:40",
        option3:"lunch time",
        option4:"dinner time",
        correctOption: 1
    }

    var questionThree = {
        questionNumber:3,
        question:"How tired am i?",
        option1:"Im wide awake",
        option2:"Not very",
        option3:"I need a nap",
        option4:"Why am i still awake",
        correctOption: 4
    }

    var questionFour = {
        questionNumber:4,
        question:"How bad is this code",
        option1:"its flawless",
        option2:"its kinda bad",
        option3:"It might need some work",
        option4:"G A R B A G E",
        correctOption: 4
    }
    //Add question to array
    questionArray[0] = questionOne;
    questionArray[1] = questionTwo;
    questionArray[2] = questionThree;
    questionArray[3] = questionFour;
    
    //Return the array full of questions
    return questionArray;

}
//Call methid to clear intro and start quiz
function quizStartHandler(){
    //Get rid of intro
    document.querySelector(".text-wrapper").remove();
    //Start the timer
    startTimer();
    //generate the quiz
    generateQuiz(questionArray);
}
//When a button is clicked this will reset it to the next question
function generateNextQuestion(){
    updateScore();
    document.querySelector(".text-wrapper").remove();
    theQuestionNumber++;
    if(theQuestionNumber >= questionArray.length){
        generateEnding();
    }else{
        generateQuiz(questionArray);
    }
}

//Generate the ending to the quiz
function generateEnding(){

}
function updateScore(){
    var scoreEl = document.querySelector("#score");
    scoreEl.textContent = "Score: " + score;
}
mainContentEl.addEventListener("click", optionSelectorHandler);

generateIntro();