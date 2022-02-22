// document.writeln("<p>Hello bwang!</p>");
// document.writeln("<p>Ini lagi bwang");
// document.writeln(100)
// document.writeln(100.100)
// document.writeln("Seratus")
// document.writeln("<textarea cols='100' rows='10'>")
// document.writeln("Nama \t: "+"hasyim")
// document.writeln("Jabatan \t: "+"Pendidik")
// document.writeln("</textarea>")

var nama="Nama saya"
var namalengkap="Hasyim" + "asyari"
document.writeln(nama + namalengkap)

let varbaru = "ini menggunakan let"
document.writeln(varbaru)

const newconst = "<p>variabel ini tidak akan bisa di ubah!"
document.writeln(newconst)

//Operator aritmatika
// + - / * ** %
let result = 1+2;
document.writeln("<p>Hasil dari 1 + 2 = "+result)

let _result = result ** result
document.writeln(_result)

let result1= 5 == "5"
document.writeln("<p> Apakah 5 sama dengan 5? " + result1)

//Operator pembanding && || !
const nilaiUjian = 70
const nilaiAbsensi = 70

const luluUjian = nilaiUjian > 75
const lulusAbsensi = nilaiAbsensi > 75

const lulus = luluUjian && lulusAbsensi
document.writeln("<p>" + lulus + "</p>")

//Console
//console.info()
//console.warn()
//console.error()
//console.table()
console.debug("ini debug")
console.info("ini info")
console.warn("ini peringatan")
console.error("ini error")