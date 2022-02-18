/*alert ("funciona");*/

//?Teoría de Objetos, 
//*Objetos, es una entidad independiente, que tiene propiedades y atributos,
//* es decir características,
//* un objeto esta compuesto por un key y un value,que están separados por dos puntos(:)


//!atributos de un carro:
//*numero de puertas
//*color
//*motor
//*HP

//Creemos el objeto carro:

const carro ={
color: "azul",
motor : 1.2,
marca:"Nissan",
nuevo: true,
}

//Crear objeto persona:

const persona ={
edad:30,
nombre:"Juanito",
sexo:"Masculino",
talla:1.75,
estadoCivil:"soltero",
mayorDeEdad:true,
donanteDeOrganos:true,
dni:"40812574",
tatuajes: true,
nacionalidad:"Peruano",
}

//*Para acceder a los atributos debe usarse el punto (.)
//*EJ: nombre, dni
//*en caso que el atributo no exista, en este caso atributo celular,
//* el msm en consola será Undefined, 
//*pues el objeto sí existe, solo el atributo es el que aun  no.
//* Si el value es muy extenso en numeros como celular o dni, ponerlo entre ""

console.log("nombre:",persona.nombre);
console.log("dni:",persona.dni);
console.log("celular:",persona.celular);

//* Para agregar más elementos al objeto:

persona.celular ="969334452"
console.log(persona);

//* O tambien:

persona ["profesión"] = "Ingeniero";

console.log ("Persona con Profesión",persona);

//*Creando Objeto a la antiguita, aprender pues aún se ve:
const casa =new Object ();

casa["color"]="Rosada";
casa.pintura="Negro"; 
console.log("Casita", casa);

//* Tercera forma, antigua para definir un key, no se usan llaves en el objeto,
//*se usan corchetes para el atributo a modificarse pero no comillas en su interior Ej.

const laptop=new Object()
modelo="macbook Pro",
peso=2.5,
color="color"
memoria=512;

//Cambiando el atributo
laptop[color]="gris"
console.log("laptop",laptop);

//* El ejemplo anterior, queda para poder consultar, ya que  ahora los proyectos
//*no usan esta forma, pero si no stopamos con un proyecto antiguo tal vez la veamos.

// Ejercicio, Crear objeto para celular:

const celular ={
model : "iphone 11",
flexible: false,
tamaño: 6.1,
gama:"alta",
color:"gris",
camaras :2,
precio: " $700",
};

//Cambiamos atributo camaras

celular.camaras=4;
celular.memoria="128gb";
console.log ("Celular iphone", celular);

//Crear una funcion, que retorne el nombre del celular, su memoria y precio.

const mostrarDetalleCelular =(celularObjeto)=>{
return `El modelo es: ${celularObjeto.model} con ${celularObjeto.memoria}y su costo es de ${celularObjeto.precio}`
}
console.log ("objeto celular",mostrarDetalleCelular(celular));

//*Destructuracion de Objetos:

const mostrarDetalleCelular2=(celularObjeto)=>{
const { model, memoria,precio}=celularObjeto;
return `El modelo es ${model}tiene${memoria}de espacio y su costo es ${precio}`
}
console.log ("Objeto delular 2", mostrarDetalleCelular2(celular));

//Creemos objeto usuario:

const usuario = {
   nickname:"loquitoProgramador01" ,
   email : "loqui@gmail.com",
   pasword :"********",
   carnetVacunacion: true,
   location:"Peru",
   level:"pro",
   edad:18,
}

// Crear funcion que valide si el usuario es de Peru,
//si es de Perú imprimir nickname y level
// si no es de Peru, imprimir"Oye, tu nickname, no eres peruano"

//primera Rpta(Usando if).-
const mostrarUserPeruano=(usuarioObjeto)=> {
    const {location,nickname,level}=usuarioObjeto;
    if (location==="Peru"){  
    return `El user es ${nickname} con nivel ${level}`
}
    else {
     return`Oye tu${nickname}, no eres peruano`   
    }    
}
console.log ("Datos del User",mostrarUserPeruano(usuario));

//segunda Rpta (Usando operadores ternarios),-

const validarUsuario =(UsuarioPeruano)=> {
    const {location, nickname, level}=UsuarioPeruano;
    return location==="Peru" ? `EL usuario es ${nickname} con nivel ${level}`
    :` Oye, ${nickname}no eres peruano`
}
console.log ("Datos del Usuario",validarUsuario(usuario));








