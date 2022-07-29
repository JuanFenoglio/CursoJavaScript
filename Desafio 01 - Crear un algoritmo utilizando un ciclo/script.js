//Este programa sirve para que un docente ingrese 3 notas de un alumno. 
//Se calcule el promedio final del alumno e informe la condicion de APROBADO o REPROBADO.

console.log("El docente podra introducir 3 notas del alumno por teclado. Con dicha informacion se calculara el promedio final y la condicion de regularidad del alumno");

//Se definen variables & Comprobacion de valores ingresados

let nota1 = parseInt(prompt("Ingrese la Nota 01. Recuerde que debe ser entre 0 y 10"));
while ((nota1 < 0) || (nota1 > 10)) {
    console.log("La nota ingresada es INVALIDA")
    nota1 = parseInt(prompt("Ingrese la Nota 01. Recuerde que debe ser entre 0 y 10"));
}

let nota2 = parseInt(prompt("Ingrese la Nota 02. Recuerde que debe ser entre 0 y 10"));
while ((nota2 < 0) || (nota2 > 10)) {
    console.log("La nota ingresada es INVALIDA")
    nota2 = parseInt(prompt("Ingrese la Nota 02. Recuerde que debe ser entre 0 y 10"));
}

let nota3 = parseInt(prompt("Ingrese la Nota 03. Recuerde que debe ser entre 0 y 10"));
while ((nota3 < 0) || (nota3 > 10)) {
    console.log("La nota ingresada es INVALIDA")
    nota3 = parseInt(prompt("Ingrese la Nota 03. Recuerde que debe ser entre 0 y 10"));
}

let regularidad = "DESAPROBADO" // Inicializacion de variable.


//Calculos basicos

let promedio = (nota1 + nota2 + nota3) / 3
if (promedio >= 6) {
    regularidad = "APROBADO"
}

//Resultados por pantalla

alert("El promedio del alumno es: " + promedio + " y la condicion final de regularidad es: " + regularidad);