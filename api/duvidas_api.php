<?php

$url = "https://stark-cove-48986.herokuapp.com/seguros/motivos";
$resultado = json_decode(file_get_contents($url));

foreach($resultado as $resultado){
echo "<button class='fadeInLeft accordion'>$resultado->title</button>";
echo "<div class='panel'>";
echo "<p>$resultado->text</p>";
echo "</div>";
}

?>

