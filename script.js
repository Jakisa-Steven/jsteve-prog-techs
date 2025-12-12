// menuicon and the menunav
const menuBtn = document.getElementById("menu");
const navLinks = document.getElementById("link");
let open = false;

menuBtn.addEventListener("click", () => {
    open = !open;
    navLinks.style.display = open ? "block" : "none";
    menuBtn.querySelector("img").src = open 
        ? "./images/imgi_7_cross.svg" 
        : "./images/menu.svg";
});

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        navLinks.style.display = "flex";
    } else if (!open) {
        navLinks.style.display = "none";
    }
});

// form inputs

const form = document.querySelector("main#contact form") || document.querySelector("form");
const submit = document.querySelector("#submitBtn");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userMessage = document.querySelector("#message");

if (form) {
    form.addEventListener("submit", (e) => {
        // Use HTML5 validity first
        if (!form.checkValidity()) {
            e.preventDefault();
            form.reportValidity();
            return;
        }

        // Extra check: ensure trimmed values are not empty
        if (userName.value.trim() === "" || userEmail.value.trim() === "" || userMessage.value.trim() === "") {
            e.preventDefault();
            alert("Please fill in Name, Email, and Message.");
            if (userName.value.trim() === "") userName.focus();
            return;
        }

        // All good — allow submission
    });
}