/*Este algoritmo sirve para que un docente primero elija si desea TOMAR ASISTENCIA o CARGAR NOTAS de los alumnos de una comision*/
/*Si el/la docente elije la opcion 1: debera cargar el DNI del alumno / Nombre y Alumno del estudiante / Asistencia o falta de la semana*/
/*Si el/la docente elije la opcion 2: debera */

class alumno {
    constructor(nombre = "Predeterminado", dni = "Predeterminado", nota1 = 1, nota2 = 1, nota3 = 1) {
        this.nombre = nombre
        this.dni = dni
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
    }
}

const alumnos = []
let continua = true
let nombre, dni, nota1, nota2, nota3

do{
    let nombre =  prompt("Ingrese el nombre y apellido del alumno").toLocaleLowerCase()
    do{
        let dni = parseInt(prompt("Ingrese el DNI del alumno"));
    }while (isNaN(dni)) {
        console.log("La nota ingresada es INVALIDA")
        nota1 = parseInt(prompt("Ingrese la Nota 01. Recuerde que debe ser entre 0 y 10"));
    }
    do{
        let nota1 = parseInt(prompt("Ingrese la Nota 01. Recuerde que debe ser entre 0 y 10"));
    }while ((nota1 < 0) || (nota1 > 10)) {
        console.log("La nota ingresada es INVALIDA")
        nota1 = parseInt(prompt("Ingrese la Nota 01. Recuerde que debe ser entre 0 y 10"));
    }
    do{
        let nota2 = parseInt(prompt("Ingrese la Nota 02. Recuerde que debe ser entre 0 y 10"));
    }while ((nota2 < 0) || (nota2 > 10)) {
        console.log("La nota ingresada es INVALIDA")
        nota2 = parseInt(prompt("Ingrese la Nota 02. Recuerde que debe ser entre 0 y 10"));
    }
    do{
        let nota3 = parseInt(prompt("Ingrese la Nota 03. Recuerde que debe ser entre 0 y 10"));
    }while ((nota3 < 0) || (nota3 > 10)) {
        console.log("La nota ingresada es INVALIDA")
        nota3 = parseInt(prompt("Ingrese la Nota 03. Recuerde que debe ser entre 0 y 10"));
    }
}while (continua)
