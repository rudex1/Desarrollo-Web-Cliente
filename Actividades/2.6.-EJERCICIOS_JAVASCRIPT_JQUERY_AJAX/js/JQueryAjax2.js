// 2.	Tendremos dos cuadros de texto en los que introduciremos dos números. 
// Tendremos un select (simple) que tendrá los diferentes signos matemáticos (+, -, *, /). 
// Cuando pulsemos el botón de calcular, el servidor calculara la operación con los números
// introducidos en los campos de texto y lo publicaremos en un label como resultado.
$(document).ready(function ()
{
	/* Asociar el evento de clic del botón 'igual'
	   con la lógica del negocio de la aplicación */

	$('#eragin').click(function()
	{
		aritmetika();
	});
	
function aritmetika()
{
	$.ajax ({
		url: 	'./php/EJERCICIOS_JQUERY_AJAX_2.php',     
		type:   'post', 
		data: 	$('#formulario').serialize(), 
    

		success: 	function(request, settings)
		{
console.log(request);
console.log("-------------------");
console.log(settings);

			$('#emaitza').css('color', '#0ab53a');

			$('#mezua').html(request);
			 $("#emaitza").val(request);
		},


		error: 	function(request, settings)
		{

			$('#emaitza').css('color', '#ff0e0e');

			$('#mezua').html('Error: ' + request.responseText);

			$('#emaitza').html('Error');
			console.log(request);
			console.log(settings);
		}
	}); 
}  
});
    </script>