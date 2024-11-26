document.addEventListener("DOMContentLoaded", function () {
  var headerHeight = document.querySelector("#header-main").offsetHeight;
  document.querySelector("main").style.marginTop = headerHeight + "px";
});

var swiper = new Swiper("#stats-carausel", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
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

var swiper = new Swiper("#team-carousel", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
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
      slidesPerView: 3,
      spaceBetween: 15,
    },
    "@1.50": {
      slidesPerView: 3,
      spaceBetween: 15,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".blog-swiper", {
    loop: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    effect: "slide",
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 10,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBurger = document.querySelector(".icon-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBurger.addEventListener("click", () => {
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
      mobileMenu.classList.add("visible");
    } else {
      mobileMenu.classList.remove("visible");
      mobileMenu.classList.add("hidden");
    }
  });
});
