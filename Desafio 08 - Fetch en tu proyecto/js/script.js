/*
Sitio Web de SUGD >>> Sistema Unico de Gestion Docente.
Un docente de nivel secundario / universitario o de un curso X puede usar este sitio.

Objetivo: registro de notas y emision de informe individual o por comision.
El docente debe completar 3 bloques:
BLOQUE 01: cargar en sitio datos basicos del docente tales como: NOMBRE-APELLIDO / EMAIL / UNIVERSIDAD o INSTITUCION / ASIGNATURA / COMISION
BLOQUE 02: cargar en sitio datos basicos del alumno tales como: NOMBRE-APELLIDO / EMAIL / FECHA DE NACIMIENTO / DNI
BLOQUE 03: carga de datos academicos del alumno y status final: NOTA 1 / NOTA 2 / NOTA 3 / PROMEDIO / CONDICION FINAL / COMENTARIOS DEL DOCENTE
*/

/*========================== OPCION A ==========================*/

//Creacion de clase

class Registro{
    constructor (nombreDocente, emailDocente, institucion, asignatura, comision, nombreAlumno, emailAlumno, fechaDeNacimientoAlumno, dni, nota1, nota2, nota3, comentarios) {
        this.nombreDocente = nombreDocente
        this.emailDocente = emailDocente
        this.institucion = institucion
        this.asignatura = asignatura
        this.comision = comision
        this.nombreAlumno = nombreAlumno
        this.emailAlumno = emailAlumno
        this.fechaDeNacimientoAlumno = fechaDeNacimientoAlumno
        this.dni = dni
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3
        this.comentarios = comentarios
    }

    //Formula promedio

    calculoPromedio(){
        return ((this.nota1 + this.nota2 + this.nota3) / 3)
    }
}

//Creacion de arrays

const registros = []

//Los datos de mi array seran tomados directamente desde el formulario + eventos del boton

const idFormulario = document.getElementById('formulario')

idFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombreDocente = document.getElementById('nombreDocente').value;
    const emailDocente = document.getElementById('emailDocente').value;
    const institucion = document.getElementById('institucion').value;
    const asignatura = document.getElementById('asignatura').value;
    const comision = document.getElementById('comision').value;
    const nombreAlumno = document.getElementById('nombreAlumno').value;
    const emailAlumno = document.getElementById('emailAlumno').value;
    const fechaDeNacimientoAlumno = document.getElementById('fechaDeNacimientoAlumno').value;
    const dni = document.getElementById('dni').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const comentarios = document.getElementById('comentarios').value;

    //Creacion de registro
    const registro = new Registro (nombreDocente, emailDocente, institucion, asignatura, comision, nombreAlumno, emailAlumno, fechaDeNacimientoAlumno, dni, nota1, nota2, nota3, comentarios);

    //Agregamos los datos en el array
    registros.push(registro);

    //Guardamos los datos en el localStorage. 
    localStorage.setItem('Registro', JSON.stringify(registros));

    //Limpiamos el formulario
    idFormulario.reset();

    //Muestro el resultado con la siguiente función: 
    mostrarInfo(registro);
})

const resultado = document.getElementById('infoUsuarios');

const mostrarInfo = (registro) => {
    let promedio = ((registro.nota1 + registro.nota2 + registro.nota3) / 3)
    let aux = '';
    aux += `<p class="resultado"> ${registro.nombreAlumno} tu condicion final es: </p>
            <p class="resultado"> Nota Promedio: ${promedio} </p>`;
    resultado.innerHTML = aux;
}

//Incorporacion de libreria SweetAlert2

const informesPrivados = document.getElementById("informesPrivados")
informesPrivados.addEventListener('click', () => {
    Swal.fire({
        icon: 'error',
        title: 'Acceso Restringido',
        text: 'Usted debe iniciar sesion para poder realizar consultas sobre informes'
      })
})

//AJAX & Fetch

const idBusquedaLibro = document.getElementById('busquedaLibro') 
const nombreLibro = document.getElementById('nombreLibro').value;

fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${nombreLibro}`)
.then(response => response.json())
.then(data => console.log(data))

fetch(`https://www.etnassoft.com/api/v1/get/?book_title=${nombreLibro}`)
.then(response => response.json())
.then(data => {
    let {title, author, content, language, url_dowload} = data[0]

    let aux2 = '';
    aux2 += `<p class="resultadoBusquedaLibro"> ${title}</p>
            <p class="resultadoBusquedaLibro"> ${author}</p>
            <p class="resultadoBusquedaLibro"> ${content}</p>
            <p class="resultadoBusquedaLibro"> ${language}</p>
            <p class="resultadoBusquedaLibro"> ${url_dowload}</p>`;
    resultado.innerHTML = aux2;
})


