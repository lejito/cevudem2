import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import HabitacionesList from '../components/HabitacionesList'

function HabitacionesClubPage() {
    //const {x} = useAppContext()

    const habitaciones = [
        { id: 201, capacidad: 4, disponible: false, habilitada: 1},
        { id: 202, capacidad: 4, disponible: true, habilitada: 1},
        { id: 203, capacidad: 4, disponible: true, habilitada: 1},
        { id: 301, capacidad: 2, disponible: false, habilitada: 1},
        { id: 302, capacidad: 2, disponible: true, habilitada: 0},
        { id: 303, capacidad: 3, disponible: true, habilitada: 1},
        { id: 304, capacidad: 3, disponible: true, habilitada: 1}
    ]

    useEffect(() => {

    }, [])

    return (
        <div className="container px-6 mx-auto grid">
            <h2
                className="my-6 text-2xl font-semibold text-dark"
            >
                Habitaciones
            </h2>

            <HabitacionesList habitaciones={habitaciones} />
        </div>
    )
}

export default HabitacionesClubPage