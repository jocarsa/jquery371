<?php

    $archivo = file_get_contents("../articulos.json");
    $json = json_decode($archivo);
    $nuevomensaje = array(
        "titulo"=>$_GET['titulo'], 
        "texto"=>$_GET['texto'], 
        "fecha"=>$_GET['fecha']
    );
    array_push($json,$nuevomensaje);
    $nuevojson = json_encode($json,JSON_PRETTY_PRINT);
    file_put_contents("../articulos.json",$nuevojson);

?>