/*1o exercício
Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve
extender uma segunda classe chamada "Usuario".
A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los
em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve
repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como
true na classe.
Agora com suas classes formatadas, adicione um método na classe Usuario chamado isAdmin que
retorna se o usuário é administrador ou não baseado na propriedade admin ser true ou não.
const User0 = new Usuario('email@teste.com', 'senha123');
const Adm0 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true */

class Usuario{
    constructor(email, senha){
        this.email =  email;
        this.senha = senha;
        this.admin = false;
    }

    isAdmin(){
        return this.admin;
    }
}

class Admin extends Usuario{
    constructor(){
        super();
        super.admin = true;
    }
}

const user0  = new Usuario('usuario@teste.com', '12345');
const admin0 = new Admin('admin@teste.com', '54321');

console.log("1");
console.log(user0.isAdmin());
console.log(admin0.isAdmin());


/* 2o exercício
A partir do seguinte vetor e utilizando os métodos de array (map, reduce, filter e find):
const usuarios = [
{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
{ nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];
2.1 Utilizando o map
Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
2.2 Utilizando o filter
Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
2.3 Utilizando o find
Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
2.4 Unindo operaçõesMultiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
no máximo 50 anos:
// Resultado:
[
{ nome: 'Diego', idade: 46, empresa: 'Rocketseat' },
{ nome: 'Gabriel', idade: 30, empresa: 'Rocketseat' },
] */

const usuarios = [
    { nome: 'João', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Maria', idade: 15, empresa: 'Rocketseat' },
    { nome: 'José', idade: 30, empresa: 'Facebook' },
];

//map
const idades = usuarios.map(user => user.idade);
console.log('2.1')
console.log(idades);

//filter
const maiores = usuarios.filter(user => (user.empresa === 'Rocketseat' && user.idade > 18));
console.log('2.2')
console.log(maiores);

//find
const google = usuarios.find(user => user.empresa === 'Google')
console.log('2.3')
console.log(google);

//unindo op
const por2 = usuarios.map(function(user){
   return {
        nome: user.nome,
        idade: user.idade * 2,
        empresa: user.empresa,
    };
});

const filter = por2.filter(user => user.idade < 50)
console.log('2.3');
console.log(filter);

/* 3o exercício
Converta as funções nos seguintes trechos de código em Arrow Functions:
 */


// 3.1
/* const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
return item + 10;
}); */
const arr = [1, 2, 3, 4, 5];
const ret = arr.map(item => item + 10);
console.log('3.1');
console.log(ret);


/* // 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
return usuario.idade;
}
mostraIdade(usuario);
 */

const usu = { nome: 'Maria', idade: 23 };
const mostra_idade = (user) => (user.idade);
console.log('3.2')
console.log(mostra_idade(usu));


/* // 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);
 */

 const name = 'Maria';
 const age  = 27;

const show_user = (name = 'João', age = '25') => ({name, age});
console.log('3.3');
console.log(show_user(name, age));
console.log(show_user(name));


/* // 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
})
} */

//?
const promise = (res, rej) => new Promise(res);

/* 4o exercício
4.1 Desestruturação simples
A partir do seguinte objeto:
const empresa = {
nome: 'Rocketseat',
endereco: {
cidade: 'Rio do Sul',
estado: 'SC',
}
};
Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no
fim deve ser possível fazer o seguinte:
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
 */

 const empresa = {
     nome: 'TestAr',
     endereco: {
         cidade: 'Rio Grande',
         estado: 'RS',
     },
 };

 const {nome, endereco:{cidade, estado}} = empresa;
 console.log('4.1');
 console.log(nome);
 console.log(cidade);
 console.log(estado);

/*  4.2 Desestruturação em parâmetros
 Na seguinte função:
 function mostraInfo(usuario) {
 return `${usuario.nome} tem ${usuario.idade} anos.`;
 }
 mostraInfo({ nome: 'Diego', idade: 23 })
 Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário
 separadamente e a função poder retornar apenas:
 return `${nome} tem ${idade} anos.`; */

 function mostra_info({nome, idade}){
     return `${nome} tem ${idade} anos.`;
 }

console.log('4.2');
console.log(mostra_info(usu));

/* 5o Exercício
Utilizando o operador de rest/spread ( ... ) realize as seguintes operações:
5.1 Rest
A partir do array: const arr = [1, 2, 3, 4, 5, 6] , defina uma variável x que recebe a primeira
posição do vetor e outra variável y que recebe todo restante dos dados.
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:
// function soma...
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3 */

const arr0 = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr0;
console.log('5.1');
console.log(x);
console.log(y);

function soma(...params){
    return params.reduce((item, prox) => item + prox);
}
console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

/* 5.2 Spread
A partir do objeto e utilizando o operador spread:
const usuario = {
nome: 'Diego',
idade: 23,
endereco: {
cidade: 'Rio do Sul',
uf: 'SC',
pais: 'Brasil',
}
};
Crie uma variável usuario2 que contenha todos os dados do usuário porém com nome Gabriel .
Crie uma variável usuario3 que contenha todos os dados do usuário porém com cidade Lontras . */

const user1 = {
    nome: 'João',
    idade: 33,
    endereco: {
        cidade: 'Rio Grande',
        uf: 'RS',
        pais: 'Brasil',
    },
};

const user2 = {...user1, nome: 'Gabriel'};
const user3 = {...user1, endereco:{...user1.endereco, cidade: 'Lontras'}};
console.log('5.2');
console.log(user1);
console.log(user2);
console.log(user3);

/* 6o Exercício
Converta o seguinte trecho de código utilizando Template Literals:
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos'); */

const tl = (`Meu nome é ${name} e tenho ${age} anos.`);
console.log('6');
console.log(tl);

/* 7o exercício
Utilize a sintaxe curta de objetos (Object Short Syntax) no seguinte objeto:const nome = 'Diego';
const idade = 23;
const usuario = {
nome: nome,
idade: idade,
cidade: 'Rio do Sul',
}; */
const obj7o = {
    name: name,
    age: age,
    city: 'New York',
};
console.log('7');
console.log(obj7o);



