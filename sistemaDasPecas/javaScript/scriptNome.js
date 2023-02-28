function enviarCaractere() {
    var nomeA = document.getElementById('nome').value;

    console.log(nomeA)

    if (nomeA.length >= 3) {
        alert('Nome Cadastrado')
    } else {
        alert('Não Foi Possivel Cadastrar')
    }   
}   