// Get the cart button and cart count element
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// Initialize cart data
let cartItems = 0;

// Add event listener for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.getAttribute('data-product');
        const productPrice = this.getAttribute('data-price');

        // Add product to cart (for now, just increment the count)
        cartItems++;
        cartCount.textContent = cartItems;

        alert(`${productName} has been added to your cart for $${productPrice}`);
    });
});
