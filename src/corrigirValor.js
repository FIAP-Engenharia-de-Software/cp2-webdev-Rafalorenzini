// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  const numero = Number(valor); // Tenta converter o valor para número
  return isNaN(numero) ? "Valor inválido" : numero; // Retorna "Valor inválido" se a conversão falhar
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };