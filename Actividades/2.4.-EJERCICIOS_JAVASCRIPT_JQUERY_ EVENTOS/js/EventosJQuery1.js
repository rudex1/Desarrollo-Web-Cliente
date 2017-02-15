//         1.	Crea una página con diferentes elementos (div, p, a, li):
        
        // •	Al hacer clic en los párrafos, estos se borraran.
        // •	Los enlaces, que apuntaran a la web de zubiri, no se abrirán y se avisara con un alert de que se ha bloqueado el enlace.
        // •	Al pasar el ratón por encima de los li estos se les añadirá una clase que modifique el aspecto del texto.
        // •	Al hacer clic en el algún elemento div, se borrara el contenido completo de estos y se añadirá el texto de “BORRADO!!”
        $( document ).ready(function() {
            $("p").click( function() {
                $(this).remove();
            });
            $('a[href="http://www.zubirimanteo.hezkuntza.net/web/guest/inicio"]').click(function(e)
            {
              
                alert("Se ha bloqueado el enlace")
                
                e.preventDefault();
                e.stopPropagation();
            });
            $("li").hover(function(){
                $(this).addClass( "colorAzul" );
             
            });
            $("li").mouseout(function() {
                $(this).removeClass( "colorAzul" );
            });
            $("div").click( function(e) {
                $(this).remove();
                alert("Borrado");
                e.preventDefault();
                e.stopPropagation();
            });
        });