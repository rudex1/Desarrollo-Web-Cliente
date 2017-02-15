// 3.	Crear una página con varios párrafos y diferentes imágenes.
        // Cuando se intente hacer clic con el botón derecho en alguna imagen
        // deberá alertarnos de que esa acción está prohibida. Cuando seleccionemos
        // parte del texto aparecerá otro alert diciéndonos que también está prohibido.
            $(function(){
                 $(document).bind("contextmenu",function(e){
                     return false;
                 });
                $( "img" ).contextmenu(function() {
                  alert( "Acción Prohibida" );
                  return false;
                });
                $( "p" ).select(function() {
                  alert("asdf");
                });
                $("p").on( "select", function() {
                    alert("adsf");
                } );
            });