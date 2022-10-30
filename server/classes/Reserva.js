import { pool } from '../db.js'

export class Reserva {
    constructor(r) {
        this.id = r.id ? r.id : null
        this.socio = r.socio ? r.socio : null
        this.fecha_hora_inicio = r.fecha_hora_inicio ? r.fecha_hora_inicio : null
        this.fecha_hora_fin = r.fecha_hora_fin ? r.fecha_hora_fin : null
        this.habitacion = r.habitacion ? r.habitacion : null
        this.numero_agregados = r.numero_agregados ? r.numero_agregados : null
        this.estado = r.estado ? r.estado : null
    }

    static async contarTodas() {
        try {
            const [result] = await pool.query(
                "SELECT COUNT(*) as num FROM reservas"
            )

            return result[0].num
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}