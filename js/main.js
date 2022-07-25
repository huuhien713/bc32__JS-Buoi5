// ==================================================================

document.getElementById('btnKetQua').onclick = function() {
    // Input:
    var diemChuan = Number(document.getElementById('diemChuan').value);
    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = Number(document.getElementById('doiTuong').value);
    var diemMon1 = Number(document.getElementById('diemMon1').value);
    var diemMon2 = Number(document.getElementById('diemMon2').value);
    var diemMon3 = Number(document.getElementById('diemMon3').value);
    // Output:
    var diemKhuVuc = 0;
    var diemDoiTuong = 0
    var ketQua;
    // Progress:
    switch(khuVuc) {
        case ('A') : {
            diemKhuVuc = 2;
            break;
        }
        case ('B') : {
            diemKhuVuc = 1;
            break;
        }
        case ('C') : {
            diemKhuVuc = 0.5;
            break;
        }
        case ('X') : {
            diemKhuVuc = 0;
            break;
        }
        default: {
            diemKhuVuc = 0;
        }
    }
    switch(doiTuong) {
        case (1) : {
            diemDoiTuong = 2.5;
            break;
        }
        case (2) : {
            diemDoiTuong = 1.5;
            break;
        }
        case (3) : {
            diemDoiTuong = 1;
            break;
        }
        case (0) : {
            diemDoiTuong = 0;
            break;
        }
        default: {
            diemDoiTuong = 0;
        }
    }
    var diemTongKet = diemMon1 + diemMon2 + diemMon3;
    var tong = diemTongKet + diemDoiTuong + diemKhuVuc;
    if (tong > diemChuan) {
        document.getElementById('ketQua').innerHTML = 'Bạn đã đậu với tổng điểm số là: ' + tong + ' điểm';
    } else {
        document.getElementById('ketQua').innerHTML = 'Chúc bạn may mắn lần sau: ' + tong + ' điểm';
    }
}

// =======================================================================

document.getElementById('btnTinhTienDien').onclick = function() {
    // Input:
    var canHo = document.getElementById('canHo').value;
    var soDien = Number(document.getElementById('soDien').value);
    // Output:
    var tongTienDien = 0;
    // Progress:
    if (soDien <= 50) {
        tongTienDien = 500 * soDien;
    } else if (soDien > 50 && soDien <= 100) {
        tongTienDien = 500*50 + 650*(soDien-50);
    } else if (soDien > 100 && soDien <= 200) {
        tongTienDien = 500*50 + 650*50 + 850*(soDien-100);
    } else if (soDien > 200 && soDien <= 350) {
        tongTienDien = 500*50 + 650*50 + 850*100 + 1100*(soDien-200);
    } else if (soDien > 350) {
        tongTienDien = 500*50 + 650*50 + 850*100 + 1100*150 + 1300*(soDien-350);
    }
    // Hiển Thị:
    document.getElementById('tagTongTienDien').innerHTML = 'Căn hộ số ' + canHo + ' : tiêu thụ ' + soDien + 'Kw điện <br> Tổng số tiền cần phải thanh toán là: ' + tongTienDien.toLocaleString() + ' VNĐ';
}

//========================================================================

document.getElementById('btnTinhTienThue').onclick = function() {
    // Input:
    var ten = document.getElementById('ten').value;
    var tongThuNhap = Number(document.getElementById('tongThuNhap').value);
    var nguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value);
    // Output:
    var thuNhapChiuThue = tongThuNhap - Number(4) - nguoiPhuThuoc*Number(1.6);
    var tienThue = 0;
    // Progress:
    if (thuNhapChiuThue <= 60) {
        tienThue = thuNhapChiuThue * 5 / 100;
    } else if (tongThuNhap > 60 && tongThuNhap <= 120) {
        tienThue = thuNhapChiuThue * 10 / 100;
    } else if (tongThuNhap > 120 && tongThuNhap <= 210) {
        tienThue = thuNhapChiuThue * 15 / 100;
    } else if (tongThuNhap > 210 && tongThuNhap <= 384) {
        tienThue = thuNhapChiuThue * 20 / 100;
    } else if (tongThuNhap > 384 && tongThuNhap <= 624) {
        tienThue = thuNhapChiuThue * 25 / 100;
    } else if (tongThuNhap > 624 && tongThuNhap <= 960) {
        tienThue = thuNhapChiuThue * 30 / 100;
    } else if (tongThuNhap > 960) {
        tienThue = thuNhapChiuThue * 35 / 100;
    }
    // Hiển Thị:
    document.getElementById('tagTongTienThue').innerHTML = 'Tiền thuế thu nhập cá nhân phải trả là : ' + tienThue + ' triệu đồng'
}

//========================================================================
// Hàm ẩn hiện SỐ KẾT NỐI
var soKetNoiWrap = document.getElementById('soKetNoiWrap');
var loaiKhachHang = document.myForm.loaiKhachHang;              // Lấy giá trị của RadioInput = document.Name.name
for (var i = 0; i < loaiKhachHang.length; i++) {                // vòng lặp kiểm tra sự thay đổi
    loaiKhachHang[i].addEventListener('change', function() {    // khi có thay đổi sẽ in ra giá trị thay đổi
        // console.log(loaiKhachHang.value);                       // in ra giá trị thay đổi
        if (loaiKhachHang.value == 'doanhNghiep') {             // điều kiện if
            soKetNoiWrap.style.display = 'block';
        } else {
            soKetNoiWrap.style.display = 'none';
        }
    })
}
// Hàm chính tính tiền cáp
document.getElementById('btnTinhTienCap').onclick = function() {
    // Input:
    var maKhachHang = Number(document.getElementById('maKhachHang').value);
    var soKetNoi = Number(document.getElementById('soKetNoi').value); 
    var kenhCaoCap = Number(document.getElementById('kenhCaoCap').value);
    // console.log(maKhachHang, soKetNoi, kenhCaoCap);
    // Output:
    tienCap = 0;
    // Progress:
    if (loaiKhachHang.value == 'nhaDan') {
        phiXuLyHoaDon = 4.5;
        phiDichVuCoBan = 20.5;
        tienCap = phiXuLyHoaDon + phiDichVuCoBan +  kenhCaoCap*7.5;
    } else if (loaiKhachHang.value == 'doanhNghiep') {
        phiXuLyHoaDon = 15;
        if ((soKetNoi) <= 10) {
            phiDichVuCoBan = 7.5*soKetNoi;
            tienCap = phiXuLyHoaDon + phiDichVuCoBan + kenhCaoCap*50;
        } else {
            phiDichVuCoBan = 75 + (5*(soKetNoi-10));
            tienCap = phiXuLyHoaDon + phiDichVuCoBan + kenhCaoCap*50;
        }
    }
    //Hiển thị
   document.getElementById('tagTongTienCap').innerHTML = 'Khách hàng có mã số ' + maKhachHang + ' cần phải thanh toán ' + tienCap + '$ chi phí Cáp';
}



