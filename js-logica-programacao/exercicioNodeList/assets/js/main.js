const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p"); // se comporta como array , mas não é

const estiloBody = getComputedStyle(document.body);
const backgroudColorBody = estiloBody.backgroundColor;
console.log(backgroudColorBody)

for (let p of ps) {
  p.style.backgroundColor = backgroudColorBody
  p.style.color = 'white'
}
