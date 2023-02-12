//Tipe data di Javascript. Kombinasi let, alert, prompt. Variable Assigment. Conditional Statement. Operator. Array. For Loop
let nama = "Dave Gordy"; // tipe string
let usia = 23; //tipe integer
let tinggiBadan = 165.5; //tipe data double atau float
let beratBandan;
let pacar = 2;
beratBandan = 90;

//Array
let namaStaff = ["Dave", "Joseph", "Albert"];
namaStaff.push("Hengky", "Aloy");
//Hapus Index Awal
namaStaff.shift();
//Hapus Index Akhir
namaStaff.pop();

// If else Condition
if (pacar == null) {
  pacar = "Belum Ada Pacar";
} else {
  pacar = "nama pacar";
}

// Switch Condition
// switch (pacar) {
//   case 1:
//     pacar = "Punya 1 Pacar";
//     break;
//   case 2:
//     pacar = "Pacar saya 2, karena saya playboy";
//     break;
//   default:
//     pacar = "belum punya pacar";
//     break;
// }

let saldoAwal = 5000000;
let saldoTambahan = 1000000;
const hutang = 500000;
const saldoAkhir = saldoAwal + saldoTambahan - hutang;

// For Looping
const namaStaff1 = ["dave", "john", "doe"];
for (let i = 0; i <= namaStaff1.length; i++) {
  console.log(namaStaff1[i]);
}

//while
let i = 10;
do {
  i++;
} while (i < 10);
{
  i++;
  console.log("Dave Gordy");
}

alert(namaStaff);

alert(
  `nama saya ${nama}, saya berumur ${usia}, dan tinggi badan saya ${tinggiBadan} cm serta berat badan saya ${beratBandan} kg dan ${pacar} ini adalah pacar saya`
);

alert(
  `Saldo Awal saya berjumlah Rp.${saldoAwal} dan saldo tambahan saya sejumlah Rp.${saldoTambahan} jadi total saldo saya adalah sebanyak Rp.${saldoAkhir} `
);

// Web Document Object Model (DOM)
document.title = "Belajar Javascript - DOM";
const btn1 = document.getElementById("btn1");
const btn = document.querySelector("button");
const body = document.body;

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
