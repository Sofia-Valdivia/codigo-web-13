//Lógica para el Pokedex
//!Paso 1
//Creamos una función para obtener los DATOS, usaremos GET, y luego de console.log
//llamaremos a la función Obtenerpokemones, asi en el live server, en consola podemos visualizar
//los datos obtenidos en objeto y dentro de result estarán data y todos los pokemones que trabajaremos,
//al usar querySelector, trabajaremos el id row-pokemons que le dimos al <div> en html,
//que estaba dentro de <section class=container>, tambien en html:

//!Paso2
//Usamos async() de manera obligatoria, porque no se cuanto demorara la funcion para obtener a los datos
// y await fetch que llama a la url de dónde se sacaran estos datos, es decir que esperare que una linea
// se procese await y luego pase a la segunda linea de busqueda del enlace fetch y me devuelva el response json, uno por uno.

const pokemonContainer=document.querySelector("#row-pokemons");

const pokemonName=document.querySelector("#pokemon-name");
const pokemonImage=document.querySelector("#pokemon-img");
const pokemonAbility=document.querySelector("#pokemon-ability");

const obtenerPokemones= async()=>{  
const response=await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");



const data=await response.json();

console.log(data.results);
  setPokemonsInView(data.results);
};
//Creamos una funcion para pintar los pokemons y una funcion para jalar la url de la imagen de los pokemones
//Para insertar la imagen la saco de pokeapi ,Resource for ditto,dream_world,url y al aplicar la función le agrego index +1, 
//para que vayan saliendo uno por uno, contando desde el índice 0:

const setPokemonsInView=(results)=>{
  const imgUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"
  results.map(async(result,index)=>{
    //En cada iteración agrega un elemento en la variable html
    //y se ordenan en cuatro columnas(col-md-3), es decir ocupan el 25%de la pantalla  y un margin top de 3(mt-3)
    //Aquí tambien aplicamos la función que previamente creamos para insertar las imagenes de los pokemones.
    //No olvidar poner el index +1
    const bgColor=await getColorPokemon(index+1);
    console.log("bgColor",bgColor);
    
    const html=`   
    <div class="col-md-3 mt-3"> 
     <div class='card'style='background-color:${bgColor}'>
     <img
     class='card-img-top mt-2'
     width='100' 
     height='100'
     src='${imgUrl}${index +1}.svg'>

      <div class='card-body text-center'>

      <h6 class='text-title text-secondary'>N° ${index +1}</h6>
        <h4 class='text-title'>${result.name},</h4>
        </div>
       <button class='btn btn-primary' onclick='obtenerDetallePokemon("${result.url}" )' data-bs-toggle='modal' data-bs-target='#modalPokemon'>Ver Detalle</button>
      </div>
    </div>
    `;
      //Ahora que la iteracion creo 20 elementos,para insertar los elementos al container
      //usaremos innerHTML(ya no un appendChild):
     pokemonContainer.innerHTML +=html;
  })
};

//la funcion obtenerDetallePokemon se ejecutara al darle click al boton ver detalle:
const obtenerDetallePokemon=async (url)=> {
  const response=await fetch(url);
  const data =await response.json();
  console.log("detalle",data);
  
  pokemonName.innerHTML=data.name;
  pokemonImage.src = data.sprites.other.dream_world.front_default;
  pokemonAbility.innerHTML=data.abilities[0].ability.name;
  
}

obtenerPokemones();

const getColorPokemon=async(id)=>{
  const response=await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
   );

const data=await response.json();
const color={
  red:"rgba(255,48,50,05)",
  green:"rgba(25,108,0,10)",
  blue:"rgba(113,104,226,0.7)",
  brown:"rgba(70,78,60,02)",
  purple:"rgba(125,85,78,10)",
  pink:"rgba(255,99,75,0.5)",
  yellow:"rgba(229,216,0,0.6)",
};
return color [data.color.name];

};



