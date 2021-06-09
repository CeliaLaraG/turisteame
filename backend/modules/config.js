'use strict'

if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  const result = dotenv.config()

  if (result.error) {
    throw result.error
  }

  const envs = result.parsed

  module.exports = envs
}else{
  module.exports = process.env
}
// si estamos en entorno diferente al de producción descarga variables de fichero .env
// si estamos en entorno de producción carga automáticamente variables de entorno (toda la configuración de la app en producción)
