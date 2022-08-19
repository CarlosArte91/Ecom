const { Router } = require('express');
const { testFunction,
   createArticle,
   getAllArticles,
   detailArticle,
   getAticleByName, 
   putDeleteArticle,
   deleteArticle
   } = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

// RouteArticle.get('/', getAllArticles); // Trae todos los artículos de la BD
RouteArticle.get('/', getAticleByName);
RouteArticle.post('/', createArticle);
RouteArticle.put('/:id', putDeleteArticle);
RouteArticle.delete('/:id', deleteArticle);
RouteArticle.get('/:id', detailArticle);




module.exports = RouteArticle;