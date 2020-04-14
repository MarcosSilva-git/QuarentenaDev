// Math.floot

function sortear(){
    aleatorio = Math.floor(Math.random()*10)
    console.log(aleatorio)
    numeroSorteado = prompt("Digite seu número da sorte:")
    if(numeroSorteado == aleatorio){
        mensagem.innerHTML = "Você ganhou <br>o Sorteio! <br> Código:<br>"+ Math.round(Math.random()*100000000)
        mensagem.style.color = "green"
    } else if (numeroSorteado < 0 || numeroSorteado > 10) {
        mensagem.innerHTML = "Digite um número <br> de 0 até 10!"
        mensagem.style.color = "yellow"
    } else {
        mensagem.innerHTML = "Não foi <br> dessa vez. <br> Tente Novamente!"
        mensagem.style.color = "red"
    }
}