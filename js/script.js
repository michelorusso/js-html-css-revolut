$(document).ready(function() {

    // Comparsa dei sottomenu
    $('.menu li').mouseenter(function() {
        $(this).children('.dropdown').show();
    });

    $('.menu li').mouseleave(function() {
        $(this).children('.dropdown').hide();
    });

    // Cambio del font awesome da UP a DOWN
    $('.leng').mouseenter(function() {
        $(this).find('.fas').removeClass('fa-chevron-down');
        $(this).find('.fas').addClass('fa-chevron-up');        
    });

    $('.leng').mouseleave(function() {
        $(this).find('.fas').removeClass('fa-chevron-up');
        $(this).find('.fas').addClass('fa-chevron-down');        
    });

    // Quando clicco il burger-menu mi compare una lista di link
    $('.burger-menu').click(function() {
        var mobileMenu = $('.link');

        if( mobileMenu.hasClass('activate') ) {
            mobileMenu.removeClass('activate');
        } else {
            mobileMenu.addClass('activate')
        }
    });

});