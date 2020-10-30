function buscar_repositorio() {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        
        //montar url
        let usuario = document.querySelector('input').value;
        let url = 'https://api.github.com/users/'+ usuario + '/repos';
        console.log(url);
        
        //acessar
        xhr.open('GET', url);
        xhr.send(null);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

function mostrar_resultado(){
    buscar_repositorio()
        .then(function (response){
            
            listar_repositorios(response);
        })
        .catch (function (error){

            console.log(error);
            alert("Erro ao buscar nome de usuário!")

        });
}

function listar_repositorios(response){
    var lista = document.createElement('ul');
    response.forEach(repo => {
        var item = document.createElement('li');
        var txt = document.createTextNode(repo.name);
        item.appendChild(txt);
        lista.appendChild(item);
    })
    document.querySelector('#app').appendChild(lista);
}

function apagar_lista(){

    var doc = document.querySelector('#app');
    var lista = document.querySelector('ul');
    if (lista){
        doc.removeChild(lista);
    }
}

var botao = document.querySelector('button');
botao.onclick = function(){

    apagar_lista();

    let doc = document.querySelector('#app');
    let inp = document.querySelector('input');
    mostrar_resultado();
    inp.value = "";   
}