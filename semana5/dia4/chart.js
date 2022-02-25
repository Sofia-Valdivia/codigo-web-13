
//! Chart de tipo BARRA:

const contenedorBarChart=document
.querySelector("#bar-chart")
.getContext("2d");

const barChart=new Chart(contenedorBarChart,{
    type:"bar",
    data:{
        labels:[
        "Lunes",
        "martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
        "Domingo",
    ],
    datasets :[{
        label:"Numero de user por día",
        data:[20,40,10,100,50,75,200],
        borderWidth:3,
        borderColor:"#808080",
        backgroundColor:["#f56","#ba1","#00ffff","#eda","#234","#800080"],
    },
],
    },
});

//! Chart tipo Dona:

const containerDoughnutChart=document.querySelector("#doughnut-chart").getContext("2d");

//Esto es para los datos:
const dataForChart={
labels:[
"Computadoras",
"Celulares",
"Refrigeradoras",
"Parlantes",
],
datasets:[
    {
label:"PRODUCTOS ELECTRONICOS",
data:[100,230,520,267],
backgroundColor:["#00ffff","#ff00ff","#00ff00","#ffff00"]
    },
],

};

//Esto para el tipo y dar la configuración de datos.
const config ={
    type:"doughnut",
    data:dataForChart,
};
//Ahora para la creación:
const donutChart=new Chart (containerDoughnutChart,config);


//! Chart Tipo Lineal:

const containerLineChart = document
  .querySelector("#lineal-chart")
  .getContext("2d");

const configLineal = {
  type: "line",
  data: dataForChart,
};

const lineChart = new Chart(containerLineChart, configLineal);

//!Chart tipo Burbuja:

const containerBubbleChart = document
  .querySelector("#bubble-chart")
  .getContext("2d");


//? He tomado a dataForChart y estoy accediendo a la propiedad data y cambio su valor:
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 30,
    r: 15,
  },
  {
    x: 40,
    y: 10,
    r: 10,
  },
];

const configBubble = {
  type: "bubble",
  data: dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble);

//! Chart tipo Polar:
const containerPolarChart=document.querySelector("#polar-chart") .getContext("2d");

dataForChart.datasets[0].data=[300,149,321,678];

const configPolar = {
    type: "polarArea",
    data: dataForChart,
  };
  
  const polarChart=new Chart(containerPolarChart,configPolar);


//!Chart Tipo Radar:
  const containerRadarChart=document.querySelector("#radar-chart") .getContext("2d");

  
  const configRadarChart = {
      type: "radar",
      data: dataForChart,
    };
    
const radarChart=new Chart(containerRadarChart,configRadarChart);
  

//!Chart tipo Scatter:

const containerScatterChart=document.querySelector("#scatter-chart") .getContext("2d");

dataForChart.datasets[0].data=[
{
x:-10,
y:0,},

{
x:0,
y:10,
},

{
  x:10,
  y:5,  
},

{
x:0.5,
y:5.5,
},

];

const configScatter ={
    type: "scatter",
    data: dataForChart,
};
  
const scatterChart = new Chart(containerScatterChart, configScatter);

