// for...in sử dụng để duyệt key .. value trong 1 mảng hoặc object

const person  = {   // khai báo dạng object
    ten : 'Kien',
    tuoi : 20,
    diaChi :'HN',
    sdt: 123456,
}

const arr=['a', 'b','c']; // khai báo 1 mảng
   
for(const kin in person){    
    console.log(kin)  // lấy key
    console.log(person[kin]) // lấy value
}
