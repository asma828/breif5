const sliderContainer = document.querySelector("#sliderContainer");
const leftArrow = document.querySelector("#leftArrow");
const rightArrow = document.querySelector("#rightArrow");


sliderContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
});
rightArrow.addEventListener("click",()=>{
    sliderContainer.style.scrollBehavior = "smooth"
    sliderContainer.scrollLeft += sliderContainer.offsetWidth  * 1.005
})
leftArrow.addEventListener("click",()=>{
    sliderContainer.style.scrollBehavior = "smooth"
    sliderContainer.scrollLeft -= sliderContainer.offsetWidth  * 1.005
})