import { Router } from 'express'
import { Main } from '../classes/Main.js'

const router = Router()

const main = new Main()

router.get("/contratos-count", main.contarContratos)

export default router