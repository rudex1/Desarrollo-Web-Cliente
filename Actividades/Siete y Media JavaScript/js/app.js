
function inicio() {
  /* muestra la mesa de juegos */
    document.getElementById('mesaJuego').style.display = 'block';
    var nombre = document.getElementById("nombre");
    nombre.innerHTML = prompt("Dime tu nombre");

}
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
var mensaje = document.getElementById("mensaje");

var cerrarJuego = document.getElementById("salir");

    /* Variables  */
var marcadorJ = 0;
var marcadorO = 0;
var contVictoriasJ = 0;
var contVictoriasO = 0;
var plantado = false;
var salir = false; 

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
    } else {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>No puedes pedir mas cartas si te has plantado</h2>";
    }
}

Plantarse.onclick = function() {
    if(marcadorJ > 0) {
        plantado = true;
        
        while(marcadorO < 7.5) {
            asignaCartaCpu();
        }
        
        /*Comprueba el ganador*/
        comprobarGanador();
    } else {
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
        
        ocultarMensaje();
    } else {
        mostrarMensaje();
        mensaje.innerHTML = "<h2>No has jugado ésta mano</h2>"
    }
}
    /* Funciones del Juego */ 
    /* asignacion de catas al jugador */
function asignaCartaJugador() {            
    var numAleatorio = Math.floor((Math.random() * 48) + 1);
    var nuevaCarta = document.createElement("picture");
            
    nuevaCarta.className = "nueva-carta";
    contenedorJugador.appendChild(nuevaCarta);
    nuevaCarta.innerHTML = "<img src='img/" + numAleatorio + ".PNG' class='img' />";
    marcadorJ = marcadorJ + valorCarta(numAleatorio);
    marcadorJugador.innerHTML = marcadorJ;
}
    /* asignacionde cartas al al orddenador */ 
function asignaCartaCpu() {            
    var numAleatorio = Math.floor((Math.random() * 48) + 1);
    var nuevaCarta = document.createElement("picture");
            
    nuevaCarta.className = "nueva-carta";
    contenedorOrdenador.appendChild(nuevaCarta);
    nuevaCarta.innerHTML = "<img src='img/" + numAleatorio + ".PNG' class='img' />";
    marcadorO = marcadorO + valorCarta(numAleatorio);
    marcadorCpu.innerHTML = marcadorO;
}
     /*signamos un valor las cartas que se mostraran por pantalla */     
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
    }else if(carta >= 29 && carta <= 32) {
        valor = 8;
    }else if(carta >= 33 && carta <= 36) { 
        valor = 9;
    }else if(carta >= 37 && carta <= 48) {
        valor = 0.5;
    }
     return valor;
}
     /* comprbacion de puntuaciones */
function comprobarGanador() {    
    if(marcadorJ == 7.5) {/* Si la puntuación del jugador es igual a 7.5 */   
        mensaje.innerHTML = "<h2>Has ganado</h2>";
        contVictoriasJ++;
    } else if(marcadorJ < 7.5 && marcadorC != 7.5) { /* Si la puntuación del jugador es menor a 7.5 pero la del ordenador no es 7.5 */
        mensaje.innerHTML = "<h2>Has ganado</h2>";
        contVictoriasJ++;
    } else if(marcadorJ < 7.5 && marcadorC == 7.5) { /* Si la puntuación del jugador es menor a 7.5 pero la del ordenador es 7.5 */
        mensaje.innerHTML = "<h2>Has perdido</h2>";
        contVictoriasO++;
    } else if(marcadorJ > 7.5) { /* Si la puntuación del jugador es mayor a 7.5 */
        mensaje.innerHTML = "<h2>Has perdido</h2>";
        contVictoriasO++;
    } else if(marcadorJ == marcadorC) { /* Si hay un empate */
        mensaje.innerHTML = "<h2>Habéis empatado</h2>";
    }
    mostrarMensaje();
}
    /* mensajes */    
function ocultarMensaje() {
     mensaje.style.visibility = "hidden";
}
        
function mostrarMensaje() {
    mensaje.style.visibility = "visible";
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
/*cerrarJuego.onclick = function() {
    if(salir == true){
        marcadorO = 0;
        marcadorJ = 0;
        plantado = false;
        contenedorOrdenador.innerHTML = "";
        contenedorJugador.innerHTML = "";
        marcadorCpu.innerHTML = 0;
        marcadorJugador.innerHTML = 0;
        victoriasCpu.innerHTML = contVictoriasO;
        victoriasJugador.innerHTML = contVictoriasJ;
        document.getElementById('mesaJuego').style.display = 'none';
    }    
}*/

