//console.log(localStorage.getItem("img"));
//const imgDetail=document.querySelector("#img-detail");

//imgDetail.src=localStorage.getItem("img");
//*JSON.parse convierte un string a un JSON (objeto)
//*JSON debe ir en mayúscula en esta combinación.

const objetoPeople=JSON.parse(localStorage.getItem("people"));
console.log(objetoPeople);
const imgDetail=document.querySelector("#img-detail");
const statusPeople=document.querySelector("#gender");
const namePeople=document.querySelector("#name");
const birthYearPeople=document.querySelector("#birth_year");

//genderPeople.innerHTML=objetoPeople.gender;
namePeople.innerHTML=objetoPeople.name;
birthYearPeople.innerHTML=objetoPeople.birth_year;
imgDetail.src=objetoPeople.image;

//Por revision//