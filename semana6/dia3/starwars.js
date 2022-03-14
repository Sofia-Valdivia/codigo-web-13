

const containerElements=document.querySelector("#container-elements");
//La función obtenerData, es la primera funcion. que se conecta al API, esta funcion pedira 
//los datos que necesitamos de Starwars, la obtenemos con el fetch, y el await que se aplica
//solo con funciones asincronas para esperar que se ejecute el codigo linea por linea y nos
//devuelva un array de objetos.
//La parte de results es la parte de info del personaje
//al usar la funcion render data, esta recibe el array con los personajes, el result.

const obtenerData= async ()=> {
  const response =await fetch("https://swapi.dev/api/people");
   const data=await response.json();
 console.log(data.results);
 
renderData(data.results);
};
//En la funcion showDetail, esta recibe el parametro peopleUrl del personaje
//Luego extrae su informaciónen un json
//Seguidamente guarda la imagen en LocalStorage.
//Finalmente esta haciendo que la pagina se re-dirija a la URl de starwarsdetalle.html

const showDetail=async(peopleUrl)=>{

const response=await fetch (peopleUrl);
const data=await response.json();
console.log("people",data);

//localStorage.setItem("img",data.image);
//JSON.stringify, debe ir en mayúscula en esta combinación.
localStorage.setItem("people", JSON.stringify(data));

const url="http://127.0.0.1:5500/semana6/dia3/starwarsdetalle.html";
window.location.href= url;

};



const renderData=(data)=>{
    data.map((people)=>{
        const html= ` 
        <div class="col-md-3 mb-5">
        <div class="card link" onclick="showDetail('${people.url}')">
            
            <div class="card-body card-custom-body"
            style=
            "background: linear-gradient(
            0deg,
            rgba(0,0,0,0.3),
            rgba(0,0,0,0.3)
            ),
            url(${people.image});">  
            
            <span class="badge bg-success">${people.gender}</span>
                <h4 class="text-white mt-2">${people.name}</h4>
                <div class="d-flex justify-content-between w-100 text-white">
                  <div>
                    <span> <i class="fa-solid fa-cake-candles"></i>&nbsp;${people.birth_year}</span>
                  </div>
                  <div>
<span> <i class="fa-solid fa-clapperboard"></i>&nbsp; ${people.films.length}  </span>
          </div>
     </div>    
</div>
    </div>
        </div>
            </div>

`;

containerElements.innerHTML +=html;
    });
};

obtenerData();
