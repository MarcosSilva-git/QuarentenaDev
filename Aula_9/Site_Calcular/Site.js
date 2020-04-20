function calcular () {
    distancia = inputDistancia.value
    tempMin = inputTempo.value
    valorCorrida = 2 + distancia * 1.4 + tempMin * 0.26 
    botaoCalcular.innerHTML = "Sua corrida deu: R$" + valor(valorCorrida)
}

function valor (n) {
    return n.toFixed(2).replace('.',',')
}