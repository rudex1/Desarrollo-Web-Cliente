        // 5.	Crea una página en la que mostraremos un menú del día, con sus primeros,
        // segundos y postres. Como es un menú del día solo podremos elegir un plato de cada sección,
        // con lo que los elegiremos mediante unos radio buttons. Cuando marquemos un plato el texto 
        // del mismo deberá ponerse en cursiva. Por ultimo habrá un checkbox que marcaremos si queremos tomar café.
        // Al pulsar el botón "Pedir" 
        $(function(){
          var suMenu = [];
        $( "form" ).on( "submit", function( event ) {
          event.preventDefault();
          suMenu.push($( this ).serializeArray() );
          
          var arr_unchecked_values = $('input[type=checkbox]:checked').map(function(){return this.value}).get();
          suMenu.push(arr_unchecked_values);
          if (suMenu[1][0]!='si'){
            suMenu[1][0]= 'no';
          }
          console.log(suMenu);
          
          $('#results').html("<h3>Pedido</h3>" + "<ol><li>" + suMenu[0][0].value + "</li> <li>" + suMenu[0][1].value + "</li> <li>" + suMenu[0][2].value + "</li> <li> Cafe: " + suMenu[1][0] + "</li></ol>");
          suMenu = [];
        });
        
        
        
        });  