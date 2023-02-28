function enviarPeso() {
    var pesoA = document.getElementById('peso').value;

    console.log(pesoA)

    if (pesoA >= 101) {
        alert('Peso Cadastrado')
    } else {
        alert('Não Foi Possivel Cadastrar')
    }   
}