$(function(){
			 /*
			  * 1.	Seleccionar todos los elementos div que poseen la clase “module”.
			  */
			 console.log($('div .module').length);
			 
			  /*
			  * 2.	Seleccionar el elemento label del elemento form utilizando un selector de atributo.
			  */
			 
			  console.log(
			  		$('[for=q]').html()
			 		
			  );
			 
			//  /*
			//  * 3.	Averiguar cuantas imágenes en la página poseen el atributo alt.
			//  */
			//  console.log(
			//  		$('[alt]').filter('img').length
			 		
			//  );
			//  /*
			//  * 4.	Seleccionar todas las filas impares del cuerpo de la tabla y mostrarlas en pantalla.
			//  */
			//  console.log(
			//  		$('tr:odd').css("background-color", "pink").length // filas impares

			 		
			//  );
			//  /*
			//  * 5.	Borrar el ultimo formulario sin seleccionar directamente el elemento form.
			//  */
			//  console.log(
			//  	$('#specials').last().remove()

			 		
			//  );
			//  /*
			//  * 6.	Seleccionar el ítem que posee la clase “current” dentro de la lista #myList y remover 
			//  */
			//  console.log(
			//  	$('#myList').children().filter('.current').remove()
			 	

			 		
			//  );
			 
			//  /*
			//  * 7.	Seleccionar el primer ítem de la lista en el elemento #slideshow; 
			//  * añadirle la clase “current” al mismo y luego añadir la clase “disabled” a los elementos hermanos.
			//  */
			//  console.log(
			//  	$('#slideshow').children().first().addClass('current').siblings().prop('disabled',true).addClass('disabled')

			 		
			//  );
			//  /*
			//  * 8.	Añadir 5 nuevos ítems al final de la lista desordenada #myList.
			//  */
			//  //console.log(
			//  	for (var x = 1; x <= 5; x++){
			//  	$("#myList").append('<li>lista ' + x + '</li>');
			//  	}

			 		
			//  //);
			 
			//  /*
			//  * 9.	Remover los ítems impares de la lista.
			//  */
			//  console.log(
			//  	$("li:odd").remove().parent().filter("#myList")

			 		
			//  );
			 
			//  /*
			//  * 10.	Añadir otro elemento h2 y otro párrafo al último div con clase "module".
			//  */
			//  console.log(
			//  	$('div').filter('.module').append('<h2>Iepa h2</h2><p>Ipea parrafo</p>')
			//  );
			 
			//  /*
			//  * 11.	Añadir otra opción al elemento select; darle a la opción añadida el valor “Wednesday”.
			//  */
			 //console.log(
				// 	$('select').append($('<option>', {
				// 	    value: 'Wednesday',
				// 	    text: 'Wednesday'
				// 	}))
			 //);
			 
			// /*
			//  * 12.	Añadir un nuevo div.module a la página después del último; luego añadir una copia de una de las imágenes
			//  * existentes dentro del nuevo div.
			//  */
			//  console.log(
			// 		$( "<div class='module'>hementxe</div>" ).insertAfter( "div .module" ).last().append($('img').first())
			//  );
			 
			 	

	});