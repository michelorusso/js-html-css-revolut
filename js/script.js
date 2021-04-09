$(document).ready(function() {
    $('.menu li').mouseenter(function() {
        $(this).children('.dropdown').show();
    });

    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').hide();
    })

});