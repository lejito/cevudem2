import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import ApartamentosList from '../components/ApartamentosList'

function ApartamentosVivesPage() {
    //const {x} = useAppContext()
    
    const apartamentos = [
        { id: 201, tipo: "estandar", habilitado: 1, disponible: false },
        { id: 202, tipo: "estandar", habilitado: 1, disponible: true },
        { id: 203, tipo: "estandar", habilitado: 1, disponible: true },
        { id: 204, tipo: "estandar", habilitado: 1, disponible: false },
        { id: 301, tipo: "estandar", habilitado: 0, disponible: true },
        { id: 403, tipo: "estandar", habilitado: 1, disponible: false },
        { id: 1001, tipo: "estandar", habilitado: 1, disponible: false },
        { id: 1102, tipo: "estandar", habilitado: 1, disponible: true }
    ]

    useEffect(() => {

    }, [])

    return (
        <div className="container px-6 mx-auto grid">
            <h2
                className="my-6 text-2xl font-semibold text-dark"
            >
                Apartamentos
            </h2>

            <ApartamentosList apartamentos={apartamentos} />
        </div>
    )
}

export default ApartamentosVivesPage