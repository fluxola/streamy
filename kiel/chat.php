<?php 

$name = $_POST['name']; 
$chat = $_POST['chat'];
$fp = fopen("log.html", 'a');
fwrite($fp, "<div style=\"color:beige;  background-color:black\"> <b style=\"color:Fuchsia\">".stripslashes(htmlspecialchars($name))."</b>: ".stripslashes(htmlspecialchars($chat))."<br></div>");
fclose($fp);

exit; 

?>
