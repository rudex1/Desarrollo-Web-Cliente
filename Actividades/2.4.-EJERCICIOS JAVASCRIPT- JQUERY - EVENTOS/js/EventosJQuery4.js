    // 4.	Crea una página con 4 cuadrados (div) que estén pegado entre
    // si haciendo un cuadrado mas grande. Cuando pasemos el ratón por
    // encima de ellos, escribirá en la pagina en que cuadrado se encuentra el ratón actualmente y desde cual ha entrado.
    $(function(){
        $('div').mouseover(function(e) {
 
           $('#donde').text(this.id + "-Existe ");
         
            e.stopPropagation();
        });
        $('div').mouseout(function(e) {
          $('#de').text( this.id + "-dónde viene " );
          e.stopPropagation();
        });
    });