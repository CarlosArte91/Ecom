const axios = require('axios');
const { Op } = require("sequelize");
const { Article } = require('../db');
const { Category } = require('../db');
const {
  API_URL, API_URL_ID, API_URL_NAME, API_URL_TIPO, IMG_DEFAULT
} = process.env;

//TEST DE FUNCIONAMIENTO
const testFunction = (req, res, next) => {
  try {
    return res.send('Ecom Article funcionando!');
  } catch (error) {
    next(error);
  };
};

//CARGA DB
const getAllToDB = (req, res, next) => {
  try {
    return res.send('Ecom Article funcionando!');
  } catch (error) {
    next(error);
  };
};


//GET
const getArticle = async () => {

  // const apiDato = await axios.get('http://localhost:3002/article');
  let apiDB = await Article.findAll({
    include: {
      model: Category,
      attributes: ["name"],
      through: { attributes:{exlude:[disablegit=true]}  }
    }
  });

  apiDB = apiDB.map(el => {
    return {
      id: el.id,
      title: el.title,
      rating: el.rating,
      detail: el.detail.detail,
      marca: el.detail.marca,
      modelo: el.detail.modelo,
      so: el.detail.so,
      cpu: el.detail.cpu,
      ram: el.detail.ram,
      color: el.detail.color,
      pantalla: el.detail.pantalla,
      image: el.image,
      stock: el.stock,
      disable: el.disable,
      price: el.price,
      conectividad: el.conectividad,
      category: el.categories[0].name,
    }
  })
  return (apiDB);
};

// GET DETAIL ARTICLE BY ID
const detailArticle = async (req, res, next) => {
  const { id } = req.params;
  // console.log(typeof (id))
  try {
    const articleFound = await Article.findByPk(id, {
      include: Category
    });
    articleFound ?
      res.status(200).send(articleFound.dataValues) :
      res.status(404).send('No existe Articulo con ese Id!'); // Status 404 cuando el recurso no existe
  } catch (error) {
    next(error);
  };
};

// CREATE ARTICLE 
const createArticle = async (req, res, next) => {
  try {
    const artcleToCreate = req.body;
    const newArticle = await Article.create(artcleToCreate);
    res.send(newArticle);
  } catch (error) {
    next(error);
  };
};

// GET ARTICLE WITH STRING INCLUDED
const getAticleByName = async (req, res, next) => {
  const { title } = req.query;
  try {
    let getNameTotal = await getArticle();
    if (title) {
      let articleName = await getNameTotal.filter(n => n.title.toLowerCase().includes(title.toLowerCase()));
      articleName.length
        ? res.status(200).send(articleName) :
        res.status(400).send('No Existe el Articulo');
    }
    else {
      res.status(200).send(getNameTotal);
    }
  } catch (error) {
    next(error);
  };
};

const putDeleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {disable}=req.body

     await Article.update(
      {disable},
      {
      where:{id}
    })
      
      res.send("cambio actualizado")
      
  } catch (error) {
    next(error)
  }
}
async function deleteArticle(req, res,next){
  try {
    const id = req.params.id;
    const disable = req.body;
    let destro = await Article.update(
      {disable},
      {
        where:{id}
      }
      )
      res.status(200).send("eliminado")
    
  } catch (error) {
    next(error);
  }
};


module.exports = { testFunction, 
  createArticle, 
  getArticle, 
  detailArticle, 
  getAticleByName,
  putDeleteArticle,
  deleteArticle };