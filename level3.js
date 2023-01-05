const quizData=[
    {
        question: "What method of writing HTML emphasize the meaning of encoded information over presentation?",
        a: "XHTML method ",
        b: "Semantic HTML",
        c: "Nominal HTML ",
        d: "Deductive HTML ",
        correct: "b",
    },
    {   question: "How do you display hyperlinks without an underline?",
         a: "a{text-decoration:none;}",
         b: "a{text-decoration:no-underline;}",
         c: "a{uderline:none;}",
         d: "a{decoration:no-underline;}",
         correct: "a",
    },
    {
        question:"Which array method is used to iterate on all the array elements and perform some task/transformation on them and return the new array?",
        a: "Map",
        b: "Filter",
        c: "Reduce",
        d: "ForEach",
        correct: "d",
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
           <button>Congratulations!You have completd the Quiz</button>
           `
       }
    }
})
