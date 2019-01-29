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
