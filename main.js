let i = 0;
let headingText =
  "this reserve enables the development of various species of endangered birds throughout south east asia";
let speed = 50;
let topBanner = document.getElementById("top-banner-text");

function typewriteHeading() {
  if (i < headingText.length) {
    topBanner.textContent += headingText.charAt(i);
    i++;
    setTimeout(typewriteHeading, speed);
  }
}

typewriteHeading();

$(window).scroll(function() {
  if ($(window).scrollTop() > 150) {
    $(".cube4").addClass("cube4animation");
    $(".vector-dec-shape").addClass("vector-animation");
    $(".dotted-pattern").addClass("dots-animation");
    $(".cube5").addClass("cube5-animation");
    $(".cube6").addClass("cube6-animation");
    $(".white-box").addClass("white-box-animation");
    $(".mid-circle").addClass("mid-circle-animation");
  }

  if ($(window).scrollTop() > 900) {
    $(".cube7").addClass("cube7-animation");
    $(".cube8").addClass("cube8-animation");
    $(".cube9").addClass("cube9-animation");
  }
});
