//CREO UNA FUNCIÓN PARA IMPRIMIR
function imprimir(mensaje,id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

//USER STORY - WELCOME MESSAGE
function mostrarMensaje() {
    let nombre = document.getElementById("josWelcome").value;

    let mensaje = "Welcome " + nombre + " to your ISTQB exam, " + " good luck! ";
    document.getElementById("us1Welcome").innerText = mensaje;
    
}

//USER STORY - SEE THE ANSWER
function showAnswer() {
    let answer = "B";

    let message = "The correct answer is " + answer;
    document.getElementById("us2SeeAnswer").innerText = message;
}