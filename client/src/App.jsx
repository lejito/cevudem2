import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoginPage from './pages/LoginPage'
import IngresoPage from './pages/IngresoPage'
import InicioPage from './pages/InicioPage'
import NotFoundPage from './pages/NotFoundPage'
import AjustesPage from './pages/AjustesPage'
import EquipoPage from './pages/EquipoPage'

function App() {

  const [sesion, setSesion] = useState({})

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        if (sesion) {
          <>
            <Route path="/ingreso" element={<IngresoPage />} />
            <Route path="/" element={<InicioPage />} />
            <Route path="/ajustes" element={<AjustesPage />} />
            <Route path="/equipo" element={<EquipoPage />} />
          </>
        }
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer theme="colored" />
    </>
  )
}

export default App