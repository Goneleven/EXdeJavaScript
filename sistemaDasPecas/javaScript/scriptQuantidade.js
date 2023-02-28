function enviarQuantidade() {
    var quantidadeA = document.getElementById('quantidade').value;

    console.log(quantidadeA)

    if (quantidadeA >= 11) {
        alert('Capacidade INSUFICIENTE')
    } else {
        alert('Quantidade Permitida!')
    }   
}