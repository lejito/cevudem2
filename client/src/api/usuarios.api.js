import axios from 'axios'

const ROUTE = "http://localhost:3000" // Enlace/Ruta del backend

export const requestBuscarUsuarios = async () => {
    return await axios.get(`${ROUTE}/usuarios`)
}

export const requestBuscarUsuario = async (documento) => {
    return await axios.get(`${ROUTE}/usuarios/${documento}`)
}

export const requestInsertarUsuario = async (datos) => {
    return await axios.post(`${ROUTE}/usuarios`, datos)
}

export const requestActualizarUsuario = async (documento, datos) => {
    return await axios.put(`${ROUTE}/usuarios/${documento}`, datos)
}

export const requestActualizarUsuarioDatosDocumento = async (documento, datos) => {
    return await axios.put(`${ROUTE}/usuarios-doc/${documento}`, datos)
}

export const requestActualizarUsuarioDatosPersonales = async (documento, datos) => {
    return await axios.put(`${ROUTE}/usuarios-per/${documento}`, datos)
}

export const requestActualizarUsuarioDatosSeguridad = async (documento, datos) => {
    return await axios.put(`${ROUTE}/usuarios-seg/${documento}`, datos)
}

export const requestVerificarUsuario = async (datos) => {
    return await axios.post(`${ROUTE}/usuarios-ver`, datos)
}