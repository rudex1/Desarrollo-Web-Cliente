README

EJERCICIOS JAVASCRIPT - AJAX

1.	Crear una página en el que aparecerá un cuadro de texto y un boton. 
  	Al pulsar el boton pediremos al servidor web el contenido del fichero 
    que le indiquemos en el cuadro de texto. 
    Este texto deberá aparecer debajo de los elementos en un cuadro. 
    En el caso de que el fichero no exista en el servidor tendra que avisarnos de ello.

2.	Crear una página a la que le pediremos la lista de películas almacenadas en un fichero XML 
  	que estara en el servidor. 
	  A la hora de mostrarlos, se creara una tabla y apareceran en dos columnas separadas.

<?xml version="1.0" encoding="ISO-8859-1" ?>
<Peliculas>
  <Pelicula>
     <Director>Quentin Tarantino</Director >
     <Titulo>Reservoir dogs</Titulo>
  </Pelicula >
  <Pelicula >
     <Director>Danny Boyle</Director >
     <Titulo>Trainspotting</Titulo>
  </Pelicula >
  <Pelicula >
     <Director>Christopher Nolan</Director >
     <Titulo>Batman Begins</Titulo>
  </Pelicula >
  <Pelicula >
     <Director> Christopher Nolan </Director >
     <Titulo>Inception</Titulo>
  </Pelicula >
  <Pelicula >
     <Director> Guy Ritchie </Director >
     <Titulo>Snach</Titulo>
  </Pelicula >
  <Pelicula >
     <Director>Ridley Scott</Director >
     <Titulo>Gladiator</Titulo>
  </Pelicula >
</Peliculas>

3.	Crear una página en la que apareceran los carteles de las peliculas del ejercicio anterior.
    Cuando pulsemos sobre cada cartel aparecera la sinopsis de esa pelicula en un partado que estara debajo de las imagenes.
    Cada sinopsis se guardaran en un fichero diferente.

4.	Crear una página en la que habra un boton para pedir al servidor los datos de las peliculas.  
    Cuando pulsemos sobre el nos apareceran dos objetos select (menu desplegable). 
    En el primero elegiremos el nombre del director y en funcion de esa eleccion, en el segundo nos apareceran las peliculas de ese director. 
    Cuando hayamos elegido la pelicula aparecera una breve sinospsis de la pelicula debajo de los objetos select. 
    Si no se selecciona director, no aparecera ninguna pelicula para elegir.



