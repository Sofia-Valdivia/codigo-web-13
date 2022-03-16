//!Promesa=>Sirve para ejecutar algo asíncrono
//cuando hacemos una petición a un API, esta petición tiene un tiempo de espera,
//a veces es rápido otras veces es lento.

//primera forma, en la cual vamos a crear una promesa.
// la clase que se encarga de instanciar es new Promise

const promesa=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Todo bien amigos de Código!");
    },3000);    
});

//Ahora Ejecutamos la promise
async function getDataFromPromesa(){
    const respuesta=await promesa;
    console.log(respuesta);
}
getDataFromPromesa();

//Segunda forma de leer una promesa, existía antes del async await 
//se llama .then()=>entonces o luego.
//.then(callback)
// donde call back es una funcion que ejecuta algo en base a unn resultado
//y guardalo en respuesta.
promesa.then((respuesta)=>{
    console.log("then",respuesta);
});

//!What if:
//que pasaría si tenemos muchas peticiones, es mucho más largo y no resulta eficiente
//no debe usarse la segunda forma .then

// que pasaria si tenemos muchas peticiones anidades
// supongamos que tenemos 5 peticiones
// async function peticiones() {
//   const primera = await fetch("primera");
//   const respimera = await primera.json();
//   const segunda = await fetch("segunda");
//   const ressegunda = await segunda.json();
//   const tercera = await fetch("tercera");
//   // const respimera = await primera.json();
//   const cuarta = await fetch("cuarta");
//   // const respimera = await primera.json();
//   const quinta = await fetch("quinta");
//   // const respimera = await primera.json();
// }

// peticiones
//   .then((primera) => {})
//   .then((primerares) => {
//     console.log(primerares.json());
//   })
//   .then((seguna) => {})
//   .then((tercra) => {})
//   .then((cuarta) => {})
//   .then((quinta) => {});

// veamos una promesas con errores
const promesaConError = (validacion) => {
    return new Promise((resolve, reject) => {
      if (validacion) {
        resolve("la validacion esta ok");
      } else {
        // new Error es una clase de JS la cual nos permite retornar con mensaje
        reject(new Error("Error en la validacion"));
      }
    });
  };
  
  // veamos como poder validar un error usando .then()
  promesaConError(true)
    .then((resuesta) => {
      console.log(resuesta);
      // para poder detectar un error usamos el .catch()
      // si algo esta mal automaticamente entra al .catch()
    })
    .catch((error) => {
      console.log(error.message);
    });
  
  // vamos a validar un error usando async await
  const validacionAsync = async () => {
    // la forma en cual podemos validar error en una funcion normal es
    // con try catch
    try {
      // aca va a intentar obtener el resultado de la peticion
      const respuesta = await promesaConError(false);
      console.log("validacionAsync", respuesta);
    } catch (error) {
      // si detecta un error automaticamente entra al catch
      console.log("validacionAsync", error.message);
    }
  };
  validacionAsync();
  
  
// !Recomendacion
//* Siempre que hagamos una peticion acompañemos de un try catch

// Ejemplo real
// const getUserGitHub = async () => {
//   try {
//     const response = await fetch("https://api.github.com/users/cvxcvxcv");
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// getUserGitHub();

// veamos un poco de lo que es un status code
// un status code es un numero que retorna una peticion
// 200, 500, 401, 403, 404, 201, 512
// Si una peticion nos devuelve un status que sea 200, 201
// que la respuesta es ok
// 200 = ok
// 201 = ok y ademas significa que algo ha sido creado

// Si la url response un 500, 404, 512
// Hay un error
// 404 => Es el error que muestra cuando no encuentra la url, es decir la direccion no existe
// 500 => Es el error que retorna cuando hay un problema en el servidor
// 512 => Es un error de espacio en el servidor









