const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container'); 
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct) 
      button.removeEventListener('click', selectAnswer) 
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')  
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: `What is the difference between == and === operators in JavaScript?`,
        answers: [
            {text: 'There is no difference', correct: false},
            {text: '== checks for equality of value only, while === checks for both value and type equality', correct: true},
            {text: '=== checks for equality of value only, while == checks for both value and type equality', correct: false},
            {text: '== and === are the same—just different syntax', correct: false},
            
        ]
    },

    {
        question: `If you type the following code in the console window, what result will you get?\n
        3 > 2 > 1 === false;`,
        answers: [
            {text: 'null', correct: false},
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'undefined', correct: false},  
        ]
    },

    {
        question: `What is the correct way to write a while loop?`,
        answers: [
            {text: 'while i > 0(do this)', correct: false},
            {text: 'while(i <= 10)', correct: true},
            {text: 'while (i <= 10; i++)', correct: false},
            {text: 'while i = 1 to 10', correct: false},
            
        ]
    },

    {
        question: `What is the correct way to write a for loop?`,
        answers: [
            {text: 'for (i = 0; i <= 5)', correct: false},
            {text: 'for i = 1 to 5', correct: false},
            {text: 'for (i <= 5; i++)', correct: false},
            {text: 'for (i = 0; i <= 5; i++)  ', correct: true},
            
        ]
    },

    {
        question: `How do you find the number with the highest value of x and y?`,
        answers: [
            {text: 'Math.ceil(x, y)', correct: false},
            {text: 'top(x, y)', correct: false},
            {text: 'math.round(x, y)', correct: false},
            {text: 'Math.max(x, y)', correct: true},
            
        ]
    },

    {
        question: `How does Java Script store dates in objects of Date type?`,
        answers: [
            {text: 'The number of days since January 1st, 1900', correct: false},
            {text: 'The number of milliseconds since January 1st, 1970 ', correct: true},
            {text: 'The number of seconds since January 1st, 1970', correct: false},
            {text: 'The number of picoseconds since January 1st, 1970', correct: false},
            
        ]
    },

    {
        question: `If you type the following code in the console window, what result will you get?\n
        3 > 2 > 1 === false;`,
        answers: [
            {text: 'null', correct: false},
            {text: 'false', correct: false},
            {text: 'true', correct: true},
            {text: 'undefined', correct: false},  
        ]
    },

    {
        question: `Which is the correct way to write a JavaScript array?`,
        answers: [
            {text: 'var txt = new Array(1:"arr",2:"kim",3:"jim")', correct: false},
            {text: 'var txt = new Array("arr ","kim","jim") ', correct: true},
            {text: 'var txt = new Array:1=(" arr ")2=("kim")3=("jim")', correct: false},
            {text: 'var txt = new Array=" arr ","kim","jim"', correct: false},
            
        ]
    },

    {
        question: `How can you detect the client's browser name?`,
        answers: [
            {text: 'navigator.appName', correct: true},
            {text: 'browser.name', correct: false},
            {text: 'client.navName', correct: false},
            {text: 'browser.client.name', correct: false},
            
        ]
    },

    {
        question: `Which of the following is not a valid JavaScript variable name?`,
        answers: [
            {text: 'All are incorrect', correct: false},
            {text: 'javaandjava', correct: false},
            {text: '_java_and_ java _names', correct: false},
            {text: '2java ', correct: true},
            
        ]
    },
]