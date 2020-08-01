$(document).ready(function(){  
    mostraPromocoaPizzarias();
    roleta();
    rodar();
    mostraopcoes();
});
function mostraPromocoaPizzarias(){
    $(document).on('click', ".btnMostraPromocao", function(){
        $("#pizzariasRoleta").html("<h2>Parcerias de Pizzarias que estão com promoção dessa pizza ou só essa pizza vendem</h2>");
        $("#pizzariasRoleta").toggle();
    });
}
function mostraPizza(sabor){
    switch(sabor){
        case  "calabresa":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='calabresa'>"+         
                "<img src='img/calabresa.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "mussarela":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='mussarela'>"+
                "<img src='img/mussarela.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "brocolis":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='brocolis'>"+
                "<img src='img/brocolis.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "mafiosa":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='mafiosa'>"+
                "<img src='img/mafiosa.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "basca":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='basca'>"+
                "<img src='img/basca.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "escarola":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='escarola'>"+
                "<img src='img/escarola.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "alho_e_oleo":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='alho_e_oleo'>"+
                "<img src='img/alho_e_oleo.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;case "margherita":
            $("#alertas").html("<button type='button' class='btn btn-danger p-0 m-0 btnMostraPromocao' id='margherita'>"+
                "<img src='img/margherita.png' class='imgpizza'/><h1>"+sabor+"</h1>"+
            "</button>");
        break;
    }
}
var iniciarRoleta=0; var bugrodar=0;
function roleta(){
    $(document).on('click', '#rodarRoleta', function(){
        if(bugrodar == 1){
            $("#alertas").html("<h1 class='text-danger'>Pare a roleta primeiro!</h1>");
        }else{
            iniciarRoleta=1;
            rodar();      
            bugrodar=1;   
        }      
    });   
}
var conta = 0;
function rodar(){
    var sabor="";    
    $(document).on('click', "#pararRoleta", function(){  
        clearInterval(estarodando);
        bugrodar=0;
        if(sabor !=""){
            mostraPizza(sabor);           
            sabor="";
            $("#mostrapizzarias").toggle();
            setTimeout(function(){
                $("#mostrapizzarias").toggle();
            },5000);
        }            
    });
    if(iniciarRoleta==1){  
        var estarodando = setInterval(function(){
            switch(conta){
                case 0:
                    $("#ponteiro").css("transform", "rotate(90deg)");                     
                    conta++; sabor = "mussarela";              
                break; case 1:
                    $("#ponteiro").css("transform", "rotate(135deg)");                      
                    conta++; sabor = "brocolis";                    
                break; case 2:
                    $("#ponteiro").css("transform", "rotate(180deg)");                      
                    conta++; sabor = "mafiosa";                      
                break; case 3:
                    $("#ponteiro").css("transform", "rotate(225deg)");                      
                    conta++; sabor = "basca";                    
                break; case 4:
                    $("#ponteiro").css("transform", "rotate(270deg)");                      
                    conta++; sabor = "escarola";                     
                break; case 5:
                    $("#ponteiro").css("transform", "rotate(315deg)");                      
                    conta++; sabor = "alho_e_oleo";                    
                break; case 6:
                    $("#ponteiro").css("transform", "rotate(360deg)");                      
                    conta++; sabor = "margherita";                    
                break; case 7:
                    $("#ponteiro").css("transform", "rotate(400deg)");                     
                    conta=0; sabor = "calabresa";  
                break;
            }          
        }, 80);  
    }    
}
var cr = 0;
function mostraopcoes(){
    $(document).on('click', "#btmostraroleta", function(){
        if(cr == 1){
            $("#linhadeopcoes").html("");
            cr = 0;
        }else{
            var opcaoRoleta =
            "<div class='row bg-success pt-2 mb-0 pb-0'>"+
                "<div class='col-8 text-center rounded-circle'>"+
                    "<img src='img/roletapizza.png' class='rounded-circle mt-1' id='roleta'>"+
                    "<div id='ponteiro'><<--[]</div>"+
                "</div>"+
                "<div class='col-4 text-center'>"+
                    "<ul>"+
                        "<li><button type='button' class='btn btn-danger rounded-circle mt-5 pt-5 pb-5' id='rodarRoleta'>Rodar</button></li>"+                        
                        "<li><button type='button' class='btn btn-warning rounded-circle mt-2 pt-5 pb-5' id='pararRoleta'>Parar</button></li>"+
                        "<li><a href='#alertas'><button type='button' class='btn m-0 p-0' id='mostrapizzarias'><img src='img/seta-para-baixo.gif' class='m-0 p-0'/></button></a></li>"+               
                    "</ul>"+
                "</div>"+                
            "</div>"+
            "<div class='row bg-success pt-2'>"+
                "<div class='col-12 text-center'>"+
                    "<div id='alertas'></div>"+
                "</div>"+
            "</div>"+
            "<div class='row bg-success pt-2'>"+
                "<div class='col-12 text-center'>"+
                    "<div id='pizzariasRoleta'></div>"+
                "</div>"+
            "</div>";
            $("#linhadeopcoes").html(opcaoRoleta);
            cr=1;  
        }
    });
}