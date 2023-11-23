<?php

    $archivo = file_get_contents("mensajes.json");
    $json = json_decode($archivo);
    $nuevomensaje = array(
        "usuario"=>$_GET['usuario'], 
        "mensaje"=>$_GET['mensaje'], 
        "epoch"=>date('U'),
        "fecha"=>date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s'),
        "sala"=>$_GET['sala']
    );
    array_push($json,$nuevomensaje);
    $nuevojson = json_encode($json,JSON_PRETTY_PRINT);
    file_put_contents("mensajes.json",$nuevojson);

?>