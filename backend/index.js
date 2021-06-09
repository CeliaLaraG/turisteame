'use strict'
const config = require ('./modules/config')
const app = require('./app')
const PORT = config.PORT || 8080

app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))
