// 2.	Crea un formulario con 6 cuadros de texto, divididos en dos párrafos. 
    // Cada vez que un cuadro de texto tenga el foco deberá resaltar su borde en color 
    // rojo y la el párrafo al que pertenece deberá resaltar el color de fondo en azul.
    $( document ).ready(function() {
    $('input:text').focus(
    function(){
        $(this).css({'border-color' : 'red'});
        $(this).parent().css({'background-color' : 'blue'});
    });

    $('input:text').blur(
    function(){
        $(this).css({'border-color' : 'grey'});
        $(this).parent().css({'background-color' : 'white'});
    });
    
    });