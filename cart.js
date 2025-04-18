let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = product.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Đã thêm vào giỏ hàng!');
}

function displayCart() {
    const cartList = document.getElementById('cart-list');
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<p>${item.name} - ${item.price} VND</p>`;
        cartList.appendChild(itemDiv);
        total += item.price;
    });
    document.getElementById('total').innerText = `Tổng: ${total} VND`;
}

displayCart();