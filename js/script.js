// getting all required elements
const welcomeBox = document.querySelector(".welcome"),
        infoBox = document.querySelector(".info-box"),
        quizBox = document.querySelector(".quiz-box"),
        quizHeader = quizBox.querySelector(".quiz-box header"),
        quizTitle = quizBox.querySelector(".title"),
        optionsList = quizBox.querySelector(".option-list"),
        timeCountdown = quizBox.querySelector(".timer .time"),
        timeText = quizBox.querySelector(".timer .time-text"),
        timeLine = quizBox.querySelector(".time-line");

const option = optionsList.querySelectorAll(".option");


// start button clicked
function infoActive() {
    infoBox.classList.add("active");
    welcomeBox.classList.add("inactive");
}


// Exit button clicked
function infoRemove() {
    infoBox.classList.remove("active");
    welcomeBox.classList.remove("inactive");
}


// Continue button clicked
function quizActive() {
    quizBox.classList.add("active");
    infoBox.classList.remove("active");
    showQuestions(0);
    counter(1);
    startTimer(15);
    startTimerLine(0);
}

let questionCount = 0;
let currentCount = 1;
let timeCount;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const nextButton = quizBox.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");

// Next button clicked
function next() {
    if(questionCount < questions.length - 1){
        questionCount++;
        currentCount++;
        showQuestions(questionCount);
        counter(currentCount);
        clearInterval(timeCount);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
    }else {
        clearInterval(timeCount);
        clearInterval(counterLine);
        console.log("Questions Complete");
        showResultBox();
        console.log(currentCount);
        console.log(questionCount);
    }
    nextButton.style.display = "none";
    quizTitle.style.color ="blue";
    timeText.textContent = "Time Left";
    quizTitle.textContent = "Quiz for Web Developers";
    timeCountdown.style.color = "";
    quizHeader.style.backgroundColor = "";
    timeLine.style.backgroundColor = "rgb(1, 46, 247)";
}

function showResultBox() {
    infoBox.classList.remove("active");
    quizBox.classList.remove("active");
    resultBox.classList.add("active");
    
    const score = resultBox.querySelector(".score-msg");

    if(userScore > 30) {
        let scoreTag = '<span>And AWESOME!!! you got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        score.innerHTML = scoreTag;
    }
    else if(userScore > 20) {
        let scoreTag = '<span>And NICE!!! you got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> Learn more...<span>';
        score.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>And SORRY!!! you got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p> Keep Learning.</span>';
        score.innerHTML = scoreTag;
    }
}



function quitQuiz() {
    window.location.reload();
}

// getting questions and options form array
function showQuestions(index) {
    const questionText = document.querySelector(".q-text");
    
    let questionTag = '<span>' + questions[index].number + ". " + questions[index].question +'</span>';
    let optionTag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>' 
                    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>' 
                    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>' 
                    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    questionText.innerHTML = questionTag;
    optionsList.innerHTML = optionTag;
    
    const option = optionsList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIcon = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-times"></i></div>';

// Selection options from option list
function optionSelected(answer) {
    clearInterval(timeCount);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[questionCount].answer;
    let allOptions = optionsList.children.length;
    if (userAns == correctAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
        console.log("Answer is correct");
    }else {
        answer.insertAdjacentHTML("beforeend", crossIcon);
        console.log("Answer is incorrect");
        answer.classList.add("wrong");

        // if answer is incorrect then automatically select correct answer
        for (let i = 0; i < allOptions; i++) {
            if(optionsList.children[i].textContent == correctAns) {
                optionsList.children[i].setAttribute("class", "option correct");
                optionsList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    // Disable all other selections after one selection
    for (let i = 0; i < allOptions; i++) {
        optionsList.children[i].classList.add("disabled");

        nextButton.style.display = "unset";
    }
}

// Time countdown
function startTimer(time) {
    timeCount = setInterval(timer, 1000);
    function timer() {
        timeCountdown.textContent = time;
        time--;
        if(time < 9) {
            let addZero = timeCountdown.textContent;
            timeCountdown.textContent = "0" + addZero;
        }
        if(time < 6) {
            timeCountdown.style.color = "red";
            quizTitle.textContent = "You're running out of time!!!";
            quizTitle.style.color = "red";
            timeLine.style.backgroundColor = "red";
        }    
        if(time < 0) {
            clearInterval(timeCount);
            timeCountdown.textContent = "00";
            timeText.textContent = "Time off!";
            quizTitle.textContent = "Oopss!!, You didn't pick an answer.";
            quizHeader.style.backgroundColor = "rgba(252, 166, 166, 0.658)";
            nextButton.style.display = "unset";
            timeLine.style.backgroundColor = "black";

            let correctAns = questions[questionCount].answer;
            let allOptions = optionsList.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(optionsList.children[i].textContent == correctAns) {
                    optionsList.children[i].setAttribute("class", "option correct");
                    optionsList.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }

            for (let i = 0; i < allOptions; i++) {
                optionsList.children[i].classList.add("disabled");
            }
        }
    }
}

// Time Countdown line
function startTimerLine(time) {
    counterLine = setInterval(timer, 160);
    function timer() {
        time += 1;
        timeLine.style.width = time + "%";
        if(time > 99) {
            clearInterval(counterLine);
        }
    }
}

// Showing current question of total questions 
function counter(index) {
    const questionCounter = document.querySelector('.total-q');
let questionNumber = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
questionCounter.innerHTML = questionNumber;
}