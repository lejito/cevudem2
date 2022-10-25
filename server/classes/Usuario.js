import { pool } from '../db.js'

export class Usuario {
    constructor(u) {
        this.documento = u.documento ? u.documento : null
        this.tipo_documento = u.tipo_documento ? u.tipo_documento : null
        this.primer_nombre = u.primer_nombre ? u.primer_nombre : null
        this.segundo_nombre = u.segundo_nombre ? u.segundo_nombre : null
        this.primer_apellido = u.primer_apellido ? u.primer_apellido : null
        this.segundo_apellido = u.segundo_apellido ? u.segundo_apellido : null
        this.correo_electronico = u.correo_electronico ? u.correo_electronico : null
        this.telefono = u.telefono ? u.telefono : null
        this.rol = u.rol ? u.rol : null
        this.clave = u.clave ? u.clave : null
        this.bloqueo = u.bloqueo ? u.bloqueo : 0
    }

    async buscar() {
        try {
            const [result] = await pool.query(
                "SELECT documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_electronico, telefono, rol, bloqueo FROM usuarios WHERE documento = ?",
                this.documento
            )

            if (result.length === 0) {
                return false
            }
            else {
                this.documento = result[0].documento
                this.tipo_documento = result[0].tipo_documento
                this.primer_nombre = result[0].primer_nombre
                this.segundo_nombre = result[0].segundo_nombre
                this.primer_apellido = result[0].primer_apellido
                this.segundo_apellido = result[0].segundo_apellido
                this.correo_electronico = result[0].correo_electronico
                this.telefono = result[0].telefono
                this.rol = result[0].rol
                this.bloqueo = result[0].bloqueo
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async insertar() {
        try {
            const [result] = await pool.query(
                "INSERT INTO usuarios(documento, tipo_documento, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo_electronico, telefono, rol) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    this.documento,
                    this.tipo_documento,
                    this.primer_nombre,
                    this.segundo_nombre,
                    this.primer_apellido,
                    this.segundo_apellido,
                    this.correo_electronico,
                    this.telefono,
                    this.rol
                ]
            )

            if (result.affectedRows === 0) {
                return false
            }
            else {
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async actualizar(documento) {
        try {
            const [result] = await pool.query(
                "UPDATE usuarios SET documento = ?, tipo_documento = ?, primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, correo_electronico = ?, telefono = ?, rol = ?, bloqueo = ? WHERE documento = ?",
                [
                    this.documento,
                    this.tipo_documento,
                    this.primer_nombre,
                    this.segundo_nombre,
                    this.primer_apellido,
                    this.segundo_apellido,
                    this.correo_electronico,
                    this.telefono,
                    this.rol,
                    this.bloqueo,
                    documento
                ]
            )

            if (result.affectedRows === 0) {
                return false
            }
            else {
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async actualizarDatosDocumento(documento) {
        try {
            const [result] = await pool.query(
                "UPDATE usuarios SET documento = ?, tipo_documento = ? WHERE documento = ?",
                [
                    this.documento,
                    this.tipo_documento,
                    documento
                ]
            )

            if (result.affectedRows === 0) {
                return false
            }
            else {
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async actualizarDatosPersonales(documento) {
        try {
            const [result] = await pool.query(
                "UPDATE usuarios SET primer_nombre = ?, segundo_nombre = ?, primer_apellido = ?, segundo_apellido = ?, correo_electronico = ?, telefono = ? WHERE documento = ?",
                [
                    this.primer_nombre,
                    this.segundo_nombre,
                    this.primer_apellido,
                    this.segundo_apellido,
                    this.correo_electronico,
                    this.telefono,
                    documento
                ]
            )

            if (result.affectedRows === 0) {
                return false
            }
            else {
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async actualizarDatosSeguridad(documento) {
        try {
            const [result] = await pool.query(
                "UPDATE usuarios SET clave = ? WHERE documento = ?",
                [
                    this.clave,
                    documento
                ]
            )

            if (result.affectedRows === 0) {
                return false
            }
            else {
                return true
            }
        }
        catch (error) {
            console.log(error)
            return error
        }
    }

    async verificar() {
        try {
            const [result1] = await pool.query(
                "SELECT COUNT(*) as num FROM usuarios WHERE documento = ? AND tipo_documento = ?",
                [
                    this.documento,
                    this.tipo_documento,
                ]
            )

            const [result2] = await pool.query(
                "SELECT COUNT(*) as num FROM usuarios WHERE documento = ? AND clave= ?",
                [
                    this.documento,
                    this.clave
                ]
            )

            const [result3] = await pool.query(
                "SELECT bloqueo FROM usuarios WHERE documento = ?",
                [
                    this.documento,
                ]
            )

            const verifDocumento = result1[0].num === 1
            const verifClave = result2[0].num === 1
            const verifBloqueo = result3[0] ? result3[0].bloqueo == 0 : false
            return [verifDocumento, verifClave, verifBloqueo]
        }
        catch (error) {
            console.log(error)
            return error
        }
    }
}