// -----------------------------
// Carregar tema salvo
// -----------------------------
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});

// -----------------------------
// Alternar Tema
// -----------------------------
function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

// -----------------------------
// Menu Hambúrguer
// -----------------------------
function toggleMenu() {
    const menu = document.getElementById("side-menu");
    const btn = document.querySelector(".hamburger");

    menu.classList.toggle("open");
    btn.classList.toggle("active");
}

// -----------------------------
// CARROSSEL COMPLETO
// -----------------------------
let index = 0;
const slides = document.querySelectorAll(".carousel img");
const dotsContainer = document.querySelector(".dots");

// Criar bolinhas dinamicamente
slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
    updateDots();
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

function goToSlide(n) {
    index = n;
    showSlide(index);
}

// Passar automaticamente a cada 4s
setInterval(nextSlide, 4000);
