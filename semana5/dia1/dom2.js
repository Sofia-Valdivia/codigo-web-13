//! querySelector y querySelectorAll
//! hnos menores de getElementById, get ElemntByClassName y getElementByTagName
//!Ambas funciones permiten poder usar elementos de html, en JS.
//! Es decir podermos acceder a sus propiedades
//!El querySelector siempre devuelve solo un elemento.


//?Con Class(no olvidar usar el .  para className):

const inputName=document.querySelector(".input_name");
console.log(inputName);

//?Con Id (No olvidar usar el # para id):

const inputEmail=document.querySelector("#input_email");
console.log(inputEmail.value);

//?Con TagName:

const form=document.querySelector("form");
console.log(form);

//!Query selectorAll,  permite acceder a más de un elemento a la vez.
//!Esto retorna un Node list(no un html collection) y es compatible con forEach,
//! no necesito el Array.from, puedo acceder a los values directamente,
//! ojo, filter no es compatible,si necesito tengo que crear un array vacio 
//!para transformarlo y usar el filter, si estoy necesitando su uso.

const inputs=document.querySelectorAll("input");
inputs.forEach((input)=>{
    console.log(input.value);
});

//?Quiero filtar a los inputs que sean de tipo, texto:

const arrayInputsText=[];
const inputText =inputs.forEach((input)=>{
    if (input.type ==="text"){
        arrayInputsText.push(input);
    }
});
console.log(arrayInputsText);




//Ahora convirtiendo a un array para poder usar el filter en lugar de forEach:
const arrayConvertidoInputs=Array.from(inputs)
console.log(arrayConvertidoInputs);

const arrayConvertidoFilter = arrayConvertidoInputs.filter(
    (input)=>input.type==="text"
);
console.log("arrayConvertidoFilter",arrayConvertidoFilter);





