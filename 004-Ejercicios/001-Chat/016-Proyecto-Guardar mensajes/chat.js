var usuario = "";
var temporizador = "";
$(document).ready(function(){
    $("#chat").hide();
    $("#iniciasesion").click(function(){
        usuario = $("#nombreusaurio").val()
        $("#iniciosesion").fadeOut("slow",function(){
            $("#chat").fadeIn("slow");
            temporizador = setTimeout("cargaMensajes()",1000)
        });
    })
    $("#nuevomensaje").change(function(){
        let texto = $(this).val();
        console.log(usuario+": "+texto);
        $(this).val("");
        $.ajax({
            url:"guardamensaje.php?usuario="+encodeURI(usuario)+"&mensaje="+encodeURI(texto)
        })
    })
})

function cargaMensajes(){
    $.ajax({
        url:"mensajes.json",
        cache:false,
        success:function(datos){
            let mensajes = datos;
            console.log(datos)
            cadena = "";
            for(let i = 0;i<datos.length;i++){
                cadena += `
                    <div class="mensaje">
                        <div class="persona">`+datos[i].usuario+`</div>
                        <div class="fecha">`+datos[i].fecha+`</div>
                        <div class="contenido">`+datos[i].mensaje+`</div>
                    </div>
                `;
            }
            $("#mensajes").html(cadena)
        }
    })
    clearTimeout(temporizador)
    temporizador = setTimeout("cargaMensajes()",1000)
}