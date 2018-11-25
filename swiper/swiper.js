var appendNumber = 4;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 10,
    centeredSlides: false,
    spaceBetween: 10,
    breakpoints: {  
    320: {       
        slidesPerView: 2,       
        spaceBetween: 10     
     },
     480:{
        slidesPerView: 3,       
        spaceBetween: 10 
     },
     640:{
        slidesPerView: 5,       
        spaceBetween: 10 
     },
     768:{
        slidesPerView: 6,       
        spaceBetween: 10 
     },
     1024:{
        slidesPerView: 7,       
        spaceBetween: 10 
     },
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
});