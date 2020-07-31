$(document).ready(function(){    
    roleta();
    rodar();
    mostraopcoes();
});
var iniciarRoleta =0;
function roleta(){
    $(document).on('click', '#rodarRoleta', function(){
        $("#ponteiro").css("transform", "rotate(135deg)");
        iniciarRoleta=1;
        rodar(); 
    });
}
var conta = 0;
function rodar(){
    var sabor="";    
    $(document).on('click', "#pararRoleta", function(){  
        clearInterval(estarodando);
        if(sabor !=""){
            alert(sabor);
            sabor="";
        }        
    });
    if(iniciarRoleta==1){  
        var estarodando = setInterval(function(){
            switch(conta){
                case 0:
                    $("#ponteiro").css("transform", "rotate(90deg)");
                    conta++; sabor = "calabresa";
                break; case 1:
                    $("#ponteiro").css("transform", "rotate(135deg)");
                     conta++; sabor = "mussarela";
                break; case 2:
                    $("#ponteiro").css("transform", "rotate(180deg)");
                     conta++; sabor = "brocolis";
                break; case 3:
                    $("#ponteiro").css("transform", "rotate(225deg)");
                     conta++; sabor = "mafiosa";
                break; case 4:
                    $("#ponteiro").css("transform", "rotate(270deg)");
                     conta++; sabor = "basca";
                break; case 5:
                    $("#ponteiro").css("transform", "rotate(315deg)");
                     conta++; sabor = "escarola";
                break; case 6:
                    $("#ponteiro").css("transform", "rotate(360deg)");
                     conta++; sabor = "alho_e_oleo";
                break; case 7:
                    $("#ponteiro").css("transform", "rotate(410deg)");
                    conta=0; sabor = "margherita";
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
            var opcaoRoleta = "<div class='col-3 text-center'>&nbsp;</div>"+
            "<div class='col-6 text-center rounded-circle'>"+
                "<img src='img/roletapizza.png' class='rounded-circle mt-1' id='roleta'>"+
                "<div id='ponteiro'><<--[]</div>"+
            "</div>"+
            "<div class='col-3 text-center'>"+
                "<ul>"+
                    "<li><button type='button' class='btn btn-danger rounded-circle mt-5 pt-5 pb-5' id='rodarRoleta'>Rodar</button></li>"+
                    "<li><button type='button' class='btn btn-warning rounded-circle mt-5 pt-5 pb-5' id='pararRoleta'>Parar</button></li>"+
                "</ul>"+
            "</div>";
            $("#linhadeopcoes").html(opcaoRoleta);
            cr=1;  
        }
              
    });
}