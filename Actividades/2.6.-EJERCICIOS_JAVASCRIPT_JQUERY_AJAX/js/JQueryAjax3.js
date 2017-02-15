// 3.	Crea una página que nada mas cargarse aparecerá un select, con dos opciones “irakasleak” o “ikasleak”.
// Cuando elijamos uno de los dos aparecerán otro select con la lista de alumnos o profesores y
// cuando selecciones el nombre aparecerán las asignaturas que imparten o que reciben.
// La información en el servidor será la siguiente:
$(document).ready(function(){
    var jsonDatuak;
    var irik;
    $('#irik').on('change',function(){
        irik = $(this).val();
        if(irik){
            $.ajax({
                type:'POST',
                url:'./php/JQuery_Ajax_3.php',
                dataType: 'json',
                
                success:function(resp){
                    $("#sel2").empty();
                    jsonDatuak = resp;
                    if (irik == "Irakasleak"){
                        for(var k in jsonDatuak.Irakasleak) {
                          console.log(k, jsonDatuak.Irakasleak[k]);
                          $("#sel2").append('<option value=' + jsonDatuak.Irakasleak[k].izena + '>' + jsonDatuak.Irakasleak[k].izena + '</option>');
                        }
                    }else{
                        for(var k in jsonDatuak.Ikasleak) {
                          console.log(k, jsonDatuak.Ikasleak[k]);
                          $("#sel2").append('<option value=' + jsonDatuak.Ikasleak[k].izena + '>' + jsonDatuak.Ikasleak[k].izena + '</option>');
                        }
                    }
                    
                    
                }
            }); 
        }
    });
    $('#sel2').on('change',function(){
        var ikasgai = $(this).val();
        if(ikasgai){
            console.log(ikasgai);
                    if (irik == "Irakasleak"){
                        for(var k in jsonDatuak.Irakasleak) {
                            if (jsonDatuak.Irakasleak[k].izena == ikasgai){
                                $('#mezua').html("" + jsonDatuak.Irakasleak[k].izena + "-(re/e)k Ematen duen irakasgaia: " + jsonDatuak.Irakasleak[k].ikasgaia )
                            }
                       }
                    }else{
                        for(var k in jsonDatuak.Ikasleak) {
                          if (jsonDatuak.Ikasleak[k].izena == ikasgai){
                              $('#mezua').html("" + jsonDatuak.Ikasleak[k].izena + "-(re/e)k Jasotzen duen/dituen irakasgaia: ");
                              for(var j in jsonDatuak.Ikasleak[k].ikasgaiak) {
                                  $('#mezua').append("<li> " + jsonDatuak.Ikasleak[k].ikasgaiak[j] + "</li>" );
                              }
                                
                            }                        
                            
                        }
                    }
        }
    });
});        
