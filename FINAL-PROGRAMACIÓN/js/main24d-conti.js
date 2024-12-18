"use strict"
let vBola = document.getElementById("bola");
let vCanyon = document.getElementById("canyon");

let posX = 150;
let posY = 300;
let intervalo;

let velocidad = 10;
let anguloU = 0;
let anguloS = 0;
let anguloR = 0;
let aceleracion = 0.1;

let velocidadX = 0;
let velocidadY = 0;

vBola.style.left = posX + "px";
vBola.style.top = posY + "px";

vCanyon.style.left = posX + "px"
vCanyon.style.top = posY + "px"
vCanyon.style.transformOrigin = "12.5% 50%"




const mover = () => {
    velocidadY += aceleracion;
    posX += velocidadX;
    posY += velocidadY;

    vBola.style.left = posX + "px";
    vBola.style.top = posY + "px";
}

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    switch (event.key) {
        case "Tab":
            anguloR = anguloS * Math.PI / 180;
            velocidadX = velocidad * Math.cos(anguloR);
            velocidadY = velocidad * Math.sin(anguloR);
            intervalo = setInterval(mover, 20);
            break;
        case "ArrowLeft":
            anguloU++;
            break;
        case "ArrowRight":
            anguloU--;
            break;
    }
    anguloS = -anguloU;
    document.title = anguloU;
    vCanyon.style.transform = "rotate(" + anguloS + "deg)"

})

window.addEventListener("mousemove", (event) =>{
    Document.title = event.pagex + " , " + event.pageY;
    anguloR = Math.atan2((event.pageY - parseInt(vCanyon.style.top)) , (event.pageX - parseInt(vCanyon.style.left)));
    anguloS = anguloR * 180 / Math.PI;
    anguloU = -anguloS;
    console.log(anguloS);
    vCanyon.style.transform = "rotate(" + anguloS + "deg)"
})