import axios from 'axios'
import { ROUTE } from './config.api'

export const requestContarContratos = async () => {
    return await axios.get(`${ROUTE}/contratos-count`)
}