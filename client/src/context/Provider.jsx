import { useContext, useState, useEffect } from "react";
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import {
    requestBuscarUsuarios,
    requestBuscarUsuario,
    requestInsertarUsuario,
    requestActualizarUsuario,
    requestActualizarUsuarioDatosDocumento,
    requestActualizarUsuarioDatosPersonales,
    requestActualizarUsuarioDatosSeguridad,
    requestVerificarUsuario,
    requestVerificarUsuarioDocumento,
    requestVerificarUsuarioCorreo,
    requestVerificarUsuarioClave
} from '../api/usuarios.api'
import { requestContarReservas } from '../api/reservas.api'
import { requestContarEventos } from '../api/eventos.api'
import { requestContarSolicitudes } from '../api/solicitudes.api'
import { requestContarContratos } from '../api/contratos.api'

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
            const datosSesion = await buscarUsuario(sesion.documento)
            localStorage.setItem(
                'loggedAppUser', JSON.stringify(datosSesion)
            )
            setSesion(datosSesion)
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

    const notif = (type, message, id) => {
        switch (type) {
            case "success":
                toast.success(message, { toastId: id })
                break;
            case "warning":
                toast.warning(message, { toastId: id })
                break;
            case "error":
                toast.error(message, { toastId: id })
                break;
            default:
                break;
        }
    }

    //#region Usuarios
    const [usuarios, setUsuarios] = useState([])

    async function buscarUsuarios() {
        try {
            const response = await requestBuscarUsuarios()
            setUsuarios(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }

    const buscarUsuario = async (documento) => {
        try {
            const response = await requestBuscarUsuario(documento)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const insertarUsuario = async (datos) => {
        try {
            const response = await requestInsertarUsuario(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuario = async (documento, datos) => {
        try {
            const response = await requestActualizarUsuario(documento, datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioDocumento = async (documento, datos) => {
        try {
            const response = await requestActualizarUsuarioDatosDocumento(documento, datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioPersonales = async (documento, datos) => {
        try {
            const response = await requestActualizarUsuarioDatosPersonales(documento, datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const actualizarUsuarioSeguridad = async (documento, datos) => {
        try {
            const response = await requestActualizarUsuarioDatosSeguridad(documento, datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuario = async (datos) => {
        try {
            const response = await requestVerificarUsuario(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioDocumento = async (documento) => {
        try {
            const response = await requestVerificarUsuarioDocumento(documento)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioCorreo = async (datos) => {
        try {
            const response = await requestVerificarUsuarioCorreo(datos)
            return response.data
        }
        catch (error) {
            console.log(error)
        }
    }

    const verificarUsuarioClave = async (datos) => {
        try {
            const response = await requestVerificarUsuarioClave(datos)
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
            const response = await requestContarReservas()
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
            const response = await requestContarEventos()
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
            const response = await requestContarSolicitudes()
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
            const response = await requestContarContratos()
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
            usuarios, buscarUsuarios, buscarUsuario, actualizarUsuario, actualizarUsuarioDocumento, actualizarUsuarioPersonales, actualizarUsuarioSeguridad, verificarUsuario, verificarUsuarioDocumento, verificarUsuarioCorreo, verificarUsuarioClave,
            numReservas, contarReservas,
            numEventos, contarEventos,
            numSolicitudes, contarSolicitudes,
            numContratos, contarContratos
        }}>
            {children}
        </Context.Provider>
    )
}