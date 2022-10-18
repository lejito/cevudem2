import { Router } from 'express'
import {
    buscarUsuarios,
    buscarUsuario,
    insertarUsuario,
    actualizarUsuario,
    actualizarUsuarioDatosDocumento,
    actualizarUsuarioDatosPersonales,
    actualizarUsuarioDatosSeguridad,
} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get("/usuarios", buscarUsuarios)

router.get("/usuarios/:documento", buscarUsuario)

router.post("/usuarios", insertarUsuario)

router.put("/usuarios/:documento", actualizarUsuario)

router.put("/usuarios/d/:documento", actualizarUsuarioDatosDocumento)

router.put("/usuarios/p/:documento", actualizarUsuarioDatosPersonales)

router.put("/usuarios/s/:documento", actualizarUsuarioDatosSeguridad)

export default router