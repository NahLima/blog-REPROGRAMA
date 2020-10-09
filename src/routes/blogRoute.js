const express = require("express");
const router = express.Router();
const controller = require("../controller/blogController")
const cors = require("cors")



/**
@route GET postagens
@desc Retorna todas as postagens
@access Public 
@endpoint http://localhost:3000/postings
**/

router.get('/postings', cors(),controller.getAllPosts);

//-------------------------------------------------------------------------

/**
@route POST postagem nova
@desc Cria uma nova postagem
@access Public 
@endpoint http://localhost:3000//newpost
**/

router.post('/newpost', cors(),controller.createNewPost);

//----------------------------------------------------------------------------------------------------------------------

/**
@route delete
@desc Apaga uma postagem através do seu id
@access Public 
@endpoint http://localhost:3000/postings/id
**/

router.delete('/postings/:id', cors(),controller.deleteById);



module.exports = router;
