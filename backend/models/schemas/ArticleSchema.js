const {Schema} = require("mongoose")

const ArticleSchema = new Schema({
  title: { type: String, required: true, minlength: 5, maxlength: 100},
  slug: {type: String, required: true, minlength: 5, maxlength: 200, unique: true},
  image: {type: String, required: true},
  excerpt:{type: String, required: true, maxlength: 500},
  content: {type: String, required: true, minlength: 10},
  published_at: {type: Date, default: Date.now},
  category:{type: String, required: true, enum:['Arquitectura', 'Jardines y parques', 'Plazas', 'Monumentos', 'Museos', 'Iglesias y arquitectura religiosa', 'Calles y avenidas']} //REVISAR POR SI FALTA ALGUNA CATEGORÍA EN UN FUTURO

  })

  module.exports = ArticleSchema
