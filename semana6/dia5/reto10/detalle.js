//console.log(localStorage.getItem("img"));
//const imgDetail=document.querySelector("#img-detail");
//imgDetail.src=localStorage.getItem("img");

//?JSON, parse convierte un string a un JSON (objeto):

const objetoCharacter=JSON.parse(localStorage.getItem("character"));

const imgDetail=document.querySelector("#img-detail");
const statusCharacter=document.querySelector("#status");
const nameCharacter=document.querySelector("#name");

//Location la declararemos como locationCharacter, para que sea aceptado
//y no choque como sentence reservada de JS:

const locationCharacter=document.querySelector("#location");
const origin=document.querySelector("#origin");
const episodes=document.querySelector("#episodes");
const species=document.querySelector("#especies");

statusCharacter.innerHTML=objetoCharacter.status;
nameCharacter.innerHTML=objetoCharacter.name;
imgDetail.src=objetoCharacter.image;

locationCharacter.innerHTML=objetoCharacter.location.name;
originCharacter.innerHTML=objetoCharacter.origin.name;
episodesCharacter.innerHTML=objetoCharacter.episodes.length;
species.innerHTML=objetoCharacter.species;
