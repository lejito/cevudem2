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
<<<<<<< HEAD
                    src="http://127.0.0.1:5173/src/assets/img/Logo_UdeMedellin_Contraste.png"
=======
                    src="./src/assets/img/Logo_UdeMedellin_Contraste.png"
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
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
<<<<<<< HEAD
                            <span className="ml-4">Inicio</span>
=======
                            <span className="ml-4">Dashboard</span>
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
                        </Link>
                    </li>
                </ul>

                <ul>
                    <li className="relative px-6 py-3">
                        <Link
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray"
<<<<<<< HEAD
                            to="/dashboard/personas"
                        >
                            {useLocation().pathname === "/dashboard/personas" ? (
=======
                            to="/dashboard/equipo"
                        >
                            {useLocation().pathname === "/dashboard/equipo" ? (
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
                                <span
                                    className="absolute inset-y-0 left-0 w-1 bg-primary rounded-tr-lg rounded-br-lg"
                                    aria-hidden="true"
                                ></span>
                            ) : null}
                            <FontAwesomeIcon icon={faUsers} />
<<<<<<< HEAD
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
=======
                            <span className="ml-4">Equipo</span>
                        </Link>
                    </li>

                    <li className="relative px-6 py-3">
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                            href="cards.html"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                ></path>
                            </svg>
                            <span className="ml-4">Cards</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                            href="charts.html"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                                ></path>
                                <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                            </svg>
                            <span className="ml-4">Charts</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                            href="buttons.html"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                ></path>
                            </svg>
                            <span className="ml-4">Buttons</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                            href="modals.html"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                ></path>
                            </svg>
                            <span className="ml-4">Modals</span>
                        </a>
                    </li>
                    <li className="relative px-6 py-3">
                        <a
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
                            href="tables.html"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                            </svg>
                            <span className="ml-4">Tables</span>
                        </a>
>>>>>>> c75465178b882911dd406a763d3c575b0332714a
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Aside