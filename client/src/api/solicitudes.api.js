import axios from 'axios'
import { ROUTE } from './config.api'

export const requestContarSolicitudes = async () => {
    return await axios.get(`${ROUTE}/solicitudes-count`)
}