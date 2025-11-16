let objJuego;
let img = [];
let moro = [];
let fondo;
let acme
let sjj;
let inicio;
let instrucciones;


function preload() {
  
  fondo = loadImage("assets/img0.jpg");
  for (let i=0; i<17; i++) {
    img[i] = loadImage("assets/img"+i+".png");
  }
   for (let i=0; i<12; i++) {
    moro[i] = loadImage("assets/Moro"+i+".png");
  }
  
  inicio =  loadImage("assets/Pantallas/inicio.jpg");
  instrucciones =  loadImage("assets/Pantallas/instruccion.jpg");
  
  acme = loadFont("fuente/acmeBold.ttf");
  sjj = loadFont("fuente/Saiyan-Sans.ttf");
}

function setup() {
  createCanvas( 640, 480);
  objJuego = new Pantalla();
}


function draw() {
  objJuego.dibujar();
}

function keyPressed() {
  objJuego.teclaPresionada(keyCode);
}

function mousePressed(){
  objJuego.estados();
}

