/*Este programa sirve para que un docente ingrese 3 notas de un alumno.Se calcule el promedio final del alumno e informe la condicion de APROBADO o REPROBADO.
La menor nota de las 4 ingresadas no sera tenida en cuenta en el calculo de condicion final.*/

console.log("El docente podra introducir 4 notas del alumno por teclado. Con dicha informacion se calculara el promedio final y la condicion de regularidad del alumno. RECUERDE: la nota mas baja no sera tenida en cuenta");

console.log("El docente debe informar la cantidad de alumnos que tiene la comision y que desea conocer su condicion final")

let numAlum = parseInt(prompt("Ingrese la cantidad de alumnos de la comision"));
while (numAlum < 0) {
    console.log("El numero ingresado es INVALIDO. Recuerde que debe ser un valor ENTERO POSITIVO")
    numAlum = parseInt(prompt("Ingrese la cantidad de alumnos de la comision"));
}

// Se crea una estructura de repeticion segun la cantidad de alumnos ingresado por el docente.

for (let i = 0; i < numAlum ; i++) {

    //Se definen variales + Comprobacion de valores ingresados + Inicializacion de variables

    let condicionFinal = 0
    let regularidad = "DESAPROBADO"
    let promedio = 0

    let alumno = prompt("Ingrese el NOMBRE y APELLIDO del alumno")

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

    let nota4 = parseInt(prompt("Ingrese la Nota 04. Recuerde que debe ser entre 0 y 10"));
    while ((nota4 < 0) || (nota4 > 10)) {
        console.log("La nota ingresada es INVALIDA")
        nota3 = parseInt(prompt("Ingrese la Nota 03. Recuerde que debe ser entre 0 y 10"));
    }

    
    //Calculos basicos

    if ((nota1 < nota2) && (nota1 < nota3) && (nota1 < nota4)) {
        condicionFinal = prom_estu(nota2, nota3, nota4)
    } else if ((nota2 < nota1) && (nota2 < nota3) && (nota2 < nota4)) {
        condicionFinal = prom_estu(nota1, nota3, nota4)
    } else if ((nota3 < nota1) && (nota3 < nota2) && (nota3 < nota4)) {
        condicionFinal = prom_estu(nota1, nota2, nota4)
    } else {
        condicionFinal = prom_estu(nota1, nota2, nota3)
    }

    if ((condicionFinal >= 0) && (condicionFinal < 6)) {
        regularidad = "DESAPROBADO"
    } else if ((condicionFinal <= 6) && (condicionFinal > 8)) {
        regularidad = "APROBADO - REGULAR"
    } else {
        regularidad = "APROBADO - PROMOCION"
    }
   
    //Resultados por pantalla

    alert ("La condicion final del alumno: " + alumno + " es " + regularidad + " dado que su NOTA PROMEDIO FINAL es: " + condicionFinal)
}

//Declaracion de funcion

function prom_estu(not1, not2, not3) {
    let promedio = ((not1 + not2 + not3) / 3);
    return promedio
}