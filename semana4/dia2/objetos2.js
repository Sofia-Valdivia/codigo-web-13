
//! Los Objetos, conteniendo funciones y para llamar a
//! la funcion:
//! nombre del objeto/punto/nombre de la funcion/()

//?Crear un objeto persona:

const persona = {
nombre : "Juanito",
edad :30,
talla: 1.5,
estadoCivil:"casado",
calcularEdad: function (){
  console.log ("calculando la edad")
},
};
//*La primera forma de llamar la funcion:
console.log("1era forma");
persona.calcularEdad();

//*La segunda forma esparecida , pero no se usan los parentesis
//*solo funciona con return:
console.log("2da forma");
persona.calcularEdad;


//!This.-Permite acceder al elemento padre.

//? Crear un objeto computadora:
//* Acceder a las propiedades del objeto desde una funcion interna.

const computadora= {
  color:"azul",
  marca:"HP",
  nuevo:true,
  mostrarDetalle: function (){
    console.log ("color",this.color);
  },
  mostrarDetalleCompleto: function() {
    console.log(
      "Detalles",`Color: ${this.color} Marca: ${this.marca}
      Es nuevo? ${this.nuevo ? "Si" :"No"} `
    );
  },
};
const computadora2= {
  color:"amarillo",
  marca:"Lenovo",
  nuevo:false,
  imprimirDetalle: function (){
    console.log ("color",this.color);
  },
}; 
computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();
computadora2.imprimirDetalle();

//!Objetos con array:
const alumno= {
nombre:"Juanito",
notas:[10,5,8,9],
cursos:["HTML","CSS","JS","REACT"],
};
console.log("Notas", alumno.notas);

//!Array con Objetos:
const alumnos=[
{
nombre:"Luciano",
edad:18,
promedio:15,
},
{
nombre:"El Pepe",
edad:21,
promedio:14,
direccion:"Av. Siempre Viva 123",
},
];

//Imprimir la nota de Luciano:
console.log("Nota",alumnos[0].promedio);

console.log(`Nota de ${alumnos[0].nombre}`,alumnos[0].promedio);


//! JSON: Es un formato de archivos.

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
];
console.log(laptops);

//!Keys como números, si vemos keys como números accederemos a ellos, 
//!mediante llaves []

const listaDeUtiles = {
  1: "Hojas bond",
  2: "Plumones",
  3: "Lapiceros",
};

console.log(listaDeUtiles["1"]);

console.log(listaDeUtiles["2"]);

//! Objetos dentro de objetos:

const components = {
nombre: "Lenovo IPad",
caracteristicas: {
  ram: 16,
  tarjeta: "3090 super",
  memoria: 512,
  extra: {
    pantalla: "4k",
    },
  111:{
    teclado: "Español",
    },
},
};

console.log("Tarjeta", components.caracteristicas.tarjeta);
console.log("Pantalla", components.caracteristicas.extra.pantalla);

//! Para entrar al valor de teclado, usar los corchetes:
console.log("Teclado", components.caracteristicas["111"].teclado);

//! Crear un array de objetos del sgte. link, solo con 3 objetos:
//https://www.bhphotovideo.com/c/buy/macbook-pro-16-2021/ci/51717


const macAple= [
{  
marca:"Apple M1 Pro",
memoria:"16GB Unified RAM",
disco:"1TB SSD",
caracteristicas: {
  pantalla:"16.2 Liquid Retina XDR Screen",
  camara:"HD 1080p Camera"
  },    
  señal: "Wi-Fi 6 (802.11ax)"
},

{  
  marca:"Apple M1 Pro",
  memoria:"8GB ",
  disco:"512 SSD",
  caracteristicas: {
    pantalla:"14.2 ",
    camara:"HD 1080p Camera"
    },    
    señal: "Wi-Fi 6 (802.11ax)"
  },
  {  
    marca:"Apple M1 Pro",
    memoria:"32GB Unified RAM",
    disco:"512 SSD",
    caracteristicas: {
      pantalla:"16.2 Liquid Retina XDR Screen",
      camara:"HD 1080p Camera"
      },    
      señal: "Wi-Fi 5.0 (802.11ax)"
    }
]