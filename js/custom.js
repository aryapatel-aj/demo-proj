var swiper2 = new Swiper(".people-img-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});
var swiper = new Swiper(".people-content-slider", {
    slidesPerView: 1,
    // spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next-people",
        prevEl: ".swiper-button-prev-people",
    },   
    thumbs: {
        swiper: swiper2,
    },
});
    

var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next-product",
      prevEl: ".swiper-button-prev-product",
    },
});