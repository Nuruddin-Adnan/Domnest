const swiper = new Swiper('.feature', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    spaceBetween: 30,
    autoplay: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 375px
        375: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 6,
        }
    }
  });