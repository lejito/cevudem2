import { useEffect } from 'react'
import { useAppContext } from '../context/Provider'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

import InicioPage from '../pages/InicioPage'
import NotFoundPage from '../pages/NotFoundPage'
import AjustesPage from '../pages/AjustesPage'
import EquipoPage from '../pages/EquipoPage'
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
                        <Route path="/equipo" element={<EquipoPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </div >
    )
}

export default Dashboard