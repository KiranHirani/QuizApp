const question = document.getElementById('question');
const a1 = document.getElementById('a1');
const b1 = document.getElementById('b1');
const c1 = document.getElementById('c1');
const d1 = document.getElementById('d1');
const quiz=document.getElementById('quiz');
const submitBtn = document.querySelector('button');
const answers = document.querySelectorAll('.answers');

const quizData = [
    {
        question: 'Who is called as the father of computer?',
        a: 'Elon Musk',
        b: 'Charles Babbage',
        c: 'Steve Jobs',
        d: 'William Oughtred',
        correct: 'b'
    }, {
        question: `Why is HTML used?`,
        a: 'To hold content on a web page',
        b: 'To design a webpage',
        c: 'To make a webpage dynamic',
        d: 'Its used for embedded systems',
        correct: 'a'
    }, {
        question: 'Which among these is not an array method in Javascript?',
        a: 'push',
        b: 'unshift',
        c: 'sort',
        d: 'substring',
        correct: 'd'
    }, {
        question: 'Which CSS property can be used among these to make text bold?',
        a: 'font-weight',
        b: 'font-size',
        c: 'font-family',
        d: 'font-variant',
        correct: 'a'
    },
    {
        question: 'Where is the service mentioned in Angular to avoid the dependency Injection error?',
        a: 'In the constructor of the class using this service',
        b: 'In providers array of App.module.ts',
        c: 'In polyfills.ts',
        d: 'None of the above',
        correct: 'b'
    }
]

var score = 0;

let current = 0; 

loadQuiz();   

function loadQuiz() {
    deselectAnswers();
    const currentQuestionData = quizData[current];

    question.innerHTML = currentQuestionData.question; 
    a1.innerHTML = currentQuestionData.a;
    b1.innerHTML = currentQuestionData.b;
    c1.innerHTML = currentQuestionData.c;
    d1.innerHTML = currentQuestionData.d;
}

submitBtn.addEventListener('click', () => {

    const ans = getSelectedAnswer();

    if (ans) {
        if(ans===quizData[current].correct){
          score++;
        }
        current++;
        if (current < quizData.length) {
            loadQuiz();
        }
        else {
            if(score>3)
            quiz.innerHTML=`<h2>Congratulations!! You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>`
            else
            quiz.innerHTML=`<h2>You answered ${score}/${quizData.length} questions correctly.</h2>
            <button onclick="location.reload()">Reload</button>`
        }}
});


function deselectAnswers(){
    answers.forEach(a=>{
        a.checked=false;
    })
}

function getSelectedAnswer() {
    let ans = undefined;
    answers.forEach(answer => {
        if (answer.checked) 
        { ans = answer.id
        }
    });

    return ans;
}
