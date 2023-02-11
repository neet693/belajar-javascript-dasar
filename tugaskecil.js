let saldo = prompt("Masukkan saldo Anda!");
// let hari = new Date().getDay();
var hariNama = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let tanggal = new Date();
let namaHari = hariNama[tanggal.getDay()];
alert(`Hari ini adalah hari ${namaHari} dan saldo anda adalah ${saldo}`);
console.log(`Hari ini adalah hari ${namaHari} dan saldo anda adalah ${saldo}`);

//Soal No. 3
const nilaiArray = [4, 6, 8, , 12, 14];
const nilaiBintang = nilaiArray[0] + nilaiArray[nilaiArray.length - 2] / 2;
console.log("Nilai yang bernilai bintang: " + nilaiBintang);
