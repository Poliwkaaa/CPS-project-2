const width = document.body.clientWidth;
let swiperSlider = document.querySelector(".swiper");
let wrapper = swiperSlider.querySelector(".swiper-wrapper");
let slides = swiperSlider.querySelectorAll(".swiper-slide");

let deleteSwiper = function () {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("swiper-slide");
  }
  wrapper.classList.remove("swiper-wrapper");
  swiperSlider.classList.remove("swiper");
};

if (width < 768) {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    loop: true,
    spaceBetween: 16,
    slidesPerView: "auto",
    allowTouchMove: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  deleteSwiper();
}

const toggleButton = document.querySelector(".show-more-btn");
const cards = document.querySelectorAll(".brands__item");
let visibleCardsCount = 6;

if (width >= 1120) {
  visibleCardsCount = 8;
}

// Cкрываем карточки, которые не должны быть видны по умолчанию
for (let i = 0; i < cards.length; i++) {
  if (i >= visibleCardsCount - 1) {
    cards[i].classList.add("brands__item--hidden");
  }
}

toggleButton.addEventListener("click", function () {
  if (toggleButton.textContent === "Показать все") {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove("brands__item--hidden");
    }
    toggleButton.textContent = "Скрыть";
    toggleButton.classList.add("show-more-btn--hide");
  } else {
    for (let i = 0; i < cards.length; i++) {
      if (i >= visibleCardsCount - 1) {
        cards[i].classList.add("brands__item--hidden");
      }
    }
    toggleButton.textContent = "Показать все";
    toggleButton.classList.remove("show-more-btn--hide");
  }
  console.log("Click");
});
