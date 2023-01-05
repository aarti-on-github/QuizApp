const quizData=[
    {
       question:" How can you open a link in a new browser window ?",
        a:"_blank",
        b:"target",
        c:"save",
        d:"open",
        correct:"a"
    },
    {   question:"What is a selector?" ,
         a: "An attribute that allows you to select an HTML element for styling within CSS",
         b: "Elements that connect HTML and CSS",
         c: "A class or ID",
         d: "An attribute that allows the selection of every element within the HTML document",
         correct: "d",
    },
    {
        question: "Which statement cannot be used to declare a variable in JavaScript?",
        a: "let",
        b:"var",
        c: "int",
        d: "const",
        correct: "c",
    },
]
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answers')
const questionEl = document.getElementById('questions')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score =0  

beginQuiz()

function beginQuiz(){
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           beginQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button><a href="index.html "target="_self">Quizo</a></button>
           `
       }
    }
})
