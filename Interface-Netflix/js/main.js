$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var mobile = document.getElementById('mobile-list')

function mostrarMenu(){
    mobile.style.opacity = 1
    mobile.style.transition = '1.4s'
}

function resetMenu(){
    mobile.style.opacity = 0
}