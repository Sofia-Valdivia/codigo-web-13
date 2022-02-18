//?Tipos da datos

/**
 * * string
 * * number
 * *boolean
 * *undefined 
 */
//? Ejemplo de string:
const mensaje ="hola";
const pepito ="saludando";
let nombre= "Dario"

//?Ejemplo de number:
const nombreNumber = +"nombre";
console.log ("tipo de variable", typeof nombreNumber);
// El typeof, me dira que tipo de dato es una variable
// JS sabe de que tipo es en base al valor de la variable.

const EdadMayor =21;
let edad =10;
const numero =45;

//?Ejemplo de booleans:
let estado=true;
let sexo=false;
let rpta= true;


//?
let componentes;
console.log("por si ni me creen",typeof componentes);

//? toString:
//? Cuando hacemos una peticion a un servidor y al enviarle datos, el servidor nos dice
//? que tipo de datos requiere:
//? por lo que debo crear un usuario, pero por si rechaza los datos en number,
//? debo transformarlos a string(edad,celular)

//*nombre => String

//*apellido => String

//*edad  => Number     debo transformar a string .toString()

//*celular  => Number  debo transformar a string .toString()

 //?Ejercicios
 // Crear un array de:
 //alumnos, notas, juegos.

 const alumnos= ["Luis", "Karen", "Pedro"];

 const notas= [20,16,18,15];

 let juegos= ["domino","sapito","halo"];

// Imprimir Luis tiene 20 en programacion y juega domino:
console.log( (alumnos[0]),"tiene",(notas[0])," y juega",(juegos[0]));

console.log( 
`${alumnos[0]} tiene ${notas [0]} y juega ${juegos[0]}`  
)
//Imprimir Karen tiene 18 en programacion y juega sapito:

console.log(
`${alumnos[1]} tiene ${notas[2]} en programacion y juega ${juegos [1]}`
)

console.log( (alumnos[1]),"tiene",(notas[2])," y juega",(juegos[1]));

// Crear una arrow function que reciba 02 parámetros y 
//retorne el cuadrado de ambos números:
//*cuadrado de 2 = 2*2
//*cuadrado de 8 = 8*8

//primera rpta:
const calcularCuadrado =(num1,num2)=>{ 
const cuadradoNum1=num1 ** 2;
const cuadradoNum2=num2 ** 2;

return `el primer cuadrado es: ${cuadradoNum1} y el segundo cuadrado es: ${cuadradoNum2}`
}
console.log(calcularCuadrado (2,4));

//segunda rpta:
const calcularcuadradoAmbosNumeros =(numero1,numero2)=> {
const cuadradoNumero1 =+numero1 * +numero1;
const cuadradoNumero2 =+numero2 * +numero2;  
return `cuadrado de numero1 es: ${cuadradoNumero1} y cuadrado de numero 2 es: ${cuadradoNumero2}`
}   
console.log(calcularcuadradoAmbosNumeros(4,8));

//!Math, libreria de JS, permite hacer operaciones matemáticas.
//! recibe 02 parámetros
//! número y potencia

//Crear una función la cual pida nombre, apellido y edad y retorne msm de saludo.

//Primera rpta.-
const saludarUser =(nombre, apellido, edad)=> {
return `Buen dia ${nombre} ${apellido} de ${edad} años, disfruta tu día!`
}
console.log(saludarUser ("Astrid","Peña","20"));

//Segunda rpta.- Por tema de ventana de prompt la comentaré, pero esta bien la rpta.

/*const saludarUsuario = (a,b,c) => {
    return `hola ${a} ${b}  de ${c} años`;
};
const username = prompt ("Ingresar nombre:");
const lastname = prompt ("Ingresar apellido:");
const yearsOld = prompt ("Ingresar edad:");
alert (saludarUsuario (username, lastname, yearsOld));
*/

//Crear arrow function que retorne área de rectangulo
//base * altura

//primera rpta.-
const hallarAreaRectangulo =(base,altura)=> {
const basealtura=(base * altura);
return `El área es ${basealtura}`
}
console.log(hallarAreaRectangulo (35,15));

//segunda rpta.-

const calcularAreaRectangulo=(base,altura)=> {
    return +base * +altura;
}
console.log(calcularAreaRectangulo(20,10));

//tercera rpta.- sin return, super simplificado:

const areaRectangulo =(base,altura)=>+base * +altura;
console.log(areaRectangulo (30,15))

//Crear una funcion que reciba la edad de la persona y retorne si es mayor 
const esMayor =(edad)=> {
    if (edad>= 18){
    return "es mayor de edad";
}
    else{
     return "es menor de edad";
    }
}
//Este proceso puede ser simplificado, usando operadores ternarios ? :,  ejemplo del profesor:

const esMayor2 =(edad)=> {
    return edad >= 18 ? "es mayor de edad": "es menor de edad";
}

//Crear una funcion que reciba un array y si el lenght del array es mayor a 5,
//retorna arreglo grande, sino retorna arreglo pequeño, usar operador ternario.

let frutas=["manzana", "pera", "lima","plátano","fresa","maracuya"];

const consultarArrayLength = (frutas)=>{
return frutas.length >= 5 ? "es un arreglo grande" : "es un arreglo pequeño";

 }
 console.log (consultarArrayLength(frutas));
 
 






 





























