class Goku {
  constructor() {
    this.img = img;
    this.indexImg = 0;
    this.posx = 30;
    this.posy = 340;
    this.vely = 0; // velocidad en el eje y
    this.suelo = true; // para evitar que salte dos veces
    this.vida = 100;
    this.bala = [];

    //animación golpe
    this.golpeado = false;
    this.tiempoGolpe = 0;

    //animacion morido
    this.estado = "vivo";
  }

  dibujar() {
    for (let i=0; i<this.bala.length; i++) { //al ocupar length o el largo del array sin límites, de esta manera, se puede disparar infinitamente
      this.bala[i].dibujar();
    }
    image (this.img[this.indexImg], this.posx, this.posy);
    //debug para ver el centro de colision de goku
    //stroke(255, 0, 0);   // rojo fuerte
    //noFill();
    //ellipse(this.posx + 39, this.posy + 50, 80, 80);
  }

  //Animaciones de movimiento con teclas
  moverLibre() {

    if (keyIsDown(LEFT_ARROW) && this.posx >= 10) {
      this.indexImg = 2;
      this.moverIzquierda();
    } else if (keyIsDown(RIGHT_ARROW) && this.posx <= 540) {
      this.indexImg = 1;
      this.moverDerecha();
    } else if (keyIsDown(CONTROL)) {//movimiento para disparar
      this.indexImg = 3;
    } else if (keyIsDown(UP_ARROW) && this.posy >= 5) {
      this.indexImg = 4; //animación para subir
      this.moverArriba();
    } else if (keyIsDown(DOWN_ARROW) && this.posy <= 340) {
      this.indexImg = 6; //animación para bajar
      this.moverAbajo();
    } else if (this.posy >= 340) {
      this.indexImg = 0;
    } else {
      this.indexImg = 5;
    }
  }

  moverSuelo() {


    if (keyIsDown(LEFT_ARROW) && this.posx >= 10) {
      this.indexImg = 2;
      this.moverIzquierda();
    } else if (keyIsDown(RIGHT_ARROW) && this.posx <= 540) {
      this.indexImg = 1;
      this.moverDerecha();
    } else if (keyIsDown(CONTROL)) {//movimiento para disparar
      this.indexImg = 8;
    } else if (keyIsDown(UP_ARROW) && this.suelo) {
      this.indexImg = 11;
      this.vely = -18;
      this.suelo = false;
    } else {
      this.indexImg = 0;
    }
  }

  actualizar(modo) {
    
    if(this.estado == "muerto"){
      this.vy = 0;
      return;
    }

    if (this.estado == "muriendo") {
      this.posy += 4;
      this.indexImg = 15;
      if (this.posy >= 340) {
        this.posy = 380;
        this.estado = "muerto";
        this.indexImg = 16;
      }
      return; // con esto todas las animaciones y disparos y todo se detiene porque  el juego pus terminó
    }


    if (modo == "GokuLimitado") {
      this.vely += 1.2; // porque 1.2 porque se define una gravedad esto es para darle un movimiento natural al salto
      this.posy += this.vely; // y aqui se suma la velocidad en y para que suba y "se vea afectado por la gravedad" haciendo que baje rapidamente

      if (this.posy >= 340) {
        this.posy = 340;
        this.vely = 0;
        this.suelo = true;
      }
    }

    if (modo == "GokuLimitado") {
      this.moverSuelo();
    } else if (modo == "GokuLibre") {
      this.moverLibre();
    }

    if (!this.suelo && modo == "GokuLimitado") {
      this.indexImg = 11;
    }

    if (this.golpeado && this.estado == "vivo") {
      if (millis() - this.tiempoGolpe < 200) {
        this.indexImg = 14;
      } else {
        this.indexImg = 0;
        this.golpeado = false;
      }
    }
  }

  disparar(modo) {
    if (keyCode == CONTROL) {
      if (modo == "GokuLimitado") {
        this.dispararArriba();
      } else if (modo == "GokuLibre") {
        this.dispararBala();
      }
    }
  }

  moverDerecha() {
    this.posx += 10
  }

  moverIzquierda() {
    this.posx -= 10
  }

  moverArriba() {
    this.posy -= 10
  }

  moverAbajo() {
    this.posy += 10
  }
  estaVivo() {
  }

  dispararArriba() {
    let bala = new Bala(this.posx, this.posy - 40, 0, 8);
    bala.indexBala = 10;
    bala.disparar();
    this.bala.push(bala);
  }

  dispararBala() {
    let nuevaBala = new Bala (this.posx + 75, this.posy + 30, 5, 0);
    nuevaBala.indexBala = 9;
    nuevaBala.disparar();
    this.bala.push(nuevaBala); // coloca una nueva bala dentro del array, de esta manera podrá disparar siempre
  }

  haDisparadoBala() {
    for (let i=0; i<this.bala.length; i++) {
      return  this.bala[i];
    }
  }

  matar() {
    this.estado = "muriendo";
    this.golpeado = false;
  }

  haTocadoBala(bala) {
    let centroX = this.posx + 39; // ancho del sprite de goku
    let centroY = this.posy + 51; // alto del sprite de goku
    let balax = bala.posx + 56/2;
    let balay = bala.posy + 80/2;

    //debug para ver el centro de colision de las balas
    //strokeWeight(2);
    //stroke(0, 0, 255);
    //ellipse(bala.posx + 56/2, bala.posy + 80/2, 50, 50);


    if (dist(centroX, centroY, balax, balay) < 40) {
      this.vida -= 10;
      bala.eliminar = true; // aqui para sacar la pinche bala del array
      this.indexImg = 14;

      this.golpeado = true;
      this.tiempoGolpe = millis();

      console.log("Vida Goku:", this.vida);

      if (this.vida <= 0 && this.estado != "muriendo") {
        this.matar();
      }
    }
  }
}

