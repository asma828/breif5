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

const url = "https://gist.githubusercontent.com/EssadeqBillouche/72ca6ff79f3f364c962fb11de46982ee/raw/product.json";

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data)

        const products = data.products;
        
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const cards = document.getElementById('cards');
            const card = document.createElement('div');
            card.classList.add('bg-white', 'min-w-[265px]', 'w-[265px]', 'flex', 'flex-col', 'justify-around', 'items-center', 'h-[350px]', 'm-3', 'rounded-lg');
            
            card.innerHTML = `
            <div>
                <div class="bg-white min-w-[240px] w-[265px] flex flex-col justify-between items-center h-[320px] m-3 rounded-lg p-4 bg-gray-200">
                    <div class="w-28 h-60">
                        <img class="object-cover" src="${product.img}" alt="">
                    </div>
                    <div class="flex justify-around flex-col h-20">
                        <div class="h-12">
                            <h1 class="font-bold">${product.name.slice(0, 20)}...</h1>
                        </div>
                        <div class="w-60 flex justify-between">
                            <div class="text-orange-400">
                                <span class="font-bold"> ${product.price}</span>
                                <span class="font-bold">Dh</span>
                            </div>
                            <button>
                                <div class="w-32 h-8 bg-white rounded-lg text-orange-400 flex justify-around items-center text-sm border-solid border-orange-400 hover:text-white hover:border-orange-400 border-4 hover:border-none hover:bg-orange-400">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                    <p class="font-bold">Add to cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            `;
            cards.appendChild(card);
        }
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });