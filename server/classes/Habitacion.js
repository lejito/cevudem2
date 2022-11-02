import { Pool } from '../db.js'

export class Habitacion {
    constructor(h) {
        this.id = h.id ? h.id : null
        this.capacidad = h.capacidad ? h.capacidad : null
        this.habilitada = h.habilitada ? h.habilitada : null
    }

    static async buscarTodas() {
        try {
            const [result] = await Pool.query(
                "SELECT id, capacidad, habilitada FROM habitaciones ORDER BY id ASC"
            )

            if (result.length === 0) {
                return false
            }
            else {
                const habitaciones = []
                result.forEach(h => {
                    habitaciones.push(new Habitacion(h))
                })
                return habitaciones
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}