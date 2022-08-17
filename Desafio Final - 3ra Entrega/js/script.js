/* SUGD: Sistema Unico de Gestion Docente

Este sitio esta pensando para acercar la educacion secundaria a las nuevas tecnologias y que se genere una sinergia entre INSTITUCION - DOCENTES - ALUMNOS

En la 1ra etapa del sitio se tiene como objetivo:
A.- Docente carga notas e informacion adicional de sus alumnos y se emite un Informe academico.

En la 2da etapa del sitio se tiene como objetivo:
A.- Docente toma asistencia de su curso
B.- Una vez que la etapa A se haya implementada de manera robusta, cambio a asistencia por QR.

En la 3ra etapa del sitio se tiene como objetivo:
A.- Carga de actividades a cada alumno
B.- Control de frecuencia de visitas al sitio
C.- Metricas para docente e institucion

*/

/*
Control de Notas >>> VALIDACION

1 a 5 > Desaprobado.
6 o 7 > Aprobado: Bien.
8 o 9 > Aprobado: Muy bien.
10 > Aprobado: Excelente.

Control de Condicion Final >>> VALIDACION

1 a 5: Libre.
6 a 8: Regular.
9 o 10: Promocionado.

*/

//Constructor de objeto registro de alumno

class Registro{
        constructor (nombreDocente, emailDocente, institucion, asignatura, comision, nombreAlumno, emailAlumno, fechaDeNacimientoAlumno, dni, nota1 = 0, nota2 = 0, nota3 = 0, comentarios) {
        this.nombreDocente = nombreDocente;
        this.emailDocente = emailDocente;
        this.institucion = institucion;
        this.asignatura = asignatura;
        this.comision = comision;
        this.nombreAlumno = nombreAlumno;
        this.emailAlumno = emailAlumno;
        this.fechaDeNacimientoAlumno = fechaDeNacimientoAlumno;
        this.dni = dni;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.promedio = ((this.nota1 + this.nota2 + this.nota3) / 3)
        this.comentarios = comentarios;
}
}

const alumno1 = new Registro("Pedro", "hola", "", "", "", "Juan", "", "", "", 9, 9, 8, "EXCELENTE ALUMNO!" )

console.log(alumno1.promedio)
console.log(alumno1)
