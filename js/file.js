$(document).ready(function () {
    let sttCounter = 1;

    // Mở modal và đặt STT tự động
    $(document).ready(function () {
        $("#myBtn").click(function () {
            $("#myModal").modal("show");
        });
    });

    // Kiểm tra đầu vào
    function validateInput() {
        let isValid = true;

        // Kiểm tra họ tên (Chữ cái đầu viết hoa, không chứa số)
        let fullName = $("#fullName").val().trim();
        let nameRegex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
        if (!nameRegex.test(fullName)) {
            $("#fullName").next(".error").text("Họ tên không hợp lệ! (VD: Tran Thanh Hung)");
            isValid = false;
        } else {
            $("#fullName").next(".error").text("");
        }

        // Kiểm tra số CMND (9 số)
        let cmnd = $("#cmnd").val().trim();
        let cmndRegex = /^\d{9}$/;
        if (!cmndRegex.test(cmnd)) {
            $("#cmnd").next(".error").text("CMND phải có 9 chữ số!");
            isValid = false;
        } else {
            $("#cmnd").next(".error").text("");
        }

        // Kiểm tra địa chỉ (Chỉ chữ cái)
        let address = $("#address").val().trim();
        let addressRegex = /^[A-Z][a-zA-Z\s]*$/;
        if (!addressRegex.test(address)) {
            $("#address").next(".error").text("Địa chỉ phải bắt đầu chữ hoa và chỉ chứa chữ!");
            isValid = false;
        } else {
            $("#address").next(".error").text("");
        }

        // Kiểm tra email (xxxxx@iuh.edu.vn)
        let email = $("#email").val().trim();
        let emailRegex = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;
        if (!emailRegex.test(email)) {
            $("#email").next(".error").text("Email phải có dạng xxxxxx@iuh.edu.vn!");
            isValid = false;
        } else {
            $("#email").next(".error").text("");
        }

        // Kiểm tra số điện thoại (0xx-xxx-xxxx)
        let phone = $("#phone").val().trim();
        let phoneRegex = /^0\d{2}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(phone)) {
            $("#phone").next(".error").text("Số điện thoại phải có dạng 0xx-xxx-xxxx!");
            isValid = false;
        } else {
            $("#phone").next(".error").text("");
        }

        return isValid;
    }

    // Lưu dữ liệu vào bảng
    $("#btnSave").click(function () {
        if (validateInput()) {
            $("#registerList").append(`
                <tr>
                    <td>${sttCounter++}</td>
                    <td>${$("#fullName").val()}</td>
                    <td>${$("#cmnd").val()}</td>
                    <td>${$("#address").val()}</td>
                    <td>${$("#email").val()}</td>
                    <td>${$("#phone").val()}</td>
                </tr>
            `);
            $("#registerModal").modal("hide");
        }
    });
});
