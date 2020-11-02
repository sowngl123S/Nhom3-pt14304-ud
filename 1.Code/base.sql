create database base;
use base;
create table TAIKHOAN(
	maTaiKhoan bigint AUTO_INCREMENT,
	tenTaiKhoan varchar(30) not null,
	matKhau varchar(30) not null,
    hoTen nvarchar(30) not null,
    gioiTinh nvarchar(10) not null,
	vaiTro nvarchar(15) not null,
    CMND varchar(25) not null,
    SDT varchar(15) not null,
	email varchar(30) not null,
    ngaySinh date not null,
    anhThe text null,
    ngayTao date not null,
    trangThai nvarchar(30) not null,
	primary key(maTaiKhoan)
);

create table ANH(
	maAnh bigint AUTO_INCREMENT,
	url text not null,
    tenAnh nvarchar(30) not null,
    thoiGianDangAnh date not null,
	primary key(maAnh)
);



create table PHUONGTIEN(
	maPhuongTien bigint AUTO_INCREMENT,
	tenPhuongTien nvarchar(30) not null,
    loaiPhuongTien nvarchar(30) not null,
    soChoNgoi int not null,
    khoangGiaDau int not null,
    khoangGiaCuoi int not null,
    lienLacSDT varchar(15) not null,
    thoiGianDiChuyen int not null,
    trangThai nvarchar(30) not null,
	primary key(maPhuongTien) 
);

create table LUUTRU(
	maLuuTru bigint AUTO_INCREMENT,
	tenLuuTru nvarchar(30) not null,
    khoangGiaDau int not null,
    khoangGiaCuoi int not null,
    lienLacSDT varchar(15) not null,
    dungLuongToiDa int not null,
    trangThai nvarchar(30) not null,
	primary key(maLuuTru) 
);

create table NHAHANG(
	maNhaHang bigint AUTO_INCREMENT,
	tenNhaHang nvarchar(30) not null,
    khoangGiaDau int not null,
    khoangGiaCuoi int not null,
    lienLacSDT varchar(15) not null,
    dungLuongToiDa int not null,
    trangThai nvarchar(30) not null,
	primary key(maNhaHang) 
);

create table CHUDE(
	maChuDe bigint AUTO_INCREMENT,
	tenChuDe nvarchar(50) not null,
	primary key(maChuDe) 
);

create table TOUR(
	maTour bigint AUTO_INCREMENT,
    maTaiKhoan bigint not null,
	tenTour nvarchar(50) not null,
	ngayKhoiHanh date not null,
	ngayKetThuc date not null,
    soNguoiToiDa int not null,
	giaTour int not null,
    diaDiemKhoiHanh nvarchar(50) not null,
    trangThai nvarchar(30) not null,
    moTa text not null,
    foreign key(maTaiKhoan) references TAIKHOAN(maTaiKhoan),
	primary key(maTour)
);

create table ANHTOUR
(
	maAnhTour bigint AUTO_INCREMENT,
    maTour bigint not null,
    maAnh bigint not null,
    foreign key(maTour) references TOUR(maTour),
    foreign key(maAnh) references ANH(maAnh),
    primary key(maAnhTour)
);

create table DDTINH(
	maTinh bigint AUTO_INCREMENT,
    tenTinh nvarchar(30) not null,
	primary key(maTinh) 
);

create table DDHUYEN(
	maHuyen bigint AUTO_INCREMENT,
	maTinh bigint not null,
    tenHuyen nvarchar(30) not null,
    foreign key(maTinh) references DDTINH(maTinh),
	primary key(maHuyen) 
);

create table DDXA(
	maXa bigint AUTO_INCREMENT,
	maHuyen bigint not null,
    tenXa nvarchar(30) not null,
    foreign key(maHuyen) references DDHUYEN(maHuyen),
	primary key(maXa) 
);

create table DDTHON(
	maThon bigint AUTO_INCREMENT,
	maXA bigint not null,
    tenThon nvarchar(30) not null,
    foreign key(maXA) references DDXA(maXA),
	primary key(maThon) 
);

create table DIADIEM(
	maDiaDiem bigint AUTO_INCREMENT,
	maTour bigint not null,
    maTinh bigint not null,
    foreign key(maTinh) references DDTINH(maTinh),
    foreign key(maTour) references TOUR(maTour),
	primary key(maDiaDiem) 
);

create table CHITIETPHUONGTIEN(
	maChiTietPT bigint AUTO_INCREMENT,
	maPhuongTien bigint not null,
    maTour bigint not null,
    foreign key(maPhuongTien) references PHUONGTIEN(maPhuongTien),
    foreign key(maTour) references TOUR(maTour),
	primary key(maChiTietPT)
);

create table CHITIETLUUTRU(
	maChiTietLC bigint AUTO_INCREMENT,
	maLuuTru bigint not null,
    maTour bigint not null,
    foreign key(maLuuTru) references LUUTRU(maLuuTru),
    foreign key(maTour) references TOUR(maTour),
	primary key(maChiTietLC)
);

create table CHITIETNHAHANG(
	maChiTietNH bigint AUTO_INCREMENT,
	maNhaHang bigint not null,
    maTour bigint not null,
    foreign key(maNhaHang) references NHAHANG(maNhaHang),
    foreign key(maTour) references TOUR(maTour),
	primary key(maChiTietNH)
);

create table CHITIETCHUDE(
	maChiTietCD bigint AUTO_INCREMENT,
	maChuDe bigint not null,
    maTour bigint not null,
    foreign key(maChuDe) references CHUDE(maChuDe),
    foreign key(maTour) references TOUR(maTour),
	primary key(maChiTietCD)
);

create table DANGKYTOUR(
	maDangKyTour bigint AUTO_INCREMENT,
    maTour bigint not null,
    maTaiKhoan bigint not null,
    SDTLienHe varchar(15) not null,
    emailLienHe varchar(30) not null,
    thoiGiangDangKy date not null,
    soNguoiLon int not null,
    soTreNho int not null,
    trangThaiTour nvarchar(30) not null,
    foreign key(maTour) references TOUR(maTour),
    foreign key(maTaiKhoan) references TAIKHOAN(maTaiKhoan),
	primary key(maDangKyTour)
);


create table LUUTOUR(
	maLuuTour bigint AUTO_INCREMENT,
    maTour bigint not null,
    maTaiKhoan bigint not null,
    foreign key(maTour) references TOUR(maTour),
    foreign key(maTaiKhoan) references TAIKHOAN(maTaiKhoan),
	primary key(maLuuTour)
);

create table VITRILUUTRU(
	maViTriLT bigint AUTO_INCREMENT,
    maLuuTru bigint not null,
    maDiaDiem bigint not null,
    foreign key(maLuuTru) references LUUTRU(maLuuTru),
    foreign key(maDiaDiem) references DIADIEM(maDiaDiem),
	primary key(maViTriLT)
);

create table VITRINHAHANG(
	maViTriNH bigint AUTO_INCREMENT,
    maNhaHang bigint not null,
    maDiaDiem bigint not null,
    foreign key(maNhaHang) references NHAHANG(maNhaHang),
    foreign key(maDiaDiem) references DIADIEM(maDiaDiem),
	primary key(maViTriNH)
);





