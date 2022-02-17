//**Funcion=>Conjunto d esoluciones para poder realizar tareas. */
//?Una funcion es creada para poder reutilizar el codigo, al ahber trabajos repetitivos,
//?escribimos el codifo, lo ponemos en funcion y podemos usarlo cuando lo necesitemos.
//? las funciones pueden recibir parametros (variables dentro de la funcion, dentro de sus paréntesis)

//! 1.-Funcion function, 
//Debe declararse un nombre a la funcion, para poderla llamar
//y que esta ejecute el codigo que tenga dentro(),

function nombreDeLaFuncion(){

console.log ("Mi primera funcion");
}
nombreDeLaFuncion();

/*function sumar (numero1, numero2)
{
 const suma =numero1 +numero2;
console.log("Suma:",suma);
}

sumar (50,20);
sumar (10,50);
sumar (100,200);
sumar (31.5,40.4);
sumar ("hola",10);*/

//! 2.-Funcion typeof,
//Es una funcion de JS, la cual me permite saber el tipo de dato de una variable.

//!3.- funcion isNan,
//Me permite saber si un dato es operable o no

/*function sumar (numero1, numero2) {
const suma = +numero1 + +numero2;

if (isNaN(suma)){
return "Error: No se puede sumar";
}
return suma;
}

//!Return.-palabra reservada, que nos permite regresar un valor y 
//!además indica el final de la función.

console.log(sumar (50,20));
console.log(sumar (100,200));
console.log(sumar (31.5,40.4));
console.log(sumar ("Hola",20));
*/

//! OPeradores Ternarios; Su estructura empieza
//? condicion ? true (se ejecutara una linea) : false(se ejecutara una linea).

function sumar (num1,num2) {
    const suma = +num1 + +num2 ;

    return isNaN(suma) ? "Error; no se suma" : suma;
}

console.log(sumar (60,50));
console.log(sumar ("Hi",28));

//!Funciones Modernas:
//!Funcion de Expresión o funcion Anónima;
//*La funcion va dentro de una variable, 

const resta=function(numero1, numero2){
const calcResta = +numero1 - +numero2;

return isNaN (calcResta) ? "Error, no puede ejecutar resta" : calcResta;
}
console.log ("Resta:",resta (35,45));
console.log ("Resta:",resta ("manzana",5));

//!Arrow Function, funcion Flecha:
//* Es una funcion parecida a la funcion anónima o de expresion,
//* No hace falta usar la palabra function, para declararla,
//* La arrow function no puede usar this.=>

const division =(numero1, numero2)=>{
if (+numero2 ===0){
return "Error: no se puede dividir por 0"
}
const calcDivision = +numero1 / +numero2;
return isNaN(calcDivision) ? "Error:no se puede dividir" : calcDivision;
}
console.log("Division:" ,division (8,4))
console.log("Division:" ,division ("pera",4))
console.log("Division:" ,division (8,0))

//?Al usar arrow function con un solo parámetro, no es necesario ponerlo entre paréntesis,
//? El sistema por default lo completa, pero igual opera.

/*const saludar= nombre=> {
    return "Hola " + nombre;
}
console.log (saludar ("Anna"))
*/

//? Uso de comillas inversa para evitar uso excesivo de signo +

const saludar= (nombre, apellido)=> {
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`;
};
console.log (saludar ("Juan", "Perez"));

//? Uso de guion bajo_cuando no tiene parametros la funcion:
const funcionSinParametros =_=> {
    return"Hi there";
}
//?arrow function inline, una sola linea de codigo

const hello=()=>"Hola Mundo inline";
console.log( hello (hello));

 //?Funcion con scope propio, Es decir dentro de la funcion yo puedo declarar
 //?otra constante const, pero estas solo operan dentro de su ambito independiente.

 const calcEsMayor =()=> {
     const edad =18
  };   
     console.log(edad);

 

 const mostrarEdad =()=> {
     const edad =18
 };     
     console.log(edad);

//! Recomendaciones:
//* Los nombres de las funciones siempre deben ser verbos y que indiquen que hace la funcion
//* Tratar de no pasar  mas de tres parámetros
//* Los parámetros de la funcion pueden ser de cualquier tipo, incluso arrays.

const alumnosTecsup =["Juan","Pedro","Maria","Ana","Juana"];
function listarAlumnos(alumnos){
console.log ("Alumnos tecsup", alumnos);
}
listarAlumnos(alumnosTecsup);

//*Si vemos codigo repetido, se debe llevar ese codigo a funcion.


