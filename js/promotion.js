const burger_button = document.getElementById("burger_button");
const menu_burger = document.getElementById("menu_burger");
const close_button = document.getElementById("button_to_close");

burger_button.addEventListener("click", () => {
    menu_burger.classList.add("open");
});


close_button.addEventListener("click", () => {
    menu_burger.classList.remove("open");
});

menu_burger.addEventListener("click", (event) => {
    if (event.target === menu_burger) {
        menu_burger.classList.remove("open");
    }
});

// carocell 

const buttons = document.querySelectorAll("[data-carousel-button]");
const intervalTime = 5000; 
let autoSlideInterval;

function moveToNextSlide(offset) {
    const slides = document.querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;
    slides.children[newIndex].setAttribute('data-active', 'true');
    activeSlide.removeAttribute('data-active');

    slides.style.transform = "translateX(-" + (newIndex * 100) + "%)";
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => moveToNextSlide(1), intervalTime);
}

startAutoSlide();

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        clearInterval(autoSlideInterval); 
        moveToNextSlide(offset);
        startAutoSlide(); 
    });
});

// end 