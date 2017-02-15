
  //window.onload = function inicio() {
  	function inicio(){
  /* muestra la mesa de juegos */
    document.getElementById('mesaJuego').style.display = 'block';
    var nombre = document.getElementById("nombre");
    nombre.innerHTML = prompt("Dime tu nombre");
}/* fin cmdJuego*/

    /* VARIABLES DEL JUEGO */
var creditos = document.juego.creditos.value = 10;
var contador = 10;

    /* incremento de creditos */
function incrementar() {
    if (contador == 100) {
        alert('Maximo permitido alcanzado: 100');
    }else {
        document.juego.creditos.value = contador++;
    }
}
function decrementar() {
    if(contador == 5) {
        alert('Minimo permitido alcanzado: 5');
    }else {
        document.juego.creditos.value = contador--;
    }
}
    /* VARIABLES DEL JUEGO */
    /* jugador */
var cartaJugador = document.getElementById("carta-click");

var contenedorJugador = document.getElementById("cartas-jugador");
var marcadorJugador = document.getElementById("marcador-jugador");
    /* ordenador */
var contenedorOrdenador = document.getElementById("cartas-Ordenador");
var marcadorCpu = document.getElementById("marcador-Ordenador");
    /*contador de victorias*/
var victoriasJugador = document.getElementById("victorias-jugador");
var victoriasCpu = document.getElementById("victorias-Ordenador");
    /* botones */
var NuevaMano = document.getElementById("nuevo-juego");
var Plantarse = document.getElementById("plantarse");
var cerrarJuego = document.getElementById("salir");
    /* mensajes */
var mensaje = document.getElementById("mensaje");



    /* Variables  */
var marcadorJ = 0;
var marcadorO = 0;
var contVictoriasJ = 0;
var contVictoriasO = 0;
var plantado = false;
var salir = false;
var contCartas = 7.5;
var cartaVieja = new Array();
var puntos = 0;

    /* mensajes del juego */
ocultarMensaje();

cartaJugador.onmouseover = function() {
    mostrarMensaje();
    mensaje.innerHTML = "<h2>Pedir cartas</h2>";
}

cartaJugador.onmouseout = function() {
    ocultarMensaje();
}

cartaJugador.onclick = function() {
    if(plantado == false) {
        asignaCartaJugador();

    }else {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>No puedes pedir mas cartas si te has plantado</h2>";
    }
}
/* inpide qeue le jugador siga sacando mas cartas si se pasa de 7.5*/
cartaJugador.onclick = function(){
    if(marcadorJ < 7.5 ) {
        asignaCartaJugador();

    }else if(marcadorJ> 7.5){
        mostrarMensaje(); 
        mensaje.innerHTML = "<h2>Gana la banca</h2>";
        plantado = true; 
        
        alert("No puedes pedir mas cartas si te has pasado de 7.5");
    }
    else{
              
        alert("No puedes pedir mas cartas si te has pasado de 7.5");

        plantado = true;
        }
    }
 

    /* Funciones del Juego */
    /* asignacion de catas al jugador */
function asignaCartaJugador() {
    var selec_carta;
    var cont = 0;

    var numAleatorio = Math.floor((Math.random()* 40)+ 1);

    for(var i=0; i<cartaVieja.length; i++){
        selec_carta = cartaVieja[i];
    }
    //añadimos la carta aleatoria al Array
        cartaVieja.push(numAleatorio);

    if(selec_carta != numAleatorio){
        var nuevaCarta = document.createElement("picture");

        nuevaCarta.className = "nueva-carta";
        contenedorJugador.appendChild(nuevaCarta);
        nuevaCarta.innerHTML = "<img src='img/" + numAleatorio + ".PNG' class='img' />";
        marcadorJ = marcadorJ + valorCarta(numAleatorio);
        marcadorJugador.innerHTML = marcadorJ;

        cont = cont + marcadorJ;

        if (cont > 7.5) {
            mostrarMensaje();
            mensaje.innerHTML = "<h2>Gana la banca</h2>";
            plantado = true;

            alert("No puedes pedir mas cartas si te has pasado de 7.5");

            contVictoriasO++;
        }
    }    
}


    /* asignacion de cartas al ordenador */
function asignaCartaCpu() {
    var selec_carta;

    var numAleatorio = Math.floor((Math.random() * 40) + 1);
    for(var a=0; a<cartaVieja.length; a++){
        selec_carta = cartaVieja[a];
    }
    //añadimos la carta aleatoria al Array
        cartaVieja.push(numAleatorio);

        if (selec_carta != numAleatorio) {
            
                var nuevaCarta = document.createElement("picture");

                nuevaCarta.className = "nueva-carta";
                contenedorOrdenador.appendChild(nuevaCarta);
                nuevaCarta.innerHTML = "<img src='img/" + numAleatorio + ".PNG' class='img' />";
                marcadorO = marcadorO + valorCarta(numAleatorio);
                marcadorCpu.innerHTML = marcadorO;
        }
}
    /*  */
Plantarse.onclick = function() {

    if (marcadorJ > 7.5 ) {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>Gana la banca</h2>"
        plantado = true;

    }else if(marcadorJ > 0) {

        plantado = true;

        if(marcadorO < 7.5) {

            while(marcadorO < marcadorJ && marcadorO < 7.5) {
                
                asignaCartaCpu();

            }

        /*Comprueba el ganador*/
        comprobarGanador();
        cartaJugador.style.display = "none";
        }        
    }else {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>Debes jugar al menos una carta</h2>";
    }
}

    /* Reinicia el juego */
NuevaMano.onclick = function() {
    if(plantado == true){
        marcadorO = 0;
        marcadorJ = 0;
        plantado = false;
        contenedorOrdenador.innerHTML = "";
        contenedorJugador.innerHTML = "";
        marcadorCpu.innerHTML = 0;
        marcadorJugador.innerHTML = 0;
        victoriasCpu.innerHTML = contVictoriasO;
        victoriasJugador.innerHTML = contVictoriasJ;

        cartaJugador.style.display = "block";

        ocultarMensaje();
    } else {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>No has jugado ésta mano</h2>";
    }
}
    /* Control de cqrtas repetidas */
    
     /*asignamos un valor las cartas que se mostraran por pantalla */
function valorCarta(carta) {
    var valor;
    if(carta >= 1 && carta <= 4) {
        valor = 1;
    } else if(carta >= 5 && carta <= 8) {
        valor = 2;
    } else if(carta >= 9 && carta <= 12) {
        valor = 3;
    } else if(carta >= 13 && carta <= 16) {
        valor = 4;
    } else if(carta >= 17 && carta <= 20) {
        valor = 5;
    } else if(carta >= 21 && carta <= 24) {
        valor = 6;
    } else if(carta >= 25 && carta <= 28) {
        valor = 7;
    }else if(carta >= 29 && carta <= 40) {
        valor = 0.5;
    }
     return valor;
}

     /* comprbacion de puntuaciones */
function comprobarGanador() {// Si la puntuación del jugador es igual a 7.5

            mostrarMensaje();

            if(marcadorJ == 7.5){
                mensaje.innerHTML = "<h2 class='text-success'>Has ganado</h2>";
                contVictoriasJ++;

            } else if(marcadorJ < 7.5 && marcadorO > 7.5){ // Si la puntuación del jugador es menor a 7.5 pero la de la CPU no es 7.5
                mensaje.innerHTML = "<h2 class='text-success'>Has ganado</h2>";
                contVictoriasJ++;

            } else if(marcadorJ < 7.5 && marcadorO == 7.5){ // Si la puntuación del jugador es menor a 7.5 pero la de la CPU es 7.5
                mensaje.innerHTML = "<h2 class='text-danger'>Has perdido</h2>";
                contVictoriasO++;

            } else if(marcadorJ > 7.5){ // Si la puntuación del jugador es mayor a 7.5
                mensaje.innerHTML = "<h2 class='text-danger'>Has perdido</h2>";
                contVictoriasO++;

            } else if(marcadorJ == marcadorO) { // Si hay un empate
                mensaje.innerHTML = "<h2 class='text-success'>Habéis empatado</h2>";

            } else if(marcadorO > marcadorJ && marcadorO <= 7.5 || marcadorJ > 7.5) { //
                mensaje.innerHTML = "<h2 class='text-success'>Has perdido</h2>";
                contVictoriasO++;

            } else if(marcadorJ > marcadorO && marcadorO <= 7.5 || marcadorO > 7.5) { //
                mensaje.innerHTML = "<h2 class='text-success'>Has ganado</h2>";
                contVictoriasJ++;
            }

            
        }
    /* mensajes activa y desactivar */
function ocultarMensaje() {
     mensaje.style.visibility = "hidden";
     return true;
}

function mostrarMensaje() {
    mensaje.style.visibility = "visible";
    return true;
}

    /* ayuda */
function apareceayuda() {
    ayuda.style.visibility= "visible";
    return true;
}

function desapareceayuda() {
    ayuda.style.visibility= "hidden";
    return true;
}
    /* redireccion de paginas */
function redireccionarinicio() {
    location.href = "index.html";
}
function redireccionar() {
    location.href = "reglas.html";
}
function redireccionarRegistro() {
    location.href = "registrar.html"
}
    /* oculta la mesa de juegos */
cerrarJuego.onclick = function() {
    if (salir == false){
         marcadorO = 0;
            marcadorJ = 0;
            plantado = false;
            contenedorOrdenador.innerHTML = "";
            contenedorJugador.innerHTML = "";
            marcadorCpu.innerHTML = 0;
            marcadorJugador.innerHTML = 0;
            victoriasCpu.innerHTML = 0;
            victoriasJugador.innerHTML = 0;
            contVictoriasJ = 0;
            contVictoriasO = 0;
            cartaJugador.style.display = "block";
            document.getElementById('mesaJuego').style.display = 'none';
    }          
}
