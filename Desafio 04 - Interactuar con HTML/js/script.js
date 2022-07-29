/*El docente podra utilizar este sitio web SUGD: Sistema Unico de Gestion Docente para poder llevar un registro del Historial Academico de sus alumnos segun: comision o materia.
Para ello debera completar 3 bloques:
Bloque 01: datos generales del docente y de la asignatura / comision.
Bloque 02: datos generales del alumno.
Bloque 03: notas alcanzadas por el alumno. Informe de situacion final.
*/

/*=======================================================================*/

class Docente{
    constructor(nombreDocente = " ", emailDocente = " ", asignatura = " ", comision = " "){
        this.nombreDocente = nombreDocente
        this.emailDocente = emailDocente
        this.asignatura = asignatura
        this.comision = comision
    }
}

class Alumno {
    constructor(nombreAlumno = " ", emailAlumno = " ", fechaNacimiento = " ", dni = 1, nota1 = 1, nota2 = 1, nota3 = 1, promedio = 1) {
        this.nombreAlumno = nombreAlumno
        this.dni = dni
        this.emailAlumno = emailAlumno
        this.fechaNacimiento = fechaNacimiento
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

/*=======================================================================*/

const alumnos = []
let nombreAlumno, dni, nota1, nota2, nota3, promedio, continua

//El docente debe ingresar los datos de sus alumnos: Nombre y Apellido + DNI + EMAIL + Fecha de Nacimiento + Nota1 + Nota2 + Nota3. El promedio se calcula usando una funcion.

do {
    let nombreAlumno = document.getElementById("nombreAlumno").value
    let dni = document.getElementById("dni").value
    let emailAlumno = document.getElementById("emailAlumno").value
    let fechaNacimiento = document.getElementById("fechaNacimiento").value
    let nota1 = document.getElementById("nota1").value
    let nota2 = document.getElementById("nota2").value
    let nota3 = document.getElementById("nota3").value
    let promedio = prom_estu(nota1, nota2, nota3).value
    continua = prompt("¿Desea ingresar los datos de un nuevo alumno?").toLocaleLowerCase()
} while (continua != "no")

console.log(alumnos)

/*=======================================================================*/

const docentes = []
let nombreDocente, emailDocente, asignatura, comision, continua2

//El docente debe ingresar sus datos basicos: nombre y apellido + email + asignatura + comision.

do {
    let nombreDocente = document.getElementById("nombreDocente").value
    let emailAlumno = document.getElementById("emailDocente").value
    let dni = document.getElementById("asignatura").value
    let fechaNacimiento = document.getElementById("comision").value
} while (continua2 != "no")

console.log(docentes)

/*=======================================================================*/