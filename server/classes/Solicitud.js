import { Pool } from '../db.js'

export class Solicitud {
    constructor(s) {
        this.id = s.id ? s.id : null
        this.estudiante = s.estudiante ? s.estudiante : null
        this.fecha_hora_entrevista = s.fecha_hora_entrevista ? s.fecha_hora_entrevista : null
        this.estado = s.estado ? s.estado : null
        this.responsable = s.responsable ? s.responsable : null
    }

    static async contarTodas() {
        try {
            const [result] = await Pool.query(
                "SELECT COUNT(*) as num FROM solicitudes"
            )

            return result[0].num
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}