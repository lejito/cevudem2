import { Pool } from '../db.js'

export class Evento {
    constructor(e) {
        this.id = e.id ? e.id : null
        this.socio = e.socio ? e.socio : null
        this.fecha_hora_inicio = e.fecha_hora_inicio ? e.fecha_hora_inicio : null
        this.fecha_hora_fin = e.fecha_hora_fin ? e.fecha_hora_fin : null
        this.lugar = e.lugar ? e.lugar : null
        this.numero_asistentes = e.numero_asistentes ? e.numero_asistentes : null
        this.estado = e.estado ? e.estado : null
    }

    static async contarTodos() {
        try {
            const [result] = await Pool.query(
                "SELECT COUNT(*) as num FROM eventos"
            )

            return result[0].num
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}