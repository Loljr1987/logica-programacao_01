alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o número não for igual ao n.S. 
while(chute != numeroSecreto ) {
     chute = prompt('Escolha um número entre 1 e 10');
     // se chute for igual ao número secreto
     if (chute == numeroSecreto) {
         break; 
     } else {
          if (chute > numeroSecreto) {
               alert(`o número secreto é menor que ${chute}`);
          } else {
               alert(`o número secreto é naior que ${chute}`);
          }
          // tentativas = tentativas + 1;
          tentativas++
     }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! Você descobriu o número sercreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// if (tentativas > 1) {
//      alert(`Isso ai! Você descobriu o número sercreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//      alert(`Isso ai! Você descobriu o número sercreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }