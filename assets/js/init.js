// var lazyLoadInstance = new LazyLoad({});

$(document).ready(function () {

    new WOW().init();

    /* HEADER Fixed after scrolling */
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 120) $("header").addClass('fixed');
        else $("header").removeClass('fixed');
    });

    /* MOBILE MENU */
    $(".burger").click(function () {
        $("header .menu").toggleClass("active");
        $(this).toggleClass("active");
    });

    /* DROPDOWN MENU */
    $(".dropdown").click(function () {
        $(".submenu").slideToggle("fast").toggleClass('active');
        $(this).toggleClass("active");
    });

    $('.counter').counterUp({
        time: 1200
    });

    $('.slider-1').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 1
    });

    $(".scroll-up").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
        return false;
    });

});