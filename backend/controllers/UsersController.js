'use strict'

const express = require('express');
const { sha512 } = require('js-sha512');
const router = express.Router()
const config = require('../modules/config')
//todavia no he añadido limitaciones por permisos. contemplarlo esta tarde o mañana a mucho tardar
const userModel = require('../models/UserModel')



router.route('/users') //el acceso al listado de usuarios, si finalmente se implementa, evidentemente solo tendrá acceso el admin.
  .get(async (req,res) => {
    try{
      const limit = req.query.hasOwnProperty('limit') ? parseInt(req.query.limit) : 20
      let userList = await userModel.find().sort({firstname: 'ASC', lastname: 'ASC'}).limit(limit).exec()
      userList = userList.map((user) =>{
        user = user.toJSON()
        delete user.password

        return user
      })
      res.json(userList)
    }catch(error){
      res.status(500).json({message: error.message})
    }

  })
  .post(async (req,res) => { //esto es público, cualquier persona debe tener aceso para registrarse
    let userData = req.body //los datos del usuario se obtienen del request dentro del body.
    try{
      userData.profile = "user"
      userData.password = sha512(userData.password) //encripta la contraseña del usuario
      userData = await new userModel(userData).save()
      userData = userData.toJSON()
      delete userData.password // despues de registrar y permitir acceso al usuario se elimina la contraseña del fichero json para proteger al usuario.
      res.status(201).json(userData) //si todo va bien en postman y en mongodb se debería registrar el nuevo usuario con el status 201 (correcto y creado)
    }catch(error){
      res.status(400).json({message: error.message})
    }
  })

router.route('/users/:userId')
  .get(async (req, res) =>{
    try{
      const userId = req.params.userId

      if(userId !== req.tokenData._id && req.tokenData.profile === 'user'){
        res.status(404).json({message: `Usuario con identificador ${userId} no encontrado.`})
      }

      let foundUser = await userModel.findById(userId).exec() //variable para encontrar el id de un usuario con función findById por si no era suficientemente obvio.
      if(!foundUser) {
         res.status(404).json({message: `Usuario con identificador ${userId} no encontrado.`})
         return //se corta la función si llegados a este punto no se encuentra el usuario. EARLY RETURN
       }

      foundUser = foundUser.toJSON()
      delete foundUser.password // si se encuentra el usuario se mostrará pero eliminando la contraseña
      res.json(foundUser)

    }catch(error){
      res.status(500).json({message: error.message})
    }
  })
  .delete( async(req,res) =>{
    try{
      const userId = req.params.userId
      if( userId !== req.tokenData._id && req.tokenData.profile === 'user'){
        res.status(404).json({message: `Usuario con identificador ${userId} no encontrado.`})
        return
      }
      let foundUser = await userModel.findOneAndDelete({ _id: userId }).exec()
      if(!foundUser){
        res.status(404).json({message: `Usuario con identificador ${userId} no encontrado.`})
        return
      }
      res.status(204).json(null)// esto te devuelve status 204 que significa correcto pero sin contenido, es decir, que se elimina correctamente y te debería deolver array vacío.
    }catch(error){
      res.status(500).json({message: error.message})
      }
  })


module.exports = router
