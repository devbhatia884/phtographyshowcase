let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    renderCart();
}

function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: $${total}`;
}
