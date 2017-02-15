  $(function(){
      
        /* •  Añadir al elemento "h1" que tiene el nombre del vuelo, el nombre de vuelo asignado que sera “815 Oceanic”.*/
        
        $('h1 > i').eq(0).html(' 815 Oceanic');
        
       /* •  Guarda en tres variables los parámetros principales del vuelo (la hora de salida,
         la puerta de salida y el destino), si no tiene asignada todavía nada, almacena el valor "Sin asignar".*/
        
        var horaDeSalida, puertaDeSalida, llegada;
        
        horaDeSalida = $('#time > td').html();
        if (horaDeSalida === ""){
            horaDeSalida = " Sin asignar"
        }
        console.log(horaDeSalida);
        
        puertaDeSalida = $('#gate > td').html();
        if (puertaDeSalida === ""){
            puertaDeSalida = " Sin asignar"
        }
        console.log(puertaDeSalida);
        
        llegada = $('#arrives > td').html();
        if (llegada === ""){
            llegada = " Sin asignar"
        }
        console.log(llegada);
        
        
        /* •  Añade entre paréntesis la hora de actualización de los paneles 
         "Logística" y "Pasajeros". Después de cada actualización (ejercicio) se deberán actualizar las horas.*/
        
        $('h2').each(function( index ) {
          $( this ).append(" " + new Date($.now()))
        });
        /* •  Tendremos tres clases diferentes para los pasajeros que hayan 
         embarcado, esten pendientes y no hallan embarcado (elegir colores y características que queráis).*/
         /*.embarcado , .pendiente , .noEmbarcado*/
        
         /*•  Añadir a los pasajeros cuyo nombre no empiece por "J" la clase de embarcados.
         Todos los demás estarán pendientes todavía.*/
        var nombre;
        $('ul > li').each(function( index ) {
          nombre = $(this).html();
          if (nombre.substring(0,1) == "J")
          {
              $(this).addClass( "embarcado" );
          }else{
              $(this).addClass( "pendiente" );
          }
        });
        
        /* •  Añadir características al vuelo (puerta, hora y destino).*/
        
        $('#time > td').html("13:11");
        
        $('#gate > td').html("4.Salida");
        
        $('#arrives > td').html("Miami 02:01");
        
        /* •  Marcar como embarcados a todos los pasajeros que quedan sin hacerlo excepto "Charlie Pace".*/

      $('.pendiente').each(function( index ) {
          if ($(this).html() != "Charlie Pace")
          {
            $(this).removeClass('pendiente').addClass('embarcado');
          }
        });
    });