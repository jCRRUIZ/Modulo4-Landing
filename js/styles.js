function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}
const boton-encabezado = document.querySelector("#boton-encabezado");

boton-encabezado.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        boton();
    }
});

