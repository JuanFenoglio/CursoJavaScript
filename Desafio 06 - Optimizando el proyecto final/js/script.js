/*El siguiente codigo tiene como objetivo establecer la comparacion entre la metodologia estandar y la metodologia abreviada de escribir codigo en JS*/


//Todos estos metodos seran tenidos en cuenta / aplicados en mi proyecto final

//=====================================================================

//Operador ++ (funciona tambien con --)

console.log("Metodo i = i + 1");

for (let i = 0; i < 5; i = i + 1){
    console.log("El numero mostrado es: " + i);
}

//Se reemplaza i = i + 1 >>>>> i++ 
//De esta forma se incrementa en 1 la variable i

console.log("Metodo i++");

for (let i = 0; i < 5; i++){
    console.log("El numero mostrado es: " + i);
}

//=====================================================================

//Operador ternario: forma abreviada de escribir IF - ELSE

let temperatura = 39 //Este valor lo pongo constante pero podria ser ingresado por teclado o completado en un formulario. O quizas tambien calculado o medido.

if (temperatura > 39) {
    console.log("La temperatura del motor es optima");
} else {
    console.log("La temperatura del motor es muy baja. Por favor, espere a que aumente la temperatura para comenzar a mover el VEH");
}

//Se reemplaza la estructura IF - ELSE por ? : ;

temperatura > 39 ? console.log("La temperatura del motor es optima") : console.log("La temperatura del motor es muy baja. Por favor, espere a que aumente la temperatura para comenzar a mover el VEH")

//=====================================================================

//Operador logico: AND

const informeAlumno = []

if (informeAlumno.length === 0) {
  console.log("El docente no ha cargado la informacion de ningun alumno")
}

// Reemplazo estructura IF simple (sin ELSE) por un operador AND

informeAlumno.length === 0 && console.log("El carrito está vacío!")

//=====================================================================

//Operador logico: OR

const alumno1 = {
    nombre: "Juan FENOGLIO",
    nota1: 10,
    nota2: 10,
    nota: 10
}
const alumno2 = null
  
console.log( alumno1 || "El docente aun no ha cargado los datos del alumno")

console.log( alumno2 || "El docente aun no ha cargado los datos del alumno")

//=====================================================================

//Operador NULLISH COALESCING >>> igual que OR pero mas "flexible" porque admite mas valores que sean verdaderos (??)

console.log( 7 ?? "Nullish")  // Comprobacion con numero
console.log( null ?? "Nullish")  // Comprobacion con null // Nullish
console.log( "Curso de JAVASCRIPT en CODERHOUSE" ?? "Nullish")  // Comprobacion con cadena
console.log( "" ?? "Nullish")  // Comprobacion con vacio ""
console.log( NaN ?? "Nullish")  // Comprobacion con NaN
console.log( true ?? "Nullish")  // Comprobacion con tipo de texto booleano - true
console.log( false ?? "Nullish")  // Comprobacion con tipo de texto booleano - falso

//=====================================================================

//Acceso condicional a un objeto (?) >>> nos permite "salvar" un error.

const usuario = null

console.log( usuario.nombre || "El usuario no existe" ) // Error: "No se pueden leer propiedades de NULL"

console.log( usuario?.nombre || "El usuario no existe") // "El usuario no existe"


//=====================================================================

//Los demas operadores avanzados los he implementados ya en mi PROYECTO FINAL >>> check carpeta ENTREGA PROYECTO FINAL N° 2