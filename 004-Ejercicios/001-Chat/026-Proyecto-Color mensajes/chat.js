var usuario = "";
var temporizador = "";
var sala = "";
$(document).ready(function(){
    $("#chat").hide();
    $.ajax({
        url:"salas.json",
        success:function(datos){
            let cadena = "<option>Selecciona una sala...</option>"
            for(let i = 0;i<datos.length;i++){
                cadena += "<option>"+datos[i].nombre+"</option>"
            }
            $("#sala").html(cadena)
        }
    })
    $("#iniciasesion").click(function(){
        usuario = $("#nombreusaurio").val()
        sala = $("#sala").val()
        $("#iniciosesion").fadeOut("slow",function(){
            $("#chat").fadeIn("slow");
            temporizador = setTimeout("cargaMensajes()",1000)
        });
    })
    $("#nuevomensaje").change(function(){
        let texto = $(this).val();
        console.log(sala+": "+usuario+": "+texto);
        $(this).val("");
        $.ajax({
            url:"guardamensaje.php?usuario="+encodeURI(usuario)+"&mensaje="+encodeURI(texto)+"&sala="+sala
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
                if(datos[i].sala == sala){
                    if(datos[i].usuario == usuario){
                        cadena += `
                            <div class="mimensaje">
                                <div class="persona">`+datos[i].usuario+`</div>
                                <div class="fecha">`+datos[i].fecha+`</div>
                                <div class="contenido">`+datos[i].mensaje+`</div>
                            </div>
                        `;
                    }else{
                        cadena += `
                            <div class="mensaje">
                                <div class="persona">`+datos[i].usuario+`</div>
                                <div class="fecha">`+datos[i].fecha+`</div>
                                <div class="contenido">`+datos[i].mensaje+`</div>
                            </div>
                        `;
                    }
                }
            }
            $("#mensajes").html(cadena)
        }
    })
    $("#mensajes").scrollTop(100000000000)
    clearTimeout(temporizador)
    temporizador = setTimeout("cargaMensajes()",1000)
}