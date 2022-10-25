import { pool } from '../db.js'
import { Usuario } from './Usuario.js'

export class Main {
    constructor() {
        this.usuarios = []
    }

    async buscarUsuarios() {
        try {
            const [result] = await pool.query(
                "SELECT documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_electronico, telefono, rol, bloqueo FROM usuarios"
            )

            if (result.length === 0) {
                return false
            }
            else {
                this.usuarios = []
                result.forEach(u => {
                    this.usuarios.push(new Usuario(u))
                })
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}