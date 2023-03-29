function msgTeste () {
 console.log ("funcionou minha função") 
}

msgTeste()

function msgTesteArgumento (param) {
  console.log ("o parâmetro pasado foi: ", 
  param, "e o tipo dele é",
  typeof param)
}

msgTesteArgumento("olá")
msgTesteArgumento("4")

function Soma (n1, n2) {
let result = 0

if (typeof n1 == "Number" && typeof n2 == "number") {
return result = n1 + n2
}
  return result = "Deu bom n"
}

console.log(Soma(4, 7))
console.log(Soma("oi", 7))

const funcaoArrow = () => {
  console.log("isso é uma arrow function!")}
funcaoArrow()

