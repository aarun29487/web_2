// Add event listeners to quantity buttons
const decrementButton = document.querySelector('.quantity button:first-child');
const incrementButton = document.querySelector('.quantity button:last-child');
const quantityValue = document.querySelector('.quantity-value');

decrementButton.addEventListener('click', () => {
    let value = parseInt(quantityValue.textContent);
    if (value > 1) {
        value--;
        quantityValue.textContent = value;
    }
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});


incrementButton.addEventListener('click', () => {
    let value = parseInt(quantityValue.textContent);
    value++;
    quantityValue.textContent = value;
});

// Add event listener to "Add to Cart" button
const addToCartButton = document.querySelector('.btn-primary');
addToCartButton.addEventListener('click', () => {
    // Implement your cart functionality here, e.g., add product to cart, update cart count, etc.
    alert('Product added to cart!');
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');

    const handleScroll = () => {
        const triggerPoint = window.innerHeight / 1.3;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerPoint) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
});