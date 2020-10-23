var mobileHOrisontalViewPortContent;
var vp;
var defViewPortContent;

window.addEventListener('DOMContentLoaded', function(){
    mobileHOrisontalViewPortContent = 'width=1440';
    vp = document.querySelector('meta[name="viewport"]');
    defViewPortContent = vp.getAttribute('content');
}, false)

window.addEventListener("orientationchange", function() {
    console.log(window.orientation);

    if(window.orientation == 90){
        vp.setAttribute('content', mobileHOrisontalViewPortContent);
    } else{
        vp.setAttribute('content', defViewPortContent);
    }

    document.body.style.opacity = '0.5';
    setTimeout(function(){document.body.style.opacity = ''}, 100);
}, false);