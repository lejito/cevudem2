import { Router } from 'express'
import {
    buscarUsuarios,
    buscarUsuario,
    insertarUsuario,
    actualizarUsuario,
    actualizarUsuarioDatosDocumento,
    actualizarUsuarioDatosPersonales,
    actualizarUsuarioDatosSeguridad,
    verificarUsuario
} from '../controllers/usuarios.controllers.js'

const router = Router()

router.get("/usuarios", buscarUsuarios)

router.get("/usuarios/:documento", buscarUsuario)

router.post("/usuarios", insertarUsuario)

router.put("/usuarios/:documento", actualizarUsuario)

router.put("/usuarios-doc/:documento", actualizarUsuarioDatosDocumento)

router.put("/usuarios-per/:documento", actualizarUsuarioDatosPersonales)

router.put("/usuarios-seg/:documento", actualizarUsuarioDatosSeguridad)

router.get("/usuarios-ver/", verificarUsuario)

export default router