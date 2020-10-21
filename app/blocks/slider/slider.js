$(window).on('load', function () {
    $('.owl-carousel').owlCarousel({
        nav: true,
        margin:30,
        items:1,
        dots: false,
        navText: ['',''],
        navContainerClass: "slider__nav-btns",
        navClass: [
            'slider__nav-btn slider__nav-btn_prev',
            'slider__nav-btn slider__nav-btn_next'
        ],
        responsive:{
            576:{
                autoWidth: false
            },
            768:{
                autoWidth: true
            },
        }
    })
    $('.slider__slide').click(function(e){
        alert('click')
    })
})