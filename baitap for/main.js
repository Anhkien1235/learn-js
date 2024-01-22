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
  
    innerFunction();
  
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
    const canhA = prompt("Nhập cạnh A: ");
    const canhB = prompt("Nhập cạnh B: ");
    const canhC = prompt("Nhập cạnh C: ");

    if(canhA + canhB > canhC && canhB + canhC > canhA && canhA + canhC > canhB){
        if(canhA === canhB && canhB === canhC){
            alert('đây là tam giac đều')
        } else if(canhA === canhB || canhA === canhC || canhB === canhC) 
        {
            alert('Đây là tam giác cân')
        } else if(canhA ** 2 === (canhB**2 + canhC**2) || canhB**2===(canhA**2 + canhC**2 || canhC**2 === canhA**2 + canhB**2))
        {
            alert('Đây là tam giác vuông')
        } else{
            alert('Đây là tam giác thường')
        }
    }else{
        alert('3 cạnh trên không tạo thành một tam giác')
    }
}


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

   
    const dinhDang = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // định dạng để kiểm tra email

    if (dinhDang.test(email)) { // sử dụng hàm test để kiểm tra xem địa chỉ nhập vào có khớp với định dạng dinhDang hay không
        alert('Email hợp lệ')
    } else {
        alert('Email không hợp lệ')

    }
}

// for...in sử dụng để duyệt mảng hoặc object

const person  = {   // khai báo dạng object
    ten : 'Kien',
    tuoi : 20,
    diaChi :'HN',
    sdt: 123456,
}

const arr=['a', 'b','c'];
   
for(const kin in arr){
    console.log(kin)
}





// nhập vào danh sách tên và sắp xếp theo thứ tự alphaB

function Sapxep() {
    
    let SoLuong, x;  // khai báo biến SoLuong và x
const DanhSach =  Array(100);  // khai báo mảng có số lượng tối đa là 100, mảng đc dùng để lưu trữ tên người dùng
SoLuong = prompt("Nhập số lượng : ", 3); // nhập số lượng 3/100

for (i=0; i < SoLuong; i++)   //chạy vòng lặp
{
    DanhSach[i] = prompt("Nhập vào họ tên: ",""); //tên sẽ được truyền vào trong mảng với vị trí i
}

DanhSach.sort(); // sử dụng hàm sort để sắp xếp

document.write("<h1>Danh sách đã sắp xếp là </h1>");
for (x in DanhSach)  
{
document.write( DanhSach[x] );// in ra danh sách
document.write("<BR>"); 
}
}
