$(document).ready(function() {
    
    function hideOtherSublists(except){
        $('.mainList').not(except).slideUp();
    }

    $("#devFullStack").click(function() {
        hideOtherSublists('#listaDev');
        $("#listaDev").slideToggle();
    });

    $("#fotografia").click(function() {
        hideOtherSublists('#listaFotografia');
        $("#listaFotografia").slideToggle();
    });

    $("#pessoal").click(function() {
        hideOtherSublists('#listaPessoal');
        $("#listaPessoal").slideToggle();
    });

    $("#stillus").click(function() {
        hideOtherSublists('#listaStillus');
        $("#listaStillus").slideToggle();
    });

});
