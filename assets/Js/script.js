document.addEventListener("DOMContentLoaded", function () {
  var headerHeight = document.querySelector("#header-main").offsetHeight;
  document.querySelector("main").style.marginTop = headerHeight + "px";
});

console.log("Hello World");

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000, // Интервал между слайдами в миллисекундах
    disableOnInteraction: false, // Автоплей не останавливается при взаимодействии
  },

  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    "@1.50": {
      slidesPerView: 5,
      spaceBetween: 15,
    },
  },
});
