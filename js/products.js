const products = [
    { id: 1, name: 'Táo', price: 20000, img: '../img/apple.jpg' },
    { id: 2, name: 'Lê', price: 25000, img: '../img/pear.jpg' },
    { id: 3, name: 'Nho', price: 30000, img: '../img/grape.jpg' },
    { id: 4, name: 'Mít', price: 35000, img: '../img/jackfruit.jpg' },
    { id: 5, name: 'Măng cụt', price: 40000, img: '../img/mangosteen.jpg' },
    { id: 6, name: 'Nhãn', price: 15000, img: '../img/longan.jpg' },
    { id: 7, name: 'Chôm chôm', price: 18000, img: '../img/rambutan.jpg' },
    { id: 8, name: 'Chuối', price: 12000, img: '../img/banana.jpg' },
    { id: 9, name: 'Cam', price: 22000, img: '../img/orange.jpg' },
    { id: 10, name: 'Xoài', price: 28000, img: '../img/mango.jpg' }
];

function displayProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) {
        console.error('Không tìm thấy phần tử có id "product-list"');
        return;
    }
    
    productList.innerHTML = ''; // Xóa nội dung cũ nếu có
    const row = document.createElement('div');
    row.classList.add('row');

    products.forEach(product => {
        const col = document.createElement('div');
        col.classList.add('col-md-4', 'mb-4');
        col.innerHTML = `
            <div class="card h-100">
                <img class="card-img-top" src="${product.img}" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Giá: ${product.price.toLocaleString()} VND</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Thêm vào giỏ hàng</button>
                </div>
            </div>
        `;
        row.appendChild(col);
    });
    productList.appendChild(row);
}

displayProducts();
