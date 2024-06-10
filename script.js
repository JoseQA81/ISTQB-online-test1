//USER STORY -  10 QUESTIONS - ARRAY WITH ALL CORRECT ANSWER
const allCorrectAnswers = ["B", "A", "A", "C", "C", "B", "A", "C", "B", "B"];

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
function showAnswer(questionNumber) {
    const correctAnswer = allCorrectAnswers[questionNumber - 1];
    const selectedAnswer = document.getElementById("question" + questionNumber).value;

    let mensaje;
    if (selectedAnswer === "") {
        mensaje = "Unanswered";
    }
    else if (selectedAnswer === correctAnswer) {
        mensaje = "The answer is correct";
    }
    else {
        mensaje = "The answer is incorrect";
    }
    imprimir(mensaje, "us2SeeAnswer" + questionNumber);
}

//USER STORY - SEE SCORE
function seeScore(questionNumber) {
    let selectedQuestion = document.getElementById("question" + questionNumber).value;
    const correctAnswer = allCorrectAnswers[questionNumber - 1];
    let score = 0;
    let mensaje = "";

    if (selectedQuestion === "") {
        score = 0;
        mensaje = "Unanswered. You have earned: " + score + " points";
    }
    else if (selectedQuestion === correctAnswer) {
        score = 2;
        mensaje = "CORRECT! You have earned: " + score + " points";
    }
    else {
        score = -1;
        mensaje = "INCORRECT! You have earned: " + score + " points";
    }
    imprimir(mensaje, "us2SeeScore" + questionNumber);
}

//USER STORY - CALCULATE THE FINAL SCORE
function seeFinalScore() {
    let finalScore = 0;
    let mensaje = "";

    for (let i = 1; i <= allCorrectAnswers.length; i++) {
        let studentAnswer = document.getElementById("question" + i).value;

        if (studentAnswer === allCorrectAnswers[i - 1]) {
            finalScore += 2;
        }
        else if (studentAnswer !== "") {
            finalScore -= 1; // Each incorrect answer subtracts 1 point.
        }
    }

    mensaje = "Your final score is: " + finalScore + " points";
    imprimir(mensaje, "finalScore");
}
