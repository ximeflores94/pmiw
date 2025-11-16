class Moro {
  constructor() {

    this.posx = 520;
    this.posy = 30;
    this.moro = moro;
    this.vida = 100;

    //variables control de sprites para las direcciones
    this.indexMoro = 1;
    this.velocidad = -2; //es negativa porque parte desde la derecha del canvas

    //variables para el control de la animación del disparo
    this.tiempoSprite = 0;
    this.animandoDisparo = false;
    this.estado = "cielo";

    //variables para el disparo
    this.bala = [];
    this.tiempoDisparo = 0;
  }

  dibujar() {
    //if (this.vida = 100){
    for (let i=0; i<this.bala.length; i++) { //al ocupar length o el largo del array sin límites, de esta manera, se puede disparar infinitamente
      this.bala[i].dibujar();
    }
    image (this.moro[this.indexMoro], this.posx, this.posy);
    
    //debug para ver el collider de moro
    //stroke(255, 0, 0);   
    //noFill();
    //ellipse(this.posx + 45, this.posy + 60, 75, 75);
  }


  actualizar() {

    if (this.estado == "muriendo") {
      this.posy += 4;
      this.indexMoro = 5;
      if (this.posy >= 340) {
        this.posy = 400;
        this.estado = "muerto";
        this.indexMoro = 8;
      }
      return; // con esto todas las animaciones de y disparos y todo se detiene porque  el juego pus terminó
    }
    if ( this.vida  <= 50 && this.estado == "cielo") {
      this.estado = "suelo";
    }
    if (this.estado == "suelo") {
      if (this.posx < 520) {
        this.posx += 4;
        this.indexMoro = 2;
      } else {
        this.posx = 520;
        this.movimientoEnY();
        this.animacionDisparo(100, 20, 5, 0, 10, 7, 9, 4);
      }
    }

    if (this.estado == "cielo") {
      if (this.posy > 30) {
        this.posy -= 4;
        this.indexMoro = 4;
      } else {
        this.posy = 30;
      }
    }
    if (this.estado == "cielo") {
      this.movimientoEnX();
      this.animacionDisparo(0, -85, 0, 5, 6, 11, 2, 1);
    }
  }


  movimientoEnX() {

    this.posx += this.velocidad;

    if (this.posx == 30 ) {
      this. cambiarVelocidad();  //multiplica la velocidad por -1 para que vuelva al punto inicial
      this.indexMoro = 2;
    }

    if  (this.posx == 520) {
      this. cambiarVelocidad(); //de esta manera rebota en el otro borde y vuelve a su posición.
      this.indexMoro =1;
    }
  }

  movimientoEnY() {
    this.posy+= this.velocidad;

    if (this.posy <= 20 ) {
      this.cambiarVelocidad();
      this.indexMoro = 9;
    }
    if (this.posy >= 340) {
      this.cambiarVelocidad();
      this.indexMoro = 4;
    }
  }

  animacionDisparo(dx, dy, vx, vy, indexDisparo, indexBala, indexMov1, indexMov2) {

    if (millis() - this.tiempoDisparo >= 1800) {
      this.dispararBala(dx, dy, vx, vy, indexDisparo, indexBala);
      this.tiempoDisparo = millis();
    }

    if (this.animandoDisparo) {
      if (millis() - this.tiempoSprite >= 180) {
        this.animandoDisparo = false; // con este if  comprobamos si el tiempo transcurrido es el que quiero, si ya se cumplio pues la animación se corta....
        if (this.velocidad > 0) {
          this.indexMoro = indexMov1; // 2
        } else {
          this.indexMoro = indexMov2; //1
        }
      }
    }
  }

  cambiarVelocidad() {
    this.velocidad *= -1;
  }

  matar() {
    this.estado = "muriendo";
  }

  haTocadoBala(bala) {
    let centroX = this.posx + 45; // ancho del sprite
    let centroY = this.posy + 60; // alto del sprite

    if (dist(centroX, centroY, bala.posx, bala.posy)< 45) {
      this.vida -= 10;
      bala.eliminar = true; // aqui para sacar la pinche bala del array

      console.log("Vida Moro:", this.vida);

      if (this.vida <= 0 && this.estado != "muriendo") {
        this.matar();
      }
    }
  }

  dispararBala(dx, dy, vx, vy, index, indexBala) { // tenía dos códigos exactamente iguales solo cambiaban los parámetros de distancia, velocidad en eje x o y y el sprite de movimiento, por lo que le coloqué parámetros para resumirlo en un mismo código

    let balaMoro = new BalaMoro (this.posx - dx, this.posy - dy, vx, vy);
    balaMoro.disparar();
    balaMoro.indexBala = indexBala
    this.bala.push(balaMoro); // coloca una nueva bala dentro del array, de esta manera podrá disparar siempre

    //animación del disparo...
    this.indexMoro = index;
    this.animandoDisparo = true;
    this.tiempoSprite = millis(); //se guarda el tiempo cada vez que se inicia la animación
  }
}
