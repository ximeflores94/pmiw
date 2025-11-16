class Juego {
  constructor() {
    this.crearPersonaje();
    this.crearEnemigo();
    this.modo = "GokuLimitado";
  }


  dibujar() {
    image ( fondo, 0, 0);
    this.personaje.actualizar(this.modo);// esto es para definir el movimiento de goku según como ataque Moro
    this.personaje.dibujar();
    this.enemigo.dibujar();
    this.controlarDisparosEnemigos();
    this.controlarGolpesGoku();
  }

  iniciar() {
  }

  crearEnemigo() {
    this.enemigo = new Moro();
  }
  crearPersonaje() {
    this.personaje = new Goku();
  }

  personajeGano() {
  }

  actualizar() {

    if (this.enemigo.vida <= 50 && this.modo == "GokuLimitado") {
      this.modo = "GokuLibre";
    }


    for (let i=this.personaje.bala.length-1; i >= 0; i--) {
      this.personaje.bala[i].mover()

        if (this.personaje.bala[i].eliminar) {
        this.personaje.bala.splice(i, 1); //borrar balas
      }
    }
    this.enemigo.actualizar();

    for (let i=this.enemigo.bala.length-1; i >= 0; i--) {
      this.enemigo.bala[i].mover();
    }
  }

  teclaPresionada(keyCode) {
    this.personaje.disparar(this.modo);
  }

  controlarDisparosEnemigos() {

    if (this.personaje.haDisparadoBala()) {
      for (let i=0; i<this.personaje.bala.length; i++) {
        this.enemigo.haTocadoBala(this.personaje.bala[i]);
      }
    }
  }

  controlarGolpesGoku() {
    for (let i = this.enemigo.bala.length - 1; i >= 0; i--) {
      this.personaje.haTocadoBala(this.enemigo.bala[i]);

      if (this.enemigo.bala[i].eliminar) {
        this.enemigo.bala.splice(i, 1);
      }
    }
  }
}
