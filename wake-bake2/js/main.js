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
