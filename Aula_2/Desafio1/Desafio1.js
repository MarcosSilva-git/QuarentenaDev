altu = prompt("Qual é a sua altura? ")
peso = prompt("Qual é o seu peso? (KG)")
IMC = peso / (altu * altu)

if (IMC <= 17) {
    document.write('Muito abaixo do peso')
} else if (IMC < 18.49) {
    document.write('Abaixo do peso')
} else if (IMC < 14.99) {
    document.write('Peso normal')
} else if (IMC < 29.99) {
    document.write('Acima do peso')
} else if (IMC < 34.99) {
    document.write('Obesidade')
} else {
    document.write('Obesidade mórbida')
}