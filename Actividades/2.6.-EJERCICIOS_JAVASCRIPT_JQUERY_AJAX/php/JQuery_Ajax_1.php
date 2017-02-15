<?php
session_start();
if(isset($_POST)){
    unset($_SESSION['errors']);
  	if (empty($_POST['first_name'])) {
		$_SESSION['errors']['first_name'] = 'Ez duzu Izenik idatzi';
        	}
	if (empty($_POST['email'])) {
		$_SESSION['errors']['email'] = 'Ez duzu E-mailik idatzi';
        	}
	if (empty($_POST['comment'])) {
		$_SESSION['errors']['comment'] = 'Ez duzu Komentariorik idatzi';
        	}
 
        if(count($_SESSION['errors']) > 0){
	    //This is for ajax requests:
            if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) &&  strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
                echo json_encode($_SESSION['errors']);
                exit;
             }
	    //This is when Javascript is turned off:
           echo "<ul>";
           foreach($_SESSION['errors'] as $key => $value){
	      echo "<li>" . $value . "</li>";
           }
           echo "</ul>";exit;
    }else{
	//form validation successful - process data here!!!!

$bixigua['erantzuna'] = "true";
$bixigua['mezua'] = "Josu horrela geratzen da!";
echo json_encode($bixigua);

   }
}