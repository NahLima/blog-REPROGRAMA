const helper = require('../helper/blogHelper');

const allPosting = [

    {
        id: 1,
        dataCriacao: new Date().toString(), // transforma a data numa string
        titulo: "Tenho 31 anos e estou em transição de carreira",
        conteudo: "Perguntas e respostas para quem deseja mudar de profissão",
        tags: ["carreira","vidaProfissional","woman", "tecnologia"]
    },

    {
        id: 2,
        dataCriacao: new Date().toString(),
        titulo: "Como é trabalhar em um ambiente masculino",
        conteudo: "Apesar de estarmos em pleno século XXI muitas mulheres ainda encontram dificuldades para entrar em ambientes onde homens predominam",
        tags: ["mulheres","mercadoDeTrabalho","code"]
    },

    {
        id: 3,
        dataCriacao: new Date().toString(),
        titulo: "O que é o NPM ",
        conteudo: "NPM é um gerenciador de pacotes para a linguagem de programação JavaScript. npm, Inc. é uma subsidiária do GitHub, uma corporação multinacional americana que fornece hospedagem para desenvolvimento de software e controle de versão com o uso do Git",
        tags: ["javascript","biblioteca","frameworks", "npm"]
    }
]



module.exports = allPosting;