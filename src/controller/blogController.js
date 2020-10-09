
const posts = require("../model/blogModel")
const helper = require("../helper/blogHelper")

const getAllPosts = (request, response) => {
    console.log(request.url)
    response.status(200).send(posts)
}

const createNewPost = (request, response) => {
    console.log(request.url)
    body = request.body

    if(typeof body.titulo == 'undefined' || typeof body.conteudo == 'undefined')
        return response.status(201).send("Erro 201")

    newPost = {
        id: helper.obterNovoValor(posts),
        titulo: body.titulo,
        conteudo: body.conteudo,
        dataCriacao: helper.novaData(),
        tags: body.tags
    }

    posts.push(newPost)

    return response.status(200).json(newPost)
}





const deleteById = (request, response) =>{
    const { id } = request.params;
 
  posts.filter(post => post.id != id);
 
   //if(!tarefa) resposta.status(404).json({ mensagem: " tarefa não foi excluída"})
 
    //resposta.(204)({ mensagem: "Tarefa deletada com sucesso!"})
    response.json({ mensagem: "Tarefa deletada com sucesso!"})
}

 

module.exports ={
    getAllPosts,
    createNewPost,
    deleteById
}