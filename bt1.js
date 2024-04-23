// bai 1
var num1 = prompt("Nhap diem Toan");
var num2 = prompt("Nhap diem Li");
var num3 = prompt("Nhap diem Hoa");
var dtb = (+num1 + +num2 + +num3)/3;
console.log(dtb);
// bai 2
var dollar = prompt("Nhap so tien muon quy doi");
var vnd = +dollar * 23000;
console.log(vnd);
// bai 3
var so1 = Number(prompt("Nhap so 1"));
var so2 = Number(prompt("Nhap so 2"));
var so3 = Number(prompt("Nhap so 3"));
var max = (so1>so2)?so1:so2;
max= (max>so3)?max:so3;
console.log(max);
// bai4
let mang =[];
var num4 = Number(prompt("Nhap so luong"));
for(var i =1;i<=num4;i++){
    var num5 = Number(prompt('so thu ' +i));
    mang.push(num5);
}
var max = mang[0];
for(i=1;i<mang.length;i++){
    if(max<mang[i]){
        max = mang[i];
    }
}
console.log(max);
// bai 5
var diem = Number(prompt("nhap diem"));
var a = "D";
var b =1;
if(diem >= 75){
    a = "A";
}
else if(diem >= 60 && diem <=75 ){
    a = "B";
}
else if(diem >= 45 && diem <=60 ){
    a = "C";
}
else if(diem >= 35 && diem <=45 ){
    a = "D";
}else if(diem <35 && diem >=0 ){
    a = "E";
}else{
    b=0;
}
if(b == 1){
    console.log(a);
}else{
    alert("So diem nhap phai nam trong 100");
}
// bai tap console don gian
var a = "wellcome to Rikkei Academy";
console.log(a);
prompt("mời bạn nhập số tuổi của mình");
document.write("Quyết tâm học lập trình javascript");
alert("Chào mừng bạn đến với học viện Rikkei Academy");
confirm("bạn đã đủ 18 tuổi chưa!");
// bai tap bien, kieu du lieu, toan tu
let firstName ="Academy";
let lastName = "Rikkei";
let fullName = "Rikkei Academy";
var a = Numnber(prompt("Nhap do C"));
let b = a/5*9+32;
console.log(b);
let a = prompt("Nhap chieu dai");
let b = prompt("Nhap chieu rong");
let cv = (+a + +b)*2;
let dt = +a * +b;