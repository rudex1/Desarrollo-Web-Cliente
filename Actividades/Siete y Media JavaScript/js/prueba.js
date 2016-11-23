
/* Baraja de cartas */
/* ---------------- */



/* Inicializar la baraja */

function inicializarBaraja(){
    var i,j;

    for (i=0; i<PALOS; i++) {
        for (j=0; j<NUMEROS; j++) {
            baraja[NUMEROS*i+j].palo   = i;
            baraja[NUMEROS*i+j].numero = j;
        }
    }
}

/* Intercambiar dos cartas */

void intercambiar (Carta *c1, Carta *c2)
{
    Carta aux;

    aux = *c1;
    *c1 = *c2;
    *c2 = aux;
}

/* Barajar (mezclar de forma aleatoria las cartas de la baraja) */

void barajar (Baraja baraja)
{
  int cambios;
  int i,c1,c2;

  // Inicializar el generador de números aleatorios

  srand(time(NULL));

  // Número de intercambios de cartas (de 1 a 2000)

  cambios = 20 + (rand() % 1000);

  // Intercambiar cartas

  for (i=0; i<cambios; i++) {

      c1 = rand() % CARTAS;
      c2 = rand() % CARTAS;

      intercambiar( &(baraja[c1]), &(baraja[c2]) );
  }

}

/* Muestra en pantalla el valor de una carta */

function mostrarCarta(Carta carta){
   var palo[10];
    var numero[10];

    // Palo

    switch (carta.palo) {

      case Oros:
           strcpy (palo,"oros");
           break;

      case Copas:
           strcpy (palo,"copas");
           break;

      case Espadas:
           strcpy (palo,"espadas");
           break;

      case Bastos:
           strcpy (palo,"bastos");
           break;
    }

    // Número

    if (carta.numero<7) {

       sprintf (numero, "%d", carta.numero+1);

    } else if ( carta.numero == 7 ) {

        strcpy(numero,"Sota");

    } else if ( carta.numero == 8 ) {

        strcpy(numero,"Caballo");

    } else { // if ( carta.numero == 9 )

        strcpy(numero,"Rey");
    }

    // Salida

    printf("%s de %s\n", numero, palo);
}


/* Muestra en pantalla una baraja */

void mostrarBaraja (Baraja baraja)
{
    int i;

    for (i=0; i<CARTAS; i++)
        mostrarCarta(baraja[i]);
}

/* Rutinas de E/S */
/* -------------- */

/* Pregunta al usuario del tipo SÍ/NO */ 

function preguntar(char *mensaje){
   var c;

    do {
        printf("%s (s/n)\n",mensaje);
        c = getch();

    } while ((c!='s') && (c!='S') && (c!='n') && (c!='N'));

    if ((c=='s') || (c=='S'))
        return 1;
    else
        return 0;
}

/* Mensaje */

void mensaje (char *mensaje)
{
    printf("%s\n",mensaje);
}

/* Juego de las siete y media */
/* -------------------------- */

/* Devuelve el valor de una carta en el juego */

float puntos (Carta carta){
    if (carta.numero<7)
        return carta.numero + 1;
    else
        return 0.5;
}

/* Decide si el ordenador sigue jugando */

int pide_otra_carta (float mis_puntos, float tus_puntos)
{
  return (tus_puntos<=7.5) && ( (mis_puntos<tus_puntos) || (mis_puntos<5) );
}

/* Nos dice si el jugador gana la partida */

int gana_jugador (float puntos_jugador, float puntos_ordenador)
{
    return (puntos_jugador<=7.5) && ((puntos_jugador>puntos_ordenador) || (puntos_ordenador>7.5));
}

/* Da una carta y devuelve su valor */

float dar_carta (Baraja baraja, int *carta_actual, char *jugador)
{
    float valor = puntos ( baraja[*carta_actual] );

    printf("Carta para %s: ", jugador);
    mostrarCarta(baraja[*carta_actual]);
    (*carta_actual)++;

    return valor;
}

/* Partida */

function juego (Baraja baraja){
    var carta_actual;
    var puntos_jugador , puntos_ordenador;  // Puntos
    var jugador_sigue, ordenador_sigue;    // ¿seguir jugando?

    carta_actual = 0;
    puntos_jugador = /^\d*(\.\d{1})?\d{0,1}$/;
    puntos_ordenador = /^\d*(\.\d{1})?\d{0,1}$/;

    jugador_sigue = 1;
    ordenador_sigue = 1;

    do {
        // Carta para el jugador
        if (jugador_sigue) {
            // NOTA: Se podría ofrecer una recomendación llamando a
            //       pide_otra_carta(puntos_jugador,puntos_ordenador);
            if (preguntar("¿Quiere una carta?")) {
                puntos_jugador += dar_carta(baraja, &carta_actual, "el jugador");
                if (puntos_jugador>7.5) {
                    document.write("Te has pasado !!!");
                    jugador_sigue = 0;
                }
            } else {
                jugador_sigue = 0;
            }
        }
        // Carta para el ordenador
        if (ordenador_sigue) {
            // Estrategia del ordenador
            // NOTA: No vale mirar la baraja
            if ( pide_otra_carta(puntos_ordenador, puntos_jugador) ) {
                puntos_ordenador += dar_carta(baraja, &carta_actual, "el ordenador");
                if (puntos_ordenador>7.5) {
                    document.write("El ordenador se ha pasado");
                    ordenador_sigue = 0;
                }
            } else {
                document.write("El ordenador se planta");
                ordenador_sigue = 0;
            }
        }
        document.write("- Jugador: %.1f puntos\n", puntos_jugador);
        document.write("- Ordenador: %.1f puntos\n", puntos_ordenador);

    } while (jugador_sigue || ordenador_sigue);

    // Resultado de la partida

    if ( gana_jugador(puntos_jugador,puntos_ordenador) )
        alert("\nEnhorabuena, ha ganado la partida !!!\n");
    else
        alert("\nOtra vez será...\n");
}


/* Programa principal */
/* ------------------ */


int main (void)
{
    Baraja baraja;

    inicializarBaraja(baraja);
    //mostrarBaraja(baraja);

    do {

        barajar(baraja);
        //mostrarBaraja(baraja);
        juego(baraja);

    } while ( preguntar("¿Desea jugar otra partida?") );
    
    return 0;
}