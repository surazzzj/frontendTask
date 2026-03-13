const menu = document.querySelector(".menu-toggle")
const nav = document.querySelector(".nav-links")

menu.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex"
})

/* smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" })
    })
})

/* reveal animation */

const reveals = document.querySelectorAll(".reveal")

window.addEventListener("scroll", () => {

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top
        const height = window.innerHeight

        if (top < height - 100) {
            el.classList.add("active")
        }

    })

})

/* dark mode */

const toggle = document.querySelector(".theme-toggle")

toggle.addEventListener("click", () => {

    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        toggle.textContent = "☀️"
    } else {
        toggle.textContent = "🌙"
    }

})
