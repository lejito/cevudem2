import axios from 'axios'
import { ROUTE } from './config.api'

export const requestContarEventos = async () => {
    return await axios.get(`${ROUTE}/eventos-count`)
}