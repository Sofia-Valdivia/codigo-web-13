
//!BUCLES:
//*Un bucle es una estrucutura repetitiva, es decir hacer algo muchas veces.
//* Los bucles son usados para poder leer arrays, porque un bucle me va a permitir
//* leer cada elemento independientemente

//!For.- Es el más antiguo y conocido. Ej


for (let i = 0 ; i < 10; i++) {
    console.log ("iterador",i);
}

//*Array de alumnos:

const alumnos =["Pepe", "Juana", "Stephany", "Carlos", "Luis"];

for(let i=0;i < alumnos.length;i++){
console.log(alumnos[i]);
}


//*Array de Alumnos:

const numeros =[1,2,3,4,5,6,7,8,9,10];

for(let j=0;j<numeros.length;j++){
    console.log(numeros[j]);
}
//Imprimir solo numeros pares:

for(let j=0; j < numeros.length;j++){
    if (numeros[j] % 2===0 ){   
    console.log(numeros[j]);
}
}

//array de objeto estudiantes:

const estudiantes =[
{   
nombre:"Pepe",
edad: 21,
},
 {
nombre:"Juan",
edad: 30,
},
 {
 nombre:"Lucho",
 edad: 22,
},

];

for(let obj = 0 ; obj < estudiantes.length ; obj ++) {
    console.log (estudiantes [obj]);
}
// Si quiero imprimir solo el nombre:

for(let obj = 0 ; obj < estudiantes.length ; obj ++) {
    console.log (estudiantes [obj].nombre);
}
// Solo quiero mostrar a los alumnos, menores de 30:

for(let obj = 0 ; obj < estudiantes.length ; obj ++) {
    if (estudiantes [obj].edad<30){   
    console.log (estudiantes [obj].nombre);
 }
};

//*Imprimir cuantas veces aparecen las vocales en la frase:Hola me llamo Juan:


const contarVocales =(frase)=> {

    const fraseMayuscula = frase.toUpperCase ();
    let contador=0;

    for(let i = 0 ; i < fraseMayuscula.length ;  i ++) {
         const letra =fraseMayuscula[i] ;

if (
letra ==="A" ||
letra ==="E" ||
letra ==="I" ||
letra ==="O" ||
letra ==="U" 
) {
contador ++
}
}
 console.log (`La frase tiene ${contador} vocales`);     
};
contarVocales ("Hola me llamo Juan")

//!Escribir un programa que escriba en pantalla los divisores comunes
//! de dos números dados


//! inicio
const hallarDivisoresComunes = (numero1, numero2) => {
    // para poder usar una funcion que he creado solanmente necista llamarla por su nombre
  
    // 1: Creo un array vacio
    const arrayDivisores = [];
    // 2: He creado una variable llamada primerosDivisores
    // 3: Quiero que esta variable se guarden los divisores del primer numero
    const primerosDivisores = hallarDivisores(numero1, arrayDivisores);
    //* primerosDivisores = [1, 2, 5, 10]
    // entonces la variable primerosDivisores es un array
    const segundosDivosores = hallarDivisores(numero2, primerosDivisores);
    // sort sirve para ordenar un array
    const arrayOrdernado = segundosDivosores.sort();
    console.log(arrayOrdernado);
  
    for (let i = 0; i < arrayOrdernado.length; i++) {
      if (arrayOrdernado[i] === arrayOrdernado[i + 1]) {
        console.log(arrayOrdernado[i]);
      }
    }
  };
 
  //! fin
  
  // para que funcion sea operativa debe retornar un arreglo con los números que son
  // divisores
  const hallarDivisores = (numero, divisores) => {
    for (let j = 1; j <= numero; j++) {
      if (numero % j === 0) {
        // push sirve para agregar un elemento en la ultima posicion a un array
        divisores.push(j);
      }
    }
  
    return divisores;
  };
  
  hallarDivisoresComunes(12, 24);




















