//CREO UNA FUNCIÓN PARA IMPRIMIR
function imprimir(mensaje, id) {
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//USER STORY - WELCOME MESSAGE
function mostrarMensaje() {
    let nombre = document.getElementById("josWelcome").value;

    let mensaje = "Welcome " + nombre + " to your ISTQB exam, " + " good luck! ";
    imprimir(mensaje, "us1Welcome");

}

//USER STORY - SEE THE ANSWER
function showAnswer() {
    const answer = "B";

    const mensaje = "The correct answer is " + answer;
    imprimir(mensaje, "us2SeeAnswer");
}

//USER STORY - SEE SCORE
const correctAnswer = "q1answerB";
let score = 0;

function seeScore() {
    let questionOne = document.getElementById("question1").value;
    let mensaje = "";

    if (questionOne === "") {
        score = 0;
        mensaje = "Unanswered. You have earned '0' points";
    }
    else if (questionOne === correctAnswer) {
        score = 2;
        mensaje = "You have earned '2' points"
    }
    else {
        score = -1;
        mensaje = "you have lost '1' point";
    }
    imprimir(mensaje, "us2SeeScore");
}

//USER STORY -  10 QUESTIONS
const allCorrectAnswers = ["q1answerB", "q2answerA", "q3answerA", "q4answerC" , "q5answerC",
 "q6answerB", "q7answerA" , "q8answerC", "q9answerB", "q10answerB"];