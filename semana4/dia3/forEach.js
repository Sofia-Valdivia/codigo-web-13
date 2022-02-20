
//! ForEach   bucle que itera un arreglo.
//! ForEach   mezcla entre map y for.
//! ForEach   no retorna nada.


//?Array de numeros:

const numeros=[1,2,3,4,5,6,7,8,9,10];

numeros.forEach ((numero,index)=>{
console.log(numero);
}
);

//?Array de productos

const productostec = [
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
    
productostec.forEach((producto)=> {
    //dentro del forEach podemos hacer loq ue queramos:
    console.log(producto);
}
);
productostec.forEach((producto)=>console.log(producto.name));







