// Dark Mode

function darkMode(){
document.body.classList.toggle("dark");
}


// Follow Button

function followMe(){
alert("Thanks for following Devraj!");
}


// Typing Effect

let text = "Web Developer & Cybersecurity Learner";

let index = 0;

function typeEffect(){

if(index < text.length){

document.getElementById("typing").innerHTML += text.charAt(index);

index++;

setTimeout(typeEffect,100);

}

}

typeEffect();

// Matrix effect//

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = [];

for(let x = 0; x < columns; x++)
drops[x] = 1;

function draw(){

ctx.fillStyle = "rgba(0,0,0,0.05)";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.fillStyle = "#00ff9c";
ctx.font = fontSize + "px monospace";

for(let i = 0; i < drops.length; i++){

let text = letters[Math.floor(Math.random()*letters.length)];

ctx.fillText(text,i*fontSize,drops[i]*fontSize);

if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
drops[i] = 0;

drops[i]++;

}

}

setInterval(draw,33);

// Terminal Effect//

let message = "Initializing Devraj Cyber Portfolio...";
let i = 0;

function typeTerminal(){

if(i < message.length){

document.getElementById("terminal-text").innerHTML += message.charAt(i);

i++;

setTimeout(typeTerminal,50);

}

}

typeTerminal();

function startSite(){

document.getElementById("terminal").style.display = "none";

}

function toggleMenu(){

let menu = document.getElementById("navLinks");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}

}