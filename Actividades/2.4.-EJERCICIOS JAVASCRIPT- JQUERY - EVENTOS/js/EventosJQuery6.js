// 6.	Crear una página con un solo textarea. Cuando escribamos lo que sea,
// vigilara el numero de vocales que estemos introduciendo. Si es par,
// el fondo de la pagina será azul cielo, si es impar, será de color naranja chillón.
$(document).ready(function(){
	var cantVocales = 0;
	$("#text").keydown(function(event) {

		if(event.which == 65 || event.keyCode == 69 || event.keyCode == 73 || event.keyCode == 79 || event.keyCode == 85){
			cantVocales++;
		}else if(event.which == 8){
		    return false;
		}
		if(cantVocales %  2 == 0){
			$("body").removeClass("blue");
			$("body").addClass("orange");
		}else{
			$("body").removeClass("orange");
			$("body").addClass("blue");

		}
})
});