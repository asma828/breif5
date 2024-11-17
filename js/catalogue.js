// selecting the elements from the doom
const Electronics = document.querySelector("#Electronics");
const Food = document.querySelector("#Food");
const Bookes = document.querySelector("#Bookes");
const Clothes = document.querySelector("#Clothes");
const list = document.querySelector("#list");
const grid = document.querySelector("#grid");
const numbers = document.querySelector("#numbers");
let pageNumber = 1;


let display = "grid";

// this section is for making the slider 
const sliderContainer = document.querySelector("#sliderContainer");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");

sliderContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
});
rightArrow.addEventListener("click", () => {
    sliderContainer.style.scrollBehavior = "smooth"
    sliderContainer.scrollLeft += sliderContainer.offsetWidth * 1.005
})
leftArrow.addEventListener("click", () => {
    sliderContainer.style.scrollBehavior = "smooth"
    sliderContainer.scrollLeft -= sliderContainer.offsetWidth * 1.005
})

const productcs = async () => {
    try {
        const response = await fetch("https://gist.githubusercontent.com/EssadeqBillouche/72ca6ff79f3f364c962fb11de46982ee/raw/product.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
};

// this place is for filtring the carigorys each one in it array 
let books, electronics, food, clothes;
(async () => {
    const productsc = await productcs();
    const { products } = productsc
    // Filter categories after the data is fetched
    books = products.filter(element => element.category === "book");
    electronics = products.filter(element => element.category === "electronics");
    food = products.filter(element => element.category === "food");
    clothes = products.filter(element => element.category === "Clothes");
})();

// next function is for paginate the array of products 
const paginate = (array, currenPage, sectionSize = 4) => {
    const startIndex = (currenPage - 1) * sectionSize;
    const lastIndex = startIndex + sectionSize;
    return array.slice(startIndex, lastIndex);
}
const totalOfpages = (array, sectionSize = 4) => {
    return Math.ceil(array.length / sectionSize);
}


const displaygrid = (electronicArray, bookArray, foodAraay, clothesArray) => {
    const ElectronicsCards = Electronics.querySelector("#cards")
    const booksCards = Bookes.querySelector("#cards")
    const foodCards = Food.querySelector("#cards")
    const clothesCards = Clothes.querySelector("#cards")
    ElectronicsCards.innerHTML = "";
    booksCards.innerHTML = "";
    foodCards.innerHTML = "";
    clothesCards.innerHTML = "";
    electronicArray.forEach(e => {
        ElectronicsCards.innerHTML += `<div>
        <div class=" min-w-[240px] w-[265px] flex flex-col justify-between items-center h-[320px] m-3 rounded-lg p-4 bg-gray-200">
            <div class="w-28 h-60">
                <img class="object-cover" src="${e.img}" alt="">
            </div>
            <div class="flex justify-around flex-col h-20">
                <div class="h-12">
                    <h1 class="font-bold">${e.name.slice(0, 20)}...</h1>
                </div>
                <div class="w-60 flex justify-between">
                    <div class="text-orange-400">
                        <span class="font-bold"> ${e.price}</span>
                        <span class="font-bold">Dh</span>
                    </div>
                    <button data-id= "${e.id} id="ATCB">
                        <div class="w-32 h-8 bg-white rounded-lg text-orange-400 flex justify-around items-center text-sm border-solid border-orange-400 hover:text-white hover:border-orange-400 border-4 hover:border-none hover:bg-orange-400">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p class="font-bold">Add to cart</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    foodAraay.forEach(e => {
        foodCards.innerHTML += `<div>
        <div class=" min-w-[240px] w-[265px] flex flex-col justify-between items-center h-[320px] m-3 rounded-lg p-4 bg-gray-200">
            <div class="w-28 h-60">
                <img class="object-cover" src="${e.img}" alt="">
            </div>
            <div class="flex justify-around flex-col h-20">
                <div class="h-12">
                    <h1 class="font-bold">${e.name.slice(0, 20)}...</h1>
                </div>
                <div class="w-60 flex justify-between">
                    <div class="text-orange-400">
                        <span class="font-bold"> ${e.price}</span>
                        <span class="font-bold">Dh</span>
                    </div>
                    <button data-id= "${e.id} id="ATCB">
                        <div class="w-32 h-8 bg-white rounded-lg text-orange-400 flex justify-around items-center text-sm border-solid border-orange-400 hover:text-white hover:border-orange-400 border-4 hover:border-none hover:bg-orange-400">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p class="font-bold">Add to cart</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    bookArray.forEach(e => {
        booksCards.innerHTML += `<div>
        <div class=" min-w-[240px] w-[265px] flex flex-col justify-between items-center h-[320px] m-3 rounded-lg p-4 bg-gray-200">
            <div class="w-28 h-60">
                <img class="object-cover" src="${e.img}" alt="">
            </div>
            <div class="flex justify-around flex-col h-20">
                <div class="h-12">
                    <h1 class="font-bold">${e.name.slice(0, 20)}...</h1>
                </div>
                <div class="w-60 flex justify-between">
                    <div class="text-orange-400">
                        <span class="font-bold"> ${e.price}</span>
                        <span class="font-bold">Dh</span>
                    </div>
                    <button data-id= "${e.id} id="ATCB">
                        <div class="w-32 h-8 bg-white rounded-lg text-orange-400 flex justify-around items-center text-sm border-solid border-orange-400 hover:text-white hover:border-orange-400 border-4 hover:border-none hover:bg-orange-400">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p class="font-bold">Add to cart</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    clothesArray.forEach(e => {
        clothesCards.innerHTML += `<div>
        <div class=" min-w-[240px] w-[265px] flex flex-col justify-between items-center h-[320px] m-3 rounded-lg p-4 bg-gray-200">
            <div class="w-28 h-60">
                <img class="object-cover" src="${e.img}" alt="">
            </div>
            <div class="flex justify-around flex-col h-20">
                <div class="h-12">
                    <h1 class="font-bold">${e.name.slice(0, 20)}...</h1>
                </div>
                <div class="w-60 flex justify-between">
                    <div class="text-orange-400">
                        <span class="font-bold"> ${e.price}</span>
                        <span class="font-bold">Dh</span>
                    </div>
                    <button data-id= "${e.id} id="ATCB">
                        <div class="w-32 h-8 bg-white rounded-lg text-orange-400 flex justify-around items-center text-sm border-solid border-orange-400 hover:text-white hover:border-orange-400 border-4 hover:border-none hover:bg-orange-400">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p class="font-bold">Add to cart</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
}
const displaylist = (electronicArray, bookArray, foodAraay, clothesArray) => {
    const ElectronicsCards = Electronics.querySelector("#cards")
    const booksCards = Bookes.querySelector("#cards")
    const foodCards = Food.querySelector("#cards")
    const clothesCards = Clothes.querySelector("#cards")
    ElectronicsCards.innerHTML = "";
    booksCards.innerHTML = "";
    foodCards.innerHTML = "";
    clothesCards.innerHTML = "";
    electronicArray.forEach(e => {
        ElectronicsCards.innerHTML += `<div class="bg-white min-w-[265px] w-[45%]  flex  justify-around items-center h-[350px] m-3 rounded-lg">
                    <div class="w-2/5">
                        <img src="${e.img}" alt=""class="h-full w-full">
                    </div>
                    <div class="flex justify-around flex-col h-20">
                        <div>
                            ${e.name}
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="text-orange-400">
                                $${e.price}
                            </div>
                            <button>
                                <div
                                    class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm" >
                                    <i class="fa-solid fa-cart-shopping text-sm"></i>
                                    <p>add to cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`
    });
    foodAraay.forEach(e => {
        foodCards.innerHTML += `<div class="bg-white min-w-[265px] w-[45%]  flex  justify-around items-center h-[350px] m-3 rounded-lg">
                    <div class="w-2/5">
                        <img src="${e.img}" alt=""class="h-full w-full">
                    </div>
                    <div class="flex justify-around flex-col h-20 w-20">
                        <div>
                            ${e.name}
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="text-orange-400">
                                $${e.price}
                            </div>
                            <button>
                                <div
                                    class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm">
                                    <i class="fa-solid fa-cart-shopping text-sm"></i>
                                    <p>add to cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`
    });
    bookArray.forEach(e => {
        booksCards.innerHTML += `<div class="bg-white min-w-[265px] w-[45%]  flex  justify-around items-center h-[350px] m-3 rounded-lg">
                    <div class="w-2/5">
                        <img src="${e.img}" alt=""class="h-full w-full">
                    </div>
                    <div class="flex justify-around flex-col h-20 w-56">
                        <div class="w-full">
                            ${e.name}
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="text-orange-400">
                                $${e.price}
                            </div>
                            <button>
                                <div
                                    class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm">
                                    <i class="fa-solid fa-cart-shopping text-sm"></i>
                                    <p>add to cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`
    });
    clothesArray.forEach(e => {
        clothesCards.innerHTML += `<div class="bg-white min-w-[265px] w-[45%]  flex  justify-around items-center h-[350px] m-3 rounded-lg">
                    <div class="w-2/5">
                        <img src="${e.img}" alt=""class="h-full w-full">
                    </div>
                    <div class="flex justify-around flex-col h-20">
                        <div>
                            ${e.name}
                        </div>
                        <div class="w-full flex justify-between">
                            <div class="text-orange-400">
                                $${e.price}
                            </div>
                            <button>
                                <div
                                    class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm">
                                    <i class="fa-solid fa-cart-shopping text-sm"></i>
                                    <p>add to cart</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>`
    });
}

list.addEventListener("click", () => {
    display = "list";
    if (display == "grid") {
        const pagenatedBooks = paginate(books, pageNumber);
        const pagenatedClothes = paginate(clothes, pageNumber);
        const pagenatedElecrtonics = paginate(electronics, pageNumber);
        const pagenatedFood = paginate(food, pageNumber);
        displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
    else if (display == "list") {
        const pagenatedBooks = paginate(books, pageNumber);
        const pagenatedClothes = paginate(clothes, pageNumber);
        const pagenatedElecrtonics = paginate(electronics, pageNumber);
        const pagenatedFood = paginate(food, pageNumber);
        displaylist(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
})
grid.addEventListener("click", () => {
    display = "grid";
    if (display == "grid") {
        const pagenatedBooks = paginate(books, pageNumber);
        const pagenatedClothes = paginate(clothes, pageNumber);
        const pagenatedElecrtonics = paginate(electronics, pageNumber);
        const pagenatedFood = paginate(food, pageNumber);

        displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
    else if (display == "list") {
        const pagenatedBooks = paginate(books, pageNumber);
        const pagenatedClothes = paginate(clothes, pageNumber);
        const pagenatedElecrtonics = paginate(electronics, pageNumber);
        const pagenatedFood = paginate(food, pageNumber);
        displaylist(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
})
const defaultDisplay = () => {
    const pagenatedBooks = paginate(books, pageNumber);
    const pagenatedClothes = paginate(clothes, pageNumber);
    const pagenatedElecrtonics = paginate(electronics, pageNumber);
    const pagenatedFood = paginate(food, pageNumber);
    displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
}
setTimeout(defaultDisplay, 300);
// add numbers in the list of pages
let lastnumbers
setTimeout(() => {
    lastnumbers = totalOfpages(books)
    for (let index = 0; index < lastnumbers; index++) {
        numbers.innerHTML += `<button class="text-lg font-bold mx-4 pageButton" data-id="${index + 1}">${index + 1}</button>`
    }
}, 300)
let pagebuttons
setTimeout(() => {
    pagebuttons = document.querySelectorAll(".pageButton")
    pagebuttons.forEach(element => {
        element.addEventListener("click", (e) => {
            pageNumber = Number(e.target.dataset.id)
            if (display === "grid") {
                const pagenatedBooks = paginate(books, pageNumber);
                const pagenatedClothes = paginate(clothes, pageNumber);
                const pagenatedElecrtonics = paginate(electronics, pageNumber);
                const pagenatedFood = paginate(food, pageNumber);
                displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
            }
            else if (display === "list") {
                const pagenatedBooks = paginate(books, pageNumber);
                const pagenatedClothes = paginate(clothes, pageNumber);
                const pagenatedElecrtonics = paginate(electronics, pageNumber);
                const pagenatedFood = paginate(food, pageNumber);
                displaylist(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
            }
        })
    });
}, 300)






// burger menu token from Essadeq 
const burger_button = document.getElementById("burger_button");
const menu_burger = document.getElementById("menu_burger");
const close_button = document.getElementById("button_to_close");

burger_button.addEventListener("click", () => {
    console.log("burger is clicked ");

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