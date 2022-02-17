//hacer un array de 10 personas.

const personas=["Mimi","Teo","Carlos","leo","jose","Rita","Mia","Sofy","Tina","Paty"];

console.log(personas.length)

//array de 5 valores diferentes
const varios=["Teo","Carlos",5,6,true];

//funcion que retorne el 2do valor :

function obtener (valor1,valor2) {
const obtener = valor2;
return obtener;
}
console.log(obtener(10,2))

//?Undefined=> Referencia a variable vacia, sin asignar,
//? tiene un valor que JS no puede definir.

//forma de declarar un array vacio:
let carros=new Array ()  //modo anterior, no actualizado, PESADO para la memoria
 
let carrosNuevos =[]    //modo actual de declaración, menos PESADO para la memoria.

//*Quiero llenar un array desde una función:
//* Usaremos arrow function y push(push solo funciona con arrays vacios)

//Crear una funcion para llenar array de carros nuevos, con arrow function

const llenarCarrosNuevos=(nuevoValor)=> {

carrosNuevos.push(nuevoValor);
}
llenarCarrosNuevos("Mercedes GLA");
llenarCarrosNuevos("BMW M4");
llenarCarrosNuevos("Tesla");
llenarCarrosNuevos("Audi");

console.log(carrosNuevos);

//crear una funcion que me diga si un numero es par o impar:

 const par =(numero)=> {
    return numero%2 ===0 ? "Es par" : "ES impar"
 }
console.log("el numero es", (numero))


















