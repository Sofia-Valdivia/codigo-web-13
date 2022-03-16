const containerElements=document.querySelector("#container-elements"); 
 //Vamos a combianr los objetos del as dos url para tarbajar

const URL_STAR_WARS="https://swapi.dev/api/people";
const URL_SW_IMAGES="https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars=async()=>{
    const response=await fetch(URL_STAR_WARS);
    const data =await response.json();
    //console.log(data.results);
   await getImageFromStarWars(data.results);
   await setStarWarsInView(data.results);
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

const showDetail=async(actors)=>{

    const response=await fetch (actors);
    const people=await response.json();
    console.log("people",people);
    
    
    //JSON.stringify, debe ir en mayúscula en esta combinación.
    localStorage.setItem("people", JSON.stringify(people));
    
    const url=" http://127.0.0.1:5500/semana6/dia3/starwarsdetalle.html";
    window.location.href= url;
    
    };
const setStarWarsInView=(actor)=>{
        actor.map((actor)=>{

        const html= ` 
        <div class="col-md-3 mb-5">
        <div class="card link" onclick="showDetail('${actor}')">
            
            <div class="card-body card-custom-body"
            style=
            "background: linear-gradient(
            0deg,
            rgba(0,0,0,0.3),
            rgba(0,0,0,0.3)
            ),
            url(${actor.imageFromAPI});">  
            
            <span class="badge bg-success">${actor.gender}</span>
                <h4 class="text-white mt-2">${actor.name}</h4>
                <div class="d-flex justify-content-between w-100 text-white">
                  <div>
                    <span> <i class="fa-solid fa-cake-candles"></i>&nbsp;${actor.birth_year}</span>
                  </div>
                  <div>
<span> <i class="fa-solid fa-clapperboard"></i>&nbsp; ${actor.films.length}  </span>
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


   


//por revision//


getDataFromStarWars();

