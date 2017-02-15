<?php

header('Content-type: text/html');

try
{

    $num1 = filter_var($_POST['num1'], FILTER_SANITIZE_NUMBER_FLOAT);
    $num2 = filter_var($_POST['num2'], FILTER_SANITIZE_NUMBER_FLOAT);

if($num1 != 0 && $num2 != 0){
    if(!filter_var($num1, FILTER_VALIDATE_FLOAT) ||
       !filter_var($num2, FILTER_VALIDATE_FLOAT))
           throw new Exception("Gaizki sarturiko zenbakiak: [{$num1}] eta [{$num2}]");
}

    $eragile = $_POST['eragile'];



    if(!in_array($eragile, array('BATUKETA', 'KENKETA', 'BIDERKETA', 'ZATIKETA')))
        throw new Exception ("Gaizki sarturiko eragilea: [{$eragile}]");

    $emaitza = 0;

    switch($eragile)
    {
        case 'BATUKETA':    $emaitza = $num1 + $num2;
        break;

        case 'KENKETA':    $emaitza = $num1 - $num2;
        break;

        case 'BIDERKETA':    $emaitza = $num1 * $num2;
        break;

        case 'ZATIKETA':

                      if ($num2 == 0)
                          throw new Exception ('INDETERMINAZIOA');

                      $emaitza = $num1 / $num2;
        break;

        default: 

                      throw new Exception('Eragile ezezaguna');
        break;
    }
echo $emaitza;

}

catch(Exception $e)
{


    header("Status: 400 Bad Request", true, 400);



    echo $e -> getMessage();

    exit(1);
}

