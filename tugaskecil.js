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

// Soal No. 4
// Web Document Object Model (DOM)
document.title = "Belajar Javascript - DOM";
const body = document.body;

const btn1 = document.getElementById("btn1");
const defaultText = "Klik Saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "24px";
btn1.style.background = "tomato";

function clickButton() {
  btn1.style.background = "aqua";
  const textBaru = document.createElement("p");
  textBaru.textContent = "Halo guys, Element Paragrafnya sudah muncul yaaa!";
  body.append(textBaru);
}

function changeText() {
  btn1.textContent = "Textnya ke ganti hehehe";
}

function originalText() {
  btn1.textContent = defaultText;
}

//Button 2
const btn2 = document.getElementById("btn2");
const defaultText2 = "Coba Hover Button Ini";
btn2.textContent = defaultText2;

btn2.style.padding = "8px";
btn2.style.fontSize = "24px";

const textBaru2 = document.createElement("p");

function originalText2() {
  btn2.textContent = defaultText2;
}

function showText() {
  textBaru2.textContent = "Dave Gordy";
  body.append(textBaru2);
}

function changeTextColor() {
  textBaru2.style.color = "red";
  body.append(textBaru2);
}
