valorInicial = 2
distancia = prompt("Qual foi a distância da corida? (Km)")
tempoMin = prompt("Quanto tempo essa corrida demorou? (m)")
valorCorrida = valorInicial + (distancia * 1.40) + (tempoMin * 0.26)
document.getElementById("ValorDaCorrida").innerHTML = "R$" + valorCorrida.toFixed(2)