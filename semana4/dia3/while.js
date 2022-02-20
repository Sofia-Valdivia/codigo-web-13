
//!While;
//* while tambien sirve para poder hacer una accion un numero determinado de veces
//* es decir es un bucle

//* la estrcura del while siempre va acompañada de un contador

// while (la_condicion) {

// }

let contador = 0;

while (contador < 5) {

console.log("contador", contador);

//! no se olviden de alterar el contador en cada vuelta

  contador++;
}

//!Ejercicios:

//* 1 => Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.

const imprimirDiezVeces = (palabra) => {
  let contador = 0;

  while (contador < 10) {
    console.log(palabra);
    contador++;
  }
};

imprimirDiezVeces("Hola Tecsup");

//* Escribir un programa que muestre por pantalla la tabla de multiplicar del 1 al 10.

const imprimirTablaMultiplicar = (numero) => {
  let contador = 0;

  while (contador <= 10) {
    console.log(numero * contador);
    contador++;
  }
};

 console.log("Table 1");
 imprimirTablaMultiplicar(1);
 console.log("Table 2");
 imprimirTablaMultiplicar(2);
 console.log("Table 3");
 imprimirTablaMultiplicar( 3);


//* Escribir un programa que pida al usuario un número entero positivo y muestre por
//* pantalla todos los números impares desde 1 hasta ese número separados por comas.

// TODO: Si el numero qu enos dieron es 10 entonces:

//! Resultado: 1, 3, 5, 7, 9
const hallarNumerosImpares = (numero) => {
  if (numero <= 0) {
    // termina el programa y retorna ese mensaje
    return "Solo numeros positivos";
  }

  let contador = 0;

  let resultado = "";
  while (contador <= numero) {
    if (contador % 2 !== 0) {
      //* resultado = resultado + contador.toString() + ", "
      resultado += `${contador}, `;
    }
    contador++;
  }

  return resultado;
};

console.log("Numeros impares", hallarNumerosImpares(10));


//*Imprimir solo los números impares, del sgte.array, usando for:

const numeros=[1,2,3,4,5,6,7,8,9,10];

for (let i=0 ; i<numeros.length ; i++){
if(numeros[i]% 2 !==0){

  console.log(numeros[i]);
}

};

//*Escribir un programa que pida al usuario un numero entero y que muestre por 
//*pantalla si es un número primo o no.

const hallarNumeroPrimo = (numero)=> {
//El número no es entero, tiene decimal:
if (numero%1 !==0){
  return "El numero es un decimal";
}
//El número no es primo, pues el 1 no es primo.
if (numero ===1){
return "No es un numero primo";
}

let contador=0;
let contadordeDivisores =0
//Atención, el bucle buscara de uno en uno en cada vuelta a los numeros que sean divisibles
//tanto por la unidad como por sí mismos, solo deben tener 2 divisores, para cumplir ser primos.
while (contador<=numero){
  if (numero%contador ===0){
    contadordeDivisores++;
}
contador ++;
}
//Que estoy guardando en la variable contadorDeDivisores?
//si los números que pasaron por el bucle cumplen son tener solo dos divisores:
return contadordeDivisores===2 ?"Si es un numero primo" : "No es un numero primo";

};































