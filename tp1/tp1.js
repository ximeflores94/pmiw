//https://youtu.be/fSsevST2V-c

//Definición de variables a utilizar
let reference;
let cant = 40;
let tam = 40;
let negro, blanco;

function preload() {  //aca se cargan los archivos externos
  reference = loadImage ("assets/referencia.png");
}

function setup() {  //void
  createCanvas( 800, 400 );  //setup
  negro = color(0);
  blanco = color(255);
  noStroke();
}


function draw() {

  background( 255 );
  image( reference, 0, 0 );
  ilusion();
}

function keyPressed() {
  if ( key === ' ')
  {
    reiniciar();
  }
}
