const modalOpen = document.querySelector(".btn-modal-open")
const modalClose = document.querySelector(".modal__close-window")
const body = document.body
const modalWindow = document.querySelector(".modal")

function handlerOpen(){
    modalWindow.classList.add("modal--open")
    body.classList.add("body--fixed")

    modalWindow.classList.remove("modal--close")
}

function handlerClose(){
    modalWindow.classList.add("modal--close")
    body.classList.remove("body--fixed")

    modalWindow.classList.remove("modal--open")
}

modalOpen.addEventListener("click", handlerOpen)
modalClose.addEventListener("click", handlerClose)