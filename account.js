const user = {
    username: localStorage.getItem('currentUser') || 'Khách',
    balance: 1000000, // Số dư giả định
    purchases: JSON.parse(localStorage.getItem('cart')) || []
};

function displayAccount() {
    document.getElementById('username').innerText = user.username;
    document.getElementById('balance').innerText = user.balance + ' VND';
    const purchaseList = document.getElementById('purchase-list');
    user.purchases.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ${item.price} VND`;
        purchaseList.appendChild(li);
    });
}

displayAccount();