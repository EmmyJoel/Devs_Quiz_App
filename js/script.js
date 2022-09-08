// getting all required elements
const startButton= document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".quit");
const continueButton = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const nextButton = quizBox.querySelector(".next-btn");

// start button clicked
function infoActive() {
    infoBox.classList.add("active")
}


// Exit button clicked
function infoRemove() {
    infoBox.classList.remove("active");
}


// Continue button clicked
function quizActive() {
    quizBox.classList.add("active")
    infoRemove();
    showQuestions(0);
    counter(1);
}

let questionCount = 0;
let currentCount = 1;


// Next button clicked
function next() {
    if(questionCount < questions.length -1 ){
        questionCount++;
        currentCount++;
        showQuestions(questionCount);
        counter(currentCount);
    }else{
        console.log("Questions Complete");
    }
}

// getting questions and options form array
function showQuestions(index) {
    const questionText = document.querySelector(".q-text");
    const optionsList = document.querySelector(".option-list");
    let questionTag = '<span>' + questions[index].number + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>' 
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>' 
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>' 
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questionText.innerHTML = questionTag;
    optionsList.innerHTML = optionTag;
    
    const option = optionsList.querySelector('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[questionCount].answer;
    console.log(correctAns);
}


function counter(index) {
    const questionCounter = document.querySelector('.total-q');
let questionNumber = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
questionCounter.innerHTML = questionNumber;
}