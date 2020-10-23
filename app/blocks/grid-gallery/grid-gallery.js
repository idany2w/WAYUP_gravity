$(window).on('load', function () {
    $('.grid-gallery__item-btn').click(function(e){
        alert('click!')
    });
})


function gridGalleryFilter(e){
    if(!e.target.classList.contains('grid-gallery__filter-link')) return false

    e.preventDefault();

    const filterBtn = e.target.closest('.grid-gallery__filter-link');
    const block = filterBtn.closest('.grid-gallery');
    const filterName = filterBtn.dataset['filter'].toLowerCase();
    const filterable = block.querySelectorAll('.grid-gallery__filtarable');

    block.querySelector('.grid-gallery__filter-link_active').classList.remove('grid-gallery__filter-link_active');
    filterBtn.classList.add('grid-gallery__filter-link_active')

    filterable.forEach(element => {
        const filterNames = element.dataset['filterable'].toLowerCase().split(' ');

        if(filterNames.indexOf(filterName) != -1){
            element.classList.remove('grid-gallery__filtarable_hidden');
        } else{
            element.classList.add('grid-gallery__filtarable_hidden');
        }
    });

}

document.addEventListener('click', gridGalleryFilter);