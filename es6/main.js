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