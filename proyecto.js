$(".pregunta-1").hide();
$(".pregunta-2").hide();
$(".pregunta-3").hide();
$(".pregunta-4").hide();
$(".pregunta-5").hide();
$(".respuestaFinal").hide()
$(".final").hide()

let contador= 0
let enviado1
let enviado2
let enviado3
let enviado4
let enviado5

 //Villanos:
let novela= 0
let disney= 0
let marvel= 0
let ficcion= 0

$(".comencemos").click(function(){
    $(".contenedor").hide();
    $(".pregunta-1").show();
});

$(".enviado1").click(function(){
    
    enviado1= $(".input-1").val()
    if(enviado1.toLowerCase() ==="novela"){
        novela=novela+1
        $(".pregunta-1").hide();
    
        $(".pregunta-2").show();
        console.log(enviado1)
    }
    else if(enviado1=== "disney"){
        disney=disney+1
        $(".pregunta-1").hide();
    
        $(".pregunta-2").show();
        console.log(enviado1)
       
    }
    else if(enviado1=== "marvel"){
        marvel++
        $(".pregunta-1").hide();
    
        $(".pregunta-2").show();
        console.log(enviado1)
       
    }
    else if(enviado1==="ficcion"){
        ficcion++
        $(".pregunta-1").hide();
    
        $(".pregunta-2").show();
        console.log(enviado1)
       
    }
    else {
        $("pregunta1").append("respuesta incorrecta");
    }
    
    console.log(novela)
    console.log(disney)
    console.log(marvel)
    console.log(ficcion)

    $(".respuestaFinal").append(`<p> ${enviado1} </p>`);
    contador= contador + 1 
    $(".contador").text("contador:"+ contador)
});

$(".enviado2").click(function(){
    
    enviado2= $(".input-2").val()
    if(enviado2.toLowerCase() ==="novela"){
        novela=novela+1
        $(".pregunta-2").hide();
        $(".pregunta-3").show();
        console.log(enviado2)
    }
    else if(enviado2=== "disney"){
        disney=disney+1
        $(".pregunta-2").hide();
        $(".pregunta-3").show();
        console.log(enviado2)
    }
    else if(enviado2=== "marvel"){
        marvel++
        $(".pregunta-2").hide();
        $(".pregunta-3").show();
        console.log(enviado2)
    }
    else if(enviado2==="ficcion"){
        ficcion++
        $(".pregunta-2").hide();
        $(".pregunta-3").show();
        console.log(enviado2)
       
    }
    else {
        $("pregunta2").append("respuesta incorrecta");
    }
    
    console.log(novela)
    console.log(disney)
    console.log(marvel)
    console.log(ficcion)
   
    $(".respuestaFinal").append("<p>"+ enviado2 +"</p>");
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
    
});

$(".enviado3").click(function(){
    
    enviado3= $(".input-3").val()
    if(enviado3.toLowerCase() ==="novela"){
        novela=novela+1
        $(".pregunta-3").hide();
        $(".pregunta-4").show();
        console.log(enviado3)
    }
    else if(enviado3=== "disney"){
        disney=disney+1
        $(".pregunta-3").hide();
    $(".pregunta-4").show();
    console.log(enviado3)
    }
    else if(enviado3=== "marvel"){
        marvel++
        $(".pregunta-3").hide();
    $(".pregunta-4").show();
    console.log(enviado3)
    }
    else if(enviado3==="ficcion"){
        ficcion++
        $(".pregunta-3").hide();
    $(".pregunta-4").show();
    console.log(enviado3)
       
    }
    else {
        $("pregunta2").append("respuesta incorrecta");
    }
    
    $(".respuestaFinal").append("<p>"+ enviado3 +"</p>");
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)

});

$(".enviado4").click(function(){
    
    enviado4= $(".input-4").val()
    if(enviado4.toLowerCase() ==="novela"){
        novela=novela+1
        $(".pregunta-4").hide();
    $(".pregunta-5").show();
    console.log(enviado4)
    }
    else if(enviado4=== "disney"){
        disney=disney+1
        $(".pregunta-4").hide();
    $(".pregunta-5").show();
    console.log(enviado4)
    }
    else if(enviado4=== "marvel"){
        marvel++
        $(".pregunta-4").hide();
        $(".pregunta-5").show();
        console.log(enviado4)
    }
    else if(enviado4==="ficcion"){
        ficcion++
        $(".pregunta-4").hide();
    $(".pregunta-5").show();
    console.log(enviado4)
       
    }
    else {
        $("pregunta2").append("respuesta incorrecta");
    }
    
    $(".respuestaFinal").append("<p>"+ enviado4 +"</p>");
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
});
$(".enviado5").click(function(){
    enviado5= $(".input-5").val()
    if(enviado5.toLowerCase() ==="novela"){
        novela=novela+1
        $(".pregunta-5").hide();
    $(".respuestaFinal").append("<p>"+ enviado5 +"</p>");
    $(".respuestaFinal").show();
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
    $(".final").show();
    }
    else if(enviado5=== "disney"){
        disney=disney+1
        $(".pregunta-5").hide();
    $(".respuestaFinal").append("<p>"+ enviado5 +"</p>");
    $(".respuestaFinal").show();
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
    $(".final").show();
    }
    else if(enviado5=== "marvel"){
        marvel++
        $(".pregunta-5").hide();
    $(".respuestaFinal").append("<p>"+ enviado5 +"</p>");
    $(".respuestaFinal").show();
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
    $(".final").show();
    }
    else if(enviado5==="ficcion"){
        ficcion++
        $(".pregunta-5").hide();
    $(".respuestaFinal").append("<p>"+ enviado5 +"</p>");
    $(".respuestaFinal").show();
    contador= contador+ 1 
    $("contador").text("contador:"+ contador)
    $(".final").show();
    }
    else {
        $("pregunta2").append("respuesta incorrecta");
    }
    
    
});

$(".final").click(function(){
    $(".respuestaFinal").hide();
    $(".final").hide();
    $(".contenedor").show();
});
