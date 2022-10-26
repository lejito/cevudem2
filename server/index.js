import { PORT } from './config.js'
import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"]
}))

app.use(express.json())

app.use(usuariosRoutes)

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT)
console.log(`Server is running on http://localhost:${PORT}`)
