//Este sera el archivo con el que trabajare hoy
import express from "express";

//ahora importaremos la variable movies con import
import{arrayMovies}from "./movies.js";
const app =express();

//para poder crear nuestras rutas
// creare archivo movies para guardar array objetso


app.get("/movies",(req,res)=> {
    res.json(arrayMovies);
});
app.listen(3000,()=>
console.log("Servidor iniciado en http://localhost:3000"));




