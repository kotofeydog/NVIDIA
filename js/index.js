window.addEventListener("DOMContentLoaded", () => {

    const modalBtn = document.querySelector("#button-js")

    const modalBlock = document.querySelector("#modal-js")

    const navBurgerBtn = document.querySelector("#navbar-burger-js")

    const navBar = document.querySelector("#navbar-mobile-js")

    modalBtn.addEventListener("click", () => {

        modalBlock.classList.add("show")

    })

    modalBlock.addEventListener("click", event => {

        if (
            event.target.classList.contains("show") ||
            event.target.classList.contains("modal__wrap") ||
            event.target.tagName === "svg"
        ) {
            modalBlock.classList.remove("show")
        }
    })

    navBurgerBtn.addEventListener("click", () => {

        navBurgerBtn.classList.toggle("active")

        navBar.classList.toggle("hidden")

        document.body.classList.toggle("no-scroll")
    })

    window.addEventListener("resize", () => {

        document.body.classList.remove("no-scroll")

        navBurgerBtn.classList.remove("active")

        navBar.classList.add("hidden")
    })
})