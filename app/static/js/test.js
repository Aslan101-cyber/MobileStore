let cart = [];
const cartButton = document.getElementById('cart-button');

// Handle add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productId = productCard.getAttribute('data-id');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        // Add product to cart
        const product = {
            id: productId,
            name: productName,
            price: productPrice
        };

        cart.push(product);
        updateCartCount();
    });
});

// Update the cart count
function updateCartCount() {
    cartButton.textContent = `Cart (${cart.length})`;
}
