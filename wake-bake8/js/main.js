// бургер меню

(function () {
  function burgerInit(event) {
    const burgerIcon = event.target.closest(".burger-icons");
    const burgerNavLink = event.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) {
      return;
    }
    if (document.body.classList.contains("body--burger-menu")) {
      document.body.classList.remove("body--burger-menu");
    } else {
      document.body.classList.add("body--burger-menu");
    }
  }

  document.addEventListener("click", burgerInit);
})();

// модалка

(function () {
  const openModalka = document.querySelector(".about__play");
  const modalButton = document.querySelector(".modal");

  function openModal(event) {
    event.preventDefault();
    document.body.classList.add("pop-up__modal--open");
  }

  function closeModal(event2) {
    event2.preventDefault();

    if (
      event2.target.closest(".cancel") ||
      event2.target.classList.contains("modal")
    ) {
      document.body.classList.remove("pop-up__modal--open");
    }
  }

  openModalka.addEventListener("click", openModal);
  modalButton.addEventListener("click", closeModal);
})();

// табы

(function () {
  const tabControls = document.querySelector(".tab-controls");

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");

    e.preventDefault();

    const tabControlId = tabControl.getAttribute("href");

    document
      .querySelector(".tab-content--show")
      .classList.remove("tab-content--show");
    document.querySelector(tabControlId).classList.add("tab-content--show");

    document
      .querySelector(".tab-controls__link--active")
      .classList.remove("tab-controls__link--active");
    tabControl.classList.add("tab-controls__link--active");
  }

  tabControls.addEventListener("click", toggleTab);
})();

// аккордеон

(function () {
  const accordionLists = document.querySelectorAll(".accordion-list ");

  accordionLists.forEach((element) => {
    element.addEventListener("click", (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        ".accordion-list__item--opened"
      );
      const accordionOpenedContent = accordionList.querySelector(
        ".accordion-list__item--opened .accordion-list__control"
      );

      const accordionControl = e.target.closest(".accordion-list__control");

      if (!accordionControl) {
        return;
      }

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove("accordion-list__item--opened");
        accordionOpenedContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle("accordion-list__item--opened");

      if (accordionItem.classList.contains("accordion-list__item--opened")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
})();

// галерея

(function () {
  new Swiper(".gallery__swiper", {
    spaceBetween: 8,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".gallery__next",
      prevEl: ".gallery__prev",
    },

    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 5,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      940: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
})();

// галерея-отзывы

(function () {
  new Swiper(".testimonials_swiper", {
    spaceBetween: 2,
    slidesPerView: 1,
    initialSlide: 1,
    centeredSlides: true,

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },

    breakpoints: {
      450: {
        slidesPerView: 1.2,
        spaceBetween: 5,
      },

      640: {
        slidesPerView: 1.6,
        spaceBetween: 10,
      },
      1050: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
})();

// телефоная маска

(function (){
  const tellInput = document.querySelectorAll("input[type='tel']")
  const im = new Inputmask("+7 (999) 999-99-99")
  im.mask(tellInput)
})();
