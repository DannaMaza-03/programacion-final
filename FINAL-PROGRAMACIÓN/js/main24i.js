"use strict"
let vPersonaje = document.getElementById("personaje");
let flechaDerecha = false;
let flechaIzquierda = false;
let flechaArriba = false;
let flechaAbajo = false;
let sinPresionar = true;

let posicionX = 0;
let velocidadX = 10;
let posicionY = 0;
let velocidadY = 10;



let fotograma = 1;
const animar = () => {
    if (sinPresionar && !flechaArriba && !flechaAbajo) {
        vPersonaje.src = "adventure/idle (" + fotograma + ").png";
    }

    if (flechaDerecha) {
        vPersonaje.src = "adventure/run (" + fotograma + ").png"
        mover(1,0);
    }

    if (flechaIzquierda) {
        vPersonaje.src = "adventure/run (" + fotograma + ").png"
        mover(-1,0);
    }

    if (flechaArriba) {
        vPersonaje.src = "adventure/jump (" + fotograma + ").png"
        mover(0,-1);
    }

    if (flechaAbajo) {
        vPersonaje.src = "adventure/slide (" + fotograma + ").png"
        mover(0, 1);
    }

    fotograma++;
    if (fotograma === 5) {
        fotograma = 1
    }
}

const mover = (orientacionX, orientacionY) => {
    posicionX += orientacionX * velocidadX;
    posicionY += orientacionY * velocidadY

    if (posicionX < 0) posicionX = 0;
    if (posicionY < 0) posicionY = 0;
    if (posicionX > window.innerWidth - vPersonaje.offsetWidth) {
        posicionX = window.innerWidth - vPersonaje.offsetWidth;
    }
    if (posicionY > window.innerHeight - vPersonaje.offsetHeight) {
        posicionY = window.innerHeight - vPersonaje.offsetHeight;
    }

    vPersonaje.style.left = posicionX + "px";
    vPersonaje.style.top = posicionY + "px"
    vPersonaje.style.transform = "scaleX(" + (orientacionX >= 0 ? 1: -1) + ")";
}

document.body.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            flechaDerecha = true;
            sinPresionar = false;
            break;

        case "ArrowLeft":
            flechaIzquierda = true;
            sinPresionar = false;
            break;

        case "ArrowUp":
            flechaArriba = true;
            sinPresionar = false;
            break;

        case "ArrowDown":
            flechaAbajo = true;
            sinPresionar = false;
            break;
    }
})

document.body.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ArrowRight":
            flechaDerecha = false;
            sinPresionar = true;
            break;

        case "ArrowLeft":
            flechaIzquierda = false;
            sinPresionar = true;
            break;

        case "ArrowUp":
            flechaArriba = false;
            sinPresionar = true;
            break;

        case "ArrowDown":
            flechaAbajo = false;
            sinPresionar = true;
            break;
    }
})



setInterval(animar, 50);