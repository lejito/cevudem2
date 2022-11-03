import { Pool } from '../db.js'

export class Apartamento {
    constructor(a) {
        this.id = a.id ? a.id : null
        this.tipo = a.tipo ? a.tipo : null
        this.habilitado = a.habilitado ? a.habilitado : null
    }

    static async buscarTodos() {
        try {
            const [result] = await Pool.query(
                "SELECT id, tipo, habilitado FROM apartamentos ORDER BY id ASC"
            )

            if (result.length === 0) {
                return false
            }
            else {
                const apartamentos = []
                result.forEach(a => {
                    apartamentos.push(new Apartamento(a))
                })
                return apartamentos
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}