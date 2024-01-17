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

    parent
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

// Tìm hiều sự khác nhau giữa var, let , const 

// var, ví dụ trong 1 funtion, khi khai báo biến bằng var thì phạm vi sử dụng chỉ được sử dụng trong function đó
// var có thể bị khai báo 
// có thể gán lại các giá trị biến khi nằm trong phạm vi 

function inforVar() {
  function innerFunction() {
    var nameVar = 'kiennt';
    console.log(nameVar); // chỉ có thể truy cập được trong phạm vi function 
    var nameVar = 'kiennt2'; // var còn có thể bị khai báo đè
    console.log(nameVar); // sẽ nhận giá trị giá trị kiennt2 

    numberVar = 1;   // var được hỗ trợ hosting .  khi viết như trên sẽ được thông dịch là : var a;  a = 1; 
    console.log(numberVar) // giá trị bằng 1 
  }

  innerFunction();

  console.log(nameVar); // vẫn có thể truy cập được vào biến
}

console.log(nameVar); // bên ngoài phạm vi function không thể truy cập được tới biến (lỗi)



function inforLet() {
    function innerFunction() {
      let numberLet = 20;
      numberLet = 45; // có thể gán lại các giá trị biến khi nằm trong phạm vi
      console.log(numberLet); // Phạm vi let hoạt động thu hẹp hơn var, nhưng không bị ghi đè (phạm vi hiện tại là dấu {})
    }
  
    console.log(n); // bên ngoài phạm vi của let nên sẽ lỗi, nếu là var thì vẫn in ra được
  }

  function inforConst() {
    function innerFunction() {
      const numberConst = 20;
      // numberConst = 45; // Lỗi - không thể gán lại giá trị cho const
      console.log(numberConst); // Phạm vi const hoạt động thu hẹp hơn var, không bị ghi đè (phạm vi hiện tại là dấu {}) 20
    }
  }

// KHI NÀO THÌ SỬ DỤNG LET VÀ CONST
// Khi đinh nghĩa biến và không gán lại biến đó  thì sử dụng Const
// Khi cần gán lại giá trị thì sử dụng Let


// Bài tập , nhập vào 1 số, kiểm tra xem đó là số gì? 

function kiemtraso(){
    const numberInput = prompt('Vui long nhap 1 so: ');
    
    const number = parseFloat(numberInput); //chuyển đổi giá trị nhập vào từ dạng chuỗi sang số vd: nhập "123abc" trả về 123, "abc" trả về NaN , ko phải dạng số

    if(!isNaN(number)){ // Kiểm tra xem có phải dạng số hay không
        if(Number.isInteger(number)){ // Number.isIntehger kiểm tra xem đó có phải số nguyên hay không
            alert("Đây là số nguyên")
        } else{
            alert("Đây là số thập phân")
        }
    } else{
        alert("Đây không phải là số")
    }
}

// Bài tập if else cơ bản

function giaiptb2() {
    const numberA = prompt("Nhập hệ số A: ");
    const numberB = prompt("Nhập hệ số B: ");
    const numberC = prompt("Nhập hệ số C: ");

    const delta = (numberB ** 2) - (4 * numberA * numberC);

    if(delta == 0){
        alert("Phương tring có nghiệm kép: " + (-numberB/(2*numberA)))
    }
    else if( delta > 0) {
        alert('Phương trình có 2 nghiệm phân biệt ' + ' x1= '+ ((-numberB + Math.sqrt(delta))/(2*numberA)) + ' ; ' + ' x2= '+ ((-numberB - Math.sqrt(delta))/(2*numberA)))
    }
    else{
        alert("Phương trình vô nghiệm")
    }
}

function kiemtratamgiac() {
    function nhapSo(message) {
        let input;
        do {
            input = prompt(message);
            if (input === null) return null; // Nếu người dùng nhấn Cancel, trả về null
            if (input.trim() === '' || isNaN(input)) {
                alert('Vui lòng nhập một số hợp lệ.');
            }
        } while (input.trim() === '' || isNaN(input));

        return Number(input);
    }

    const canhA = nhapSo("Nhập cạnh A: ");
    if (canhA === null) return; // Người dùng nhấn Cancel

    const canhB = nhapSo("Nhập cạnh B: ");
    if (canhB === null) return;

    const canhC = nhapSo("Nhập cạnh C: ");
    if (canhC === null) return;

    if (canhA + canhB > canhC && canhB + canhC > canhA && canhA + canhC > canhB) {
        if (canhA === canhB && canhB === canhC) {
            alert('Đây là tam giác đều');
        } else if (canhA === canhB || canhA === canhC || canhB === canhC) {
            alert('Đây là tam giác cân');
        } else if (canhA ** 2 === (canhB**2 + canhC**2) || canhB**2 === (canhA**2 + canhC**2) || canhC**2 === (canhA**2 + canhB**2)) {
            alert('Đây là tam giác vuông');
        } else {
            alert('Đây là tam giác thường');
        }
    } else {
        alert('3 cạnh trên không tạo thành một tam giác');
    }
}

// Gọi hàm để kiểm tra tam giác và nhập số
kiemtratamgiac();



// bài tập vòng lập while cơ bản
// Nhập vào 1 số tỉnh tổng các số chãn từ 0 - n

function tinhTong() {
    const numberN = prompt('Nhập vào 1 số : ');
    let Tong = 0;
    let bienDem = 0;

    while(bienDem <= numberN)
    {
        if(bienDem % 2 ==0){
            Tong += bienDem;

        }

        bienDem++;
    }

    alert('Tổng số chẵn từ 1 đến ' + numberN + " bằng : " + Tong);
}


function kiemtraEmail() {
    const email = prompt('Nhập Email: ');

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        alert('Email hợp lệ')
    } else {
        alert('Email không hợp lệ')

    }
}


 