//Vamos a combianr los objetos del as dos url para tarbajar

const URL_STAR_WARS="https://swapi.dev/api/people";
const URL_SW_IMAGES="https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars=async()=>{
    const response=await fetch(URL_STAR_WARS);
    const data =await response.json();
    //console.log(data.results);
   await getImageFromStarWars(data.results);
};
const getImageFromStarWars=async(actors)=>{
const response=await fetch(URL_SW_IMAGES);
const imagenes=await response.json(); 

actors.map(async(actor)=>{
        //la idea es que por cada iteracion se pueda extraer la foto del API de URL_SW_IMAGES
        
const resultado=imagenes.filter((imagen)=>imagen.name===actor.name);
 actor.imageFromAPI=resultado[0].image;
});       
console.log(actors);
};    
    
getDataFromStarWars();

