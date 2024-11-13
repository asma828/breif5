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
const books = products.filter(elements=>elements.category == "book");
const elecrtonics = products.filter(elements=>elements.category == "electronics");
const food = products.filter(elements=>elements.category == "food");
const clothes = products.filter(elements=>elements.category == "clothes");

// next function is for paginate the array of products 
const paginate = (array, currenPage, sectionSize=4) => {
    const startIndex = (currenPage - 1) * sectionSize;
    const lastIndex = startIndex + sectionSize;
    return array.slice(startIndex, lastIndex);
}
const _4bookes = paginate(books,1,4)
console.log(_4bookes);

