//https://youtu.be/N41V2ecSblY
//https://www.figma.com/proto/OHp7LgsdY8sRC9CFXvgHw8/Sin-t%C3%ADtulo?node-id=1-2&t=nKSr0FdThxWMnByY-1

let img = [];
let png = [];
let manga = [];
let pantalla = [];
let texto, creditos = [];
let movGokux, movVegetax, movy, movMerusx, movGlobox, posBotonx;
let posTextox, posTexto1x, posTexto2x, posTexto3x, posTexto4x, posTexto5x, posTexto6x;
let posFlechax, posFlecha2x;
let posCaja1x, posCaja2x, posCaja3x;
let posimg1, posimg2, posimg3, posimg4, posimg5, posimgy;
let estado;
let acme, sjj;
let song, song2, song4, song5, song6, song7;

function preload () {
  
  acme = loadFont("fuente/acmeBold.ttf");
  sjj = loadFont("fuente/Saiyan-Sans.ttf");
  texto = loadStrings("fuente/miTexto.txt");
  creditos = loadStrings("fuente/creditos.txt");
  song = loadSound("sound/inicio.mp3");
  song2 = loadSound("sound/teletransportacion.mp3");
  song4 = loadSound("sound/triste.mp3");
  song5 = loadSound("sound/angel.mp3");
  song6 = loadSound("sound/opening.mp3");
  song7 = loadSound("sound/ending.mp3");

  for (let i=0; i<7; i++) {
    img[i] = loadImage("assets/img"+i+".jpg");
  }

  for (let i=0; i<87; i++) {
    manga[i] = loadImage("assets/manga"+i+".jpg");
  }

  for (let i=0; i<18; i++) {
    png[i] = loadImage("assets/png"+i+".png");
  }
  for (let i=0; i<3; i++) {
    pantalla[i] = loadImage("assets/pantalla"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  reiniciarvariables();
  estado = 0;
}

//se cargan las imágenes
function draw() {
  background(255);
  textFont(acme);
  textAlign(CENTER);
  textSize(14);
  
  
  
  //Pantalla 1 - Inicio
  if (estado === 0) {
    movGokux += 5;
    movy += 5;
    movVegetax -= 5;

    //movimiento de entrada de goku y vegeta
    if (movGokux  >= 40 && movy >= 207) {
      movGokux  = 40;
      movy = 207;
    }
    if (movy >= 207 && movVegetax <= 394) {
      movVegetax = 394;
      posTexto1x = 330;
      posBotonx = 31;
    }
    image (img[0], 0, 0);
    image (png[0], 0, 0);
    image (png[1], movGokux, movy);
    image (png[2], movVegetax, movy);
    image (png[3], 140, 0, 357, 139);

    //hover del boton de jugar, si el mouse pasa por sobre el boton, pasará a estar activo
    botonHover(250, 380, 150, 50, 70, 69, posTexto1x, 430);
    // si apreto el ícono de musica, cambiará de amarillo a rojo.
    if (song6.isPlaying()) {
      image (png[16], posBotonx, 22);
    } else {
      image (png[17], posBotonx, 22);
    }

    //pantalla 2
  } else if (estado === 1) {
    movMerusx += 10; //Merus entrara desde la izquierda a razón de 5 frames

    if (movMerusx >= 260) {
      movMerusx = 260;
      movGlobox = 388;
      posTextox = 475;
      posFlechax = 580;
    }
    //Cuando merus esté en la posición 501 en el eje x, se dibujará el globo de texto
    image (img[1], 0, 0);
    image (pantalla[0], 0, 0);
    textSize(11);
    text(texto[0], 54, 228, 54);
    image (png[9], movGlobox, 0, 388, 480); //Globo de texto
    image (png[8], movMerusx, 152); // 
    push()
    textSize(15);
    text(texto[1], posTextox, 55, 139);
    pop()

    flechaHover(posFlechax, 445, 40, 31);

    //Pantalla 3 - primera decisión
  } else if (estado === 2) {
    movMerusx += 10; //Merus entrara desde la izquierda a razón de 10 frames

    if (movMerusx >= 150) {
      movMerusx = 150;
      movGlobox = -140;
      posTextox = 20;
      posCaja1x = 351;
      posCaja2x = 370;
      posTexto1x = 370;
      posTexto2x = 385;
      posFlechax = 595;
      posFlecha2x = 575;
    }
    //Cuando merus esté en la posición 501 en el eje x, se dibujará el globo de texto
    image (img[1], 0, 0);
    image (png[6], movGlobox, 0, 388, 480); //Globo de texto
    image (png[7], movMerusx, 155, 225, 488);
    cajaTexto( posCaja1x, 196, 257, 95);
    cajaTexto( posCaja2x, 321, 257, 95);
    push();
    textSize(16);
    text(texto[4], posTexto1x, 229, 200);
    text(texto[5], posTexto2x, 350, 220);
    text(texto[2], posTextox, 60, 139);
    pop()
    push();
    textSize(20);
    text(texto[3], posTextox, 400, 139);
    pop();

    flechaHover(posFlechax, 400, 40, 31);
    flechaHover(posFlecha2x, 265, 40, 31);
    //pantalla 4 (línea principal)
  } else if (estado === 3) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;
    posimg4 += 15;
    //Carga de fondo
    image (img[1], 0, 0);
    //tipo de letra y alineación

    if (posimg1 >= 8) {
      posimg1 = 8;
      posTextox = 12;
    }
    if (posimg2 >= 153) {
      posimg2 = 153;
      posTexto1x = 162;
      posTexto2x = 162;
    }
    if (posimg3 >= 301) {
      posimg3 = 301;
      posTexto3x = 336;
    }
    if (posimg4 >= 459) {
      posimg4 = 459;
      posTexto4x = 470;
      posFlechax = 580;
    }

    image(manga[0], posimg1, 6 );
    textSize(17);
    text(texto[6], posTextox, 50, 120);
    image(manga[1], posimg2, 6 );
    text(texto[7], posTexto1x, 50, 40);
    text(texto[8], posTexto2x, 347, 120);
    image(manga[2], posimg3, 6 );
    text(texto[9], posTexto3x, 50, 120);
    image(manga[3], posimg4, 117);
    push()
    textSize(26);
    text(texto[10], posTexto4x, 145, 40);
    pop()
    flechaHover(posFlechax, 10, 40, 31);
  }
  //pantalla 4 - final alternativo 1
  else if (estado === 4) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 6) {
      posimg1 = 6;
    }
    if (posimg2 >= 6) {
      posimg2 = 6;
      posTexto1x = 61;
      posTexto2x = 408;
      posTexto3x = 538;
      posTexto4x = 25;
      posCaja1x = 12;
      posFlechax = 595;
    }

    image(manga[54], posimg1, 6 );
    image(manga[55], posimg2, 297 );
    cajaTexto( posCaja1x, 44, 173, 220);
    push()
      textSize(16);
    text(texto[70], posTexto4x, 80, 145);
    pop();
    text(texto[71], posTexto1x, 325, 59);
    text(texto[72], posTexto2x, 320, 58);
    text(texto[73], posTexto3x, 312, 37);
    flechaHover(posFlechax, 445, 40, 31);

    //pantalla 5 (línea principal)
  } else if (estado === 5) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 15;
    posimg3 += 10;
    //tipo de letra y alineación

    if (posimg1 >= 0) {
      posimg1 = 0;
    }
    if (posimg2 >= 377) {
      posimg2 = 377;
      posTexto1x = 372;
    }
    if (posimg3 >= 377) {
      posimg3 = 377;
      posTexto3x = 566;
      posFlechax = 595;
    }
    image(manga[4], posimg1, 0 );
    image(manga[5], posimg2, 0 );
    textSize(16);
    text(texto[11], posTexto1x, 18, 150);
    image(manga[6], posimg3, 290 );
    textSize(17);
    text(texto[12], posTexto3x, 330, 75);
    flechaHover(posFlechax, 445, 40, 31);
    //pantalla 6 (línea principal - Segunda decisión)
  } else if (estado === 6) {
    movMerusx += 10; //Merus entrara desde la izquierda a razón de 5 frames

    if (movMerusx >= 150) {
      movMerusx = 150;
      movGlobox = -140;
      posTextox = 10;
      posCaja1x = 351;
      posCaja2x = 370;
      posTexto1x = 372;
      posTexto2x = 385;
      posFlechax = 575;
      posFlecha2x = 595;
    }
    //Cuando merus esté en la posición 501 en el eje x, se dibujará el globo de texto
    image (img[1], 0, 0);
    image (png[6], movGlobox, 0, 388, 480); //Globo de texto
    image (png[7], movMerusx, 155, 225, 488);
    cajaTexto( posCaja1x, 196, 257, 100);
    cajaTexto( posCaja2x, 321, 257, 95);
    textSize(17);
    text(texto[13], posTextox, 45, 145);
    textSize(14);
    text(texto[14], posTexto1x, 215, 200);
    text(texto[15], posTexto2x, 350, 220);
    flechaHover(posFlechax, 270, 40, 31);
    flechaHover(posFlecha2x, 400, 40, 31);


    //pantalla 7 (línea principal)
  } else if (estado === 7) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 10;
    posimg4 += 15;
    posimg5 += 15;

    //tipo de letra y alineación

    if (posimg1 >= 2) {
      posimg1 = 2;
    }
    if (posimg2 >= 299) {
      posimg2 = 299;
      posTexto1x = 300;
      posTexto2x = 589;
    }
    if (posimg3 >= 2) {
      posimg3 = 2;
    }
    if (posimg4 >= 260) {
      posimg4 = 260;
      posTexto3x = 255;
      posTexto4x = 354;
    }
    if (posimg5 >= 446) {
      posimg5 = 446;
      posTexto5x = 435;
      posTexto6x = 557;
      posFlechax = 595;
    }

    image(manga[7], posimg1, 2 );
    image(manga[8], posimg2, 2 );
    text(texto[16], posTexto1x, 20, 50);
    text(texto[17], posTexto2x, 22, 50);
    image(manga[9], posimg3, 194);
    image(manga[10], posimg4, 194);
    text(texto[18], posTexto3x, 223, 75);
    text(texto[19], posTexto4x, 220, 90);
    image(manga[11], posimg5, 194);
    text(texto[20], posTexto5x, 295, 70);
    text(texto[21], posTexto6x, 220, 70);
    flechaHover(posFlechax, 445, 40, 31);
    //pantalla 8 (línea principal)
  } else if (estado === 8) {
    textSize(14);
    posCaja1x +=15;

    if (posCaja1x >= 385) {
      posCaja1x = 385;
      posTexto1x = 400;
      posTexto2x = 440;
      posFlechax = 595;
    }

    image(pantalla[1], 0, 0 );
    cajaTexto(posCaja1x, 94, 227, 300);
    text(texto[22], posTexto1x, 120, 200);
    textSize(24);
    text(texto[23], posTexto1x, 285, 200);
    textSize(14);
    text(texto[24], posTexto1x, 305, 200);
    flechaHover(posFlechax, 445, 40, 31);
    //pantalla 9 (línea principal)
  } else if (estado === 9) {
    textSize(14);
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;

    if (posimg1 >= 3) {
      posimg1 = 3;
      posTexto1x = 3;
      posTexto2x = 264;
    }
    if (posimg2 >= 3) {
      posimg2 = 3;
    }
    if (posimg3 >= 456) {
      posimg3 = 456;
      posCaja1x = 370;
      posTexto3x = 380;
      posFlechax = 595;
    }

    image(img[0], 0, 0 );
    image(manga[12], posimg1, 3);
    text(texto[25], posTexto1x, 40, 100);
    text(texto[26], posTexto2x, 20, 80);
    cajaTexto(posCaja1x, 20, 150, 180);
    text(texto[27], posTexto3x, 55, 130);
    image(manga[13], posimg2, 215);
    image(manga[14], posimg3, 215);
    flechaHover(posFlechax, 445, 40, 31);

    //pantalla 10 (línea principal - tercera decisión)
  } else if (estado === 10) {
    textSize(14);
    posCaja1x +=10;
    posCaja2x +=10;
    posCaja3x +=10;

    if (posCaja1x >= 12) {
      posCaja1x = 12;
      posTexto1x = 19;
    }
    if (posCaja2x >= 220) {
      posCaja2x = 220;
      posTexto2x = 235;
      posFlechax = 433;
    }
    if (posCaja3x >= 275) {
      posCaja3x = 275;
      posTexto3x = 283;
      posFlecha2x = 570;
    }

    image(pantalla[2], 0, 0 );
    text(texto[28], 88, 100, 20);
    push();
    textSize(12);
    text(texto[29], 295, 100, 10);
    pop();
    text(texto[30], 542, 90, 20);
    cajaTexto(posCaja2x, 285, 245, 60);
    cajaTexto(posCaja3x, 365, 325, 60);
    cajaTexto(posCaja1x, 255, 175, 175);

    text(texto[31], posTexto1x, 295, 155);
    text(texto[32], posTexto2x, 315, 202);
    text(texto[33], posTexto3x, 390, 310);
    flechaHover(posFlechax, 330, 40, 31);
    flechaHover(posFlecha2x, 410, 40, 31);

    //pantalla 11 (línea principal)
  } else if (estado === 11) {
    textSize(14);
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 4) {
      posimg1 = 4;
    }
    if (posimg2 >= 282) {
      posimg2 = 282;
      posTexto1x = 113;
      posTexto2x = 160;
      posTexto3x = 563;
      posCaja1x = 134;
      posTexto4x = 154;
      posFlechax = 595;
    }

    image(img[0], 0, 0 );
    image(manga[15], posimg1, 4);
    image(manga[16], posimg2, 4);
    push();
    textSize(12);
    text(texto[34], posTexto1x, 135, 33);
    text(texto[36], posTexto3x, 29, 67);
    pop();
    text(texto[35], posTexto2x, 184, 110);
    cajaTexto(posCaja1x, 298, 372, 138);
    text(texto[37], posTexto4x, 325, 332);
    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 12 (línea principal)
  else if (estado === 13) {
    textSize(14);
    posimgy -= 10;

    if (posimgy <= 208) {
      posimgy = 208;
      posTexto1x = 46;
      posCaja1x = 28;
      posCaja2x = 137;
      posTexto2x = 157;
      posFlechax = 595;
    }

    image(img[2], 0, 0 );
    image(manga[17], 6, posimgy);

    cajaTexto(posCaja2x, 56, 372, 138);
    text(texto[39], posTexto2x, 85, 332);
    cajaTexto(posCaja1x, 169, 123, 63);
    push();
    textSize(20);
    text(texto[38], posTexto1x, 193, 91);
    pop();
    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 13 (línea principal)
  else if (estado === 14) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 10;
    posimg4 += 15;

    if (posimg1 >= 4) {
      posimg1 = 4;
      posTexto1x = 8;
    }
    if (posimg2 >= 147) {
      posimg2 = 149;
    }
    if (posimg3 >= 4) {
      posimg3 = 4;
    }
    if (posimg4 >= 299) {
      posimg4 = 299;
      posTexto2x = 514;
      posTexto3x = 610;
      posTexto4x = 233;
      posCaja1x = 228;
      posFlechax = 595;
    }

    image(manga[18], posimg1, 4 );
    push();
    textSize(13);
    text(texto[40], posTexto1x, 15, 50);
    pop();
    image(manga[19], posimg2, 4 );
    image(manga[20], posimg3, 282);
    image(manga[21], posimg4, 4);
    push();
    textSize(10);
    text(texto[41], posTexto2x, 196, 38);
    pop();
    text(texto[42], posTexto3x, 210, 17);
    cajaTexto(posCaja1x, 309, 156, 154);
    text(texto[43], posTexto4x, 340, 145);
    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 14 (línea principal- CUARTA Decisión)
  else if (estado === 15) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 4) {
      posimg1 = 4;
      posTexto1x = 66;
    }
    if (posimg2 >= 147) {
      posimg2 = 149;
      posTexto2x = 250;
      posTexto3x = 242;
      posTexto4x = 305;
      posCaja1x = 225;
      posCaja2x = 282;
      posFlechax = 497;
      posFlecha2x = 555;
    }

    image(img[3], 0, 0);
    cajaTexto(449, 37, 136, 50);
    text(texto[44], 465, 66, 100); //planeta yadrat
    image(manga[22], posimg1, 4 );
    push();
    textSize(13);
    text(texto[45], posTexto1x, 208, 80); //oye!...
    pop();
    push();
    textSize(12);
    image(manga[23], posimg2, 4);
    text(texto[46], posTexto2x, 52, 85);// em bueno...
    pop();
    cajaTexto(posCaja1x, 209, 303, 75);
    text(texto[47], posTexto3x, 233, 260);//vegeta no siente que...
    cajaTexto(posCaja2x, 332, 300, 100);
    text(texto[48], posTexto4x, 370, 260);//vegeta cree que...

    flechaHover(posFlechax, 266, 40, 31);
    flechaHover(posFlecha2x, 415, 40, 31);
  }//pantalla 15 (línea principal)
  else if (estado === 16) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;
    posimg4 += 15;
    posimg5 += 15;

    if (posimg1 >= 4) {
      posimg1 = 4;
      posTexto1x = 229;
    }
    if (posimg2 >= 4) {
      posimg2 = 4;
    }
    if (posimg3 >= 294) {
      posimg3 = 294;
    }
    if (posimg4 >= 294) {
      posimg4 = 294;
      posTexto2x = 294;
    }
    if (posimg5 >= 422) {
      posimg5 = 422;
      posTexto3x = 576;
      posFlechax = 595;
    }

    image(img[2], 0, 0);
    image(manga[24], posimg1, 4 );
    image(manga[25], posimg2, 144);
    image(manga[26], posimg3, 4);
    image(manga[27], posimg4, 155);
    image(manga[28], posimg5, 155);
    push();
    textSize(12);
    text(texto[49], posTexto1x, 40, 56); //utilizaré...
    text(texto[50], posTexto2x, 180, 30);// ve... vegeta
    text(texto[51], posTexto3x, 178, 50);//hola kakaroto...
    pop();
    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 16 (línea principal)
  else if (estado === 18) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;

    if (posimg1 >= 4) {
      posimg1 = 4;
    }
    if (posimg2 >= 267) {
      posimg2 = 267;
    }
    if (posimg3 >= 267) {
      posimg3 = 267;
      posCaja1x = 188;
      posTexto1x = 194;
      posFlechax = 595;
    }

    image(img[2], 0, 0);
    image(manga[29], posimg1, 4 );
    image(manga[30], posimg2, 4);
    image(manga[31], posimg3, 284);
    cajaTexto(posCaja1x, 191, 157, 207);
    text(texto[52], posTexto1x, 235, 140); //vegeta llega...
    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 19 (línea principal)
  else if (estado === 19) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;

    if (posimg1 >= 12) {
      posimg1 = 12;
    }
    if (posimg2 >= 196) {
      posimg2 = 196;
    }
    if (posimg3 >= 352) {
      posimg3 = 352;
      posCaja1x = 13;
      posTexto1x = 28;
      posFlechax = 595;
    }

    image(img[2], 0, 0);
    image(manga[32], posimg1, 43);
    image(manga[33], posimg2, 43);
    image(png[11], posimg3, 0);
    cajaTexto(posCaja1x, 306, 339, 125);
    push();
    textSize(16);
    text(texto[53], posTexto1x, 335, 305); //moro asustado...
    pop();
    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 20 (línea principal - CUARTA DECISION)
  else if (estado === 20) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 9) {
      posimg1 = 9;
    }
    if (posimg2 >= 248) {
      posimg2 = 248;
      posCaja1x = 230;
      posCaja2x = 313;
      posTexto1x = 133;
      posTexto2x = 70;
      posTexto3x = 253;
      posTexto4x = 560;
      posTexto5x = 259;
      posTexto6x = 332;
      posFlechax = 595;
      posFlecha2x = 513;
    }

    image(img[2], 0, 0);
    image(manga[34], posimg1, 9);
    image(manga[35], posimg2, 9);
    text(texto[54], posTexto1x, 35, 100); //asi es merus...
    text(texto[55], posTexto2x, 304, 140);// me involucré...
    text(texto[56], posTexto3x, 80, 159);// exacto!!
    text(texto[57], posTexto4x, 70, 65);//piensalo...
    cajaTexto(posCaja1x, 235, 303, 100);
    push();
    textSize(16);
    text(texto[58], posTexto5x, 268, 245); //merus cree
    cajaTexto(posCaja2x, 360, 303, 100);
    text(texto[59], posTexto6x, 390, 245); //merus entiende
    pop();

    flechaHover(posFlechax, 445, 40, 31);
    flechaHover(posFlecha2x, 315, 40, 31);
  }
  //pantalla 21 (línea principal)
  else if (estado === 21) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 15;
    posimg3 += 15;
    posimg4 += 20;

    if (posimg1 >= 8) {
      posimg1 = 8;
    }
    if (posimg2 >= 184) {
      posimg2 = 184;
      posTexto1x = 186;
      posTexto2x = 286;
    }
    if (posimg3 >= 184) {
      posimg3 = 184;
    }
    if (posimg4 >= 366) {
      posimg4 = 366;
      posCaja1x = 472;
      posTexto3x = 481;
      posFlechax = 595;
    }

    image(img[2], 0, 0);
    image(manga[36], posimg1, 8);
    image(manga[37], posimg2, 8);
    image(manga[38], posimg3, 317);
    image(manga[39], posimg4, 8);

    text(texto[60], posTexto1x, 30, 70); //goku me...
    push();
    textSize(13);
    text(texto[61], posTexto2x, 25, 75);// ahora te toca...
    pop();
    cajaTexto(posCaja1x, 141, 157, 238);
    push();
    textSize(16);
    text(texto[62], posTexto3x, 184, 130);// merus decide...
    pop();

    flechaHover(posFlechax, 445, 40, 31);
  } //pantalla 22 (línea principal)
  else if (estado === 23) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;
    posimg4 += 15;

    if (posimg1 >= 4) {
      posimg1 = 4;
    }
    if (posimg2 >= 165) {
      posimg2 = 165;
    }
    if (posimg3 >= 235) {
      posimg3 = 235;
    }
    if (posimg4 >= 405) {
      posimg4 = 405;
      posFlechax = 595;
    }

    image(manga[40], posimg1, 8);
    image(manga[41], posimg2, 8);
    image(manga[42], posimg3, 8);
    image(manga[43], posimg4, 8);

    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 23 (línea principal)
  else if (estado === 24) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 15;
    posimg3 += 20;

    if (posimg1 >= 6) {
      posimg1 = 6;
    }
    if (posimg2 >= 265) {
      posimg2 = 265;
      posFlechax = 595;
      posTexto1x = 465
        posCaja1x = 455;
    }
    if (posimg3 >= 68) {
      posimg3 = 68;
    }

    image(img[2], 0, 0);
    image(manga[44], posimg1, 6);
    image(manga[45], posimg2, 6);
    image(manga[46], posimg3, 268);
    push()
      textSize(16);
    cajaTexto(posCaja1x, 214, 164, 249);
    text(texto[63], posTexto1x, 265, 130);//moro se vuelve loco...
    pop();

    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 24 (línea principal)
  else if (estado === 25) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 15;
    posimg3 += 15;
    posimg4 += 20;

    if (posimg1 >= 6) {
      posimg1 = 6;
    }
    if (posimg2 >= 124) {
      posimg2 = 124;
    }
    if (posimg3 >= 124) {
      posimg3 = 124;
    }
    if (posimg4 >= 358) {
      posimg4 = 358;
      posFlechax = 595;
      posTexto1x = 319;
      posCaja1x = 297;
    }

    image(img[2], 0, 0);
    image(manga[47], posimg1, 6);
    image(manga[48], posimg2, 6);
    image(manga[49], posimg3, 189);
    image(manga[50], posimg4, 6);

    cajaTexto(posCaja1x, 340, 290, 80);
    push();
    textSize(16);
    text(texto[64], posTexto1x, 370, 240);//Goku logra eliminar...
    pop();
    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 25 (línea principal- FINAL)
  else if (estado === 26) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;

    if (posimg1 >= 9) {
      posimg1 = 9;
    }
    if (posimg2 >= 203) {
      posimg2 = 203;
    }
    if (posimg3 >= 293) {
      posimg3 = 293;
      posTexto1x = 470;
      posTexto2x = width/2;
      posTexto3x = 100;
      posTexto4x = 100;
      posCaja1x = 457;
    }

    image(img[4], 0, 0);
    image(manga[51], posimg1, 9);
    image(manga[52], posimg2, 9);
    image(manga[53], posimg3, 9);

    cajaTexto(posCaja1x, 59, 115, 167);
    text(texto[65], posTexto1x, 79, 90);//Goku logra eliminar...
    textSjj(66, 130, posTexto2x, 300);
    botonHover(30, 370, 140, 30, 40, 67, 100, 400);
    botonHover(30, 420, 140, 30, 40, 68, 100, 450);
    ;
  }
  //pantalla 26 (PANTALLA DE CRÉDITOS)
  else if (estado === 27) {
    //para mover las imagenes
    image(img[5], 0, 0);
    mostrarCreditos();
    botonHover(30, 420, 135, 30, 40, 67, 100, 450);
  }  //pantalla 28 (Final alternativo 1)
  else if (estado === 28) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 10;
    posimg4 += 10;
    posimg5 += 15;

    if (posimg1 >= 6) {
      posimg1 = 6;
    }
    if (posimg2 >= 224) {
      posimg2 = 224;
    }
    if (posimg3 >= 6) {
      posimg3 = 6;
    }
    if (posimg4 >= 6) {
      posimg4 = 6;
    }
    if (posimg5 >= 224) {
      posimg5 = 224;
      posTexto1x = 206;
      posTexto2x = 285;
      posCaja1x = 192;
      posFlechax = 595;
    }
    image(manga[56], posimg1, 9);
    image(manga[57], posimg2, 9);
    image(manga[58], posimg3, 216);
    image(manga[59], posimg4, 354);
    image(manga[60], posimg5, 200);
    cajaTexto(posCaja1x, 137, 181, 217);
    push();
    textSize(15);
    text(texto[74], posTexto1x, 165, 148);//Moro, en su....
    pop();
    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(80);
    fill(255, 241, 0);
    text(texto[66], posTexto2x, 390);//FIN
    pop();

    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 29 - FINAL 2
  else if (estado === 29) {
    //para mover las imagenes
    image(img[6], 0, 0);
    botonHover(30, 370, 140, 30, 40, 67, 100, 400);
    botonHover(30, 420, 140, 30, 40, 68, 100, 450);

    //pantalla 30 - linea alternativa 3)
  } else if (estado === 30) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 5) {
      posimg1 = 5;
    }
    if (posimg2 >= 191) {
      posimg2 = 191;
      posTexto1x = 323;
      posTexto2x = 483;
      posFlechax = 595;
    }

    image(img[1], 0, 0);
    image(manga[61], posimg1, 5);
    image(manga[62], posimg2, 5);
    text(texto[75], posTexto1x, 50, 116);
    text(texto[76], posTexto2x, 35, 104);
    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 31 - línea alternativa 3)
  else if (estado === 31) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 152) {
      posimg1 = 152;
    }
    if (posimg2 >= 473) {
      posimg2 = 473;
      posTexto1x = 38;
      posTexto2x = 389;
      posFlechax = 595;
      posimg3 = 0;
    }

    image(img[0], 0, 0);
    image(manga[63], posimg1, 5);
    image(manga[64], posimg2, 5);
    image(png[12], posimg3, 127);
    push();
    textSize(13);
    text(texto[77], posTexto1x, 190, 148); //mientras tanto...
    pop();
    text(texto[78], posTexto2x, 50, 76); // listo, tu deseo...
    flechaHover(posFlechax, 445, 40, 31);

    //pantalla 32 - FINAL linea alternativa 3
  } else if (estado === 32) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 10;
    posimg4 += 10;
    posimg5 += 15;

    if (posimg1 >= 4) {
      posimg1 = 4;
    }
    if (posimg2 >= 4) {
      posimg2 = 4;
    }
    if (posimg3 >= 290) {
      posimg3 = 290;
    }
    if (posimg4 >= 290) {
      posimg4 = 290;
    }
    if (posimg5 >= 453) {
      posimg5 = 453;
      posTexto1x = 287;
      posTexto2x = 520;
      posCaja1x = 270;
      posFlechax = 595;
    }
    image(img[2], 0, 0);
    image(manga[65], posimg1, 4);
    image(manga[66], posimg2, 189);
    image(manga[67], posimg3, 4);
    image(png[13], posimg4, 220);
    image(png[14], posimg5, 220);
    cajaTexto(posCaja1x, 341, 308, 114);
    text(texto[79], posTexto1x, 370, 273);//Con el deseo...
    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(55);
    fill(255, 241, 0);
    text(texto[66], posTexto2x, 475);//FIN
    pop();
    flechaHover(posFlechax, 445, 40, 31);
  }//pantalla 33 - línea alternativa 4)
  else if (estado === 12) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;

    if (posimg1 >= 6) {
      posimg1 = 6;
      posTexto1x = 160;
      posTexto2x = 225;
    }
    if (posimg2 >= 384) {
      posimg2 = 384;
      posTexto3x = 381;
      posTexto4x = 435;
    }
    if (posimg3 >= 478) {
      posimg3 = 478;
      posTexto5x = 487 ;
      posFlechax = 595;
    }

    image(img[0], 0, 0);
    image(manga[68], posimg1, 6);
    push();
    textSize(18);
    text(texto[80], posTexto1x, 190, 44);//no!
    pop();
    push();
    textSize(16);
    text(texto[81], posTexto2x, 267, 146); // no podemos...
    pop();
    image(manga[69], posimg2, 6);
    text(texto[83], posTexto4x, 30, 39); // pe...pero...
    push();
    textSize(13);
    text(texto[82], posTexto3x, 270, 46); //un saiyajin...
    pop();
    image(manga[70], posimg3, 6);
    push();
    textSize(16);
    text(texto[84], posTexto5x, 30, 104); // el orgullo...
    pop();


    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 34 - línea alternativa 5)
  else if (estado === 17) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;

    if (posimg1 >= 6) {
      posimg1 = 6;
      posTexto1x = 84;
      posTexto2x = 228;
    }
    if (posimg2 >= 6) {
      posimg2 = 6;
      posTexto3x = 295 ;
      posFlechax = 595;
      posCaja1x = 278;
    }

    image(img[3], 0, 0);
    image(manga[71], posimg1, 6);
    text(texto[85], posTexto1x, 42, 89);//ESTA BIEN...
    push();
    textSize(12);
    text(texto[86], posTexto2x, 45, 34);// LO HARE!!
    pop();
    image(manga[72], posimg2, 220);
    cajaTexto(posCaja1x, 344, 296, 110);
    push();
    textSize(16);
    text(texto[87], posTexto3x, 375, 262); // entonces vegeta....
    pop();

    flechaHover(posFlechax, 445, 40, 31);
  }
  //pantalla 35 - línea alternativa 5)
  else if (estado === 34) {
    //para mover las imagenes
    posimg1 += 10;
    posimg2 += 10;
    posimg3 += 15;
    posimg4 += 15;
    posimg5 += 15;
    posimg6 += 20;
    posimg7 += 20;

    if (posimg1 >= 7) {
      posimg1 = 7;
      posTexto1x = 7;
      posTexto2x = 185;
    }
    if (posimg2 >= 224) {
      posimg2 = 224;
      posTexto3x = 298;
    }
    if (posimg3 >= 7) {
      posimg3 = 7;
    }
    if (posimg4 >= 147) {
      posimg4 = 147;
    }
    if (posimg5 >= 269) {
      posimg5 = 269;
    }
    if (posimg6 >= 386) {
      posimg6 = 386;
    }
    if (posimg7 >= 507) {
      posimg7 = 507;
      posFlechax = 595;
      posCaja1x = 275;
      posTexto4x = 303;
      posTexto5x = 440;
    }

    image(img[2], 0, 0);
    image(manga[73], posimg1, 6);
    text(texto[88], posTexto1x, 45, 27);//GAH...
    text(texto[89], posTexto2x, 47, 34);//AHG...
    image(manga[74], posimg2, 6);
    push()
      textSize(16);
    text(texto[90], posTexto3x, 35, 42);//GW... OGH...
    pop();
    image(manga[75], posimg3, 302);
    image(manga[76], posimg4, 302);
    image(manga[77], posimg5, 302);
    image(manga[78], posimg6, 302);
    image(manga[79], posimg7, 302);

    cajaTexto(posCaja1x, 207, 332, 105);
    push();
    textSize(16);
    text(texto[91], posTexto4x, 236, 276);// GOKU Y LOS DEMAS...
    pop();

    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(55);
    fill(255, 241, 0);
    text(texto[66], posTexto5x, 345);//FIN
    pop();

    image(png[10], posFlechax, 445);
  }
  //pantalla 35 - línea alternativa 5)
  else if (estado === 22) {
    //para mover las imagenes
    posimg1 += 20;
    posimg2 += 15;
    posimg3 += 15;
    posimg4 += 15;
    posimg5 += 20;
    posimg6 += 20;
    posimg7 += 20;

    if (posimg1 >= 7) {
      posimg1 = 7;
      posTexto1x = 7;
      posTexto2x = 221;
    }
    if (posimg2 >= 262) {
      posimg2 = 262;
    }
    if (posimg3 >= 399) {
      posimg3 = 399;
    }
    if (posimg4 >= 521) {
      posimg4 = 521;
    }
    if (posimg5 >= 262) {
      posimg5 = 262;
    }
    if (posimg6 >= 399) {
      posimg6 = 399;
    }
    if (posimg7 >= 521) {
      posimg7 = 521;

      posFlechax = 595;
      posCaja1x = 162;
      posTexto3x = 183;
      posTexto4x = 335;
    }

    image(img[2], 0, 0);
    image(manga[80], posimg1, 6);
    text(texto[88], posTexto1x, 45, 27);//GAH...
    text(texto[89], posTexto2x, 47, 34);//AHG...
    image(manga[81], posimg2, 6);
    image(manga[82], posimg3, 6);
    image(manga[83], posimg4, 6);
    image(manga[84], posimg5, 179);
    image(manga[85], posimg6, 179);
    image(manga[86], posimg7, 179);

    cajaTexto(posCaja1x, 330, 328, 121);
    push();
    textSize(16);
    text(texto[91], posTexto3x, 358, 285);// GOKU Y LOS DEMAS...
    pop();

    push();
    textFont(sjj);
    strokeWeight(5);
    stroke(0);
    textSize(55);
    fill(255, 241, 0);
    text(texto[66], posTexto4x, 467);//FIN
    pop();

    image(png[10], posFlechax, 445);
  }
}
function mousePressed() {

  if (estado === 0) {
    if (esBoton(250, 380, 130, 50)) {
      estado=1;
      song2.play();
      song6.stop();
      reiniciarvariables();
    }
    if (esBoton(31, 22, 51, 39) && song6.isPlaying()) {
      song6.stop();
    } else if (esBoton(31, 22, 51, 39)) {
      song6.play();
    }
  } else if (estado===1) {
    if (esBoton(578, 440, 39, 29)) {
      estado=2;
      song2.play();
      reiniciarvariables();
    }
    //primera bifurcación
  } else if (estado===2) {
    if (esBoton(573, 262, 39, 29)) {
      estado=3; //camino 1
      song2.play();
      reiniciarvariables();
    }
    if (esBoton(593, 397, 39, 29)) {
      estado=4; //camino 2
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===3) {
    if (esBoton(578, 8, 39, 29)) {
      estado=5;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===5) {
    if (esBoton(593, 443, 39, 29)) {
      estado=6;
      song2.play();
      reiniciarvariables();
    }
    //segunda bifurcación
  } else if (estado===6) {
    if (esBoton(573, 267, 39, 29)) {
      song2.play();
      estado=7;//camino 1
      reiniciarvariables();
    }
    if (esBoton(593, 397, 39, 29)) {
      estado=30; //camino 2
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===7) {
    if (esBoton(593, 443, 39, 29)) {
      estado=8;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===8) {
    if (esBoton(593, 443, 39, 29)) {
      estado=9;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===9) {
    if (esBoton(593, 443, 39, 29)) {
      estado=10;
      song2.play();
      reiniciarvariables();
    }
  }
  //Tercera bifurcación
  else if (estado===10) {
    if (esBoton(430, 327, 39, 29)) {
      estado=11; //camino 1
      song2.play();
      reiniciarvariables();
    }
    if (esBoton(567, 407, 39, 29)) {
      estado=12; //camino 2
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===11) {
    if (esBoton(593, 443, 39, 29)) {
      estado=13;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===13) {
    if (esBoton(593, 443, 39, 29)) {
      estado=14;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===14) {
    if (esBoton(593, 443, 39, 29)) {
      estado=15;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===15) {
    if (esBoton(497, 266, 39, 29)) {
      estado=17; //camino 2
      song2.play();
      reiniciarvariables();
    }
    if (esBoton(555, 415, 39, 29)) {
      estado=16; //camino 1
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===16) {
    if (esBoton(593, 443, 39, 29)) {
      estado=18;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===18) {
    if (esBoton(593, 443, 39, 29)) {
      estado=19;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===19) {
    if (esBoton(593, 443, 39, 29)) {
      estado=20;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===20) {
    if (esBoton(593, 443, 39, 29)) {
      estado=22;//camino 2
      song4.play();
      reiniciarvariables();
    }
    if (esBoton(508, 310, 322, 29)) {
      estado=21; //camino 1
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===21) {
    if (esBoton(593, 443, 39, 29)) {
      estado=23;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===23) {
    if (esBoton(593, 443, 39, 29)) {
      estado=24;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===24) {
    if (esBoton(593, 443, 39, 29)) {
      estado=25;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===25) {
    if (esBoton(593, 443, 39, 29)) {
      estado=26; //esta es la pantala fina de la linea principal
      song.play();
      reiniciarvariables();
    }
  } else if (estado===26) { //pantalla final
    if (esBoton(45, 355, 100, 40)) {
      estado=0; //PANTALLA INICIAL
      song6.play();
      song.stop();
      reiniciarvariables();
    }
    if (esBoton(45, 415, 80, 40)) {
      estado=27; //pantalla de creditos
      song7.play();
      song.stop();
      reiniciarvariables();
    }
  } else if (estado===4) {
    if (esBoton(593, 443, 39, 29)) {
      estado=28;
      song4.play();
      reiniciarvariables();
    }
  } else if (estado===28) {
    if (esBoton(593, 443, 39, 29)) {
      estado=29;// pantalla final 2
      song5.play();
      song4.stop();
      reiniciarvariables();
    }
  } else if (estado===29) { //pantalla final 2
    if (esBoton(45, 355, 100, 40)) {
      estado=0; //PANTALLA INICIAL
      song6.play();
      song5.stop();
      reiniciarvariables();
    }
    if (esBoton(45, 415, 80, 40)) {
      estado=27; //pantalla de creditos
      song7.play();
      song5.stop();
      reiniciarvariables();
    }
  } else if (estado===27) { //pantalla de creditos
    if ( esBoton(50, 415, 115, 30)) {
      estado=0; //PANTALLA INICIAL
      song6.play();
      song7.stop();
      reiniciarvariables();
    }
  } else if (estado===30) { //linea alternativa 3
    if (esBoton(593, 443, 39, 29)) {
      estado=31;
      song2.play();
      reiniciarvariables();
    }
  } else if (estado===31) { //linea alternativa 3
    if (esBoton(593, 443, 39, 29)) {
      estado=32;
      song4.play();
      reiniciarvariables();
    }
  } else if (estado===32) { //linea alternativa 3
    if (esBoton(593, 443, 39, 29)) {
      estado=29;//PANTALLA FINAL 2
      song5.play();
      song4.stop();
      reiniciarvariables();
    }
  } else if (estado===12) { //linea alternativa 3
    if (esBoton(593, 443, 39, 29)) {
      estado=32;
      song4.play();
      reiniciarvariables();
    }
  } else if (estado===18) { //linea alternativa 4
    if (esBoton(593, 443, 39, 29)) {
      song4.play();
      estado=33;
      reiniciarvariables();
    }
  } else if (estado===33) { //linea alternativa 3
    if (esBoton(593, 443, 39, 29)) {
      estado=29; //PANTALLA FINAL 2
      song5.play();
      song4.stop();
      reiniciarvariables();
    }
  } else if (estado===17) { //linea alternativa 4
    if (esBoton(593, 443, 39, 29)) {
      song4.play();
      estado=34;
      reiniciarvariables();
    }
  } else if (estado===34) { //linea alternativa 5
    if (esBoton(593, 443, 39, 29)) {
      estado=29; //PANTALLA FINAL 2
      song5.play()
        song4.stop();
      reiniciarvariables();
    }
  } else if (estado===22) { //linea alternativa 5
    if (esBoton(593, 443, 39, 29)) {
      song4.stop();
      song5.play();
      estado=29; //PANTALLA FINAL 2
      reiniciarvariables();
    }
  }
}
