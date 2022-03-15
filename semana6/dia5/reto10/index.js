

const containerElements=document.querySelector("#container-elements");


//La función obtenerData, es la primera función, que se conecta al API, esta función pedirá 
//los datos que necesitamos de Rick & Morty, la obtenemos con el fetch y también con
//await que se aplica solo con funciones asíncronas para esperar que se ejecute el código
// línea por línea y nos devuelva un array de objetos.
//La parte de results es la parte de info del personaje.
//al usar la funcion render data, esta recibe el array con los 20 personajes, el result.

const obtenerData= async ()=> {
    const response =await fetch("https://rickandmortyapi.com/api/character");
    const data=await response.json();
    console.log(data.results);
    renderData(data.results);
};


//En la función showDetail, esta recibe el parámetro characterUrl del personaje
//Luego extrae su información en un json
//Seguidamente guarda la imagen en LocalStorage.
//Finalmente la pagina se re-dirije a la URl de detalle.html

const showDetail=async(characterUrl)=>{
   
const response=await fetch (characterUrl)
const data=await response.json();

//Ahora guardaremos la informacion del character en localStorage, y usaremos
//siempre JSON.stringify para trasformarlo en string y trabajar el objeto data.
localStorage.setItem("character",JSON.stringify(data));
//localStorage.setItem("img",data.image);

const url="http://127.0.0.1:5500/semana6/dia5/reto10/detalle.html ";
 window.location.href= url;

};

//Cuando llamanmos a render data, le paso data.results, es decir data=data.results
//al ser data un array, lo iteraremos con map, y este retornara algo a la variable html
// la variable html, es igual a la estructura del card inicial y en cada iteracion
// agregara los card x20 vueltas,al container element
const renderData=(data)=>{
    data.map((character)=>{
        const html= ` 
        <div class="col-md-3 mb-5">
        <div class="card link" onclick="showDetail('${character.url}')">
            
            <div class="card-body card-custom-body"
            style=
            "background: linear-gradient(
            0deg,
            rgba(0,0,0,0.3),
            rgba(0,0,0,0.3)
            ),
            url(${character.image});">  
            
            <span class="badge bg-success">${character.status}</span>
                <h4 class="text-white mt-2">${character.name}</h4>
                <div class="d-flex justify-content-between w-100 text-white">
                  <div>
                    <span> <i class="fa-solid fa-earth-americas"></i>&nbsp;${character.origin.name}</span>
                  </div>
                  <div>
<span> <i class="fa-solid fa-clapperboard"></i>&nbsp; ${character.episode.length}  </span>
          </div>
     </div>    
</div>
    </div>
        </div>
            </div>

`;


//el containerElements es la parte del html 
//con el div padre,que tiene el id=container-elements 
//y aqui se agregaran += la partedel html y en cada vuelta se creen los div 
//que se necesiten, dentro del div padre.
containerElements.innerHTML +=html;
    });
};

obtenerData();
