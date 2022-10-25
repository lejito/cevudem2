import { PORT } from './config.js'
import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors({
<<<<<<< HEAD
    origin: "http://127.0.0.1:5173"
=======
    origin: "http://localhost:5173"
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
}))

app.use(express.json())

app.use(usuariosRoutes)

app.use(express.static(join(__dirname, '../client/dist')))

app.listen(PORT)
console.log(`Server is running on http://localhost:${PORT}`)
