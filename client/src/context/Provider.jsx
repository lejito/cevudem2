import { useContext, useState, useEffect } from "react";
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import * as Usuarios from '../api/usuarios.api'
import * as Personas from '../api/personas.api'
import * as Reservas from '../api/reservas.api'
import * as Eventos from '../api/eventos.api'
import * as Solicitudes from '../api/solicitudes.api'
import * as Contratos from '../api/contratos.api'

export const useAppContext = () => {
    const context = useContext(Context)

    if (!context) {
        throw new Error("useAppContext must be used within a ContextProvider")
    }
    else {
        return context
    }
}

export const ContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [sesion, setSesion] = useState(JSON.parse(localStorage.getItem('loggedAppUser')))

    async function actualizarDatosSesion() {
        try {
            if (sesion) {
                const datosSesion = await buscarUsuario(sesion.documento)
                localStorage.setItem(
                    'loggedAppUser', JSON.stringify(datosSesion)
                )
                setSesion(datosSesion)
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        actualizarDatosSesion()
    }, [])


    const logout = () => {
        localStorage.clear()
        setSesion(null)
        navigate("/")
    }

    const notif = (type, message) => {
        Swal.fire(
            'Mensaje',
            message,
            type
        )
    }

    //#region Usuarios
    const [usuarios, setUsuarios] = useState([])

    async function buscarUsuarios() {
        try {
            const response = await Usuarios.requestBuscarUsuarios()
            setUsuarios(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const buscarUsuario = async (documento) => {
        try {
            const response = await Usuarios.requestBuscarUsuario(documento)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const insertarUsuario = async (datos) => {
        try {
            const response = await Usuarios.requestInsertarUsuario(datos)
            buscarUsuarios()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuario = async (documento, datos) => {
        try {
            const response = await Usuarios.requestActualizarUsuario(documento, datos)
            buscarUsuarios()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioDocumento = async (documento, datos) => {
        try {
            const response = await Usuarios.requestActualizarUsuarioDatosDocumento(documento, datos)
            buscarUsuarios()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioPersonales = async (documento, datos) => {
        try {
            const response = await Usuarios.requestActualizarUsuarioDatosPersonales(documento, datos)
            buscarUsuarios()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioSeguridad = async (documento, datos) => {
        try {
            const response = await Usuarios.requestActualizarUsuarioDatosSeguridad(documento, datos)
            buscarUsuarios()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuario = async (datos) => {
        try {
            const response = await Usuarios.requestVerificarUsuario(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioDocumento = async (documento) => {
        try {
            const response = await Usuarios.requestVerificarUsuarioDocumento(documento)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioCorreo = async (datos) => {
        try {
            const response = await Usuarios.requestVerificarUsuarioCorreo(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioClave = async (datos) => {
        try {
            const response = await Usuarios.requestVerificarUsuarioClave(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    //#region Personas
    const [personas, setPersonas] = useState([])

    async function buscarPersonas() {
        try {
            const response = await Personas.requestBuscarPersonas()
            setPersonas(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const buscarPersona = async (documento) => {
        try {
            const response = await Personas.requestBuscarPersona(documento)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const insertarPersona = async (datos) => {
        try {
            const response = await Personas.requestInsertarPersona(datos)
            buscarPersonas()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarPersona = async (documento, datos) => {
        try {
            const response = await Personas.requestActualizarPersona(documento, datos)
            buscarPersonas()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const eliminarPersona = async (documento) => {
        try {
            const response = await Personas.requestEliminarPersona(documento)
            buscarPersonas()
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    //#region Reservas
    const [numReservas, setNumReservas] = useState("...")

    const contarReservas = async () => {
        try {
            const response = await Reservas.requestContarReservas()
            setNumReservas(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    //#region Eventos
    const [numEventos, setNumEventos] = useState("...")

    const contarEventos = async () => {
        try {
            const response = await Eventos.requestContarEventos()
            setNumEventos(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    //#region Solicitudes
    const [numSolicitudes, setNumSolicitudes] = useState("...")

    const contarSolicitudes = async () => {
        try {
            const response = await Solicitudes.requestContarSolicitudes()
            setNumSolicitudes(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    //#region Contratos
    const [numContratos, setNumContratos] = useState("...")

    const contarContratos = async () => {
        try {
            const response = await Contratos.requestContarContratos()
            setNumContratos(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    //#endregion

    return (
        <Context.Provider value={{
            notif, sesion, setSesion, logout, actualizarDatosSesion,
            usuarios, buscarUsuarios, buscarUsuario, insertarUsuario, actualizarUsuario, actualizarUsuarioDocumento, actualizarUsuarioPersonales, actualizarUsuarioSeguridad, verificarUsuario, verificarUsuarioDocumento, verificarUsuarioCorreo, verificarUsuarioClave,
            personas, buscarPersonas, buscarPersona, insertarPersona, actualizarPersona, eliminarPersona,
            numReservas, contarReservas,
            numEventos, contarEventos,
            numSolicitudes, contarSolicitudes,
            numContratos, contarContratos
        }}>
            {children}
        </Context.Provider>
    )
}