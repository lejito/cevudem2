import { pool } from '../db.js'

export class Contrato {
    constructor(c) {
        this.id = c.id ? c.id : null
        this.estudiante = c.estudiante ? c.estudiante : null
        this.fecha_hora_entrevista = c.fecha_hora_entrevista ? c.fecha_hora_entrevista : null
        this.estado = c.estado ? c.estado : null
        this.responsable = c.responsable ? c.responsable : null
    }

    static async contarTodos() {
        try {
            const [result] = await pool.query(
                "SELECT COUNT(*) as num FROM contratos"
            )

            return result[0].num
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}