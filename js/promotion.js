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