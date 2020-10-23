$(window).on('load', function () {
    $('.brands-slider').owlCarousel({
        nav: false,
        dots: false,
        margin:30,
        loop: true,
        responsive:{
            991:{
                autoWidth: true
            },
            992:{
                items:5,
            },
        }
    })
})