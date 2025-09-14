function d1( x, y) {
  let resultado = false;
  if (dist(x*tam, y*tam, mouseX-400, mouseY) < cant*2) {
    resultado = true;
  }
  return resultado;
}

function d2( z, k) {
  let resultado = false;
  if (dist( z*tam+tam/2, k*tam+tam/2, mouseX-400, mouseY) < tam) {
    resultado = true;
  } 
  return resultado;
}


function ilusion() {//creo una funcion nueva de nombre ilusion
  push();
  translate( 400, 0);//traslado mi todo el dibujo al cuadrante derecho del canva
  for (let i=0; i < cant; i++) { //inicio un ciclo for para la variable i, y le digo que parta en 0, y siempre y cuando sea mayor a cant (que definimos con valor 20), vaya sumando 1 a i
    for (let j = 0; j < cant; j++) {//hacemos lo mismo pero para la variable j
      if ((i+j) % 2 == 0) {// inicio un condicional con un modulo para definir que figura es la que vamos a pintar, el símbolo % me entrega el "resto" de una división, con esto, podemos saber si la figura tiene asignada un valor par o impar.
        fill(negro);//si la figura es par, se pintara el cuadrado de negro
      } else if ( d1(i, j)) {
        fill( negro ); //al pasar el mouse por un área cuadrada, pintará de negro los cuadrados blancos que lo rodean generando un efecto de color
      } else {
        fill(blanco);//si la figura es impar se pintara de blanco
      }
      rect( i*tam, j*tam, tam, tam);// y dibujamos la grilla de cuadrados
      if ((i+j) % 2 == 0) {//luego repetimos el mismo procedimiento para los circulos que irán en el centro de los cuadrados
        fill(blanco);// si es par, el circulo se pintara de blanco
      } else if (d2( i, j)) {
        fill( blanco );// cada circulo negro en donde el mouse se posicione cambiará de color a blanco.
      } else {
        fill(negro);//si es impar se pintará de negro
      }
      ellipse( i*tam+tam/2, j*tam+tam/2, 20, 20);// finalmente dibujamos los circulos concentricos al cuadrado
    }
  }
  pop();
}

function reiniciar() {//creamos una función para reiniciar el programa, donde devolvemos las variables a sus valores iniciales
  negro = color(0);
  blanco = color(255);
}

function mousePressed() {//creamos una función para cambiar de color tanto los cuadrados como los circulos al hacer click
  negro = color(random(255), random(255), random(255));
  blanco = color(random(255), random(255), random(255));
}
