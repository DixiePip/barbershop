// SLIDER WITH IMAGES

$(document).ready(function(){
    $('.slider_2').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow:3,
        slidesToScroll:1,
        speed:1000,
        easing:'ease',
        autoplay:true,
        autoplaySpeed:1000,
        pauseOnFocus:false,
        pauseOnHover:false,
        swipe:false,
        centerMode:true

    });
});