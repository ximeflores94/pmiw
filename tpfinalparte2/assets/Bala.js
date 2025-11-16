class Bala {
  constructor(posx, posy, dx, dy) {
    this.bala = img;
    this.posx = posx;
    this.posy = posy;
    this.dx = dx;
    this.dy = dy;
    this.disparada = false;
    this.indexBala = 9
  }

  dibujar() {
    if (this.disparada) {
      image (this.bala[this.indexBala], this.posx, this.posy)
    }
  }

  mover() {
    this.posx += this.dx;
    this.posy -= this.dy;
  }

  disparar() {
    this.disparada = true;
  }
}
