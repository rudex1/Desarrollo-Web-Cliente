$(document).ready(function() {
	/* Inicializo variables */
	var nNave = 1;
	var puntos = 1;
	var nivel = 0;
	var tiempo = 0;
	var OtroNivel;
	var nAtaque = 0;

	function NuevoNivel(){
		
		nivel++;
		tiempo = 2000/nivel;
		//Asigno el nivel a la capa para mostrarlo
		$("#MuestraNivel").html("Nivel </br>" + nivel)

		//Muestro el nuevo nivel
		$("#MuestraNivel").toggle(1200, function() {
			//Cuando se muestre, lo oculto y cuando termine lanzo la nave
			$("#MuestraNivel").toggle(1200, function() {

				//creo una nueva nave cada tiempo al ocultarse el efecto del nivel
				OtroNivel = setInterval(CrearNuevaNave, tiempo);
			});
		});

	};

	function CrearNuevaNave(){

		nNave++; //añado uno más al contador de naves
		nAtaque++;
		//actualizo el número de atacantes, es el número de naves – las eliminadas
		$("#ataque").html("Ataca: " + nAtaque);

		/*Añado la capa con id = Nave + el contador de la nave quedando: Nave1 / Nave2 …*/

		jQuery("#pantalla").append('<div id = "Nave"'+ nNave +'class = "nave"></div>')

		/*Cambio la posición de la capa de forma aleatoria*/
		var idNave = "#Nave"+nNave;
		$(idNave).css("position", "absolute");

		//Calculo la posición tomando en cuenta el ancho de la pantalla de la ventana, añadiendo un margen a derecha e izquierda, arriba y abajo
		$(idNave).css("left", 100 + Math.floor(Math.random() * ($(window).width()-300)));
		$(idNave).css("top", 100 + Math.floor(Math.random() * ($(window).height()-400)));

		/*Creo una función a esta capa, cada vez que se pulse en ella se oculta y elimina*/
		$(idNave).click(function() {

			$(idNave).fadeOut(500,function(){
			$("#marcador").html("Px: " + puntos++);
			nAtaque--;
			$("#ataque").html("Ataca: " + nAtaque);
			$(idNave).remove();
			//al eliminar la nave compruebo la cantidad de naves actuales por nivel para saber si paso de nivel y cambio parámetros
			if (puntos == (nivel * 10)){

				//primero elimino el intervalo existente y creo otro nuevo nivel
				clearInterval(OtroNivel);
				NuevoNivel();
			}
			})

		});

		/*Una vez creadas todas las propiedades de la capa la muestro*/
		$(idNave).fadeIn();
	};
	NuevoNivel();

});