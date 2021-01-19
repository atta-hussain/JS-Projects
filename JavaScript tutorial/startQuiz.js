const quizData = [{
    question: 'How old are you?',
    a: '16',
    b: '20',
    c: '18',
    d: '22',
    correct: 'd'
}, {
    question: 'What is the most used programming language in 2019?',
    a: 'Java',
    b: 'C++',
    c: 'Python',
    d: 'JavaScript',
    correct: 'a'
}, {S
    question: 'Who is the president of Pakistan?',
    a: 'Imran Khan',
    b: 'Imran Hashmi',
    c: 'Imran Abbas',
    d: 'Imran Ashrif',
    correct: 'a'
}, {
    question: 'What does HTML stands for?',
    a: '1994',
    b: '1995',
    c: '1993',
    d: '1996',
    correct: 'c'
}, {
    question: 'JavaScript is',
    a: 'Text-based',
    b: 'Contant based',
    c: 'Syentext-based',
    d: 'Used-based',
    correct: 'a'
}];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const add = document.getElementById("add");
let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    // questionJsonArrayStr = localStorage.getItem('questionJson')
    // questionJsonArray = JSON.parse(questionJsonArrayStr);

    // console.log('--------------------------');
    // console.log(questionJsonArray);
    // console.log('--------------------------');

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

// submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            resultSheet();
            document.getElementById('count').innerHTML = 'Quiz finished';
        }
    }
// });

function resultSheet() {
    quiz.innerHTML = `
                <h2 class = "text-center font-bold text-gray-700">Total Questions ${quizData.length} 
                <br> You answered correctly ${score} </h2>
                <button  class="w-full py-3 font-semibold
                text-gray-200 bg-blue-500 focus:outline-none rounded-b-xl
                hover:bg-blue-700" onclick="location.reload()">Reload</button>
            `;
}

function timeFormat(time) {
    return time < 10 ? `0${time}` : time;
}


const count = 15;
const interval = setInterval(function () {
 document.getElementById('count').innerHTML = count;
    count--;
    if (count < 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = `Your quiz time is finished.<br>`;
        resultSheet();
    }
}, 1000);

window.onclick = function (event) {

    loadQuiz();
    // if (event.target == start)
    //     start.style.display = "none";
    // count.style.display = "block";

};