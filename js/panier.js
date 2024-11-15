document.getElementById('cartIcon').addEventListener('click', function() {
    document.getElementById('cart').classList.remove('translate-x-full');
});

document.getElementById('closeCart').addEventListener('click', function() {
    document.getElementById('cart').classList.add('translate-x-full');
});