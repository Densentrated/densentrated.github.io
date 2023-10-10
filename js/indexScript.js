// anime animation functions for index.html

// header and subheadr movement
anime({
  targets: ".subHeader",
  translateX: ["-50%", "4%"],
  duration: 1500,
  easing: "spring(1, 80, 10, 0)",
  delay: anime.stagger(160),
});

// navbar movement
anime({
  targets: "#navBar",
  translateX: ["-100vw", "74vw"],
  duration: 800,
  easing: "spring(1, 80, 10, 0)",
});
// fixes navbar in place after animation
var element = document.getElementById("navBar");
element.style.position = "fixed";

anime({
  targets: ".hairlineSeparator",
  translateY: ["10vh", "-2vh"],
  duration: 600,
  easing: "spring(1, 80, 10, 0)",
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

// Run animations on aboutme click and scroll

// records scroll position
addEventListener("scroll", (event) => {});
onscroll = (event) => {
  console.log(scrollY);
};

// about me animation
// moves about me up to the right place instantly
anime({
  targets: "#aboutMe",
  translateY: ["0%", "0vh"],
  duration: 0,
});

anime({
  targets: "#aboutMeFlavorText",
  translateY: ["0%", "0vh"],
  duration: 0,
});
// moves About me animation to the side (should be moved to an onscroll function later)
anime({
  targets: "#aboutMe",
  translateX: ["-80%", "4%"],
  duration: 600,
  easing: "spring(1, 80, 10, 0)",
});

anime({
  targets: "#aboutMeFlavorText",
  translateX: ["-80%", "18%"],
  duration: 600,
  easing: "spring(1, 80, 10, 0)",
});
