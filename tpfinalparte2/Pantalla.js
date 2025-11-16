class Pantalla {
  constructor() {
    //pos para las imágenes
    this.x = 0;
    this.y = 0;
    this.pantalla = 1;

    //pos boton de inicio...
    this.botonX = 330;
    this.botonY = 430;
    this.texto1 = "JUGAR";
    this.texto2 = "INSTRUCCIONES";
    
    this.Juego = new Juego();
  }

  dibujar() {

    if (this.pantalla === 1) {
      this.pantalla1();
    }
    if (this.pantalla === 2) {
      this.pantalla2();
    }
    if (this.pantalla === 3) {
      this.pantalla3();
    }
  }

  estados() {

    if (this.pantalla === 1) {
      if (mouseX > 250 && mouseX < 250+150 && mouseY > 330 && mouseY < 330+70) {
        this.pantalla = 2;
      }
    }

    if (this.pantalla === 2) {
      if (mouseX > 470 && mouseX < 470+150 && mouseY > 378 && mouseY < 378+70) {
        this.pantalla = 3;
      }
    }
  }

  textoSjj(texto, posx, posy) {

    push();
    textAlign(CENTER);
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(50);
    text(texto, posx, posy);
    pop();
  }

  pantalla1() {
    image (inicio, 0, 0, 640, 480);

    if (mouseX > 250 && mouseX < 250+150 && mouseY > 330 && mouseY < 330+70) {
      fill(236, 35, 36);
      this.textoSjj(this.texto1, 330, 400);

    } else {
      fill(255, 241, 0);
      this.textoSjj(this.texto1, 330, 400);

    }
  }

  pantalla2() {
    image(instrucciones, 0, 0, 640, 480);

    fill(236, 35, 36);
    this.textoSjj(this.texto2, 315, 60);

    if (mouseX > 470 && mouseX < 470+150 && mouseY > 378 && mouseY < 378+70) {
      fill(236, 35, 36);
      this.textoSjj(this.texto1, 550, 448);
    } else {
      fill(255, 241, 0);
      this.textoSjj(this.texto1, 550, 448);
    }
  }
  pantalla3() {
    this.Juego.dibujar();
    this.Juego.actualizar();
  }

  teclaPresionada(keyCode) {
    this.Juego.teclaPresionada(keyCode);
  }
}
