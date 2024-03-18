// navbar

let list = document.getElementById("list");
let bar = document.querySelector(".bar");

bar.addEventListener("click", () => {
  list.classList.toggle("active");
  bar.classList.toggle("close");
});

// Slider

$(document).ready(function () {
  $(".srv-cards").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 1600,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Slider
$(document).ready(function () {
  $(".im").owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    dots: false,
    autoplayTimeout: 5000,
    smartSpeed: 1600,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});

// Result

let nums = document.querySelectorAll(".res .num");
let section = document.querySelector(".who");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => count(num));
    }
    started = true;
  }
};

function count(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Slider

$(document).ready(function () {
  $(".cont").owlCarousel({
    loop: true,
    margin: 15,
    items: 1,
    autoplay: true,
    dots: false,
    autoplayTimeout: 6000,
    smartSpeed: 1600,
  });
});

// Scroll To Top

let scroll = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    scroll.classList.add("show");
  } else {
    scroll.classList.remove("show");
  }
});

scroll.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
