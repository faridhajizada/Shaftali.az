///home 3 page
const tl = gsap.timeline();
tl.fromTo(".second-page", { x: "-100%", y: "+100%" }, { y: 0 });
tl.fromTo(".third-page", { x: "-100%" }, { x: "-200.32%" });

const main = document.querySelector(".main");
ScrollTrigger.create({
  animation: tl,
  trigger: ".site-container",
  start: "top top",
  end: () => main.offsetWidth / 2,
  scrub: true,
  pin: true,
});

// /counter

$(".counter").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 8000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});
//animation
const words = [
  "Game",
  "Advertisement",
  "Website",
  "Mobile App",
  "Social Media",
  "E-commerce",
  "Blog",
  "Online Course",
  "Virtual Reality",
  "Cloud Service",
];

let i = 0;

function myFunc() {
  document.getElementById("e1").innerHTML = words[i];
  document.getElementById("e2").innerHTML = words[(i + 1) % words.length];
  i = (i + 1) % words.length;
}

myFunc();
setInterval(myFunc, 4000);

///
///owl carousel
