import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'

function Aside() {
    return (
        <aside
            className="z-20 hidden w-64 overflow-y-auto bg-dark md:block flex-shrink-0"
        >
            <div className="py-4 text-light">
                <img
                    className="ml-6"
                    src="http://127.0.0.1:5173/src/assets/img/Logo_UdeMedellin_Contraste.png"
                />

                <ul className="mt-6">
                    <li className="relative px-6 py-3">
                        <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard"
                        >
                            {useLocation().pathname === "/dashboard" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            < FontAwesomeIcon icon={faHome} />
                            <span className="ml-4">Inicio</span>
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li className="relative px-6 py-3">
                        <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard/personas"
                        >
                            {useLocation().pathname === "/dashboard/personas" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ml-4">Personas</span>
                        </Link>
                    </li>
 
                    <div>
                        <h2 style={{textAlign: "center"}}>Casa club del egresado</h2>
                     </div>

                    <li className="relative px-6 py-3">
                    <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard/reservasclub"
                        >
                            {useLocation().pathname === "/dashboard/reservasclub" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ml-4">Reservas</span>
                        </Link>
                    </li>
                    <li className="relative px-6 py-3">
                    <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard/eventosclub"
                        >
                            {useLocation().pathname === "/dashboard/eventosclub" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ml-4">Eventos</span>
                        </Link>
                    </li>

                    <div>
                        <h2 style={{textAlign: "center"}}>Vivienda Vives</h2>
                     </div>

                    <li className="relative px-6 py-3">
                    <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard/solicitudesvives"
                        >
                            {useLocation().pathname === "/dashboard/solicitudesvives" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ml-4">Solicitudes</span>
                        </Link>
                    </li>
                    <li className="relative px-6 py-3">
                    <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
                            to="/dashboard/contratosvives"
                        >
                            {useLocation().pathname === "/dashboard/contratosvives" ? (
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="ml-4">Contratos</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside