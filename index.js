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
  case "jawa":
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

for (let i = 10; i < 20; i++) {
  console.log(i);
}
