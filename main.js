// Função para validar os campos
function validarCampos() {
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert("Campo B é maior que o Campo A. Validação bem-sucedida!");
        return true; // Permite o envio do formulário
    } else if (campoA > campoB) {
        alert("Campo A é maior que o Campo B. Validação bem-sucedida!");
        return true; // Permite o envio do formulário
    } else {
        alert("Os campos têm o mesmo valor. Por favor, insira valores diferentes.");
        return false; // Impede o envio do formulário
    }
}
