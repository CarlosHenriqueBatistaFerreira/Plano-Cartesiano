//Crie um programa que leia dois números x e y indefinidamente até que um deles seja zero. Esses pontos devem representar a localização no plano cartesiano. E o programa deve imprimir em qual quadrante o ponto se encontra.


const prompt = require('prompt-sync')();
let x = 1;
let y = 1;
while (x != 0 && y != 0) {
  x = parseInt(prompt("Digite o valor de x: "));
  y = parseInt(prompt("Digite o valor de y: "));
  if (x > 0 && y > 0) {
    console.log("O ponto está no primeiro quadrante.");
  } else if (x < 0 && y > 0) {
    console.log("O ponto está no segundo quadrante.");
  } else if (x < 0 && y < 0) {
    console.log("O ponto está no terceiro quadrante.");
  } else if (x > 0 && y < 0) {
    console.log("O ponto está no quarto quadrante.");
  } else if (x === 0 || y === 0) {
    console.log("O ponto está sobre um dos eixos.");
  }
}
