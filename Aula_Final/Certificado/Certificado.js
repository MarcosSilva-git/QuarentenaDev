function gerar() {
    nome = inputNome.value
    contador = 1000000
    while (contador > 0){
        htmlCertificado = emitirCertificado(nome)
        contador = contador - 1
    }

    listaLink = [
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_Final/Certificado',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_9/Site_Calcular',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_9/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Likes_Ilimitados',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Likes_Limitados',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Desafio4',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Desafio3',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Desafio2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_8/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_7/Desafios',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_6/Ficha',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_6/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_5/Pokebola',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_5/Desafio2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_5/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_5/Curr%C3%ADculo',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_4/Desafio%20%C3%9Anico',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_3/Desafio2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_3/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_2/Desafio3',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_2/Desafio2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_2/Desafio1',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_1/Desafio_4',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_1/Desafio_3',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_1/Desafio_2',
        'https://github.com/MarcosSilva-git/QuarentenaDev/tree/master/Aula_1/Desafio_1',

    ]

    atividade = [
        'Aula10/Certificado',
        'Aula9/Calculo do Uber (completo)',
        'Aula9/Inputs no HTML',
        'Aula8/Likes Ilimitados',
        'Aula8/Likes Limitados',
        'Aula8/Números aleatórios',
        'Aula8/Contagem Pares',
        'Aula8/Contagem até 500',
        'Aula8/Quantidade de Olimpíadas',
        'Aula7/Pequena Validação de Dados',
        'Aula6/Ficha',
        'Aula6/Meses do Ano',
        'Aula5/Pokebola Com CSS',
        'Aula5/Layout Reproduzido',
        'Aula5/Estilizando a Calculadora',
        'Aula5/Currículo',
        'Aula4/Calculo do Uber',
        'Aula3/Calculo da Gasolina',
        'Aula3/Quebra de Linha',
        'Aula2/Idade Atual',
        'Aula2/IMC (completo)',
        'Aula2/Média de Idade',
        'Aula1/Área da Circunferência',
        'Aula1/Balas Compradas',
        'Aula1/Galinhas Compradas',
        'Aula1/Batimentos Cardíacos',
        
    ]

    listaDeLi = ""
    contador = 0
    while (contador < 10){
        link = listaLink[contador]
        listaDeLi = `<li><a href=${link}>${atividade[contador]}</a></li>`+listaDeLi
        contador += 1

    }

    document.body.innerHTML =
    `${htmlCertificado}
    <ol>
        ${listaDeLi}
    </ol>
    `
    
}

