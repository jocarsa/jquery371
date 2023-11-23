$(document).ready(function(){
    $.ajax({
        url:"articulos.json",
        cache:false,
        success:function(datos){
            datos = datos.reverse();
            let cadena = ""
            for(let i = 0;i<datos.length;i++){
                cadena += `
                    <article>
                        <h3>`+datos[i].titulo+`</h3>
                        <time>`+datos[i].fecha+`</time>
                        <p>`+datos[i].texto+`</p>
                    </article>
                    `
            }
            $("main").html(cadena)
        }
    })
})