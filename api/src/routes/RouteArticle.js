const { Router } = require('express');
const {
   testFunction,
   createArticle,
   getAllArticles,
   detailArticle,
   getAticleByName,
   createArticleUserRating,
   
} = require('../Controllers/ArticleControl.js');

const RouteArticle = Router();

// RouteArticle.get('/', getAllArticles); // Trae todos los artículos de la BD
RouteArticle.get('/', getAticleByName);
RouteArticle.post('/create', createArticle);
RouteArticle.get('/:id', detailArticle);
RouteArticle.post('/rating', createArticleUserRating);




module.exports = RouteArticle;