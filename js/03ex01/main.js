//promise para validar idade
function valida_idade() {
    var idade = document.querySelector('input').value;

    return new Promise(function (resolve, reject) {
        if (idade >= 18) {
            resolve('Tem 18 anos ou mais!');
        } else {
            reject('Tem menos que 18...')
        }
    });
}

//promise para demonstrar resultado da avaliação da promise anterior
function mostra_resultado() {
    valida_idade()
        .then(function (response) {
            alert(response);
        })
        .catch(function (error) {
            alert(error);
        })
}

var botao = document.querySelector('button');
botao.onclick = function(){
    mostra_resultado();
    var entrada = document.querySelector('input');
    entrada.value = "";
}
