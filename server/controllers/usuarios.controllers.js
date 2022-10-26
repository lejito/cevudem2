import { Main } from '../classes/Main.js'
import { Usuario } from '../classes/Usuario.js'

const main = new Main()

export const buscarUsuarios = async (req, res) => {
    const respuesta = await main.buscarUsuarios()

    if (respuesta === true) {
        res.json(main.usuarios)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuarios no encontrados" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const buscarUsuario = async (req, res) => {
    const usuario = new Usuario(req.params)
    const respuesta = await usuario.buscar()

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no encontrado" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const insertarUsuario = async (req, res) => {
    const usuario = new Usuario(req.body)
    const respuesta = await usuario.insertar()

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no insertado" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const actualizarUsuario = async (req, res) => {
    const usuario = new Usuario(req.body)
    const respuesta = await usuario.actualizar(req.params.documento)

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no actualizado" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const actualizarUsuarioDatosDocumento = async (req, res) => {
    const usuario = new Usuario(req.body)
    const respuesta = await usuario.actualizarDatosDocumento(req.params.documento)

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no actualizado (datos documento)" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const actualizarUsuarioDatosPersonales = async (req, res) => {
    const usuario = new Usuario(req.body)
    const respuesta = await usuario.actualizarDatosPersonales(req.params.documento)

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no actualizado (datos personales)" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const actualizarUsuarioDatosSeguridad = async (req, res) => {
    const usuario = new Usuario(req.body)
    const respuesta = await usuario.actualizarDatosSeguridad(req.params.documento)

    if (respuesta === true) {
        res.json(usuario)
    }
    else if (respuesta === false) {
        res.status(404).json({ error: "Usuario no actualizado (datos seguridad)" })
    }
    else {
        res.status(500).json({ error: respuesta.message })
    }
}

export const verificarUsuario = async (req, res) => {
    try {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.verificar()

        if (respuesta.length === 3) {
            res.json(respuesta)
        }
        else {
            res.json({ error: respuesta.message })
        }
    }
    catch (error) {
        res.json({ error: error.message })
    }
}