import { Usuario } from './Usuario.js'
import { Persona } from './Persona.js'
import { Reserva } from './Reserva.js'
import { Evento } from './Evento.js'
import { Solicitud } from './Solicitud.js'
import { Contrato } from './Contrato.js'
import { Habitacion } from './Habitacion.js'

export class Main {
    //#region Usuarios
    async buscarUsuarios(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarUsuario(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async insertarUsuario(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarUsuario(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarUsuarioDocumento(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarUsuarioPersonales(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarUsuarioClave(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async verificarUsuarioNumeroDocumento(req, res) {
        try {
            const usuario = new Usuario(req.params)
            const respuesta = await usuario.verificarNumeroDocumento()

            if (respuesta instanceof Error) {
                res.json(respuesta.message)
            }
            else {
                res.json(respuesta)
            }
        }
        catch (error) {
            res.json({ error: error.message })
        }
    }

    async verificarUsuarioCorreoElectronico(req, res) {
        try {
            const usuario = new Usuario(req.body)
            const respuesta = await usuario.verificarCorreoElectronico()

            if (respuesta instanceof Error) {
                res.json(respuesta.message)
            }
            else {
                res.json(respuesta)
            }
        }
        catch (error) {
            res.json({ error: error.message })
        }
    }

    async verificarUsuarioClave(req, res) {
        try {
            const usuario = new Usuario(req.body)
            const respuesta = await usuario.verificarClave()

            if (respuesta instanceof Error) {
                res.json(respuesta.message)
            }
            else {
                res.json(respuesta)
            }
        }
        catch (error) {
            res.json({ error: error.message })
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
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarPersona(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async insertarPersona(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarPersona(req, res) {
        try {
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
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async eliminarPersona(req, res) {
        try {
            const persona = new Persona(req.params)
            const respuesta = await persona.eliminar()

            if (respuesta === true) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Persona no eliminada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion

    //#region Reservas
    async contarReservas(req, res) {
        try {
            const respuesta = await Reserva.contarTodas()

            if (!respuesta.error) {
                res.json(respuesta)
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarReservas(req, res) {
        try {
            const respuesta = await Reserva.buscarTodas()

            if (respuesta) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Reservas no encontradas" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarReserva(req, res) {
        try {
            const reserva = new Reserva(req.params)
            const respuesta = await reserva.buscar()

            if (respuesta === true) {
                res.json(reserva)
            }
            else if (respuesta === false) {
                res.json({ error: "Reserva no encontrada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async insertarReserva(req, res) {
        try {
            const reserva = new Reserva(req.body)
            const respuesta = await reserva.insertar()

            if (respuesta === true) {
                res.json(reserva)
            }
            else if (respuesta === false) {
                res.json({ error: "Reserva no insertada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarReserva(req, res) {
        try {
            const reserva = new Reserva(req.body)
            const respuesta = await reserva.actualizar(req.params.id)

            if (respuesta === true) {
                res.json(reserva)
            }
            else if (respuesta === false) {
                res.json({ error: "Reserva no actualizada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async eliminarReserva(req, res) {
        try {
            const reserva = new Reserva(req.params)
            const respuesta = await reserva.eliminar()

            if (respuesta === true) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Reserva no eliminada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion

    //#region Eventos
    async contarEventos(req, res) {
        try {
            const respuesta = await Evento.contarTodos()

            if (!respuesta.error) {
                res.json(respuesta)
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion

    //#region Solicitudes
    async contarSolicitudes(req, res) {
        try {
            const respuesta = await Solicitud.contarTodas()

            if (!respuesta.error) {
                res.json(respuesta)
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarSolicitudes(req, res) {
        try {
            const respuesta = await Solicitud.buscarTodas()

            if (respuesta) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Solicitudes no encontradas" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async buscarSolicitud(req, res) {
        try {
            const solicitud = new Solicitud(req.params)
            const respuesta = await solicitud.buscar()

            if (respuesta === true) {
                res.json(solicitud)
            }
            else if (respuesta === false) {
                res.json({ error: "Solicitud no encontrada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async insertarSolicitud(req, res) {
        try {
            const solicitud = new Solicitud(req.body)
            const respuesta = await solicitud.insertar()

            if (respuesta === true) {
                res.json(solicitud)
            }
            else if (respuesta === false) {
                res.json({ error: "Solicitud no insertada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async actualizarSolicitud(req, res) {
        try {
            const solicitud = new Solicitud(req.body)
            const respuesta = await solicitud.actualizar(req.params.id)

            if (respuesta === true) {
                res.json(solicitud)
            }
            else if (respuesta === false) {
                res.json({ error: "Solicitud no actualizada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }

    async eliminarSolicitud(req, res) {
        try {
            const solicitud = new Solicitud(req.params)
            const respuesta = await solicitud.eliminar()

            if (respuesta === true) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Solicitud no eliminada" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion

    //#region Contratos
    async contarContratos(req, res) {
        try {
            const respuesta = await Contrato.contarTodos()

            if (!respuesta.error) {
                res.json(respuesta)
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion

    //#region Habitaciones
    async buscarHabitaciones(req, res) {
        try {
            const respuesta = await Habitacion.buscarTodas()

            if (respuesta) {
                res.json(respuesta)
            }
            else if (respuesta === false) {
                res.json({ error: "Habitaciones no encontradas" })
            }
            else {
                res.json({ error: respuesta.message })
            }
        } catch (error) {
            res.json({ error: error.message })
        }
    }
    //#endregion
}