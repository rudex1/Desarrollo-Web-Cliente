    $(function(){
          /*
          * •    Seleccionar los asientos de la zona VIP y mostrarlos en pantalla.*/
          
          console.log(
              $('#zona_vip').children().children().children().children().each(function( index ) {
                     console.log( (index +1) + ": " + $( this ).text() );
                    })
                 
              );
             
             /* •  Seleccionar los asientos de la zona POPULAR y mostrarlos en pantalla.
             */
             console.log(
                 $('#zona_popular').children().children().children().each(function( index ) {
                      console.log( (index +1) + ": " + $( this ).text() );
                    })
                 
                );
             /*
             * •    Mostrar en rojo todos los asientos 3 de todas las filas.
             */
             console.log(
                 $('li:nth-child(3)').not('#row_4').css('color','red')
                 
             );
             
             /*
             * •    Mostrar en rojo todos los asientos de la zona VIP y poner el texto de “FILA COMPLETA” en la descripción de la fila.
             */
             console.log(
                 $('#zona_vip > i > li').html($('#zona_vip > i > li').html().replace("FILA Libre", "FILA Completa")).children().css('color','red')
                 
             );
             
             /*
             * •    Muestra en pantalla el número de asientos que están libres todavía (no están en rojo).
             */
             var cont = 0;
             $('li').each(function() {
               if ('rgb(255, 0, 0)' ==  $(this).css('color')){
                    cont ++;
                  }
             });
             console.log("Asiemtos libre: " + cont);
             
             /*
             * •    Seleccionar todos los asientos pares y marcarlos como reservados (en color azul).
             */
             console.log(
                 $('li:even').not('#row_1').not('#row_2').not('#row_3').not('#row_4').css('color','blue')
                 
             );
             
             /*
             * •    Anadir un fila nueva al final del todo, con sus correspondientes asientos.
             */
             console.log(
                $('#asientos > ul#zona_popular').append('<li id="row_5">FILA Libre<ul><li>asiento 5-1</li><li>asiento 5-2</li><li>asiento 5-3</li><li>asiento 5-4</li><li>asiento 5-5</li></ul></li>')
                 
             );
             /*
             *• Borrar los asientos de la zona VIP, y renombrar atributo id de las filas y adecuar el texto de los asientos.
             */
             
                $('#zona_vip').remove();
                $("#row_2").attr("id", "row_1");
                $("#row_3").attr("id", "row_2");
                $("#row_4").attr("id", "row_3");
                $("#row_5").attr("id", "row_4");
                
                for (var x = 1; x <= 5; x++ ){
                   $("#row_" + x).children().children().each(function(index) {
                $(this).text('asiento ' + x + '-' + (index + 1));
               
              $(this).html($(this).html().replace('asiento '+ (index + 2) + '-'+ (index + 1),'asiento '+ x +'-'+ (index + 1)))

             });
                }
                
             

    });