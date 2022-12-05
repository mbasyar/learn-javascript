// belajar else if
let firstname = "irul";
let lastname = "basyar";

console.log(firstname + lastname + " " + "ganteng");
if (firstname === "irull") {
  console.log(lastname);
} else if (firstname === "basyar") {
  console.log("nama kamu irul");
} else {
  console.log("kamu pinterr yeey");
}

// let nama = prompt("hallo siapa nama anda?");
// let jawab = "basyar";

// if (nama === jawab) {
//   alert(`hallo ${jawab} selamat datang `);
// } else if (nama === "irul") {
//   alert("terimaksih sudah mengunjungi website kami");
// }
//belajar else
let a = 300;
let b = 20;
let c = 40;
if (a >= b && a <= c) {
  console.log(a);
} else if (a > b || a > c) {
  console.log("kamu benar bos");
}
//belajar switch case
let bahasa = "java";
let nyapa = null;
switch (bahasa) {
  case "sunda":
    nyapa = "hayang berem";
    break;
  case "java":
    nyapa = "dolan yuhlah";
    break;
  case "batak":
    nyapa = "botakkkbaba";
  default:
    nyapa = "mari salaaman";
}
console.log(nyapa);
console.log(bahasa);
//belajar for loop
