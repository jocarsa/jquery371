var usuario = "";
$(document).ready(function(){
    $("#chat").hide();
    $("#iniciasesion").click(function(){
        $("#iniciosesion").fadeOut("slow",function(){
            $("#chat").fadeIn("slow");
        });
    })
    $("#nuevomensaje").change(function(){
        let texto = $(this).val()
        console.log("envio: "+texto)
    })
})