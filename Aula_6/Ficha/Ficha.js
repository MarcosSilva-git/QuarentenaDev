nome = prompt("Informe o seu nome: ")

nascimento = prompt("Informe sua data de Nascimento: ")

condicaoMedica = confirm("Tem condição Pré-existente?")

if(condicaoMedica){
    condicaoMedica = "Sim"
} else {
    condicaoMedica = "Não"
}

Nome_Completo.innerHTML = "Nome: "+ nome
ficha.innerHTML = 
    `<li>Data de Nascimento: ${nascimento} </li>
    <li>Idade: 17 anos</li>
    <li>Tem condição pré-existente: ${condicaoMedica}</li>
    <li>Precisa de acompanhamento médico: </li>`