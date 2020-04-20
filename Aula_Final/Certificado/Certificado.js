function gerar() {
    nome = inputNome.value
    contador = 1000000
    while (contador > 0){
        htmlCertificado = emitirCertificado(nome)
        contador = contador - 1
    }

    listaLink = [
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_Final',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_9',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_7',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_6',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_5',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_4',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_3',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_1',
    ]

    atividade = [
        'Aula10 - Certificado.',
        'Aula9 - Inputs e Cálculos da Uber (completo).',
        'Aula8 - Like, Números Aleatórios, Pares, Contagem e Olimpíadas.',
        'Aula7 - Pequena Validação de <br>Dados.',
        'Aula6 - Ficha e Meses do Ano.', 
        'Aula5 - Pokebola, Layout, <br>Calculadora e Currículo.',
        'Aula4 - Calculo do Uber.',
        'Aula3 - Cálculo da Gasolina e <br>Quebra da Linha.',
        'Aula2 - Idade Atual, IMC e Média.',
        'Aula1 - Área da Circunferência, <br>Compras e Batimento Cardíaco.',        
    ]

    listaDeLi = ""
    contador = 0
    while (contador < 10){
        link = listaLink[contador]
        listaDeLi = `<li><a target="blank" href=${link}>${atividade[contador]}</a></li>`+listaDeLi
        contador += 1

    }

    document.body.innerHTML =
    `${htmlCertificado}
    <ol>
        ${listaDeLi}
    </ol>
    `
    
}

