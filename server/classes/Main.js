import { Usuario } from './Usuario.js'
import { Persona } from './Persona.js'

export class Main {
    //#region Usuarios
    async buscarUsuarios(req, res) {
        const respuesta = await Usuario.buscarTodos()

        if (respuesta) {
            res.json(respuesta)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuarios no encontrados" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async buscarUsuario(req, res) {
        const usuario = new Usuario(req.params)
        const respuesta = await usuario.buscar()

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no encontrado" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async insertarUsuario(req, res) {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.insertar()

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no insertado" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async actualizarUsuario(req, res) {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.actualizar(req.params.documento)

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no actualizado" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async actualizarUsuarioDocumento(req, res) {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.actualizarDocumento(req.params.documento)

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no actualizado (datos documento)" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async actualizarUsuarioPersonales(req, res) {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.actualizarPersonales(req.params.documento)

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no actualizado (datos personales)" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async actualizarUsuarioClave(req, res) {
        const usuario = new Usuario(req.body)
        const respuesta = await usuario.actualizarClave(req.params.documento)

        if (respuesta === true) {
            res.json(usuario)
        }
        else if (respuesta === false) {
            res.json({ error: "Usuario no actualizado (datos seguridad)" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async verificarUsuario(req, res) {
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
    //#endregion

    //#region Personas
    async buscarPersonas(req, res) {
        const respuesta = await Persona.buscarTodas()

        if (respuesta) {
            res.json(respuesta)
        }
        else if (respuesta === false) {
            res.json({ error: "Personas no encontradas" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async buscarPersona(req, res) {
        const persona = new Persona(req.params)
        const respuesta = await persona.buscar()

        if (respuesta === true) {
            res.json(persona)
        }
        else if (respuesta === false) {
            res.json({ error: "Persona no encontrada" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async insertarPersona(req, res) {
        const persona = new Persona(req.body)
        const respuesta = await persona.insertar()

        if (respuesta === true) {
            res.json(persona)
        }
        else if (respuesta === false) {
            res.json({ error: "Persona no insertada" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }

    async actualizarPersona(req, res) {
        const persona = new Persona(req.body)
        const respuesta = await persona.actualizar(req.params.documento)

        if (respuesta === true) {
            res.json(persona)
        }
        else if (respuesta === false) {
            res.json({ error: "Persona no actualizada" })
        }
        else {
            res.json({ error: respuesta.message })
        }
    }
    //#endregion

    //#region Reservas
    //#endregion

    //#region Eventos
    //#endregion

    //#region Solicitudes
    //#endregion

    //#region Contratos
    //#endregion
}