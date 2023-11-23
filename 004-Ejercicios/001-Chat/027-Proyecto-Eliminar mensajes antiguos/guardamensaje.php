<?php

    $archivo = file_get_contents("mensajes.json");
    $json = json_decode($archivo);
    $contador = 0;
    foreach($json as $elemento){
        if($elemento->epoch < date('U')-60){
            echo "es cierto";
            unset($json[$contador]);
        }
        $contador++;
    }
    $nuevomensaje = array(
        "usuario"=>$_GET['usuario'], 
        "mensaje"=>$_GET['mensaje'], 
        "epoch"=>date('U'),
        "fecha"=>date('Y')."-".date('m')."-".date('d')." ".date('H').":".date('i').":".date('s'),
        "sala"=>$_GET['sala']
    );

    array_push($json,$nuevomensaje);
    $json = array_values($json);
    $nuevojson = json_encode($json,JSON_PRETTY_PRINT);
    file_put_contents("mensajes.json",$nuevojson);

?>