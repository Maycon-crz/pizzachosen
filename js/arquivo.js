$(document).ready(function(){
    roleta();    
    rodar();
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
//      90deg = calabresa
//     135deg = mussarela
//     180deg = brocolis
//     225deg = mafiosa
//     270deg = basca
//     315deg = escarola
//     360deg = alho_e_oleo
//     410deg = margherita
//     450deg = calabresa-fim
function rodar(){
    if(iniciarRoleta==1){        
        setInterval(function(){
            switch(conta){
                case 0:
                    $("#ponteiro").css("transform", "rotate(90deg)");
                    conta++;
                break;
                case 1:
                    $("#ponteiro").css("transform", "rotate(135deg)");
                     conta++;
                break;
                case 2:
                    $("#ponteiro").css("transform", "rotate(180deg)");
                     conta++;
                break;
                case 3:
                    $("#ponteiro").css("transform", "rotate(225deg)");
                     conta++;
                break;
                case 4:
                    $("#ponteiro").css("transform", "rotate(270deg)");
                     conta++;
                break;
                case 5:
                    $("#ponteiro").css("transform", "rotate(315deg)");
                     conta++;
                break;
                case 6:
                    $("#ponteiro").css("transform", "rotate(360deg)");
                     conta++;
                break;
                case 7:
                    $("#ponteiro").css("transform", "rotate(410deg)");
                    conta=0;
                break;
            }                
            // alert(conta);
        }, 80);  
    }    
}