// Collapse menu on small viewports
$(document).ready(function () {

})

// $(".button-collapse").sideNav();

$(window).on('load resize', function () {
  if ($(window).width() < 799) {
    window.location = "https://captnwalker.github.io/Portfolio6/portfolio.html"
  }
});

// Control Split Screen
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

//Display toast instructions on index.html; forward to portfolio after 10 seconds
Materialize.toast('Click a "Learn More" Button to View My Portfolio', 3000, 'rounded', function () {
  var container = $('#toast-container');
  window.location.href = '#';

});