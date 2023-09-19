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
  targets: ".navBar",
  translateX: ["-100vw", "36vw"],
  duration: 800,
  easing: "easeInOutSine",
});

anime({
  targets: ".hairlineSeparator",
  translateX: ["-90vw", "10vw"],
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
