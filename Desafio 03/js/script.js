/*El docente puede cargar los datos (nombre / apellido / DNI / nota1 / nota2 / nota3) de todos sus alumnos. Luego el codigo calcula el promedio de cada alumno. Adema el docente puede "interactuar" con nuestro codigo para realizar consultas en los arrays. PD: el codigo cuenta con ciclos de validacion de datos para las notas.*/

class Alumno {
    constructor(nombre = " ", apellido = " ", dni = 1, nota1 = 1, nota2 = 1, nota3 = 1, promedio = 1) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.promedio = promedio
    }
}

/*=======================================================================*/

//Funciones

function prom_estu(not1, not2, not3) {
    let promedio = ((not1 + not2 + not3) / 3);
    return promedio
}

function buscarAlumnoNombre(alumnos){
    let nombreAlumno = prompt("Ingrese el nombre del alumno")
    let alumnoBuscadoNombre = alumnos.find(alumno => alumno.nombre == nombreAlumno)
    if (alumnoBuscadoNombre == undefined){
        alert("Alumno no encontrado")
    }else{
        console.log(alumnoBuscadoNombre)
    }
}
function buscarAlumnoApellido(alumnos){
    let apellidoAlumno = prompt("Ingrese el apellido del alumno")
    let alumnoBuscadoApellido = alumnos.find(alumno => alumno.apellido == apellidoAlumno)
    if (alumnoBuscadoApellido == undefined){
        alert("Alumno no encontrado")
    }else{
        console.log(alumnoBuscadoApellido)
    }
}
function buscarAlumnoDNI(alumnos) {
    let DNIAlumno = parseInt(prompt("Ingrese el DNI del alumno"))
    let alumnoBuscadoDNI = alumnos.find(alumno => alumno.DNI == DNIAlumno)
    if (alumnoBuscadoDNI == undefined){
        alert("Alumno no encontrado")
    }else{
        console.log(alumnoBuscadoDNI)
    }
}

/*=======================================================================*/

const alumnos = []
let nombre, dni, nota1, nota2, nota3, promedio, continua

//El docente debe ingresar los datos de sus alumnos: Nombre y Apellido + DNI + Nota1 + Nota2 + Nota3. El promedio se calcula usando una funcion.

do {
    let nombre = prompt("Ingrese el nombre del alumno").toLocaleLowerCase()
    let apellido = prompt("Ingrese el apellido del alumno").toLocaleLowerCase()
    let dni = parseInt(prompt("Ingrese el DNI del alumno"));

    //Cada nota ingresada debe ser VALIDA; por eso aplico while para controlar / revisar el valor ingresado.

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
    let promedio = prom_estu(nota1, nota2, nota3)
    continua = prompt("¿Desea ingresar los datos de un nuevo alumno?").toLocaleLowerCase()
} while (continua != "no")

console.log(alumnos)

/*=======================================================================*/

//Menu para interactuar con el docente... puede elegir 3 opciones validas para trabajar con los arrays

let respuesta

do {
    respuesta = parseInt(prompt(`Ingrese numero para:
        1- Buscar alumno por Nombre
        2- Buscar alumno por Apellido
        3- Buscar alumno por DNI
    `))
} while (respuesta < 1 || respuesta > 4)

switch (respuesta) {
    case 1:
        buscarAlumnoNombre(alumnos)
        break
    case 2:
        buscarAlumnoApellido(alumnos)
        break
    case 3:
        buscarAlumnoDNI(alumnos)
        break
    default:
        alert("La opcion ingresada no es valida")
        break
}

/*=======================================================================*/