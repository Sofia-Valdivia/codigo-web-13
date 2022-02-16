//alert("funciona")//

//Cuantos datos tiene una variable?
//Tiene solo 01 dato.

//** Un Array, es un conjunto de datos
//**La forma en que declaramos un array es parecida a una variable
//**debemos colocar los elementos,dentro de corchetes[]
//*Un array vacio se representa []con corchetes vacios.

//**LOs arrays permiten combinar tipos de datos:numbers, strings, booleans */
const variosTipos =[100, "Juan", true, 0.5]


//Teniendo el sgte. array:

const alumnos=["Erick", "Karina","Patricia","Kjaris","Bruno"];
console.log ("alumnos:", alumnos);

//Los indices, siempre iniciaran desde 0, es decir
//Erick=0 y Bruno=4

//*Para acceder a un dato en specífico en el array:

//En mi array alumnos, imprimir indice 2:

console.log(alumnos[2])

//*Para reasignar un indice diferente a un elemento:
//Reasignare otro valor al indice 0:

alumnos [0]="Pepe";
console.log ("alumno reasignado",alumnos);

alumnos [5]="Juan";
console.log("alumno reasignado", alumnos);

//Tambien podemos agregar un elemento al array:
alumnos[6]="Darius";
console.log ("creacion de nuevo alumno",alumnos); 

// Cómo puedo saber cuantos elementos tiene el array, si este fuera muy largo:
//puedo usar una función llamada length, esta permite saber cuantos elementos tiene el array.

console.log ("cantidad de elementos", alumnos.length);

//ahora quiero agregar un datos en la ultima posicion del array:

alumnos[alumnos.length]="Anna";
console.log ("Creando un nuevo elemento", alumnos);

//Si quiero obtener, el ultimo elemento de mi array:
console.log ("ultimo elemento", alumnos[alumnos.length-1]);



































