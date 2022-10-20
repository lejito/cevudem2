import express from 'express'
import { PORT } from './config.js'

import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()
app.use(express.json())

app.use(usuariosRoutes)

app.listen(PORT)
console.log(`Server is running on http://localhost:${PORT}`)
