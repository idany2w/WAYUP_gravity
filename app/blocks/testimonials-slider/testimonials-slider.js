$(window).on('load', function () {
    $('.testimonials-slider__slides').owlCarousel({
        nav: true,
        margin:30,
        items:1,
        loop: true,
        dots: false,
        navText: ['',''],
        navContainerClass: "testimonials-slider__nav-btns",
        navClass: [
            'slider__nav-btn slider__nav-btn_prev',
            'slider__nav-btn slider__nav-btn_next'
        ]
    })
})