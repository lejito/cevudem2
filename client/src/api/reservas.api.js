import axios from 'axios'
import { ROUTE } from './config.api'

export const requestContarReservas = async () => {
    return await axios.get(`${ROUTE}/reservas-count`)
}