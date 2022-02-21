
//!Diferencia entre map y forEach
//* map=>retorna un array.
//* forEach=>no retorna, solo itera sobre cada elemento del array.

//?Array de objetos=mascotas
const mascotas=[
{nombre:"Pulga", edad: 2},
{nombre:"Pug", edad:12},
{nombre: "Gatito", edad:15},
{nombre:"Perro", edad:4},
{nombre:"Araña", edad:8},
{nombre:"Burro",edad:1},
{nombre:"Conejo", edad:5},
];

//Quiero que a la edad de las mascotas se les sume 5:

const sumarEdad =mascotas.map((mascota)=> {
    return {
        name:`Mascotita ${mascota.nombre}`, edad:mascota.edad+5,
    };
    }
    );
    console.log("Mascotita", sumarEdad);

//Si solo quiero ver las edades modificadas + 2:

const edadMascotas=mascotas.map ((mascota)=>
mascota.edad + 2);
console.log (edadMascotas);

//Quiero imprimir solo a las mascotas de mas de 5 años:

const mascotasMayores=mascotas.map ((mascota)=>

{ if (mascota.edad >5){ return mascota;} } );

console.log("mascotas mayores",mascotasMayores);

//!Filter   Bucle hno. de map, tambien retorna un array.
//!filter   filtra información

//Usaremos filter, para imprimir solo a las mascotas mayores de 5 años, 
//ya no se viasualizan las otras con Undefined:

const mascotasMayorcitas=mascotas.filter((mascota)=>
mascota.edad>5);

console.log("las mascotas mayores", mascotasMayorcitas);

//Usando filter, imprimir solo a las mascotas que tengan la edad par:
const mascotasPar=mascotas.filter((mascota)=>
mascota.edad % 2 ===0);

console.log ("mascotas edad par", mascotasPar);

//?Teniendo el sgte. array:

const cursos=["HTML", "CSS","JS", "PHP", "Python"];

//Imprimir  solo CSS  y JS:

const cursosFiltrados=cursos.filter((curso)=>  
curso==="CSS" || curso==="JS"
);
console.log ("cursos pedidos", cursosFiltrados);

//?Con el sgte. array:

const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];

  //Hacer 03 variables, con tec JS, Phyton yPHP

  //Con JS:
  const cursotecJS=arregloCursos.filter((cursotec)=>  
  cursotec.tec==="JS"
  );
  console.log ("cursos pedidos", cursotecJS);

  //Con Python:

  const cursostec2=arregloCursos.filter((cursotec)=>  
  cursotec.tec==="Python"
  );
  console.log ("cursos pedidos", cursostec2);

  //Con PHP:

  const cursostec3=arregloCursos.filter((cursotec)=>  
  cursotec.tec==="PHP"
  );
  console.log ("cursos pedidos", cursostec3);

//Como las variables operadas se repiten, podemos
// crear en este caso una función que opere a las tres variables:


//Creemos la funcion transformarCursostec, donde:
//(array,tecsolicitada), son parametros 1 y 2 con nombres referenciales:
const transformarCursostec=(array,tecsolicitada)=>{

    return array.filter( (curso)=>curso.tec ===tecsolicitada);
};


//ahora que ya hice la función:transformarCursostec, la aplico,
//operando con el array arregloCursos.
const cursoJS=transformarCursostec(arregloCursos,"JS");
const cursoPython=transformarCursostec(arregloCursos,"Python");
const cursoPHP=transformarCursostec(arregloCursos,"PHP");

console.log ("cursos JS", cursoJS);
console.log ("cursos Python", cursoPython);
console.log ("cursos PHP", cursoPHP);














