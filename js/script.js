const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle the mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close the mobile menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close the mobile menu when the nav links is clicked

navLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

// About text animation
const text =
  "At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We're dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.";
const p = document.getElementById("text");
let i = 0;

setInterval(() => {
  if (i < text.length) {
    p.innerHTML += text[i];
    i++;
  }
}, 50);

// Swiper Testimonials Section

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  spaceBetween: 25,
  grabCursor: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
