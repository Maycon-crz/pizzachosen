$(document).ready(function(){
    emojis();
    validaInputTextareaPlFr();
    mostraInputTextareaPlFr();
    mostraPromocoaPizzarias();
    roleta();
    rodar();
    mostraopcoes();
    auto();
});
function emojis(){
    $(document).on('click', '.imgemojis', function(){
        var imgemojis = $(this).attr('id');
        // var srcEmoji = $(this)attr('src');   
        $("#linhapizzaemoji").html(selecionapizzapalavras(imgemojis));
    });
}
function validaInputTextareaPlFr(){
    $(document).on('click', '#brfrases', function(){
        var textareafrases = $("#textareafrases").val();
        textareafrases = textareafrases.toLowerCase();
        if(textareafrases != ""){
            var permitido="";
            for (let c of textareafrases) {
                if (isLetter(c)) {
                    permitido = "sim";
                } else if (isDigit(c)) {
                    permitido = "nao";
                } else {
                    permitido = "nao";
                }
            }   
            function isLetter(str) {
                //Melhorar para pegar letras com ascentuação
                return str.length === 1 && str.match(/[a-zA-Z]/i);
            }
            function isDigit(str) {
                return str.length === 1 && str.match(/[0-9]/i);
            }
            if(permitido == "sim"){
                $("#linhaRetornoPalavraFrases").html(selecionapizzafrases(textareafrases));
            }else{
                alert("Contêm números ou caracteres especiais digite apenas palavras!")
            }
        }else{
            alert("Digite um texto ou frase!");
        }                   
    });
    $(document).on('click', '#btpalavras', function(){
        var inputpalavras = $("#inputpalavras").val();
        $("#linhaRetornoPalavraFrases").html("<li>Palavra: "+inputpalavras+"</li>");
        inputpalavras = inputpalavras.toLowerCase();
        if(inputpalavras != ""){
            inputpalavras = inputpalavras.slice(0,1);
            var returnadapizza = selecionapizzapalavras(inputpalavras);
            $("#linhaRetornoPalavraFrases").append(returnadapizza);
        }else{
            alert("Digite uma palavra!")
        }
    });    
}
function mostraInputTextareaPlFr(){
    $(document).on('click', '#btmostraInputPl', function(){
        $(".btsinputPl").toggle();
        $(".btstextareaPl").css("display", "none"); 
    });
    $(document).on('click', '#btmostraTxFr', function(){
       $(".btstextareaPl").toggle();
       $(".btsinputPl").css("display", "none"); 
    });
}
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
var cr =0; var cr2=0; var cr3=0
function mostraopcoes(){
    $(document).on('click', '#btmostraemojis', function(){  
        if(cr3 == 1){
            auto();
            cr3 = 0;
        }else{      
            $("#linhadeopcoes").html("<div class='row bg-danger'>"+
                "<div class='col-12 mt-4'>"+
                    "<ul class='m-0 p-0 text-center'>"+
                        "<li class='text-center'>"+
                            "<img src='img/emojis/comilona_symbols_n_emoticons.jpg' alt='' class='imgemojis' id='a'>"+
                            "<img src='img/emojis/comendohamburguer_hdsmileys.gif' alt='' class='imgemojis' id='b'>"+
                            "<img src='img/emojis/chorandoPinkFloyd_Wattpad.jpg' alt='' class='imgemojis' id='c'>"+
                            "<img src='img/emojis/atrasado_YaelWeiss.jpg' alt='' class='imgemojis' id='d'>"+
                            "<img src='img/emojis/apaixonadao_topbuzz.jpg' alt='' class='imgemojis' id='e'>"+
                            "<img src='img/emojis/silencio_pt_depositphotos.jpg' alt='' class='imgemojis' id='f'>"+
                        "</li>"+
                        "<li>"+
                            "<img src='img/emojis/olhosdepizza_nynke_weHeartIt.jpg' alt='' class='imgemojis mt-4' id='g'>"+
                            "<img src='img/emojis/febre_symbols_n_emoticons.jpg' alt='' class='imgemojis mt-4' id='h'>"+
                            "<img src='img/emojis/estudante_bancoDeImagens.jpg' alt='' class='imgemojis mt-4' id='i'>"+
                            "<img src='img/emojis/comMascara_br_depositphotos.jpg' alt='' class='imgemojis mt-4' id='j'>"+
                            "<img src='img/emojis/woozy_symbols_n_emoticons.jpg' alt='' class='imgemojis mt-4' id='k'>"+
                            "<img src='img/emojis/viciadoemtelevisao_yaelWeiss.jpg' alt='' class='imgemojis mt-4' id='l'>"+
                        "</li>"+
                    "</ul>"+
                "</div>"+
            "</div>"+
            "<div class='row bg-danger'>"+
                "<div class='col-12 mt-4 mb-4'>"+
                    "<ul class='m-0 p-0' id='linhapizzaemoji'></ul>"+
                "</div>"+
            "</div>");
            cr3=1;
        }
    });        
    $(document).on('click', "#btmostrapalavrasfrases", function(){
        if(cr2 == 1){
            auto();
            cr2 = 0;
        }else{
            $("#linhadeopcoes").html(
                "<div class='row bg-warning'>"+
                    "<div class='col-12 text-center'>"+
                        "<ul class='m-0 p-0'>"+
                            "<li>"+
                                "<button type='button' class='form-control  btn-lg btn-danger text-warning mt-3' id='btmostraInputPl'>##### PALAVRA #####</button>"+
                                "<button type='button' class='form-control btn-lg btn-danger text-warning mt-1' id='btmostraTxFr'>## TEXTO OU FRASE ##</button>"+
                            "</li>"+
                            "<li class='btsinputPl'><input type='text' class='form-control bg-warning border border-danger text-center mt-5' id='inputpalavras'/></li>"+
                            "<li class='btsinputPl'><button type='button' class='form-control btn-lg btn-outline-danger' id='btpalavras'>PIZZA!</button></li>"+
                            "<li class='btstextareaPl'><textarea class='form-control bg-warning border border-danger text-center mt-5' id='textareafrases'></textarea></li>"+
                            "<li class='btstextareaPl'><button type='button' class='form-control btn-lg btn-outline-danger' id='brfrases'>PIZZA!</button></li>"+
                        "</ul>"+
                    "</div>"+
                "</div>"+
                "<div class='row bg-warning'>"+
                    "<div class='col-12 text-center'>"+
                        "<ul class='m-0 p-0' id='linhaRetornoPalavraFrases'>"+
                        "</ul>"+
                    "</div>"+
                "</div>"
            );
            cr2=1;
        }
    });
    $(document).on('click', "#btmostraroleta", function(){
        if(cr == 1){
            auto();
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
                "</div>"
            ;
            $("#linhadeopcoes").html(opcaoRoleta);
            cr=1;
        }
    });
}
function auto(){
    $("#linhadeopcoes").html(
        "<div class='row mt-5 mb-5'>"+
            "<div class='col-12 text-center'>"+
                "<ul class='mt-5 mb-5 p-0'>"+
                    "<li>"+
                        "<img src='img/pizzaAleatoria.jpg' alt='' id='imgPizzaAleatoria'/>"+
                        "<button class='btn btn-danger'><h3 class='text-center'>Pizza Aleatória</h3></button>"+
                    "</li>"+
                    "<li id='mostraAleatoria'></li>"+
               " </ul>"+
            "</div>"+
        "</div>"
    );
}