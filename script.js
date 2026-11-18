let mahasiswa = {
  nama: "Rullia Resty Handayani",
  semester: 3,
  jurusan: "Teknologi Informasi",
  tahunMasuk: 2025,
};

// Langkah 2: Tipe Data & Operator
let tahunLulus = mahasiswa.tahunMasuk + 4;
let sisaSemester = 8 - mahasiswa.semester;

document.querySelector("#info-tambahan").textContent =
  "Perkiraan lulus tahun " + tahunLulus + " (" + sisaSemester + " semester lagi).";

document.querySelector("#label-semester").textContent =
  "Semester " + mahasiswa.semester + " · " + mahasiswa.jurusan;

// Langkah 3: Percabangan - Sapaan Sesuai Waktu
let hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
function buatSapaan(mhs, waktu, namaHari) {
  return "Selamat " + waktu + ", hari " + namaHari + ". Saya " + mhs.nama +
    ", mahasiswa semester " + mhs.semester + " " + mhs.jurusan + ".";
}

let namaHariIni = hari[new Date().getDay()];
let jam = new Date().getHours();
let waktu;

if (jam < 10) {
  waktu = "pagi";
} else if (jam < 15) {
  waktu = "siang";
} else if (jam < 18) {
  waktu = "sore";
} else {
  waktu = "malam";
}

document.querySelector("#sapaan").textContent = buatSapaan(mahasiswa, waktu, namaHariIni);

// Langkah 4: Perulangan - Menambah Daftar Keahlian dari Array
let keahlianTambahan = [
  { nama: "Git & GitHub", level: "Menengah" },
  { nama: "Responsive Design", level: "Dasar" },
  { nama: "Debugging Dasar", level: "Dasar" },
];
 
keahlianTambahan.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item.nama + " — " + item.level;
  document.querySelector("#keahlian-tambahan").appendChild(li);
});

function evaluasiStudi(mhs) {
  let sisaSemester = 8 - mhs.semester;
  let tahunLulus = mhs.tahunMasuk + 4;
 
  if (sisaSemester <= 2) {
    return "Sebentar lagi lulus! Tinggal " + sisaSemester + " semester lagi, semangat " + mhs.nama + "!";
  } else {
    return mhs.nama + " masih semester " + mhs.semester + ", perkiraan lulus " + tahunLulus + ".";
  }
}
 
document.querySelector("#btn-cek").addEventListener("click", function () {
  document.querySelector("#hasil-cek").textContent = evaluasiStudi(mahasiswa);
});

let pengalaman = [
  { tahun: 2024, kegiatan: "Mengikuti pelatihan dasar pemrograman web" },
  { tahun: 2025, kegiatan: "Magang singkat sebagai asisten lab komputer" },
  { tahun: 2026, kegiatan: "Mulai mengerjakan proyek kelompok Pemrograman Website" },
];
 
pengalaman.forEach(function (item) {
  let li = document.createElement("li");
  li.textContent = item.tahun + " — " + item.kegiatan;
  document.querySelector("#daftar-pengalaman").appendChild(li);
});

// Langkah 5: Event & Fungsi - Tombol "Cek Info Diri"
function cekInfoDiri() {
  if (sisaSemester <= 2) {
    document.querySelector("#hasil-cek").textContent =
      "Sebentar lagi lulus! Tinggal " + sisaSemester + " semester lagi, semangat " + nama + "!";
  } else {
    document.querySelector("#hasil-cek").textContent =
      mahasiswa.nama + " masih semester " + mahasiswa.semester + ", perkiraan lulus " + tahunLulus + ".";
  }
}

document.querySelector("#btn-cek").addEventListener("click", cekInfoDiri);

// Langkah 6: Validasi Form Sederhana
function validasiForm(event) {
    event.preventDefault();

    let namaInput = document.querySelector("#nama").value.trim();
    let emailInput = document.querySelector("#email").value.trim();
    let pesanInput = document.querySelector("#pesan").value.trim();
    let hasilForm = document.querySelector("#hasil-form");

    if (namaInput === ""){
      hasilForm.textContent =
        "Nama wajib diisi sebelum pesan dikirim.";
    } else if (emailInput === "") {
      hasilForm.textContent =
        "Email wajib diisi sebelum pesan dikirim.";
    } else if (pesanInput === "") {
      hasilForm.textContent =
        "Pesan wajib diisi sebelum dikirim.";
    } else {
      hasilForm.textContent =
        "Terima kasih, " + namaInput +
        "! Formulir berhasil divalidasi.";
  }
}

document.querySelector("#form-kontak").addEventListener("submit", validasiForm);

function cekKesiapanUTS(mhs) {
  return "Profil " + mhs.nama + " memiliki " + keahlianTambahan.length +
    " keahlian tambahan dan " + pengalaman.length +
    " pengalaman yang tercatat — siap direview menjelang UTS.";
}
 
document.querySelector("#status-uts").textContent = cekKesiapanUTS(mahasiswa);