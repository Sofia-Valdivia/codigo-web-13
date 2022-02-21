//!Find  familia de map, como un primo.
//!Find  retorna solo el primer dato de la condición, solo un dato.
//!Find  parecido a filter.
//!Find  bucle, por tanto tiene index.

//?Teniendo el sgte. array:

const edades=[10, 11,22,32,50,34];

//Hallar a los mayores de 30:

const mayores30= edades.find((edad)=>edad>30);

//Recordar que find solo retorna el 1er dato de la condicion, 
// al iterar encontrará al primer dato y  solo retornará 32,
//al ser una in-line function, no requiere llaves o return.

console.log(mayores30);

//Imprimir los índices del array edades:
const finder=edades.find((edad,index )=>console.log (index));

//?Teniendo el array productos:

const products =[
{nombre:"Laptop",categoria:"Computo"},
{nombre:"Licuadora", categoria:"Electro"},
{nombre:"all in one", categoria: "Computo"},
{nombre:"refri", categoria:"Electro"},
];

//Imprimir categoria computo

const filtrar = products.find ((product)=>product.categoria==="Computo" );
//imprimirá solo el primer dato de la condición es decir:
//al primer objeto de la categoria "Computo".
console.log(filtrar);


//! Teniendo un array de array: 

const alumnos=[
["Pepe","Juan","Luis","Paco"],
["Patricia","Leonardo","Armando","Karina"]
 ];

//? Crear una función que reciba el nombre de un alumno y me diga si existe en lista:

const buscarAlumno = (arrayAlumnos, nombre) => {
// forEach no puede ser detenido, el return o el break no detienen al forEach
for (let i = 0; i < arrayAlumnos.length; i++) {
 const filtro = arrayAlumnos[i].find((alumno) => alumno === nombre);
// findIndex es lo mismo que find sin embargo este retorna el índice
const num = arrayAlumnos[i].findIndex((alumno) => alumno === nombre);
// si existe, si se cumple la condición:
if (filtro) {
return num;
}
}  
return false;
};
  
console.log("buscar", buscarAlumno(alumnos, "Juan"));

//?Teniendo el sgte.array

const laptops = [
    {
      marca: "Lenovo",
      imagen: "https://logo.com",
      nombre: "Ide Centre AIO I3",
      vendedor: "Falabella",
      precioOferta: 1599,
      precioNormal: 3599,
      calificacion: 2,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "integrada",
        discoDuro: "1TB",
        discoDuroSolido: "no aplica",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i5",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer 2",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i3",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
    {
      marca: "Acer",
      imagen: "https://logo.com",
      nombre: "AN515 15.6",
      vendedor: "Falabella",
      precioOferta: 3399,
      precioNormal: 4999,
      calificacion: 5,
      caracteristicas: {
        procesador: "i7",
        tarjetaDeVideo: "GTX 1650",
        discoDuro: "No tiene",
        discoDuroSolido: "256gb",
      },
    },
  ];
  

  //?Imprimir las laptos con procesador i3,usar filter:

  const procesadores=laptops.filter ((laptop)=>
  laptop.caracteristicas.procesador==="i3");
  console.log("Procesador",procesadores);

//? Imprimir las laptops con procesaror  i5 y de precio oferta menor a 4000,usar filter:

const procesadoresi5=laptops.filter ((laptop)=>
  laptop.caracteristicas.procesador==="i5" && laptop.precioOferta < 4000);
  console.log("Procesador",procesadoresi5);

//? Usndo forEach, agregar "vendido" como un nuevo atributo al array laptops, 
//? y que diga si es true o false.

const arrayLaptops=[];

laptops.forEach((laptop, index)=>{
//el numero %2 es para halalr el residuo de la división
//si el residuo es 0, es par; sino es impar.
//el index, inicia en su primera vuelta de bucle en 0.
    laptop.vendido= index % 2 ===0 ? true : false;

    arrayLaptops.push(laptop);
});
console.log(arrayLaptops);



//* Hemos visto los sgtes.bucles:
//* for
//*while
//*map
//*forEach
//*filter
//*find
//*findIndex