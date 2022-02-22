//!JS, tiene el poder de escribir en el dom, asi como puede 
//!obtener los elementos, JS puede escribir, 
//!Alterar aumentar,etc. en el dom.


document.write("Hola Mundo");
document.write("Hola Mundo2");
document.write("Hola Mundo3");


//const numero1= +prompt ("numero1");
//const numero2= +prompt ("numero2");

//document.write(numero1+numero2);

//? document.write (text)  =>permite escribir en el dom, 
//?se ubica debajo de la etiqueta script

//!Crear un elemento en html:

//?Agregar a una lista ul, elementos li:

const inputs=Array.from(document.querySelectorAll("input"));
const contenedor=document.querySelector("#container-list");
//Creemos un ul desde JS:
const ul=document.createElement("ul");
//Ahora llenaré mi lista:
//pero primero debo convertir mi nodelist a un array.
//ahora itero a mi lista
inputs.map((input)=>{
 //ahora en la iteración, debo crear cada elemento de mi lista a "li"  
const li= document.createElement("li");
//ahora debo darle un valor a  mi li, es un input value.
//createTextNode, crea valores a elementos html
const elementText=document.createTextNode(input.value);
//Ahora inserto el valor en mi etiqueta li
li.appendChild(elementText);
//Ahora agrego mi etiqueta li llenada, a mi lista ul
ul.appendChild(li);
});
//Como mi lista esta llena, ahora la agrego al contenedor:
contenedor.appendChild(ul);


//*Para acceder z todo mi body
const body =document.body;
body.style.backgroundColor="#f96";
body.style.fontFamily="Helvetica";

//?Acceder al head:
//?aqui podemos acceder al title,

const head =document.head;
//?podemos decir que en Js todo es un objeto











