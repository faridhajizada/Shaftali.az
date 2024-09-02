
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
  "Oyun",
  "Reklam",
  "Veb sayt",
  "Mobil tətbiq",
  "Sosial Media",
  "Elektron ticarət",
  "Bloq",
  "Virtual Reallıq",
  "Bulud xidməti",
  "SEO",
  "UI/UX",
  "Dizayn",
  "İnternet reklam",
  "SMM",
  "İnternet marketinq",

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
