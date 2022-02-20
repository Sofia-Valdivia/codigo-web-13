
//! Map => bucle     que nos permite leer arrays y objetos de forma sencilla.
//! Map => retorna   un array, esto lo hace especial.
//! Map => ligado    array de objetos, por lo general está.


//?Array de productos:

const productos = [
{
name: "Laptop",
price: 1500,
},
{
name: "Celular",
price: 2300,
},
{
name:"Monitor",
price: 1000,
},

];

productos.map ((producto,index)=> {
console.log ("Indice",index);
console.log ("Producto", producto.price);
});

//?Array de nombres:

const nombres =["Juan", "Pedro", "María", "José"];

nombres.map((nombre,index)=> {
    console.log(nombre);    
}
);

//? Array of objects from places:

const places =[
{
name:"Tecsup",
location:"San Salvador",
},
{
name:"Facilito",
location:"Lima",
},
{
name:"Platzi",
location:"Bogota",
},

];


places.map((place) =>{
console.log (place.name);
}
);

//! Podemos usar return, en un map por ende agregaremos una funcion que corresponda:

//Array Numeritos:

const numeritos=[1,2,3,4,5,6,7,8,9,10];
 
const operacionProducto=numeritos.map ((numerito)=> {
//Recordemos que map, retorna valores en cada iteración(vuelta de bucle)
return numerito * 2 ;
}
);
//Ahora en consola tendremos a los numeros originales multiplicados por 2.
console.log(operacionProducto);


//?Array de products:
//Modificar el precio por 2:

const products = [
    {
    name: "Laptop",
    price: 1500,
    },
    {
    name: "Celular",
    price: 2300,
    },
    {
    name:"Monitor",
    price: 1000,
    },
    
    ];

const preciosCyberWow =products.map((product)=> {
return {
    name:`CyberWow ${product.name}`,
    price:product.price *2,
};
}
);
console.log("precios CyberWow", preciosCyberWow);

//?Crear un array de números y calcular el cubo de cada número
//? y guardarlo en una variable:

const numerosCubo =[1,2,3,4,5,6,7,8,9,10];

const resultado=numerosCubo.map((numero)=>{
    return Math.pow (numero,3);
}
);
console.log (resultado);
//Como este código puede ser ejecutado en una sola línea, se puede
//hacer una in-line function, aquí no usamos return:
const resultado2=numerosCubo.map((numero)=>Math.pow (numero,3));

console.log (resultado2);

//?Crear un programa de la tabla de multiplicar del 1 al 10:

const imprimirTabla = (numero) => {
  //Creamos un array vacio de  10 elementos:
  const arrayDiez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  arrayDiez.map((tabla, index) => {
    console.log("producto", numero * (index + 1));
  }
  );
};

imprimirTabla(10);














