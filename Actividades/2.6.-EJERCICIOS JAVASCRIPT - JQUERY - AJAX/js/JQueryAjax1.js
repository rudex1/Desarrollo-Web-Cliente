// 1.	Crea una página con dos cuadros de texto y un textarea. 
// Serán para el nombre, email y comentario. Tendremos un botón para enviar. 
// La petición tendrá que comprobar si se han pasado los tres campos, en caso negativo,  
// devolverá un mensaje diciendo que el comentario no se ha publicado. 
// Si se rellenan todos los campos el servidor devolverá una respuesta afirmativa.
        
var data = {};
$(document).ready(function() {
  $('input[type="submit"]').on('click', function() {
      resetErrors();
      var url = './1.php';
      $.each($('form input, form select, form textarea'), function(i, v) {
          if (v.type !== 'submit') {
              data[v.name] = v.value;
          }
      }); //end each
      $.ajax({
          dataType: 'json',
          type: 'POST',
          url: url,
          data: data,
          success: function(resp) {
              console.log(resp);
              if (resp.erantzuna == "true") {
                  	//successful validation
                      $('form').submit();
                      console.log('Datu guztiak ondo sartuak, Esker Mila!')
                  	return false;
              } else {
                  $.each(resp, function(i, v) {
	        console.log(i + " => " + v); // view in console for error messages
                      var msg = '<label class="error" for="'+i+'">'+v+'</label>';
                      $('input[name="' + i + '"], select[name="' + i + '"], textarea[name="' + i + '"]').addClass('inputTxtError').after(msg);
                  });
                  var keys = Object.keys(resp);
                  $('input[name="'+keys[0]+'"]').focus();
              }
              return false;
          },
          error: function() {
              console.log('Arazo bat egon da');
          }
      });
      return false;
  });
});
function resetErrors() {
    $('form input, form select').removeClass('inputTxtError');
    $('label.error').remove();
}

