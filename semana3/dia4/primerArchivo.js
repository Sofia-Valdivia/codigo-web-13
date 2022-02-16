/*alert ("hola mundo");*/

/*const numero1=10;
const numero2=20;

let resultado=0;
resultado=numero1+numero2;

/*console.log: Escribe o imprime un mensaje en la consola del navegador.*/


/*console.log("Resultado");
console.log (resultado);
console.log ("Resultado:",resultado);

/*consolo.error: Es para errores*/
/* muestra el error al lado derecho de la consola*/
/*Crear 03 console.log*/

/*const nombre1= "sofia ";
const nombre2= " mario";
let amigos =0;
amigos= nombre1 +nombre2;
console.log("Son amigos:", amigos);

const num1= 35;
const num2= 10;
let resta =0;
resta= num1 - num2;
console.log("Resultado:",resta);

const pastel1= "de manzana ";
const pastel2= " de piña";
let postres =0;
postres= pastel1 + pastel2;
console.log("Mis pasteles favoritos:", postres);

//vamos a hacer una calculadora con js//
// no olvidar validar la division/0 //

/*prompt => ventana emergente que pide un valor*/

//const valor1 =prompt ("Ingrese un valor1");
//const valor2 =prompt ("Ingrese un valor2");

//const operacion =prompt("Ingrese una operacion puede ser + - * /");

//Con suma//
/*let resultadoCalculadora=0;
if (operacion==="+"){
resultadoCalculadora= +valor1 + +valor2;
console.log ("Resultado:", resultadoCalculadora);
}
//Con resta- como continuamos operando, usaremos el else if //

else if (operacion==="-"){
resultadoCalculadora= +valor1 - +valor2;
console.log ("Resultado:", resultadoCalculadora);
}
//Con producto//
else if (operacion==="*"){
 resultadoCalculadora= +valor1 * +valor2;
console.log ("Resultado:", resultadoCalculadora);
}
//Con division//
else if (operacion==="/"){
    if (+valor2!== 0) {
 resultadoCalculadora = +valor1 / +valor2;
console.log ("Resultado:", resultadoCalculadora);
   }
else {
console.warn ("El divisor debe ser distinto a 0");
}
}
else {
console.error("operacion no valida");
}
*/

//Algoritmo para detectar multiplos//
//Debo usar %, para saber si mi numero es par o impar//
//%, debido a que brinda residuo.

const numeroMultiplo=12;

if(numeroMultiplo % 2===0){
console.log ("Numero par", numeroMultiplo);
}
if (numeroMultiplo %3===0){
console.log ("Numero multiplo de 3",numeroMultiplo);
}

//Crear un algoritmo que pida 02 numeros usando prompt, e impriman el numero mayor//

const numberOne = +prompt("Ingrese numero1");
const numberTwo = +prompt("Ingrese numero2");

let mensajeRes ="Numero 2 es mayor",

if(numberOne > numberTwo){
mensajeRes = "Numero 1 es mayor";
} 
console.log (mensajeRes);

//Usando los operadores and/or
// and=> &&
//  or=> ║ 
// Pueden usarse con los if, como condicionales
//pueden ponerse una cantidad ilimitada de condiciones.
//Para and=> todas las condiciones deben cumplirse.
//Para or => al menos una condicion debe ser cumplida.

const edadMayor =19
const nombreMayor= "Juan"

if(edadMayor===18 && nombreMayor==="Juan"){
   console.log ("El usuario es Juan y tiene 18 años")
}

if (edadMayor===18 || nombreMayor==="Juan"){
   console.log("El usuario is Juan o tiene 18 años")
}

/* Recordar evitar usar mucho el else 
/** Recordar no usar el var, a menos que se requiera.*/

//Crear un algoritmo que pida tres numeros usando prompt e imprimir el numero mayor:

let mayor =0

const valor1= + prompt("ingrese valor1")
const valor2= + prompt("ingrese valor2")
const valor3= + prompt("ingrese valor3")

let mayor= valor3
if (valor1>= valor2 && valor1>=valor3){
   mayor=valor1
}

else if(valor2 >=valor1&& valor2 >=valor3){
   mayor=valor2
}
console.log("El numero mayor es:", mayor)






