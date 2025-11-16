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
const images = document.querySelectorAll(".carousel img");
const descBox = document.getElementById("carousel-desc");
let currentIndex = 0;

// Função que atualiza imagem ativa
function showImage(index) {
    images.forEach(img => img.classList.remove("active"));
    images[index].classList.add("active");
    updateDescription();
    updateDots();
}

// Atualiza texto da imagem ativa
function updateDescription() {
    const text = images[currentIndex].getAttribute("data-desc");
    descBox.textContent = text;
}

// Criar indicadores (bolinhas)
const dotsContainer = document.getElementById("dots");
images.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
        currentIndex = i;
        showImage(currentIndex);
    });
    dotsContainer.appendChild(dot);
});

// Atualiza bolinhas
function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

// Botão NEXT
document.getElementById("arrow right").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

// Botão PREV
document.getElementById("arrow left").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

// Suporte mobile — tocar exibe a descrição
document.querySelector(".carousel").addEventListener("click", () => {
    document.querySelector(".carousel").classList.add("touch");
    updateDescription();
});

// Inicializar
showImage(0);
