function baitap1() {
    var Ten, Tuoi; // Khai báo 2 biến để lưu tên và tuổi

    //Kiểm tra điều kiện tên không được bỏ trống , sử dụng do while để chạy vòng lập 
    do {
        Ten = prompt("Bạn hãy nhập vào tên ", "kient"); //hiển thị hộp thoại
        if (Ten === "") {
            alert("Vui lòng nhập tên ");
        }
    } while (Ten === ""); //Vòng lặp tiếp tục miễn là tên nhập vào (Ten) là trống.

    Tuoi = prompt("Bạn hãy nhập vào Tuổi : ", 20); //prompt dùng để gọi hộp thoại
    document.write("Chào bạn : <B> " + Ten + "</B>"); // để tin ra tên
    document.write("<BR>"); // Xuống dòng
    document.write("Tuổi của bạn là : <U> " + Tuoi + "</U>"); // để in ra tuổi
}


function baitap2() {
    var currentDate = new Date(); // ngày và thời gian của ngày hôm nay

    // Lấy thông tin về thứ, ngày trong tuần (long : tên đầy đủ , short : tên viết tắt )
    var dayOfWeek = currentDate.toLocaleDateString('vi-VN', { weekday: 'long' });

    // Lấy thông tin về ngày trong tháng
    var day = currentDate.getDate();
    // lấy thông tin tháng
    var month = currentDate.toLocaleDateString('vi-VN', { month: 'long' });
    //lấy thông tin năm
    var year = currentDate.getFullYear();

    alert( "Hiện tại bây giờ là : " + dayOfWeek +", " + " ngày "+ day +" "+ month + " năm " + year)

}


function baitap3 () {

    var currentDate = new Date();


    document.title = "Bây giờ đang là : " + currentDate.getHours() + " giờ " + currentDate.getMinutes() + " Phút " + currentDate.getSeconds() + " giây " ;

    alert("Bây giờ đang là : " + currentDate.getHours() + " giờ " + currentDate.getMinutes() + " Phút " + currentDate.getSeconds() + " giây ");
}

function baitap4() {
    var hienTai = new Date();
    var namHienTai = hienTai.getFullYear(); // Sử dụng getFullYear() để lấy năm hiện tại.

    var namSinh;
    do {
        namSinh = prompt("Bạn sinh năm bao nhiêu: ", "");
    } while (parseInt(namSinh) > namHienTai); // Nhập lại nếu Năm sinh > năm hiện tại

    var tuoi = namHienTai - parseInt(namSinh);

    alert("Tuổi của bạn bây giờ là: " + tuoi);
}

function baitap5() {
    var LuaChon;
    LuaChon = prompt("Bạn hãy nhập vào một số để mở trang web: ", 1);
     
    // kiểm tra từng trường hợp nhập vào xem có đúng với giá trị tương ứng với mỗi trường hợp.
    switch (LuaChon)
    {
    case "1" : window.open("https://santenmien.devpro.fun"); break;
    case "2" : window.open("https://webmail.onemail.vn"); break;
    case "3" : window.open("https://onepanel.vn/"); break;
    default : window.open("https://inet.vn"); // trường hợp không nhập 
}
}
