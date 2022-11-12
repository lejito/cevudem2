import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import LugaresList from '../components/LugaresList'

function LugaresClubPage() {
    //const {x} = useAppContext()
    
    const lugares = [
        { id: 1, nombre: "Auditorio 1", capacidad: 50, habilitado: 1, disponible: true },
        { id: 2, nombre: "Auditorio 2", capacidad: 50, habilitado: 1, disponible: false },
        { id: 3, nombre: "Auditorio 3", capacidad: 50, habilitado: 1, disponible: true },
        { id: 4, nombre: "Salón imperial", capacidad: 30, habilitado: 1, disponible: true },
        { id: 5, nombre: "Comedor principal", capacidad: 30, habilitado: 1, disponible: true },
        { id: 6, nombre: "Terraza", capacidad: 20, habilitado: 1, disponible: true },
        { id: 7, nombre: "Salón campestre", capacidad: 30, habilitado: 1, disponible: true },
        { id: 8, nombre: "Fonda", capacidad: 30, habilitado: 1, disponible: false }
    ]

    useEffect(() => {

    }, [])

    return (
        <div className="container px-6 mx-auto grid">
            <h2
                className="my-6 text-2xl font-semibold text-dark"
            >
                Lugares
            </h2>

            <LugaresList lugares={lugares} />
        </div>
    )
}

export default LugaresClubPage