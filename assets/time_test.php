<?php
$t=time();
echo($t . "<br>");
echo(date("Y-m-d",$t));

date_default_timezone_set("America/Sao_Paulo"); 
echo "<br/>";
echo date("Y-m-d H:i:s");
?>