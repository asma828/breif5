document.getElementById('cartIcon').addEventListener('click', function() {
    document.getElementById('cart').classList.remove('translate-x-full');
});

document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cart').classList.add('translate-x-full');
});



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
}

function removeFromCart(index) {
    cart.splice(index, 1);
}