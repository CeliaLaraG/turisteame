'use strict'
const express = require('express')
const router = express.Router()
const slugify = require('slugify')
const articleModel = require('../models/ArticleModel')
const authMiddleware = require('../modules/authenticator') //conecta con el middleware que nos permite limitar o dar acceso a áreas del proyecto



router.route('/articles')
  .get(async (req, res) => {
    try{
      const filterParams = {}
      // if(!req.tokenData || req.tokenData.profile === 'user') {
      //   filterParams.enabled = true
      // } IMPLEMENTAR CUANDO TENGAMOS LOS USARIOS Y LOS ADMIN. SI NO SE IMPLEMENTA ESO ESTA PARTE DEL CÓDIGO SOBRA
      const articleList = await articleModel.find(filterParams).sort({published_at: 'DESC', title: 'ASC'}).exec()
      res.json(articleList)

    }catch(error){
      res.status(500).json({message: error.message})
    }

  })
  .post(async (req,res) => {
    try{
    let newArticle = req.body

    if(!newArticle.hasOwnProperty("slug") ||(newArticle.hasOwnProperty("slug") && newArticle.slug === '')){
      newArticle.slug = newArticle.title
    } //esto determina que si no tiene slug definido tomará como referencia el titulo para crear el slug

    newArticle.slug = slugify(newArticle.slug, {lower: true, strict: true}) //se generará en lowercase

    newArticle = await new articleModel(newArticle).save()

    res.status(201).json(newArticle)

    }catch(error){
      res.status(500).json({message: error.message})
    }
  })

router.route('/articles/:articleSlug')
  .get(async (req,res) => {
    try{
      const articleSlug = req.paramsarticleSlug
      const filterParams = {slug: articleSlug}

      if(!req.tokenData || req.tokenData.profile === 'user'){
        filterParams.enabled = true
      }

      const foundArticle = await articleModel.findOne(filterParams).exec()

      if(!foundArticle){
        res.status(404).json({message: `Artículo con ruta ${articleSlug} no encontrado.`})
        return
      }

      res.json(foundArticle)
    } catch(error){
      res.status(500).json({message: error.message})
    }
  })


//A IMPLEMENTAR TODAVÍA
router.route('/articles/:articleSlug/:commentId')
  .get((req,res) => {

  })
  .post((req,res) => {

  })

router.route('articles/:articleSlug/:vote')
  .post((req,res) => {

  })



  module.exports = router
