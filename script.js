//USER STORY -  10 QUESTIONS - ARRAY WITH ALL CORRECT ANSWER
const allCorrectAnswers = ["B", "A", "A", "C", "C", "B", "A", "C", "B", "B"];

// ARRAY TO SAVE THE STUDENTS
let students = [];

// I CREATE A FUNCTION TO PRINT
function imprimir(mensaje, id) {
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//USER STORY - WELCOME MESSAGE
function mostrarMensaje() {
    let name = document.getElementById("josWelcome").value.trim(); // Utiliza trim() para eliminar espacios en blanco al inicio y al final

    if (name === "") {
        imprimir("The name cannot be empty", "us1Welcome");
    }
    else {
        let mensaje = "Welcome " + name + " to your ISTQB exam, good luck!";
        imprimir(mensaje, "us1Welcome");
    }

}

//USER STORY - SEE THE ANSWER
function showAnswer(questionNumber) {
    const correctAnswer = allCorrectAnswers[questionNumber - 1];
    const selectedAnswer = document.getElementById("question" + questionNumber).value;

    let mensaje;
    if (selectedAnswer === "") {
        mensaje = "Unanswered";
    } else {
        mensaje = "Correct answer is: " + correctAnswer;
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

//USER STORY - CALCULATE THE FINAL SCORE - RESTART TEST 
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

    addStudent(finalScore);

    setTimeout(restartTest, 5000); // Wait a moment before restarting the test to allow the message to be displayed.
}

//RESTART TEST
function restartTest() {
    for (let i = 1; i <= allCorrectAnswers.length; i++) {
        document.getElementById("question" + i).value = "";
        document.getElementById("us2SeeAnswer" + i).innerText = "";
        document.getElementById("us2SeeScore" + i).innerText = "";
    }
    document.getElementById("finalScore").innerText = "";
    document.getElementById("josWelcome").value = ""; // Resetea el nombre de bienvenida
    document.getElementById("us1Welcome").innerText = ""; // También borra el mensaje de bienvenida
}

//USER STORY - RANKING
function addStudent(score) {
    let studentName = document.getElementById("josWelcome").value;

    let newStudent = {
        name: studentName,
        score: score
    };

    students.push(newStudent);
}

//La función sort() se utiliza para ordenar arrays
//Si 'b.score' es mayor que 'a.score', la diferencia será positiva y 'b' aparecerá antes que 'a'
function seeRanking() {
    students.sort((a, b) => b.score - a.score);
    let mensaje = "";

    for (i = 0; i < students.length; i++) {
        let student = students[i];

        mensaje += "\n Student: " + (i + 1);
        mensaje += "\n Name: " + student.name;
        mensaje += "\n Marks: " + student.score;
        mensaje += "\n\n";
    }
    imprimir(mensaje, "rankingResult");
}