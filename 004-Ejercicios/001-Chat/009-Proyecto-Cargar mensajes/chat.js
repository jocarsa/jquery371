var usuario = "";
$(document).ready(function(){
    $("#chat").hide();
    $("#iniciasesion").click(function(){
        usuario = $("#nombreusaurio").val()
        $("#iniciosesion").fadeOut("slow",function(){
            $("#chat").fadeIn("slow");
            cargaMensajes()
        });
    })
    $("#nuevomensaje").change(function(){
        let texto = $(this).val();
        console.log(usuario+": "+texto);
        $(this).val("");
    })
})

function cargaMensajes(){
    $("#mensajes").load("mensajes.json")
}