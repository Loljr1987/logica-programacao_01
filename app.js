alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('Escolha um número entre 1 e 10');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
     alert(`Isso ai! Você descobriu o número sercreto ${numeroSecreto}`);
} else {
     if (chute > numeroSecreto) {
          alert(`o número secreto é menor que ${chute}`);
     } else {
          alert()
     }
}