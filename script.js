// getting all required elements
const startButton= document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitButton = infoBox.querySelector(".quit");
const continueButton = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");

// start button clicked
function infoActive() {
    infoBox.classList.add("active")
}

// An alternative way of passing the function without css reference
// function infoActive() {
//     infoBox.style.display = 'unset'
// }

// Exit button clicked
function infoRemove() {
    infoBox.classList.remove("active");
}

// An alternative way of passing the function without css reference
// function infoRemove() {
//     infoBox.style.display = ''
// }

// Continue button clicked

function quizActive() {
    quizBox.classList.add("active")
    infoRemove()
}

// An alternative way of passing the function without css reference
// function quizActive() {
//     quizBox.style.display = 'unset';
//     infoRemove()
// }