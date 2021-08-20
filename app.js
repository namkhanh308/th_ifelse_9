// bai1
// a = parseInt(prompt("nhap vao so a"))
// b = parseInt(prompt("nhap vao so b"))
// if(a%b==0){
//     alert("a chia hết cho b")
// }
// else{
//     alert("a không chia hết cho b")
// }

// bai2 Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.

// tuoi = parseInt(prompt("nhap tuoi cua hoc sinh"))
// if(tuoi >= 15){
//     alert("Bạn đã điều kiện vào học lớp 10")
// }
// else{
//     alert("bạn không đủ điều kiện vào học lớp 10")
// }

// bai3 Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// so = parseInt(prompt("nhập vào số bất kỳ"))
// if(so>0){
//     alert("số đó lớp hơn không ")
// }
// else if(so < 0){
//     alert("số đó nhỏ hơn không")
// }
// else{
//     alert("số đó bằng không")
// }
// bài 4 Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = parseInt(prompt("nhập số thứ nhất"))
// let b = parseInt(prompt("nhập số thứ hai"))
// let c = parseInt(prompt("nhập số thứ ba"))
// if(a>b){
//     if(a>c){
//         alert(`Số lớn nhất là ${a} `)
//     }
//     else if(a<c){
//         alert(`Số lớn nhất là ${c} `)
//     }
//     else{
//         alert(`Số lớn nhất là ${a}`)
//     }
// }
// else if(a<b){
//     if(b>c){
//         alert(`Số lớn nhất là ${b} `)
//     }
//     else if(b<c){
//         alert(`Số lớn nhất là ${c} `)
//     }
//     else{
//         alert(`Số lớn nhất là ${b} `)
//     }
// }
// else{
//     if(a>c){
//         alert(`Số lớn nhất là ${a} `)
//     }
//     else{
//         alert(`Số lớn nhất là ${c} `)
//     }
// }

// bai5 Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let diemktra1 = parseFloat(prompt("Nhập vào điểm bài kiểm tra 15 phút"))
// let diemktra2 = parseFloat(prompt("Nhập vào điểm bài kiểm tra một tiết"))
// let diemgiuaky = parseFloat(prompt("Nhập vào điểm thi giữa kỳ"))
// let diemcuoiky = parseFloat(prompt("Nhập vào điểm thi cuối kỳ"))
// let tk = (diemktra1 + diemktra2 + diemgiuaky*2 + diemcuoiky*3)/7
// if(tk >= 8.0){
//     alert("Bạn xếp loại học lực giỏi")
// }
// else{
//     if(tk >= 6.5){
//         alert("Bạn xếp loại học lực khá")
//     }
//     else{
//         if(tk >=5){
//             alert("Bạn xếp loại học lực trung bình")
//         }
//         else{
//             alert("Bạn xếp loại học lực kém")
//         }
//     }
// }
// bai6: Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let dsbanhang = parseInt(prompt("Nhập vào doanh số bán hàng(Đơn vị: triệu)"))
// if(dsbanhang > 20 && dsbanhang <= 30){
//     alert(`Bạn nhận được hoa hồng là ${dsbanhang*0.03} triệu` )
// }
// else if(dsbanhang >30 && dsbanhang <= 50){
//     alert(`Bạn nhận được hoa hồng là ${dsbanhang*0.05} triệu` )
// }
// else if(dsbanhang >50 && dsbanhang <= 70){
//     alert(`Bạn nhận được hoa hồng là ${dsbanhang*0.07} triệu` )
// }
// else if(dsbanhang >70 && dsbanhang <= 100){
//     alert(`Bạn nhận được hoa hồng là ${dsbanhang*0.1} triệu` )
// }
// else{
//     alert(`Bạn nhận được hoa hồng là ${dsbanhang*0.15} triệu` )
// }

// bai7 Bài 7: Tính cước điện thoại cho một hộ gia đình với các thông số đã cho
// let sophut;
// let phi = 0;
// let tong;
// const PHI_CO_DINH = 25;
// sophut = parseInt(prompt("Nhập số phút đã sử dụng: "));
// if (sophut > 200) {
//     phi = (sophut - 200) * 200 + 150 * 400 + 50 * 600;
// } else if (sophut > 50) {
//     phi = (sophut - 50) * 400 + 50 * 600;
// } else {
//     phi = sophut * 600;
// }
// tong = 0.01 * phi + PHI_CO_DINH;
// alert("Số tiền phải nộp là: " + tong);