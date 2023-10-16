const questions =[

    { Question: "What is the capital of France?",
    answer : [
        {text: "Berlin", correct:"false"},
        {text: "Madrid", correct:"false"},
        {text: "Paris", correct:"true"},
        {text: "Rome", correct:"false"}
    ]
},
//__________________2nd question___________________

{
     Question: "Which planet is known as the 'Red Planet'?",
    answer : [
        {text: " Earth", correct:"false"},
        {text: "Venus", correct:"false"},
        {text: "Mars", correct:"true"},
        {text: "Jupiter", correct:"false"}
    ]
},
//__________________3rd question___________________
{
    Question: "Which continent is known as the Land Down Under?",
   answer : [
       {text: "  Europe", correct:"false"},
       {text: " Asia", correct:"false"},
       {text: " Australia", correct:"true"},
       {text: "North America", correct:"false"}
   ]
},
//__________________4th question___________________

{
    Question: " What is the term for a named storage location in a programming language that holds a value or data?",
   answer : [
       {text: "Variable", correct:"true"},
       {text: " Function", correct:"false"},
       {text: " Constant", correct:"false"},
       {text: "Operator", correct:"false"}
   ]
},

//__________________4th question___________________

{
    Question: "Which programming construct is used for making decisions in code, typically based on a condition?",
   answer : [
       {text: "Loop", correct:"false"},
       {text: " Function", correct:"false"},
       {text: " Array", correct:"false"},
       {text: "Conditional statement", correct:"true"}
   ]
},

//__________________5th question___________________

{
    Question: " In programming, what does IDE stand for? ",
   answer : [
       {text: "Integrated Development Environment", correct:"true"},
       {text: " Interactive Design Environment", correct:"false"},
       {text: "Intelligent Data Exchange", correct:"false"},
       {text: "Internal Development Engine", correct:"false"}
   ]
},

//__________________6th question___________________

{
    Question: "What is the purpose of a comment in a program's code? ",
   answer : [
       {text: "To execute code", correct:"false"},
       {text: " To provide information and explanations to humans", correct:"true"},
       {text: "To declare a variable", correct:"false"},
       {text: "To perform calculations", correct:"false"}
   ]
},
//__________________7th question___________________

{
    Question: "Which data structure stores elements in a sequential order and allows for easy traversal from the beginning to the end? ",
   answer : [
       {text: "Stack", correct:"false"},
       {text: "Array", correct:"true"},
       {text: " Queue", correct:"false"},
       {text: " Linked list", correct:"false"}
   ]
},
];
const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-btutton");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next"
    showQuestion() // isko phle hi declare kiya taki que show ho function iske niche h
}

function showQuestion(){
    resetState()
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1; // 1. _________________________
    questionElement.innerHTML= questionNo + "." + currentQuestion.Question // display question here

    currentQuestion.answer.forEach(answer=>{
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectAnswer)

    });
}
// it will remove all the previos ans
function resetState(){
nextButton.style.display="none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}
}
function selectAnswer(e){
    const selectedBtn= e.target;
    const isCorrect =selectedBtn.dataset.correct === "true";
    

    if (isCorrect){
        score++;                                // calculating score
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}


function showScore() {
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}! `;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";   
    
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else {
        showScore()
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton()
    }else{
        startQuiz();
    }
})
startQuiz ()