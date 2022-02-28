// document.writeln("<p>Hello bwang!</p>");
// document.writeln("<p>Ini lagi bwang");
// document.writeln(100)
// document.writeln(100.100)
// document.writeln("Seratus")
// document.writeln("<textarea cols='100' rows='10'>")
// document.writeln("Nama \t: "+"hasyim")
// document.writeln("Jabatan \t: "+"Pendidik")
// document.writeln("</textarea>")

var nama = "Nama saya";
var namalengkap = "Hasyim" + "asyari";
document.writeln(nama + namalengkap);

let varbaru = "ini menggunakan let";
document.writeln(varbaru);

const newconst = "<p>variabel ini tidak akan bisa di ubah!";
document.writeln(newconst);

//Operator aritmatika
// + - / * ** %
let result = 1 + 2;
document.writeln("<p>Hasil dari 1 + 2 = " + result);

let _result = result ** result;
document.writeln(_result);

let result1 = 5 == "5";
document.writeln("<p> Apakah 5 sama dengan 5? " + result1);

//Operator pembanding && || !
const nilaiUjian = 70;
const nilaiAbsensi = 70;

const luluUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;

const lulus = luluUjian && lulusAbsensi;
document.writeln("<p>" + lulus + "</p>");

//Console
//console.info()
//console.warn()
//console.error()
//console.table()
console.debug("ini debug");
console.info("ini info");
console.warn("ini peringatan");
console.error("ini error");

const name = "Muhamad hasim asari";
const template = `Name = ${name}`;

console.info(template);

const value = 80;
const template2 = `Nama : ${name} Lulus : ${value > 75}`;
console.info(template2);

let multilineString = `
Hello hai
hai multi
String baris ketiga
`;
console.info(multilineString);

//Konversi parseInt() parseFloat() Number() number.toString()
const value1 = 1;
const value2 = "2";
const sum = value1 + parseInt(value2);
document.writeln(`<p> ${sum}`);

const a = 1;
const b = 1;
const daftar = a.toString() + b.toString();
document.writeln(`<p> ${daftar} </p>`);
document.writeln(`<p> ${isNaN(daftar)} </p>`);

//ARRAY
let arrayKosong = [];
let arrayNama = ["Muhamad", "Hasim", "As'ari"];
document.writeln(`<p> Ini adalah array ${arrayNama[1]} </p>`);

const names = [];
names.push("aaaa");
names.push("bbbb", "cccc");
names.push("dddd", "eeee", "fffff");

console.table(names);

/*
Operasi Array
array.push(value)       = Menambah data array
array.length            = Mendapatkan panjang array
array[index]            = Mendapat data di posisi index
array[index] = value    = Mengubah data di posisi index
delete array[index]     = Menghapus data di posisi index, namun index tidak bergeser
*/

// Tipe data object
const orang = {};
//insert data
orang["Nama"] = "Muhamad Hasim asari";
orang["Alamat"] = "Sawangan";
orang["Umur"] = 27;

console.table(orang);

//hapus data
delete orang["Umur"];

const person = {
  nama: "udin manun",
  alamat: "jawa barat",
  umur: 34,
};

console.debug(`Nama \t: ${person.nama}`);
console.debug(`Alamat \t: ${person.alamat}`);
console.debug(`Umur \t: ${person.umur}`);

// IF and Else expression
const examValue = 70;

if (examValue > 80) {
  document.writeln(`<p> Nice Good Joob!`);
} else if (examValue > 60) {
  document.writeln(`Not bad!`);
} else {
  document.writeln(`Try again next year`);
}

//Alert, Prompt, and Confirm
// alert(`Hello ${person.nama}`)

// const name1 = prompt("Who are you?")
// alert(`Welcom ${name1}`)

// const masuk = confirm(`Apakah anda yakin mu masuk?`)
// if(masuk) {
//     const name1 = prompt("Asupkeun nama antum")
//     alert(`Hello ${name1}`)
// } else {
//     alert("Bye bye!")
// }

// UNDIFINED
let name2;
if (name2 === undefined) {
  console.info("UNDIFINED");
} else {
  console.info("DEFINED");
}
const nameArray = {};
if (nameArray.name === undefined) {
  console.info("OBJECT UNDIFINED");
} else {
  console.info("OBJECT DEFINED");
}

// TODO NULL
// ? NULL
// * NULL
// ! NULL
let name02 = null;

if (name02 === undefined) {
  console.info("Hello unfined");
} else if (name02 === null) {
  console.info("Hello null");
} else {
  console.info(`Hello ${name02}`);
}

// Switch STATEMENT
const nilai = "A";

switch (nilai) {
  case "A":
    document.writeln("<p>Wow Anda lulus dengan baik");
    break;
  case "B":
  case "C":
    document.writeln("<p> Anda Lulus");
    break;
  case "D":
    document.writeln("<p>Anda tidak lulus</p>");
    break;
  default:
    document.writeln("<p>Mungkin Anda salah jurusan");
}

//typeof
let data = {};
if (typeof data === "number") {
  console.info("number");
} else if (typeof data === "string") {
  console.info("String");
} else if (typeof data === "boolean") {
  console.info("Boolean");
} else if (typeof data === "object") {
  console.info("Object");
} else {
  console.info("Data Kosong");
}

//In operator
const person1 = {
  firstname: "Hasyim",
  lastname: "Asyari",
};

const result01 = "firstname" in person1;
document.writeln(`<p>Adakah firstname di person1 ? ${result01}`);

console.log(object);
