//

function imprimir() {
console.log("Hola mundo desde una function");
  };
  // La idea es tener una función que reciba un parámetro
  // el cual me indique si es:  +  -  *  /
  // En base a ese parámetro  se llama a la función que 
  // necesite del archivo operaciones.
  
  function calculadorHTML(operacion) {

    // obtener el valor de los inputs, usaré querySelector:
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;

    // validamos que los datos  estén vacios para poder operar
    // y uso return, para detener la validación:  
    if (numero1 === "" || numero2 === "") {
      alert("Debe completar los campos");
      return;
    }
  
    // una vez que validé los campos debo hallar la operación
    // necesito una variable que se encargue de guardar el resultado
    let resultado = 0;

    if (operacion === "+") {
      resultado = sumar(numero1, numero2);
    }
  
    if (operacion === "-") {
      resultado = restar(numero1, numero2);
    }
  
    if (operacion === "*") {
      resultado = multiplicar(numero1, numero2);
    }
  
    if (operacion === "/") {
      resultado = dividir(numero1, numero2);
    }
  
    // para acabar debo mostrar el resultado en mi html:
    const p = document.createElement("p");

    const value = document.createTextNode(resultado);

    p.appendChild(value);

    const contenedor = document.querySelector("#resultado");

    contenedor.appendChild(p);
  };
  