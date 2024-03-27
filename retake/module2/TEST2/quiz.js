//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:      Name: 

import { quizQuestions, getRandomQuiz } from "./quizQuestions.js";

let randomQuiz;

function init() {
    const divMenu = document.getElementById('menu')
    const newQuizBtn = document.createElement('button')
    newQuizBtn.textContent = 'New Quiz'
    divMenu.appendChild(newQuizBtn)

    const clearQuizBtn = document.createElement('button')
    clearQuizBtn.textContent = 'Clear Quiz'
    divMenu.appendChild(clearQuizBtn)

    newQuizBtn.addEventListener('click', generateQuiz)
    clearQuizBtn.addEventListener('click', clearQuiz)
}

function generateQuiz() {
    clearQuiz()
    randomQuiz = getRandomQuiz()
    const divQuestion = document.createElement('div')
    divQuestion.id = 'question'
    const pEle = document.createElement('p')
    pEle.textContent = randomQuiz.question
    divQuestion.appendChild(pEle)

    for (let i = 0; i < randomQuiz.options.length; i++) {
        const optionBtn = document.createElement('button')
        optionBtn.style.margin = '5px'
        optionBtn.textContent = randomQuiz.options[i]
        optionBtn.addEventListener('click', checkAnswer)
        divQuestion.appendChild(optionBtn)
    }

    const divQuizContainer = document.getElementById('quizContainer')
    divQuizContainer.appendChild(divQuestion)
}

function clearQuiz() {
    const divQuizContainer = document.getElementById('quizContainer')
    const divAnswer = document.querySelector('.answer')

    divQuizContainer.textContent = ''
    divAnswer.textContent = ''
}

function checkAnswer(e) {
    const userAnswer = e.target.textContent
    console.log(userAnswer);
    const divAnswer = document.querySelector('.answer')

    if (userAnswer === randomQuiz.answer) {
        divAnswer.textContent = 'Correct'
    } else {
        divAnswer.textContent = 'Incorrect'
    }

}
init();