//! querySelector y querySelectorAll
//! hno menor de getElementById, get ElemntByClassName y getElementByTagName
//!Ambas funciones permiten poder usar elementos de html, en JS.
//!El querySelector siempre devuelve un elemento.


//Con Class
const inputName=document.querySelector(".input_name");
console.log(inputName);

//Con Id
const inputEmail=document.querySelector("#input_email");
console.log(inputEmail.value);

//Con TagName
const form=document.querySelector("form");
console.log(form);

//!Query selectorAll permite acceder a más de un elemento a la vez.
//!Esto retorna un Node list y es compatible con forEach:
const inputs=document.querySelectorAll("input");
inputs.forEach((input)=>{
    console.log(input.value);
});

//Quiero filtar a los inputs que sean de tipo, texto:
const arrayInputsText=[];
const inputText =inputs.forEach((input)=>{
    if (input.type ==="text"){
        arrayInputsText.push(input);
    }
});
console.log(arrayInputsText);
//Ahora convierto mi array:
const arrayConvertidoInputs=Array.from(inputs)
console.log(arrayConvertidoInputs);

const arrayConvertidoFilter = arrayConvertidoInputs.filter(
    (input)=>input.type==="text"
);
console.log("arrayConvertidoFilter",arrayConvertidoFilter);





