//! Este archivo va a funcionar solo para escribir funciones:

//*Funcion para poder sumar 2 numeros:
const sumar =(num2,num2)=>+num1 + +num2



///*Funcion para filtrar array.
const filtrarArray =(array,filtro)=> { array.filter((elemento)=>
elemento===filtro);
};

//*función para calcular área de triangulo:
const calcularAreaTriangulo=(base,altura) => {
    return (+base * +altura)/2
};

//*Función para calcular salario por horas trabajadas.

const calcularSalario=(salario,horas)=> {
let resultado ="Por favor ingrese valores numéricos";
let limite=40;

if(isNaN (salario) || isNaN (horas)) {
return resultado;
}
if (horas >limite) {
resultado=`Solo se pagaran ${limite} horas semanales.
           Su salario es: ${salario * limite}`;
}
else if (horas > 0 && horas<= limite){
resultado =`Su salario es: ${salario * horas}`;
}
return resultado;
};

//* Función para leer números capicua:

const hallarNumerosCapicua = () => {
    let contador = 1000;
  
const numerosCapicua = [];
  
while (contador <= 4000) {
const numeros = contador.toString();

// split convierte algo a un array

const numerosSplit = numeros.split("");
  
const parte1 = `${numerosSplit[0]}${numerosSplit[1]}`;
const parte2 = `${numerosSplit[2]}${numerosSplit[3]}`;
  
if (parte1 === parte2) {
numerosCapicua.push(`${parte1}${parte2}`);
}
contador++;
}
console.log(numerosCapicua);
 };
  
//!Includes: Función que me permite ver si un elemento existe en un array.

//?Teniendo el array:

const numeros=[1,2,3,4,5];
//Quiero saber si el numero 4, existe en el array numeros:

numeros.includes (4);

//Si el 4 esta incluido, es decir existe en el array, 
//retornara true, de lo contrario false.


 //*Función contar vocales:

const contarVocales = (frase) => {
let fraseArray = frase.toUpperCase().split("");
  
const vocales = ["A", "E", "I", "O", "U"];

//usar  función includes:

let contador = 0;
fraseArray.forEach((letra) => {
if (vocales.includes(letra)) {
contador++;
}
});
  
return `La frase tiene ${contador} vocales`;
};
  


