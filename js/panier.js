document.getElementById('cartIcon').addEventListener('click', function() {
    document.getElementById('cart').classList.remove('translate-x-full');
});

document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cart').classList.add('translate-x-full');
});



const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartTotalQuantityElement = document.getElementById('cartTotalQuantity');
const emptyCartMessage = document.getElementById('emptyCartMessage');


let cart = [];


function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}


function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}


document.getElementById('cartIcon').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);

function openCart() {
    document.getElementById('cart').classList.remove('translate-x-full');
}

function closeCart() {
    document.getElementById('cart').classList.add('translate-x-full');
}


function addToCart(name, price, imageSrc) {
    const existingCartItem = cart.find(item => item.name === name);

    if (existingCartItem) {
        existingCartItem.quantity += 1; 
    } else {
        cart.push({
            name: name,
            price: parseFloat(price),
            basePrice: parseFloat(price), 
            imageSrc: imageSrc,
            size: 'M', 
            quantity: 1
        });
    }

    updateCart();
    saveCart(); 
}


function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
    saveCart(); 
}


function updateCart() {
    renderCartItems(); 
    updateCartTotal(); 
}


function renderCartItems() {
    cartItemsContainer.innerHTML = ''; 

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block'; 
    } else {
        emptyCartMessage.style.display = 'none'; 
    }

    cart.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item', 'flex', 'items-start', 'justify-between', 'pb-4', 'mb-4', 'border-b');

        cartItemElement.innerHTML = `
            <div class="flex">
                <input type="checkbox" class="cart-item-checkbox mr-2" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${item.imageSrc}" alt="${item.name}" class="w-20 h-20 object-cover rounded">
                    <div class="quantity-control mt-2 flex items-center justify-between">
                        <button class="decrease-quantity bg-gray-300 text-gray-700 px-2 py-1 rounded">-</button>
                        <input type="text" value="${item.quantity}" class="w-8 text-center mx-2 border border-gray-300 rounded" readonly>
                        <button class="increase-quantity bg-gray-300 text-gray-700 px-2 py-1 rounded">+</button>
                    </div>
                </div>
                <div class="cart-item-details ml-4">
                    <p class="cart-item-title font-semibold">${item.name}</p>
                    <p class="cart-item-price text-gray-500 mt-2">$${(item.price * item.quantity).toFixed(2)}</p>
                     
                    <!-- Sélection de la taille -->
                    <div class="size-selector mt-2">
                        <label for="size-${index}">Taille:</label>
                        <select id="size-${index}" class="size-select">
                            <option value="M" ${item.size === 'M' ? 'selected' : ''}>M </option>
                            <option value="L" ${item.size === 'L' ? 'selected' : ''}>L </option>
                            <option value="XL" ${item.size === 'XL' ? 'selected' : ''}>XL </option>
                        </select>
                    </div>
                </div>
            </div>
            <button class="remove-item">
                <i class="fa fa-trash text-red-500"></i>
            </button>
            
        `;

        const sizeSelect = cartItemElement.querySelector(`#size-${index}`);
        sizeSelect.addEventListener('change', () => handleSizeChange(index, sizeSelect.value));

        cartItemElement.querySelector('.increase-quantity').addEventListener('click', () => increaseQuantity(index));
        cartItemElement.querySelector('.decrease-quantity').addEventListener('click', () => decreaseQuantity(index));
        cartItemElement.querySelector('.remove-item').addEventListener('click', () => removeFromCart(index));

        cartItemsContainer.appendChild(cartItemElement);
    });
}



function handleSizeChange(index, newSize) {
    cart[index].size = newSize;

    let priceMultiplier = 1; 
    if (newSize === 'L') {
        priceMultiplier = 1.1; 
    } else if (newSize === 'XL') {
        priceMultiplier = 1.2; 
    }
    cart[index].price = cart[index].basePrice * priceMultiplier;

    updateCart(); 
    saveCart(); 
}

function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
    saveCart();
}


function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeFromCart(index); 
    }
    updateCart();
    saveCart();
}


function updateCartTotal() {
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartTotalElement.textContent = `$${totalPrice.toFixed(2)}`;
    cartTotalQuantityElement.textContent = totalQuantity;
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.getAttribute('data-name');
        const productPrice = event.target.getAttribute('data-price');
        const productImage = event.target.closest('.bg-white').querySelector('img').src;

        addToCart(productName, productPrice, productImage);
    });
});


document.getElementById('buyButton').addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('.cart-item-checkbox');
    const itemsToRemove = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            itemsToRemove.push(index);
        }
    });

    
    for (let i = itemsToRemove.length - 1; i >= 0; i--) {
        cart.splice(itemsToRemove[i], 1);
    }

    updateCart();
    saveCart();
});


window.onload = loadCart;