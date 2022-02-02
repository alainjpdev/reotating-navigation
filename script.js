
const quizData = [{
    question: 'How old is Alain?',
    a: '10',
    b: '20',
    c: '37',
    d: '40',
    correct: 'c'
},{
    question: 'Which programming lenguage is the best?',
    a: 'Python',
    b: 'Java',
    c: 'Javascript',
    d: 'Php',
    correct: 'c'
},{
    question: 'Who is the president of the US',
    a: 'Donald Mc Donald',
    b: 'Biden',
    c: 'Putin',
    d: 'All of them',
    correct: 'b'
}];



const questionEl = document.getElementById('question_text')
const aEl = document.getElementById('a_text');
const bEl = document.getElementById('b_text');
const cEl = document.getElementById('c_text');
const dEl = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')
const quiz = document.getElementById('quiz')

const answerEls = document.querySelectorAll(".answer")

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswer();
  

        const currentQuizData = quizData[currentQuiz];

        questionEl.innerHTML = currentQuizData.question;
        aEl.innerText = currentQuizData.a;
        bEl.innerText = currentQuizData.b;
        cEl.innerText = currentQuizData.c;
        dEl.innerText = currentQuizData.d;

}

function getSelected(){
    
  

    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
           answer = answerEl.id;
        }
       
     });
    
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {

    answer = getSelected();
    console.log(answer)

    if(answer){
        if(answer === quizData[currentQuiz].correct){
        score++
        }
        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
           quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.
            </h2> <button onclick="location.reload()">Reload</button>`  
        }
    }
        
       
});




    

 

  



  
