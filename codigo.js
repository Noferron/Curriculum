
let nombre= "";

let botonPresentacion = document.getElementById("botonPresentacion");

botonPresentacion.addEventListener("click",function nombrar(){
    nombre= document.getElementById("nombre").value;
    let presentacion = (`Bienvenido/a ${nombre} a mi curriculum, aquí puedes ver mis experiencias y formaciones. Muchas gracias.`);
    document.getElementById("presentacion").textContent = presentacion;
    deshabilitado();
    start ();
})

let contacto = document.getElementById("contacto");
let formacion = document.getElementById("formacion");
let experiencia = document.getElementById("experiencia");
let enlaces = document.getElementById("enlaces");
let fechas = document.getElementById("fecha");
let valorar = document.getElementById("valorar");
let logo = document.getElementById("apt");

function deshabilitado(){
   contacto.style.opacity ="1";
   formacion.style.opacity ="1";
   experiencia.style.opacity ="1";
   enlaces.style.opacity ="1";
   fechas.style.opacity ="1";
   valorar.style.opacity ="1";
   logo.style.opacity ="1";
}

let img ;

function start() {
    img = document.getElementById("contacto");
    img.style.animationPlayState = "running";
    console.log("funciona");
    formacion.style.animationPlayState ="running";
    logo.style.animationPlayState = "running";

}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contacto").addEventListener("click", start);
    document.getElementById("formacion").addEventListener("click", start);

});

