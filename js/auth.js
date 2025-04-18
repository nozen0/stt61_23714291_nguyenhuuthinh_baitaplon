// auth.js

// Lấy danh sách người dùng từ localStorage hoặc khởi tạo mảng rỗng
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Lưu danh sách người dùng vào localStorage
function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Kiểm tra tài khoản đã tồn tại chưa
function isUsernameTaken(username) {
    const users = getUsers();
    return users.some(user => user.username === username);
}

// Hàm đăng ký tài khoản
function register() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp!");
        return;
    }

    if (isUsernameTaken(username)) {
        alert("Tên đăng nhập đã tồn tại!");
        return;
    }

    const newUser = {
        username,
        email,
        password,
        purchaseHistory: []
    };

    const users = getUsers();
    users.push(newUser);
    saveUsers(users);

    alert("Đăng ký thành công! Hãy đăng nhập.");
    window.location.href = "login.html";
}

// Hàm đăng nhập
function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        alert("Tên đăng nhập hoặc mật khẩu không đúng.");
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
    alert("Đăng nhập thành công!");
    window.location.href = "account.html";
}

// Hàm xóa lịch sử mua hàng
function clearPurchaseHistory() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    currentUser.purchaseHistory = [];
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    const users = getUsers().map(user =>
        user.username === currentUser.username ? currentUser : user
    );
    saveUsers(users);
    alert("Đã xóa lịch sử mua hàng.");
    location.reload();
}

// Hàm xóa tài khoản
function deleteAccount() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;

    if (!confirm("Bạn có chắc muốn xóa tài khoản? Thao tác này không thể hoàn tác.")) return;

    const users = getUsers().filter(user => user.username !== currentUser.username);
    saveUsers(users);
    localStorage.removeItem('currentUser');
    alert("Tài khoản đã bị xóa!");
    window.location.href = "register.html";
}
