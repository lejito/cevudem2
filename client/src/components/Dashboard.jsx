import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import InicioPage from '../pages/InicioPage'
import NotFoundPage from '../pages/NotFoundPage'
import AjustesPage from '../pages/AjustesPage'
<<<<<<< HEAD
import PersonasPage from '../pages/PersonasPage'
import ReservasclubPage from '../pages/ReservasclubPage'
import EventosclubPage from '../pages/EventosclubPage'
import SolicitudesvivesPage from '../pages/SolicitudesvivesPage'
import ContratosvivesPage from '../pages/ContratosvivesPage'
=======
import EquipoPage from '../pages/EquipoPage'
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
import Aside from './Aside'
import Header from './Header'

function Dashboard() {
    const { sesion, logout } = useAppContext()

    const navigate = useNavigate()

    useEffect(() => {
        if (!sesion) {
            navigate("/")
        }
    }, [])

    return (
        <div
            className="flex h-screen"
        >
            <Aside />

            <div className="flex flex-col flex-1 w-full">
                <Header />

                <main className="h-full overflow-y-auto">
                    <Routes>
                        <Route path="/" element={<InicioPage />} />
                        <Route path="/ajustes" element={<AjustesPage />} />
<<<<<<< HEAD
                        <Route path="/personas" element={<PersonasPage />} />
                        <Route path="/reservasclub" element={<ReservasclubPage />} />
                        <Route path="/eventosclub" element={<EventosclubPage />} />
                        <Route path="/solicitudesvives" element={<SolicitudesvivesPage />} />
                        <Route path="/contratosvives" element={<ContratosvivesPage />} />
=======
                        <Route path="/equipo" element={<EquipoPage />} />
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </div >
    )
}

export default Dashboard