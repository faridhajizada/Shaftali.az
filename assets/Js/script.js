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

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".blog-swiper", {
    loop: false,
    autoplay: {
      delay: 2500, // Задержка между слайдами
      disableOnInteraction: false,
    },
    effect: "slide", // Плавное движение слайдов
    speed: 600, // Устанавливает плавность перехода (600ms)
    slidesPerView: 1, // Количество слайдов, отображаемых одновременно
    spaceBetween: 10, // Расстояние между слайдами
  });
});





// -------------------  Contact Form  -------------------


// document.addEventListener("DOMContentLoaded", function () {
//   const radioButtons = document.querySelectorAll('input[name="service"]');
//   const serviceOptions = document.querySelector('.options');
//   const contactForm = document.getElementById("contact-form");
//   const submitBtn = document.getElementById("submit-btn");

//   radioButtons.forEach(button => {
//     button.addEventListener("change", function () {
//       // Скрываем выбор услуги плавно
//       serviceOptions.style.opacity = 0;
//       setTimeout(function () {
//         serviceOptions.style.display = "none";  // Убираем с экрана после анимации
//         // Показываем форму
//         contactForm.style.display = "block";
//         setTimeout(function () {
//           contactForm.style.opacity = 1;  // Плавно показываем форму
//         }, 50);
//       }, 500);  // Время для плавного исчезновения блока
//     });
//   });

//   submitBtn.addEventListener("click", function () {
//     const name = document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const selectedService = document.querySelector('input[name="service"]:checked');

//     if (name && phone && selectedService) {
//       alert(`Xidmət: ${selectedService.value}\nAd: ${name}\nTelefon: ${phone}`);
//       // Логика отправки данных на сервер

//       // Очистка формы
//       document.getElementById("name").value = "";
//       document.getElementById("phone").value = "";
//       contactForm.style.display = "none";  // Скрываем форму
//       serviceOptions.style.display = "flex";  // Показываем блок с вариантами снова
//       serviceOptions.style.opacity = 1;  // Плавно показываем блок с услугами
//     } else {
//       alert("Zəhmət olmasa xidmət seçin və məlumatları daxil edin.");
//     }
//   });
// });