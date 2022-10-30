import { Router } from 'express'
import { Main } from '../classes/Main.js'

const router = Router()

const main = new Main()

router.get("/solicitudes-count", main.contarSolicitudes)

export default router