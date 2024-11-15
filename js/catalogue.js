// selecting the elements from the doom
const Electronics = document.querySelector("#Electronics");
const Food = document.querySelector("#Food");
const Bookes = document.querySelector("#Bookes");
const Clothes = document.querySelector("#Clothes");
const list = document.querySelector("#list");
const grid = document.querySelector("#grid");
const numbers = document.querySelector("#numbers");

let display = "gird";

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

// next function is for paginate the array of products 
const products = [
    {
        id: 1,
        imgUrl: "https://cdn11.bigcommerce.com/s-gibnfyxosi/images/stencil/2560w/products/172881/174498/51DF6ZR8G7L__38888.1615626055.jpg?c=1",
        name: "Harry Potter and the Sorcerer's Stone",
        price: 19,
        category: "book"
    },
    {
        id: 2,
        imgUrl: "https://www.bibdsl.co.uk/imagegallery/bookdata/cd427/9780261103252.JPG",
        name: "The Lord of the Rings",
        price: 91,
        category: "book"
    },
    {
        id: 3,
        imgUrl: "https://m.media-amazon.com/images/I/81t2CVWEsUL._AC_UF1000,1000_QL80_.jpg",
        name: "The Great Gatsby",
        price: 15,
        category: "book"
    },
    {
        id: 4,
        imgUrl: "https://images-na.ssl-images-amazon.com/images/I/41NZ86oC3cL.jpg",
        name: "1984 by George Orwell",
        price: 12,
        category: "book"
    },
    {
        id: 5,
        imgUrl: "https://m.media-amazon.com/images/I/81-351AfOfL.jpg",
        name: "Apple iPhone 14",
        price: 999,
        category: "electronics"
    },
    {
        id: 6,
        imgUrl: "https://m.media-amazon.com/images/I/71mYRzElY-L._AC_SL1500_.jpg",
        name: "Samsung Galaxy S22",
        price: 799,
        category: "electronics"
    },
    {
        id: 7,
        imgUrl: "https://m.media-amazon.com/images/I/81FO3+XwI6L._AC_SL1500_.jpg",
        name: "Sony WH-1000XM5 Headphones",
        price: 299,
        category: "electronics"
    },
    {
        id: 8,
        imgUrl: "https://m.media-amazon.com/images/I/71n7nT4u3qL._AC_UF894,1000_QL80_.jpg",
        name: "Nintendo Switch",
        price: 349,
        category: "electronics"
    },
    {
        id: 9,
        imgUrl: "https://cdn.shopify.com/s/files/1/0603/3371/2274/products/candle5_600x.jpg",
        name: "Scented Candle",
        price: 25,
        category: "home"
    },
    {
        id: 10,
        imgUrl: "https://m.media-amazon.com/images/I/61U0eA0As5L._AC_SL1500_.jpg",
        name: "Instant Pot Pressure Cooker",
        price: 89,
        category: "home"
    }
];
// this place is for filtring the carigorys each one in it array 
const books = products.filter(elements => elements.category == "book");
const elecrtonics = products.filter(elements => elements.category == "electronics");
const food = products.filter(elements => elements.category == "food");
const clothes = products.filter(elements => elements.category == "clothes");

// next function is for paginate the array of products 
const paginate = (array, currenPage = 1, sectionSize = 4) => {
    const startIndex = (currenPage - 1) * sectionSize;
    const lastIndex = startIndex + sectionSize;
    return array.slice(startIndex, lastIndex);
}
const totalOfpages = (array, sectionSize = 4) => {
    return Math.ceil(array.length / sectionSize);
}
// add numbers in the list of pages
let lastnumbers = totalOfpages(books)
for (let index = 0; index < lastnumbers; index++) {
    numbers.innerHTML += `<button class="text-lg font-bold mx-4">${index + 1}</button>`
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
        ElectronicsCards.innerHTML += `<div
        class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
        <div>
        <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`;
    });
    foodAraay.forEach(e => {
        foodCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`;
    });
    bookArray.forEach(e => {
        booksCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`;
    });
    clothesArray.forEach(e => {
        clothesCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
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
    console.log(electronicArray);
    
    electronicArray.forEach(e => {
        ElectronicsCards.innerHTML += `<div class="bg-white min-w-[265px] w-[45%]  flex  justify-around items-center h-[350px] m-3 rounded-lg">
                    <div class="w-2/5">
                        <img src="${e.imgUrl}" alt=""class="h-full w-full">
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
    foodAraay.forEach(e => {
        foodCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`
    });
    bookArray.forEach(e => {
        booksCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
                                <i class="fa-solid fa-cart-shopping text-sm"></i>
                                <p>add to cart</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>`
    });
    clothesArray.forEach(e => {
        clothesCards.innerHTML += `<div
                class="bg-white min-w-[265px] w-[265px]  flex flex-col justify-around items-center h-[350px] m-3 rounded-lg">
                <div>
                    <img src="${e.imgUrl}" alt="">
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
                                class="w-32 h-8 bg-orange-400 rounded-lg text-white flex justify-around items-center text-sm data-id="${elecrtonics.id}"">
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
        const pagenatedBooks = paginate(books);
        const pagenatedClothes = paginate(clothes);
        const pagenatedElecrtonics = paginate(elecrtonics);
        const pagenatedFood = paginate(food);
        displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
    else if (display == "list") {
        const pagenatedBooks = paginate(books);
        const pagenatedClothes = paginate(clothes);
        const pagenatedElecrtonics = paginate(elecrtonics);
        const pagenatedFood = paginate(food);
        displaylist(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
})
grid.addEventListener("click", () => {
    display = "grid";
    if (display == "grid") {
        const pagenatedBooks = paginate(books);
        const pagenatedClothes = paginate(clothes);
        const pagenatedElecrtonics = paginate(elecrtonics);
        const pagenatedFood = paginate(food);

        displaygrid(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
    else if (display == "list") {
        const pagenatedBooks = paginate(books);
        const pagenatedClothes = paginate(clothes);
        const pagenatedElecrtonics = paginate(elecrtonics);
        const pagenatedFood = paginate(food);
        displaylist(pagenatedElecrtonics, pagenatedBooks, pagenatedFood, pagenatedClothes);
    }
})