function esBoton (x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}

function cajaTexto(x, y, ancho, alto) {
  push(); //Con el push y pop los colores y el stroke del rectangulo se aplicarán sólo al rectangulo.
  strokeWeight(2);
  fill(255);
  rect(x, y, ancho, alto);
  pop();
}

function reiniciarvariables() {
  movGokux = -230;
  movy = -200;
  movVegetax = 650;
  movMerusx = -230;
  posTextox = -450;
  posTexto1x = -450;
  posTexto2x = -450;
  posTexto3x = -450;
  posTexto4x = -450;
  posTexto5x = -450;
  posTexto6x = -450;
  posTextoy = 500;
  movGlobox = -700;
  posFlechax = -50;
  posFlecha2x = -50;
  posCaja1x = -400;
  posCaja2x = -400;
  posCaja3x = -400;
  posimg1 = -200;
  posimgy = 750;
  posimg2 = -200;
  posimg3 = -300;
  posimg4 = -200;
  posimg5 = -200;
  posimg6 = -200;
  posimg7 = -200;
  posBotonx = -300;
}

function botonHover(posx, posy, ancho, alto, size, indTexto, posTextox, posTextoy) {
  if (esBoton(posx, posy, ancho, alto)) {
    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(size);
    fill(236, 35, 36);
    text(texto[indTexto], posTextox, posTextoy);//inicio
    pop();
  } else {
    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(size);
    fill(255, 241, 0);
    text(texto[indTexto], posTextox, posTextoy);//inicio
    pop();
  }
}
function flechaHover(posx, posy, ancho, alto) {
  if (esBoton(posx, posy, ancho, alto)) {
    image(png[10], posx, posy);
  } else {
    image(png[15], posx, posy);
  }
}

function textSjj(iText, size, posTextox, posTextoy) {
  push();
  textFont(sjj);
  strokeWeight(5);
  stroke(0);
  textSize(size);
  fill(255, 241, 0);
  text(texto[iText], posTextox, posTextoy);
  pop();
}

function mostrarCreditos() {
  // Dibujar cada línea desplazada según su índice
  posTextoy -= 1;
  for (let i = 0; i < creditos.length; i++) {
push();
    if (i%2 === 0) {
      textFont(sjj);
      textSize(25);
      strokeWeight(5);
      stroke(0);
      fill(255, 241, 0);
    } else {
      textFont(acme);
      textSize(25);
      fill(255);
    }
    text(creditos[i], width / 2, posTextoy + i*40);
    pop();
  }
}
