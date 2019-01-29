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

let j = 0;
let botSpeed = 1500;
let botHeadingText = "together we can give nature the home it needs";
let botHeading = document.querySelector(".bot-header");

function typewriteBotHeading() {
  if (j < botHeadingText.length) {
    botHeading.textContent += botHeadingText.charAt(j);
    j++;
    setTimeout(typewriteBotHeading, botSpeed);
  }
}

let k = 0;
let botParagraphText =
  "Our record of success suggests we are doing many of the right thingsin the right way. But we take nothing for granted. Conservation is rarely straightforward and is becoming ever more demanding. Find out what we're doing and how we're doing it.";
let botParagraph = document.querySelector(".bot-paragraph");

function typewriteBotParagraph() {
  if (k < botParagraphText.length) {
    botParagraph.textContent += botParagraphText.charAt(k);
    k++;
    setTimeout(typewriteBotHeading, botSpeed);
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
    typewriteBotHeading();
    typewriteBotParagraph();
  }
});

//NEED TO CHECK TYPEWRITERS
