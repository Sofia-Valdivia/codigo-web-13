
//!JS, tiene el poder de escribir en el dom, asi como puede 
//!obtener los elementos, JS puede escribir, alterar,
//!aumentar,etc. en el dom. Es un lenguaje muy poderoso.


document.write("Hola Mundo");
document.write("Hola Mundo2");
document.write("Hola Mundo3");


//const numero1= +prompt ("numero1");
//const numero2= +prompt ("numero2");

//document.write(numero1+numero2);

//! document.write (text)  =>permite escribir en el dom, 
//! document.write (text)    se ubica debajo de la etiqueta script

//!Crear un elemento en html:

//?Agregar a una lista ul con elementos li; 
//?al  <div id ="container-list"></div> de html:


//?Primera Forma:
/*const containerList =document.querySelector("#container-list");
//ahora a crear el ul

const ul= document.createElement("ul");
ul.className="lista";

//Ahora creo un li y creo un contenido, para li
const li1 =document.createElement("li");
const contenido=document.createTextNode("BMW M4");

//Agrego el contenido creado a li1 y luego li1 a ul
//En JS con appendChild, podemos agregar un elemento a otro:
li1.appendChild(contenido);
console.log(li1);
ul.appendChild (li1);
console.log(ul)
containerList.appendChild(ul);*/

//?Segunda forma:

//Creare una lista dinámica, en base a datos que tengo en inputs:

const inputs=Array.from(document.querySelectorAll("input"));
// obtendo mi contenedor: 
const contenedor=document.querySelector("#container-list");
//Creemos un ul desde JS:
const ul=document.createElement("ul");
//Ahora llenaré mi lista:
//pero primero debo convertir mi nodelist a un array.
//ahora itero a mi lista
inputs.map((input)=>{
 //ahora en la iteración, debo crear cada elemento de mi lista a "li"  
const li= document.createElement("li");
//ahora debo crear un valor para li, extraemos el calor del: input value.
//createTextNode, crea valores a elementos html.
const elementText=document.createTextNode(input.value);

//Ahora inserto el valor extraido a  mi etiqueta li.
li.appendChild(elementText);

//Ahora inserto mi etiqueta li con sus valores, a mi lista ul
ul.appendChild(li);
});

//Como mi lista esta llena, ahora la inserto al contenedor:
contenedor.appendChild(ul);


//*Para acceder a todo mi body
const body =document.body;
body.style.backgroundColor="#f96";
body.style.fontFamily="Helvetica";

//?Acceder al head:
//?aqui podemos acceder al title,

const head =document.head;
//?podemos decir que en Js todo es un objeto











