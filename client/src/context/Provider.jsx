import { useContext, useState } from "react";
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import {
    requestBuscarUsuarios,
    requestBuscarUsuario,
    requestInsertarUsuario,
    requestActualizarUsuario,
    requestActualizarUsuarioDatosDocumento,
    requestActualizarUsuarioDatosPersonales,
    requestActualizarUsuarioDatosSeguridad,
    requestVerificarUsuario,
} from '../api/usuarios.api'

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
    const loggedUserJSON = localStorage.getItem('loggedAppUser')
    const [sesion, setSesion] = useState(JSON.parse(loggedUserJSON))

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        setSesion(null)
        navigate("/login")
    }

    const [usuarios, setUsuarios] = useState([])

    async function buscarUsuarios() {
        try {
            const response = await requestBuscarUsuarios()
            return response.data
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

    return (
        <Context.Provider value={{
            sesion,
            setSesion,
            logout,
            usuarios,
            buscarUsuarios,
            buscarUsuario,
            actualizarUsuario,
            actualizarUsuarioDocumento,
            actualizarUsuarioPersonales,
            actualizarUsuarioSeguridad,
            verificarUsuario
        }}>
            {children}
        </Context.Provider>
    )
}