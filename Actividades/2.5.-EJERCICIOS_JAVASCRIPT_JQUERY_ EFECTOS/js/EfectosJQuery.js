        // •    Cuando hagamos click encima de algún cuadrado, este se volverá un poco mas grande, y si hacemos 
        // click en uno que ya esta agrandado volverá a su tamaño. Solo puede estar un cuadrado aumentado de tamaño.
        // •    Al hacer doble click, el cuadrado en cuestión se desvanecerá y volverá a aparecer pero con el color cambiado.
        // •    Con las teclas de las flechas podremos mover el cuadrado que este agrandado. Si por algún casual se
        // cruzara con otro de los cuadrados, el cuadrado que se está moviendo se borrara.

        $(function(){
var enlarged = false;

$('.enlarge').on('click', function() {
    if(enlarged){

        $( ".caja" ).each(function() {
          $( this ).stop().animate({
            width: 100,
            height: 100
          });
          
        });
        enlarged = false;
    }
  var width = $(this).width();
  var height = $(this).height();


  if (!enlarged) {
      if (!$(this).hasClass('handitua')){
          width = 200;
    height = 200;
    enlarged = true;
    $(this).addClass('handitua');
    var callback = function($this) {
      $this.show();
    };
      }else{
    width = 100;
    height = 100;
    enlarged = false;
    $(this).removeClass('handitua');
      }
    
    enlarged = true;

    var callback = function($this) {
      $this.show();
    };
    
  } else {
    width = 100;
    height = 100;
    enlarged = false;


  }

  $(this).stop().animate({
    width: width,
    height: height
  });

});

$(".caja").dblclick(function() {
    $(this).fadeOut('slow',function(){
        $(this).toggleClass( "color" );
        $(this).fadeIn();
    });

});
    $(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".handitua").finish().animate({
            left: "-=50"
            
        });

        break;
    case 38:    //up arrow key
        $(".handitua").finish().animate({
            top: "-=50"
        });
        break;
    case 39:    //right arrow key
        $(".handitua").finish().animate({
            left: "+=50"
        });
        break;
    case 40:    //up arrow key
        $(".handitua").finish().animate({
            top: "+=50"
        });
        break;

    }
    var han = $('.handitua');
    var ezHan1 = $('.caja').not('.handitua').eq(0);
    var ezHan2 = $('.caja').not('.handitua').eq(1);
    var ezHan3 = $('.caja').not('.handitua').eq(2);
    if( collision(han,ezHan1) || collision(han,ezHan2) || collision(han,ezHan3)){
        $('.handitua').fadeOut('slow');
    }
});
 function collision($div1, $div2) {
     
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
      }
        });