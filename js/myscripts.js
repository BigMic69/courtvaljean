$(document).ready(function(){
    $('#one').click(function(){
        $('.oneClick').slideToggle(4000);
    });

    $('iframe').mouseenter(function() {
        $('.header-info-wrap').fadeToggle(2000);
    });

    $('iframe').mouseleave(function() {
        $('.header-info-wrap').fadeToggle(2000);
    });

    $('#section2').click(function() {
        $('.smoke-1').slideToggle(5000);
    });

    /*---------- TEXT BOX COLOR CHANGE ----->>>>>*/
    $('.box-1 > p').click(function() {
        $('.box-1 > p').toggleClass('textChange');
    });

    $('.box-2 > p').click(function() {
        $('.box-2 > p').toggleClass('textChange');
    });

    /*---------- PANEL FIXED ----->>>>>*/
    $('#three').mouseenter(function() {
        $('.panel').show(1000);
    });


});
