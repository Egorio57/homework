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
  const modalButton = document.querySelector(".modal")

  function openModal(event) {
    event.preventDefault();
    document.body.classList.add("pop-up__modal--open");
  }

  function closeModal(event2){
    event2.preventDefault()
    
    if (event2.target.closest(".cancel") || event2.target.classList.contains("modal")){
      document.body.classList.remove("pop-up__modal--open");
    }
  }

  openModalka.addEventListener("click", openModal);
  modalButton.addEventListener("click", closeModal)
})();
