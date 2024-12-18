"use strcit"
//for(let anguloC=0; anguloC<=1800; anguloC+=5){ 
let anguloC = 0;

const crearPelota = () => { 
let pelota = document.createElement("div");
pelota.className = "pelota";
pelota.style.left = anguloC+ "px";
let anguloR = anguloC * Math.PI/180;
pelota.style.top = Math.cos(anguloR)*100+200 + "px"; //usando coseno
console.log (Math.cos(anguloR))
document.body.appendChild(pelota);
anguloC++;
}
//} 

setInterval(crearPelota, 20)