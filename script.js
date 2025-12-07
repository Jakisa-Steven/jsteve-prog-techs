
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