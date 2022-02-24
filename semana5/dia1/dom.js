//! Dom Document Object Model, este atributo me va a permitir obtener
//! los elementos de html, para que JS pueda acceder a ellos


//?Obteniendo elementos en base a su tag (etiqueta):

//?Como tengo 04 elementos con el tagname input, esto será un array de inputs:

const inputs=document.getElementsByTagName("input");
//console.log("inputs",inputs);


//?Como tengo 01 elemento con el tagname form, esto será un array de form:
const form=document.getElementsByTagName("form");
//console.log("form",form);

const button=document.getElementsByTagName("button");
//console.log("button",button);

const newInputs=Array.from(inputs);
console.log("inputs",inputs);
console.log ("newinputs",newInputs);

//?Accediendo a los elementos, mediante el map a inputs.
//?accedemos a html desde js.

newInputs.map ((newInput)=>{
console.log("newInput",newInput);
});


//!Acceder a los elementos mediante el Name:

const divContent= document.getElementsByName("div");
console.log ("DivContent", divContent);

const newDivContent=Array.from(divContent);
console.log(newDivContent);
newDivContent.forEach((element)=> {
    console.log(element);
});

//!Acceder a los elementos del Dom,  por el ID
//!Recordar que podemos asignarle un id a cualquier elemnto del html.

//?Esta variable solo sera para mi email:

const inputEmail = document.getElementById("input_email");
inputEmail.style.color="#f10";
inputEmail.style.backgroundColor="#f153";


console.log("inputEmail",inputEmail);
//?Asi accedo al value de mi input:
console.log("inputEmail",inputEmail.value);

//?Esta variable solo sera para mi Password:

const inputPassword= document.getElementById("input_password");
inputPassword.style.backgroundColor="#000";
inputPassword.style.color="#f10";
console.log("inputPassword",inputPassword.value);

//!Vamos a obtener elementos por su class.
//!En JS al class se le traduce como className

//?Accediendo a los elementos mediante el ClassName:

const inputsName= document.getElementsByClassName("input_name");
console.log("inputsName",inputsName.value)//=>aquí saldra Undefined
console.log(inputsName);  //=>aqui podremos visualizar en consola

//usamos el array.from para transformarlo a array
const newInputsName =Array.from(inputsName);
newInputsName.forEach((input)=> {
    console.log(input.value);
})

//? accedo por className a btn-registro:

const buttons= document.getElementsByClassName("btn_registro");
console.log(button);


































