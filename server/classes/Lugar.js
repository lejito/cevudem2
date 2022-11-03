import { Pool } from '../db.js'

export class Lugar {
    constructor(l) {
        this.id = l.id ? l.id : null
        this.nombre = l.nombre ? l.nombre : null
        this.capacidad = l.capacidad ? l.capacidad : null
        this.habilitado = l.habilitado ? l.habilitado : null
    }

    static async buscarTodos() {
        try {
            const [result] = await Pool.query(
                "SELECT id, nombre, capacidad, habilitado FROM lugares ORDER BY id ASC"
            )

            if (result.length === 0) {
                return false
            }
            else {
                const lugares = []
                result.forEach(l => {
                    lugares.push(new Lugar(l))
                })
                return lugares
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}