// anime animation functions for index.html

// header and subheadr movement
anime({
  targets: ".subHeader",
  translateX: ["-50%", "4%"],
  duration: 1500,
  easeing: "easeInOutSine",
  delay: anime.stagger(160),
});

// navbar movement
anime({
  targets: "#navBar",
  translateX: ["-100vw", "76vw"],
  duration: 800,
  easing: "easeInOutSine",
});
// fixes navbar in place after animation
var element = document.getElementById("navBar");
element.style.position = "fixed";

anime({
  targets: ".hairlineSeparator",
  translateY: ["10vh", "-2vh"],
  duration: 600,
  easing: "easeInOutSine",
});

//smooth scroll on nav bar click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// records scroll position
addEventListener("scroll", (event) => {});
onscroll = (event) => {
  console.log(scrollY);
};

// movement for the about me section
$(document).on("scroll.something", function () {
  if ($(this).scrollTop() >= $("#page2").position().top) {
    //Do something

    //Unbind the event
    $(document).off("scroll.something");
  }
});
