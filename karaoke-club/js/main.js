// модалка с картой

(function () {
  const btnMapOpen = document.querySelector(".nav__list-marker");
  const btnMapClose = document.querySelector(".modal-window-map__inner");

  btnMapOpen.addEventListener("click", (event) => {
    event.preventDefault();
    if (!document.body.classList.contains("modal-window-map--opened")) {
      document.body.classList.add("modal-window-map--opened");
    }
  });
  btnMapClose.addEventListener("click", function (event) {
    event.preventDefault();

    if (document.body.classList.contains("modal-window-map--opened")) {
      document.body.classList.remove("modal-window-map--opened");
    }
  });
})();

// телефоная маска

(function () {
  const tellInput = document.querySelectorAll("input[type='tel']");
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(tellInput);
})();

// модалка с обратной связью

(function () {
  const btnMapOpen = document.querySelector(".button-to-book");
  const modalWindowSign = document.querySelector(".modal-window-sign");

  // Открытие модалки
  btnMapOpen.addEventListener("click", function (event) {
    event.preventDefault();
    if (!document.body.classList.contains("modal-window-sign--opened")) {
      document.body.classList.add("modal-window-sign--opened");
    }
  });

  // Закрытие модалки
  modalWindowSign.addEventListener("click", function (event) {
    event.preventDefault();

    if (
      !event.target.closest(".modal-window-sign__block") &&
      document.body.classList.contains("modal-window-sign--opened")
    ) {
      document.body.classList.remove("modal-window-sign--opened");
    }
  });
})();

// бургер меню
// burger-menu--open
(function () {
  const burgerOpen = document.querySelector(".burger-menu");

  function openBurger(event) {
    event.preventDefault();

    if (document.body.classList.contains("burger-menu--open")) {
      document.body.classList.remove("burger-menu--open");
    } else {
      document.body.classList.add("burger-menu--open");
    }
  }

  burgerOpen.addEventListener("click", openBurger);
})();

// забронировать-галерея
(function () {
  new Swiper(".book-a-gym__mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 2,

    pagination: {
      el: ".book-a-gym__pagination",
      type: "fraction",
      dynamicBullets: false,
    },
    navigation: {
      nextEl: ".book-a-gym__next",
      prevEl: ".book-a-gym__prev",
    },

    breakpoints: {
      450: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },

      900: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1100: {
        slidesPerView: 4,
        spaceBetween: 60,
      },
      1415: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  });
})();

// аккордеон

(function () {
  const accordionLists = document.querySelectorAll(".accordion-list");

  accordionLists.forEach((element) => {
    element.addEventListener("click", (e) => {
      const accordionControl = e.target.closest(".accordion-list__control");

      if (!accordionControl) {
        return;
      }

      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;
      const isOpened = accordionItem.classList.contains(
        "accordion-list__item--opened"
      );

      // Закрываем все открытые аккордеоны в этом списке
      const accordionOpenedItem = element.querySelector(
        ".accordion-list__item--opened"
      );
      if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
        closeAccordion(accordionOpenedItem);
      }

      // Переключаем текущий аккордеон
      if (isOpened) {
        closeAccordion(accordionItem);
      } else {
        openAccordion(accordionItem, accordionContent);
      }
    });
  });

  function openAccordion(item, content) {
    item.classList.add("accordion-list__item--opened");
    content.style.maxHeight = content.scrollHeight + "px";
  }

  function closeAccordion(item) {
    const content = item.querySelector(".accordion-list__content");
    item.classList.remove("accordion-list__item--opened");
    content.style.maxHeight = null;
  }
})();

// табы
(function () {
  const tabControls = document.querySelector(".tab-controls");
  let activeSwiper = null;
  let activeThumbsSwiper = null;

  function toggleTab(e) {
    const tabControl = e.target.closest(".tab-controls__link");
    if (!tabControl) return;

    e.preventDefault();

    const tabControlId = tabControl.getAttribute("href");
    const sliderControlData = tabControl.getAttribute("data-hall");

    // Удаляем активные классы
    document
      .querySelector(".tab-content--show")
      ?.classList.remove("tab-content--show");
    document.querySelector(tabControlId).classList.add("tab-content--show");

    document
      .querySelector(".tab-controls__link--active")
      ?.classList.remove("tab-controls__link--active");
    tabControl.classList.add("tab-controls__link--active");

    document
      .querySelector(".halls__swiper-container--show")
      ?.classList.remove("halls__swiper-container--show");
    document
      .getElementById(sliderControlData)
      .classList.add("halls__swiper-container--show");

    // Уничтожаем предыдущие слайдеры
    if (activeSwiper) {
      activeSwiper.destroy(true, true);
      activeSwiper = null;
    }
    if (activeThumbsSwiper) {
      activeThumbsSwiper.destroy(true, true);
      activeThumbsSwiper = null;
    }

    // Инициализируем новые слайдеры для активного таба
    initSwipers(sliderControlData);
  }

  function initSwipers(containerId) {
    const container = document.getElementById(containerId);

    // Инициализация thumbs слайдера
    activeThumbsSwiper = new Swiper(
      container.querySelector(".halls__myswiper"),
      {
        loop: true,
        slidesPerView: 4,
        watchSlidesProgress: true,
      }
    );

    // Инициализация основного слайдера
    activeSwiper = new Swiper(container.querySelector(".halls__myswiper2"), {
      loop: true,
      centeredSlides: true,
      pagination: {
        el: ".our-halls__pagination",
        type: "fraction",
        dynamicBullets: false,
      },
      navigation: {
        nextEl: ".our-halls__next",
        prevEl: ".our-halls__prev",
      },
      thumbs: {
        swiper: activeThumbsSwiper,
      },
    });
  }

  // Инициализация первого слайдера при загрузке
  initSwipers("hall-1");

  tabControls.addEventListener("click", toggleTab);
})();

// scroll
// scroll-up--show
(function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 2000) {
      this.document
        .querySelector(".scroll-up")
        .classList.add("scroll-up--show");
    } else {
      this.document
        .querySelector(".scroll-up")
        .classList.remove("scroll-up--show");
    }
  });
})();
