document.getElementById('cartIcon').addEventListener('click', function() {
    document.getElementById('cart').classList.remove('translate-x-full');
});

document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cart').classList.add('translate-x-full');
});
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